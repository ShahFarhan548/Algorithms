function bubbleSort(arr){
    for (var i = arr.length; i > 0; i--){//loop is runed in the reverse order to avoid the comparison of the last element in each iteration of j 
        for (var j = 0; j < i-1; j++){// i-1 indicates the removal of last term each time 
            console.log(arr, arr[j],arr[j+1]);//to see the array condition and the two nunbers compared
            if (arr[j] > arr[j + 1]){
                
                var temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
     
            }
        }
        console.log ("End of the pass");
    }
 
    return arr;
}

bubbleSort([3,6,9,2,1]);

// function bubbleSort(arr){
// const swap ={arr, indx1, indx2} => { // accoding to ES15 we use this kind of swaping as a cool version 
//     [arr[indx1], arr[indx2]] =[arr[indx2], arr[indx1]]
// }; 
//     for (var i = arr.length; i > 0; i--){
//         for (var j = 0; j < i-1; j++){
//             console.log(arr, arr[j],arr[j+1]);
//             if (arr[j] > arr[j + 1]){
//               swap {arr,j, j+1};  
     
//             }
//         }
//     }
 
//     return arr;
// }

// bubbleSort([3,6,9,2,1]);