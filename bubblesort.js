function bubbleSort(array) {
    let newArray = [array[0]];
    let arrayHolder = [];
    
    array.forEach(function(x){
        arrayHolder.push(x);
    })

    for(let i = array.length; i > 0; i--){
        debugger;
        for(let j = 0; j < i - 1; j++){
            let test = newArray.pop();
            let test2 = swap(test, arrayHolder[j+1])
            newArray = newArray.concat(test2);
            
            
        }
        newArray = newArray.concat(arrayHolder.slice(i))
        arrayHolder = [];
        newArray.forEach(function(x){
            arrayHolder.push(x);
        })
        newArray = [arrayHolder[0]];
    }
    return arrayHolder;
  }

function swap (ind1, ind2){
    if(ind1 > ind2){
        return [ind2, ind1]
    } else{
        return [ind1, ind2]
    }
}