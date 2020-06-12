import 'package:flutter_test/flutter_test.dart';
import 'package:matcher/matcher.dart' as matcher;

import 'package:ddd_turorial/domain/entities/book_shelf.dart';
import 'package:ddd_turorial/domain/entities/book.dart';
import 'package:ddd_turorial/domain/value_objects/identity.dart';
import 'package:ddd_turorial/foundation/exceptions/domain_exception.dart';

void main() {
  BookShelf shelf;

  setUp(() {
    shelf = BookShelf(id: Identity.fromString('aaa'));
  });

  group('BookShelf', () {
    test('addBook should throw and DomainException when bookshelf exceeds its capacity', () {
      // arrange
      var books = List.generate(10, (index) => Book()).toList();
      books.forEach((book) => shelf.addBook(book));

      // assert
      expect(() => shelf.addBook(Book()), throwsA(matcher.TypeMatcher<DomainException>()));
    });

    test('addBook should add book to shelf', () {
      // arrange
      var book = Book();

      // act
      shelf.addBook(book);

      // assert
      expect(shelf.books.length, 1);
    });
  });
}