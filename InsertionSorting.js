function InsertionSort(arr){
    for (var i= 0; i < arr.length; i++){
        var temp = arr[i];// start by compairing the second element with first 
         var j = i-1; // the value of j is the first element of array
         while(j >= 0 && arr[j] > temp){
            arr[j + 1]= arr[j];//assigning the value of j to the j+1 if condition true
            j--;
         }
         arr[j+ 1] = temp; // if the arr[j]<temp then no changes occur and termed are saved as
    }
    console.log(arr);
    return arr;
}
// hey this isa sunday and ib need  to commit  something
InsertionSort([23,5,13,16,1])
//             23   5    13     16    1
//              j   i                   i and j are compared , 5<23 and j=0
//                  23   13     16    1
//              now j is j-- so less then 0 i.e -1 so the loop breaks and the outer statement runs ;
//              arr[j+1]=temp i.e j=0 will tale the value of temp ie 5, now the array is 
//            5    23    13     16    1  