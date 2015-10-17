

app.controller('PieController', function ($scope) {

    $scope.eatSlice = function () {
        if($scope.slices){
            $scope.slices--;
        }
    };
    
    this.requestFlavor = function (flavor) {
        $scope.lastRequestedFlavor = flavor;

    }

    $scope.lastRequestedFlavor;
    $scope.slices = 8;



})

