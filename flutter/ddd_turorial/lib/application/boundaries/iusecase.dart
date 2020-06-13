import 'package:dartz/dartz.dart';
import 'package:ddd_turorial/domain/value_objects/failure.dart';

abstract class IUseCase<TUseCaseInput, TUseCaseOutput> {
  Future<Either<Failure, TUseCaseOutput>> execute(TUseCaseInput input);
}