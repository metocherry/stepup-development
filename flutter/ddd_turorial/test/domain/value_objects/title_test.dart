import 'package:flutter_test/flutter_test.dart';
import 'package:matcher/matcher.dart' as matcher;

import 'package:ddd_turorial/domain/value_objects/failure.dart';
import 'package:ddd_turorial/domain/value_objects/title.dart';


void main() {
  group('Title', () {
    test('should return Failure when value is empty', () {
      // arrange
      var title = Title.create('').fold((error) => error, (title) => title);

      // assert
      expect(title, matcher.TypeMatcher<Failure>());
    });

    test('should create title when value is not empty', () {
      // arrange
      var text = 'Programming 101';
      var title = Title.create(text).getOrElse(null);

      // assert
      expect(title.value, text);
    });
  });
}

