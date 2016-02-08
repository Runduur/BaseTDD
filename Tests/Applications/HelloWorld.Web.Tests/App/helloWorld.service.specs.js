/// <reference path="_references.js"/>
/// <reference path="../../../../Applications/HelloWorld.Web/App/helloWorld.service.js"/>

describe('HelloWorld Service', function () {
	beforeEach(module('helloWorld'));
	var service;
	beforeEach(inject(function (helloWorldService) {
		service = helloWorldService;
	}));

	it('returns Hello World!', function () {
		var result = service.getData();
		expect(result).toBe('Hello World!');
	});
});