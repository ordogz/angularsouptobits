(function(){
'use strict';
// Declare app level module which depends on filters, and services
var a = angular.module('readingList', []);

a.controller('ReadingListController', function(){
	this.books = books;
	this.genres = genres;
});

a.directive('bookGenres', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/book-genres.html',
    scope: {
    genres: '='
  }
  }

});

a.directive('bookCovers', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/book-covers.html',
    replace: true
  }
});

a.directive('reviewForm', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/review-form.html',
    replace: true,
    controller: function(){
      this.showForm = false;
      this.book = {
        genres:{}
      };
      this.addReview = function(form){
        books.push(this.book);
        this.book = {genres:{}};
        form.$setPristine();
      }
    },
    controllerAs: 'reviewFormCtrl',
    scope: {
      books: '=',
      genres: '='

    }
  }
});

var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      imageurl: '5163N91r6lL',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'HTML for Babies',
      author: 'John C Vanden-Heuvel Sr',
      isbn: '0615487661',
      imageurl: '41h3YGS5ZXL',
      review: "It's never too early to be standards compliant! I taught my little one mark-up in under one hour!",
      rating: 5,
      genres: { fiction: true }
    },{
      title: 'A is for Array',
      author: 'Brandon J Hansen',
      isbn: '1489522212',
      imageurl: '41qFJ9AxgsL',
      review: 'A is for Array is the ABC book for future programmers. Filled with fun illustrations and simple real-world examples, my children loved seeing my world intertwined with theirs!',
      rating: 4,
      genres: { fiction: true }
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      imageurl: '713wN3l3OeL',
      review: 'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern. Moiraine',
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    }
  ];

})();






