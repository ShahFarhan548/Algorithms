function SelectiionSort(arr){// the movement of lowest term to the start of the array
    for (var i= 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if (arr[j] < arr[lowest]){// look for the lowest term 
                lowest =j;
            }
        }
        if (i !== lowest){// skip swaping if first element is lowest 
            var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        }
    } 
    console.log (arr);
    return arr;
}

SelectiionSort([12,45,39,50,23]);