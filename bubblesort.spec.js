describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('works!', function(){
        expect( bubbleSort([8, 7, 9 ,1]) ).toEqual( [1, 7, 8, 9] );
      });
  });