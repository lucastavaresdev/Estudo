import  * as R from "ramda";

const arr1 = [1,1,1,1,3,3,4,5,9]
const arr2= [2,5,8,7,7,7,2,1,7]

const arr3 = R.union(arr1, arr2)

console.log(arr3)
