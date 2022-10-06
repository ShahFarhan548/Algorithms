function bianarySearch(arr,elem){
    var start = 0;
    var end = arr.length-1;
    var middle = Math.floor((start + end)/2);
    while (arr[middle]!== elem){
        if (elem < arr[middle]){
            end = middle-1; 
        }else{
            start = middle + 1;
        } 
        middle = Math.floor((start + end)/2);
        
    }
    
    return middle;
}
bianarySearch([1,4,6,7,8,9,12],9);