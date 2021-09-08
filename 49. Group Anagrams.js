/**Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
    Input: strs = [""]
    Output: [[""]]
Example 3:
    Input: strs = ["a"]
    Output: [["a"]] */


//Optimized Implementation   -- Runtime O(n)  || space O(n)
// Runtime: 112 ms, faster than 98.51 % of JavaScript online submissions for Group Anagrams.
// Memory Usage: 49.4 MB, less than 76.35 % of JavaScript online submissions for Group Anagrams.

var groupAnagrams = function (strs) {

    let templist = [],
        result = [],
        hash = {};

    //sort the each element and store in the templist as same index  ,and hash the unique elements.
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('');
        if (!hash[str])
            hash[str] = [];
        templist.push(str);
    }

    //push the elements to list in the hash by their respective key. 
    for (let i in templist)
        hash[templist[i]].push(strs[i]);

    //combine all the list in the hash
    for (let i in hash)
        result.push(hash[i]);

    //return result list
    return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]



// Brute force Implementaion    Runtime O(n^3)  || space O(n)
var groupAnagrams = function (strs) {
    let numhash = {},
        res = [],
        emptystr = [];
    for (let i = 0; i < strs.length; i++) {
        let hash = {},
            temp = [],
            len = 0;
        for (let j = i; j < strs.length; j++) {
            let x = false;
            for (let str of strs[j]) {
                if (!hash[str] && temp.length == 0) {
                    len++
                    hash[str] = 1;
                    x = true;
                } else if (!hash[str]) {
                    x = false;
                    break
                } else
                    x = true
            }
            if (x && len == strs[j].length) {
                temp.push(strs[j]);
                numhash[j] = 1;
            }
            if (strs[j] === '') {
                emptystr.push('');
                numhash[j] = 1
            }
        }
        if (temp.length > 0)
            res.push([...temp]);
        while (numhash[i + 1])
            i++;
    }
    if (emptystr.length > 0)
        res.push(emptystr);
    return res;
};


