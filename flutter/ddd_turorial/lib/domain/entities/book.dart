import 'package:equatable/equatable.dart';

import '../value_objects/author.dart';
import '../value_objects/identity.dart';
import '../value_objects/isbn.dart';
import '../value_objects/publish_date.dart';
import '../value_objects/title.dart';

class Book {
  Identity id;

  Identity shelfId;

  Title title;

  Author author;

  ISBN isbn;

  PublishDate publishDate;

  Book({
    this.id,
    this.shelfId,
    this.title,
    this.author,
    this.isbn,
    this.publishDate,
  });
}