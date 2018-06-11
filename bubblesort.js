function bubbleSort(array) {
    let newArray = [array[0]];

    for (let i = array.length; i > 0; i--){

        for (let j = 0; j < i - 1; j++){
            let test = newArray.pop();
            newArray = newArray.concat(swap(test, array[j + 1]));
        }

        newArray = newArray.concat(array.slice(i))
        array = [];
        pushFunc.call(newArray, array);
        newArray = [array[0]];
    }
    return array;
  }

function swap (ind1, ind2){
    if (ind1 > ind2){
        return [ind2, ind1]
    } else {
        return [ind1, ind2]
    }
}

function pushFunc(arr){
    this.forEach(function(x){
        arr.push(x);
    })
}
