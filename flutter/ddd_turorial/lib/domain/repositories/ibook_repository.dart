import 'package:ddd_turorial/domain/value_objects/identity.dart';
import 'package:meta/meta.dart';

import '../entities/book.dart';

abstract class IBookRepository {
  void add(Book book);

  void update(Book book);

  void delete({@required Identity bookId});

  void find({@required Identity bookId});

  void findAll();
}