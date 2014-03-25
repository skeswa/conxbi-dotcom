define(['angular'], function(angular) {
	angular.module('webshop.directives', []).directive('sidebar', function() {
  		return {
  			restrict: 'E',
  			controller: 'SidebarCtrl',
  			templateUrl: 'partials/sidebar.html'
  		}
	}).directive('navbar', function() {
	  		return {
	  			restrict: 'E',
	  			controller: 'CategoriesCtrl',
	  			templateUrl: 'partials/navbar.html'
	  		}
	});
 });