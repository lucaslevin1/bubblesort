describe('Merge Sort', function(){
    it('merges', function(){
      expect( split([1, 2, 3, 4, 5, 6]) ).toEqual( [[1, 2, 3],[4, 5, 6]] );
    });
  });
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
  describe('Merge sort', function(){
    it('merge sort', function(){
      expect(mergeSort([1, 3, 5, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('base case test', function(){
        expect(mergeSort([3, 1])).toEqual([1, 3]);
      });
  });
