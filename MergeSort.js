function MergeSort(arr){
    if (arr.length <2){
        return arr;
    }
    const mid = Math.floor ( arr.length/2) ;
    const lb =arr.slice(0, mid) ;
    const ub = arr.slice(mid);
   
    return Merge(MergeSort(lb), MergeSort(ub));
}
function Merge(lb,ub){
    const sortedArr = [];
    while(lb.length && ub.length){
        if (lb[0]<= ub){
            sortedArr.push(lb.shift())
        }
        else{
            sortedArr.push(ub.shift());
        }
    }
    console.log ([sortedArr])
    return [...lb, ...sortedArr, ...ub]
}
const arr = [1,2,3,4,5,6]
console.log(MergeSort(arr));