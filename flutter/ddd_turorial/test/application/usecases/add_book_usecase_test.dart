import 'package:ddd_turorial/application/boundaries/add_book/add_book_input.dart';
import 'package:ddd_turorial/application/usecases/add_book_usecase.dart';
import 'package:ddd_turorial/domain/entities/book.dart';
import 'package:ddd_turorial/domain/entities/book_shelf.dart';
import 'package:ddd_turorial/domain/value_objects/author.dart';
import 'package:ddd_turorial/domain/value_objects/identity.dart';
import 'package:ddd_turorial/domain/value_objects/isbn.dart';
import 'package:ddd_turorial/domain/value_objects/publish_date.dart';
import 'package:ddd_turorial/domain/value_objects/title.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';

import 'package:ddd_turorial/domain/factories/ientity_factory.dart';
import 'package:ddd_turorial/domain/repositories/ibook_repository.dart';
import 'package:ddd_turorial/domain/repositories/ibook_shelf_repository.dart';

class MockBookShelfRepository extends Mock implements IBookShelfRepository {}

class MockBookRepository extends Mock implements IBookRepository {}

class MockEntityFactory extends Mock implements IEntityFactory {}

void main() {
  AddBookUseCase usecase;
  MockBookShelfRepository mockBookShelfRepository;
  MockBookRepository mockBookRepository;
  MockEntityFactory mockEntityFactory;

  setUp(() {
    mockBookShelfRepository = MockBookShelfRepository();
    mockBookRepository = MockBookRepository();
    mockEntityFactory = MockEntityFactory();
    
    usecase = AddBookUseCase(
      bookShelfRepository: mockBookShelfRepository,
      bookRepository: mockBookRepository,
      entityFactory: mockEntityFactory,
    );
  });

  group('AddBookUseCase', () {
    var title = Title.create('Book Title').getOrElse(null);
    var author = Author.create('Book Authro').getOrElse(null);
    var isbn = ISBN.create('ISBN-10: 0-596-52068-9').getOrElse(null);
    var publishDate = PublishDate.create('2020-01-20').getOrElse(null);

    var input = AddBookInput(
      shelfId: Identity.fromString('add'),
      title: title,
      author: author,
      isbn: isbn,
      publishDate: publishDate);

    test('should return a Failure when booksehlf does not exist', () async {
      // arrange
      when(mockBookShelfRepository.find(input.shelfId)).thenAnswer((_) => null);

      // act
      var result = await usecase.execute(input);

      // assert
      expect(result.isLeft(), true);
    });

    test('should return book with created id when added successfully', () async {
      // arrange
      when(mockBookShelfRepository.find(input.shelfId)).thenAnswer((_) => BookShelf(id: input.shelfId));

      when(mockEntityFactory
        .newBook(
          title: anyNamed('title'), 
          author: anyNamed('author'), 
          isbn: anyNamed('isbn'), 
          publishDate: anyNamed('publishDate')))
      .thenReturn(Book(
        id: Identity.fromString('bb'),
        title: input.title,
        author: input.author,
        isbn: input.isbn,
        publishDate: input.publishDate));

      // act
      var result = await usecase.execute(input);

      // assert
      expect(result.isRight(), true);
      expect(result.getOrElse(null).bookId, isNotNull);
      verify(mockBookRepository.add(any)).called(1);
      verify(mockBookShelfRepository.update(any)).called(1);
    });

  });
}