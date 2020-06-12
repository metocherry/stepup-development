import '../entities/book_shelf.dart';
import '../value_objects/identity.dart';

abstract class IBookShelfRepository {
  void add(BookShelf bookShelf);

  void update(BookShelf bookShelf);

  find(Identity shelfId);
}