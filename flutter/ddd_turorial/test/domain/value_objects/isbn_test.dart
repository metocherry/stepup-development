import 'package:flutter_test/flutter_test.dart';
import 'package:matcher/matcher.dart' as matcher;

import 'package:ddd_turorial/domain/value_objects/failure.dart';
import 'package:ddd_turorial/domain/value_objects/isbn.dart';

void main() {
  group('ISBN', () {
    test('should return failure when invalid isbn', () {
      // arrange
      var isbn = ISBN.create('89990-909').fold((error) => error, (isbn) => isbn);

      // assert
      expect(isbn, matcher.TypeMatcher<Failure>());
    });

    test('should return isbn when value is valid isbn-10', () {
      // arrange
      var text = 'ISBN-10: 0-596-52068-9';
      var isbn = ISBN.create(text).getOrElse(null);
      
      // assert
      expect(isbn.value, text);
    });

    test('should return isbn when value is valid isbn-13', () {
      // arrange
      var text = 'ISBN-13: 978-0-596-52068-7';
      var isbn = ISBN.create(text).getOrElse(null);
      
      // assert
      expect(isbn.value, text);
    });
  });
}