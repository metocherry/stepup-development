import 'package:meta/meta.dart';
import 'package:ddd_turorial/domain/value_objects/author.dart';
import 'package:ddd_turorial/domain/value_objects/identity.dart';
import 'package:ddd_turorial/domain/value_objects/isbn.dart';
import 'package:ddd_turorial/domain/value_objects/publish_date.dart';
import 'package:ddd_turorial/domain/value_objects/title.dart';

class AddBookInput {
  final Identity shelfId;

  final Title title;

  final Author author;

  final ISBN isbn;

  final PublishDate publishDate;

  const AddBookInput({
    @required this.shelfId,
    @required this.title,
    @required this.author,
    @required this.isbn,
    @required this.publishDate,
  }) : assert(shelfId != null),
       assert(title != null),
       assert(author != null),
       assert(isbn != null),
       assert(publishDate != null);
}