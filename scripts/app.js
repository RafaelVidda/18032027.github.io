var app = angular.module('sitePessoal',['ngRoute']);

app.controller('mainController', function($scope){
	$scope.nome = 'Rafael AC Branco';
	$scope.cargo = 'Entusiasta em Novas Tecnologias';
	$scope.foto = 'img/foto.png';


	$scope.resume = [
	'Adentrei em algumas áreas do conhecimento acumulando uma bagagem de experiência para poder proporcionar uma firmeza na área que executarei meus trabalhos.'

	];

	$scope.academico=[
	{
		data:'(2016 - 2021)',
		
		formacao:'Bacharel em Sistemas de Informação, UniFacisa'
	},
	
	{
		data:'(3000 - 3004)',
		
		formacao:'Bacharel em BLa bla Bla'
	},

	{
		data:'(3000 - 3004)',
		
		formacao:'Bacharel em BLa bla Bla'
	}



	];

	$scope.ano = new Date().getFullYear();


	$scope.orcamentos = [];


    $scope.solicitarOrcamento= function (orcamento){
        $scope.orcamentos.push(orcamento);
        console.log($scope.orcamentos);
    }

});
