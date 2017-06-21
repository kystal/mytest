'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone','$scope','$location',
      function PhoneListController(Phone,$scope,$location) {
        if($scope.loginUser=='')
        {
           $location.path('./user-login/user-login.template.html');
        }
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
