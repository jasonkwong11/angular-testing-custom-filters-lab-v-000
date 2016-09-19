describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it ('should remove all vowels in a string correctly', function (){
    var results = $filter('removeAllVowels')('hello');
    expect (results).toEqual('hll');
  });

});
