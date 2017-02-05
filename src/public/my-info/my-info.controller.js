(function () {
"use strict";

angular.module('common')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var $ctrl = this;

      $ctrl.user = MyInfoService.getUserInfo();
      
}


})();
