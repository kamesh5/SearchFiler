angular.module('insurance', ['ui.bootstrap']);
function InsuranceDetailsControl($scope, $http) {

  $scope.selected = undefined;
  $scope.myList = [{'name':'Ann Liebmann','phone':'+27-61-453-5444', 'email':'ann.lieb@gmail.com','policyno':'0013983887'},{'name':'Ann Summer','phone':'+27-61-453-5444', 'email':'ann.lieb@gmail.com','policyno':'0013983887'},{'name':'Annbelle Samuel','phone':'+27-61-453-5444', 'email':'ann.lieb@gmail.com','policyno':'0013983887'}];
}