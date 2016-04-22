(function(){
  var app = angular.module("store", ['store-products']);

  app.controller('StoreCtrl', [ '$http', function($http){
    this.products = gems;

    // var store = this;
    // store.products = [];
    //
    // $http.get('products.json').success(function(data){
    //   store.products = data;
    // });

  }]);

  var gems = [
    {
      name:          'Dodecahedro 1',
      price:         2.95,
      description:   'The best gem',
      specification: 'Don´t drown in water',
      review:        [
        {
          stars:     5,
          body:      'I love this product',
          author:    'joe@gmail.com'
        },
        {
          stars:     5,
          body:      'Like joe i love this product too',
          author:    'tim@gmail.com'
        }
      ],
      canPurchase:   true,
      soldOut:       false,
      images:        [
        {
          full:      'resources/img/gem1.jpg',
          thumb:     'https://images.sciencedaily.com/2013/11/131127131802_1_900x600.jpg'
        }
      ]
    },
    {
      name:          'Dodecahedro 2',
      price:         2.7,
      description:   'The lucky gem',
      specification: 'Don´t drown in water',
      review:        [
        {
          stars:     5,
          body:      'I love this product',
          author:    'joe@gmail.com'
        },
        {
          stars:     5,
          body:      'Like joe i love this product too',
          author:    'tim@gmail.com'
        }
      ],
      canPurchase:   true,
      soldOut:       false,
      images:        [
        {
          full:      'resources/img/gem2.jpg',
          thumb:     'https://s-media-cache-ak0.pinimg.com/236x/b3/18/e2/b318e20130661bd8d61bd5e538c2de0c.jpg'
        }
      ]
    },
    {
      name:          'Dodecahedro 3',
      price:         2,
      description:   'The green gem',
      specification: 'Don´t drown in water',
      review:        [
        {
          stars:     5,
          body:      'I love this product',
          author:    'joe@gmail.com'
        },
        {
          stars:     5,
          body:      'Like joe i love this product too',
          author:    'tim@gmail.com'
        }
      ],
      canPurchase:   true,
      soldOut:       false,
      images:        [
        {
          full:      'resources/img/gem3.jpg',
          thumb:     'http://www.statesymbolsusa.org/sites/statesymbolsusa.org/files/blue-topaz.jpg'
        }
      ]
    }
  ];

})();
