function split (arr){
    let num = Math.round(arr.length /2);
    let arr1 = arr.slice(0, num);
    let arr2 = arr.slice(num);
    return [arr1, arr2];
}
function merge (arr1, arr2){
    return arr1.concat(arr2).sort()
}
function mergeSort(array) {
    let arr1 = split(array)[0]
    let arr2 = split(array)[1]

    if (arr1.length === 1 && arr2.length === 1){
        return merge(arr1, arr2);
    } else if (arr1.length === 1 && arr2.length > 1){
        return merge(arr1, mergeSort(arr2));
    } else if (arr1.length > 1 && arr2.length === 1){
        return merge(mergeSort(arr1), arr2);
    } else {
        return merge(mergeSort(arr1), mergeSort(arr2));
    }
  
  }