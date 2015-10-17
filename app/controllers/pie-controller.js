

app.controller('PieController', function ($scope) {

    $scope.eatSlice = function () {
        if($scope.slices){
            $scope.slices--;
        }
    };

    $scope.slices = 8;

})

