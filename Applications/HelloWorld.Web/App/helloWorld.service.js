(function () {
	'use strict';
	angular
		.module('helloWorld', []);

	angular
		.module('helloWorld')
		.service('helloWorldService', helloWorldService);

	//helloWorldService.$inject = ['$http'];

	function helloWorldService() {
		var service = {
			getData: getData
		};

		return service;

		function getData() {
			return 'Hello World!';
		}
	}
})();