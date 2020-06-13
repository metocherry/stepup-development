import 'package:ddd_turorial/domain/entities/book.dart';
import 'package:ddd_turorial/domain/entities/book_shelf.dart';
import 'package:ddd_turorial/domain/value_objects/identity.dart';
import 'package:ddd_turorial/foundation/exceptions/domain_exception.dart';
import 'package:meta/meta.dart';
import 'package:dartz/dartz.dart';
import 'package:ddd_turorial/application/boundaries/add_book/add-book_output.dart';
import 'package:ddd_turorial/application/boundaries/add_book/add_book_input.dart';
import 'package:ddd_turorial/application/boundaries/add_book/iadd_book_usecase.dart';
import 'package:ddd_turorial/domain/factories/ientity_factory.dart';
import 'package:ddd_turorial/domain/repositories/ibook_repository.dart';
import 'package:ddd_turorial/domain/repositories/ibook_shelf_repository.dart';
import 'package:ddd_turorial/domain/value_objects/failure.dart';


class AddBookUseCase implements IAddBookUseCase {
  IBookShelfRepository _bookShelfRepository;
  IBookRepository _bookRepository;
  IEntityFactory _entityFactory;

  AddBookUseCase({
    @required IBookShelfRepository bookShelfRepository,
    @required IBookRepository bookRepository,
    @required IEntityFactory entityFactory,
  }) : _bookShelfRepository = bookShelfRepository,
       _bookRepository = bookRepository,
       _entityFactory = entityFactory;

  @override
  Future<Either<Failure, AddBookOutput>> execute(AddBookInput input) async {
    Book newBook = _createBookFromInput(input);

    Either<Failure, BookShelf> result = await _addBookToSjhelf(newBook, input.shelfId);
    if (result.isLeft()) {
      return result.fold((error) => Left(error), (r) => null);
    }

    var bookShelf = result.getOrElse(null);
    await _bookRepository.add(newBook);
    await _bookShelfRepository.update(bookShelf);
    return _buildOutputFromNewBook(newBook);
  }

  Book _createBookFromInput(AddBookInput input) {
    return _entityFactory.newBook(
      title: input.title,
      author: input.author,
      isbn: input.isbn,
      publishDate: input.publishDate);
  }

  Either<Failure, AddBookOutput> _buildOutputFromNewBook(Book newBook) {
    var output = AddBookOutput(
      bookId: newBook.id, 
      shelfId: newBook.shelfId, 
      title: newBook.title, 
      author: newBook.author, 
      isbn: newBook.isbn, 
      publishDate: newBook.publishDate);

    return Right(output);
  }

  Future<Either<Failure, BookShelf>> _addBookToSjhelf(Book newBook, Identity shelfId) async {
    BookShelf bookShelf = await _bookShelfRepository.find(shelfId);
    if (bookShelf == null) {
      return Left(Failure('book shelf not found'));
    }

    try {
      bookShelf.addBook(newBook);
    } on DomainException {
      return Left(Failure('book shelf has reached itx maximum capacity'));
    }

    return Right(bookShelf);
  }
}