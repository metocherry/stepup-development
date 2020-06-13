import 'package:dartz/dartz.dart';
import 'package:ddd_turorial/application/boundaries/add_book/add-book_output.dart';
import 'package:ddd_turorial/application/boundaries/add_book/add_book_input.dart';
import 'package:ddd_turorial/application/boundaries/iusecase.dart';
import 'package:ddd_turorial/domain/value_objects/failure.dart';

abstract class IAddBookUseCase extends IUseCase<AddBookInput, AddBookOutput> {
  Future<Either<Failure, AddBookOutput>> execute(AddBookInput input);
}