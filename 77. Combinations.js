/**Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
You may return the answer in any order.

Example 1:
    Input: n = 4, k = 2
    Output:
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]
Example 2:
    Input: n = 1, k = 1
    Output: [[1]]
Constraints:
    1 <= n <= 20
    1 <= k <= n */



var combine = function (n, k) {

    let buckets = new Array(k)
    for(let i =0;i<k;i++){
        buckets[i]=i+1;
    }
    console.log(buckets);
    let index = buckets.length-1;
    let x=5;
    let indexchanged =false;
    while( x || ( false && index<0 )){
    
        if(indexchanged){
            index+=1
            for(let  i =index;i < buckets.length;i++){
                console.log(index)
                index++;
                buckets[i]=buckets[i-1]+1;
            }
        }

        console.log(buckets[index],index ,buckets)
        if(buckets[index] < n){
            buckets[index]+=1;
        } else if (buckets[index]==n){
            index--;
            buckets[index]+=1;
            indexchanged=true
        }
    
    
        x--;



    }


};

console.log(combine(4, 2));
