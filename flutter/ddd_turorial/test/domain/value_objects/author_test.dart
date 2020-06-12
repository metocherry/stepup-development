import 'package:flutter_test/flutter_test.dart';
import 'package:matcher/matcher.dart' as matcher;

import 'package:ddd_turorial/domain/value_objects/failure.dart';
import 'package:ddd_turorial/domain/value_objects/author.dart';

void main() {
  group('Author', () {
    test('should return Failure when value is empty', () {
      // arrange
      var author = Author.create('').fold((err) => err, (title) => title);

      // assert
      expect(author, matcher.TypeMatcher<Failure>());
    });

    test('should create author when value is not empty', () {
      // arrange
      var str = 'Programming 101';
      var author = Author.create(str).getOrElse(null);

      // assert
      expect(author.value, str);
    });
  });
}