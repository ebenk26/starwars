// copyright by Ebenk


angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, $http, $ionicPopup, $state) {
  $ionicLoading.show({template: 'Load Data...'});
  $scope.films = [];
  $scope.species = [];
  $scope.starships = [];
  $scope.vehicles = [];
  $http.get("http://swapi.co/api/people/1/")
      .success(function(result) {
        // console.log(result);
        $ionicLoading.hide();
        $scope.name = result.name;
        $scope.birth_year = result.birth_year;
        $scope.gender = result.gender;
        $scope.created = result.created;
        $scope.edited = result.edited;
        $scope.eye_color = result.eye_color;
        $scope.hair_color = result.hair_color;
        $scope.height = result.height;
        $scope.homeworld = result.homeworld;
        $scope.mass = result.mass;
        $scope.skin_color = result.skin_color;
        $scope.url = result.url;
        $scope.films = result.films;
        $scope.species = result.species;
        $scope.starships = result.starships;
        $scope.vehicles = result.vehicles;
      })
      .error(function(data, status, headers,config){
        $ionicLoading.hide();
        $ionicPopup.alert({
             title: '',
             template: 'Get Data Failed',
             okType: 'button-assertive',
             cssClass: 'popupalert'
        });
  });
  $scope.submitItem = function () {
    // console.log(this.text);
      $http.get("http://swapi.co/api/"+this.text)
        .success(function(result) {
          // console.log(result);
          $ionicLoading.hide();
          $scope.name = result.name;
          $scope.birth_year = result.birth_year;
          $scope.gender = result.gender;
          $scope.created = result.created;
          $scope.edited = result.edited;
          $scope.eye_color = result.eye_color;
          $scope.hair_color = result.hair_color;
          $scope.height = result.height;
          $scope.homeworld = result.homeworld;
          $scope.mass = result.mass;
          $scope.skin_color = result.skin_color;
          $scope.url = result.url;
          $scope.films = result.films;
          $scope.species = result.species;
          $scope.starships = result.starships;
          $scope.vehicles = result.vehicles;
        })
        .error(function(data, status, headers,config){
          $ionicLoading.hide();
          $ionicPopup.alert({
               title: 'Error',
               template: 'Get Data Failed',
               okType: 'button-assertive',
               cssClass: 'popupalert'
          });
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats, $rootScope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.title = "Chat";
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
