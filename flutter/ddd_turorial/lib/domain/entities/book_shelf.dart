import 'package:meta/meta.dart';

import '../../foundation/exceptions/domain_exception.dart';
import '../value_objects/identity.dart';
import 'book.dart';

class BookShelf {
  static const MAX_CAPACITY = 10;

  Identity id;

  List<Book> _books;

  List<Book> get books => _books;

  BookShelf({@required this.id}) {
    _books = List();
  }

  addBook(Book book) {
    if (_books.length == MAX_CAPACITY) {
      throw DomainException('Book shelf has reached maximum capacity');
    }

    book.shelfId = id;
    _books.add(book);
  }
}