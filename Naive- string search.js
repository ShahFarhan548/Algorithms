function StringSearch(long, short){
 var count =0;
 /*
 to perform this algorithm we shall go through two loops first forr the
 long string and other for the short one , the put the condition if the 
 element of the short length is in match to the i, for which the loop is
 running plus the value of j .for example the  
 */
    for(var i= 0; i < long.length; i++){
    for (var j = 0; j < short.length ; j++){
        //console.log (short[j], long[i+j])
        if (short[j] !== long[i+j]){
            //console.log("break");
            break;
        }
        if (j === short.length -1){
            //console.log("Found One");
            count ++;
        }
    }
    }
    console.log(count);
    return count;
}

StringSearch("lorie loled", "lole");
