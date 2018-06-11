describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var result = split([3, 2, 1, 4, 5]);
		expect(result).toEqual([[3,2], [1, 4, 5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var result = mergeSort([3, 5, 1, 89, 20, 2]);
		expect(result).toEqual([1, 2, 3, 5, 20, 89]);
  });
});
