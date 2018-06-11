function split (arr){
    let num = Math.round(arr.length / 2);
    return [arr.slice(0, num), arr.slice(num)];
}
function merge (arr1, arr2){
    return arr1.concat(arr2).sort();
}
function mergeSort(array) {
    let arrSplit = split(array),
        arr1 = arrSplit[0],
        arr2 = arrSplit[1],
        arr1Length = one(arr1),
        arr2Length = one(arr2),
        arr1MS,
        arr2MS;

    if (!arr1Length) arr1MS = mergeSort(arr1);
    if (!arr2Length) arr2MS  = mergeSort(arr2);

    if (arr1Length && arr2Length){
        return merge(arr1, arr2);
    } else if (arr1Length){
        return merge(arr1, arr1MS);
    } else if (arr2Length){
        return merge(arr1MS, arr2);
    } else {
        return merge(arr1MS, arr2MS);
    }
}

function one(array){
    if (array.length === 1){
        return true;
    } else {
        return false;
    }
}
