describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter favorite food correctly', function(){
    var mockedList =[{
      name: "Lebron",
      favoriteFood: "Pizza"
    },{
      name: "Jason",
      favoriteFood: "Lobster"
    },{
      name: "Hippo",
      favoriteFood: "Marbles"
    }];

    var results = $filter('favoriteFood')(mockedList, 'Lobster');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe("Jason");
  })
	
});
