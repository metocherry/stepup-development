import 'package:ddd_turorial/domain/entities/book_shelf.dart';
import 'package:ddd_turorial/domain/value_objects/isbn.dart';
import 'package:ddd_turorial/domain/value_objects/publish_date.dart';
import 'package:meta/meta.dart';

import 'package:ddd_turorial/domain/entities/book.dart';
import 'package:ddd_turorial/domain/value_objects/author.dart';
import 'package:ddd_turorial/domain/value_objects/title.dart';

abstract class IEntityFactory {
  Book newBook({
    @required Title title,
    @required Author author,
    @required ISBN isbn,
    @required PublishDate publishDate,
  });

  BookShelf newBookShelf();
}