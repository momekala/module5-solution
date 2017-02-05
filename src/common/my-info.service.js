(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath', 'MenuService'];
function MyInfoService($http, ApiPath, MenuService) {
  var service = this;
  service.user = {};
  service.menuItem = {};
  service.saved = false;

  service.getUserInfo = function () {
    return service.user;
  };

  service.saveUserInfo = function (user) {
    service.user = user;
  };

  
}
})();
