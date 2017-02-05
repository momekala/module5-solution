(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService','MenuService'];
function SignUpController(MyInfoService, MenuService) {
  var $ctrl = this;

  $ctrl.user = {};
  $ctrl.menuItem = {};

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.user.favmenuitem).then(function successCallback(response) {
      $ctrl.user.menuItemTitle = response.name;
      $ctrl.user.menuItemDescription = response.description;
      MyInfoService.saveUserInfo($ctrl.user);
    }, function errorCallback(response) {
      $ctrl.user.menuItemTitle = false;
      $ctrl.user.menuItemDescription = false;
    });
  };
}


})();
