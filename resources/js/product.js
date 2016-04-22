(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return{
      restrict:    'E',
      templateUrl: 'resources/partials/product-title.html'
    }
  })

  .directive('productPanel', function(){
    return{
      restrict: 'E',
      templateUrl: 'resources/partials/product-panels.html',
      controller:   function(){
        this.tab        = 1;

        this.selectTab  = function(setTab){
          this.tab      = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    }
  })

  .controller('ReviewCtrl', function(){
    this.review    = {};

    this.addReview = function(product){
      product.review.push(this.review);
      this.review  = {};
    };
  });

})();
