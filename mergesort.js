function split (arr){
    let num = Math.round(arr.length / 2);
    return [arr.slice(0, num), arr.slice(num)];
}
function merge (arr1, arr2){
    return arr1.concat(arr2).sort();
}
function mergeSort (array) {
    if (array.length === 1) {
      return array;
    }
    let splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}
