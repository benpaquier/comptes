'use strict';

angular.module('comptes', []);

angular.module('comptes')
	.controller('MainCtrl', function ($scope) {
		$scope.hello = 'Dat app Bro';
		
		// $scope.printTable = function(num){
		// 	console.log(num);
		// };
		$scope.changeEcheance = function(){
			$scope.totalEcheance = [];

			if ($scope.echeances < 500) {
				$scope.warning = ""
				for(var i = 0; i < $scope.echeances; i++){
					$scope.totalEcheance.push(i);
				}
			}
			else {
				$scope.warning = "trop d'écheances ma gueule";
			}

			console.log($scope.totalEcheance);
		}

		$scope.changeCapital = function	(){
			var crd = $scope.capital;
			var inc = (1 + ($scope.taux / 12))^$scope.echances;
			console.log(crd);
			console.log(inc)
		}
	});
