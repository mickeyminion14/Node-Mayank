var app = angular.module("sample",[]);
app.controller("emp", function ($scope, $http) {
  $scope.itemsArr = [{item_id : 1},{item_id : 2},{item_id : 3},{item_id : 4},{item_id : 5},{item_id : 6},{item_id : 7},{item_id : 8}];
  $scope.arr = [];
  $scope.formData = {}
  $scope.formData.data;
  $scope.callMe= function(obj) {
   console.log(obj.item_id);
   $scope.arr.push(obj.item_id);
   $scope.formData.data = $scope.arr;
  //  console.log($scope.arr);

   $http.post("/sendData", $scope.formData)
   .then(function(data) {

    console.log(data.data);
   })
   .then (function (data) {
    console.log(data);
   });
  }
})