describe('Bubble Sort', function(){
  it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('works!', function(){
      expect( bubbleSort([8, 7, 9 ,1]) ).toEqual( [1, 7, 8, 9] );
    });

      it('works with longer array!', function(){
      expect( bubbleSort([2, 8, 3, 1, 9, 8, 7, 9 ,1]) ).toEqual( [1, 1, 2, 3, 7, 8, 8, 9, 9] );
    });
  });
