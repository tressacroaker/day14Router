angular.module("routerApp", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl: 'views/home.html',
    controller: "homeCtrl"
  })
  .state("about", {
    url: "/about",
    templateUrl: 'views/about.html'
  })
  .state("contact", {
    url: "/contact",
    templateUrl: 'views/contact.html'
  });


// by using .state we are defining each of our views home is the first argument to our something...add an object of url.
// the template is html so we need it in h1 or something tag. where we describe our homepage then go to index file to add the ui directive on the view'

// when you use the/about you can go to the left margin and add a new file titled about.html

$urlRouterProvider.otherwise("/");
// method otherwise with an argument in the insdie of the url extension that we are using.so if we dont specifiy what page we are on we wat it to default to the homepage




});

// the empty array is for firebase(api database) but in this case we will type in ui.router , dont forget to call in with a cdn then .config and use a callback function
