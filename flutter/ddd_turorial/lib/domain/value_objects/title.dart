import 'package:equatable/equatable.dart';
import 'package:dartz/dartz.dart';

import 'failure.dart';


class Title extends Equatable {
  final String value;

  Title._(this.value);

  static Either<Failure, Title> create(String value) {
    if (value.isEmpty || value == null) {
      return Left(Failure('The title cannot be empty of null'));
    }
    else {
      return Right(Title._(value));
    }
  }

  const Title(this.value);

  @override
  List<Object> get props => [value];
}
