describe('bubbleSort', function () {
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });
	it('is a function', function () {
		expect(typeof bubbleSort).toEqual('function');
	});
  it('sorts an array of numbers', function () {
		var result = bubbleSort([3, 5, 1, 89, 20, 2]);
		expect(result).toEqual([1, 2, 3, 5, 20, 89]);
  });
  it('sorts an array of numbers, including negative numbers', function () {
		var result = bubbleSort([3, 5, -6, -2, 120, 2]);
		expect(result).toEqual([-6, -2, 2, 3, 5, 120]);
  });
  it('sorts strings alphabetically', function () {
		var result = bubbleSort(["fish", "cat", "apple", "dog", "alligator"]);
		expect(result).toEqual(["alligator", "apple", "cat", "dog", "fish"]);
	});
	it('does not use built-in sorting methods', function() {
    spyOn(Array.prototype, 'sort').and.callThrough();

    var unsorted = [107, -443, 216, 300, -9, 247],
      sorted = bubbleSort(unsorted);

    expect(sorted).toEqual([-443, -9, 107, 216, 247, 300]);
		expect(Array.prototype.sort.calls.count()).toEqual(0);
		expect(sorted.length).toEqual(6);
  });
});
