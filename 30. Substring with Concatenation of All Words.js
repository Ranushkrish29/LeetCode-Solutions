/** You are given a string s and an array of strings words of the same length.
    Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.
    You can return the answer in any order.

Example 1:
    Input: s = "barfoothefoobarman", words = ["foo","bar"]
    Output: [0,9]
    Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
    The output order does not matter, returning [9,0] is fine too.
Example 2:
    Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
    Output: []
Example 3:
    Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
    Output: [6,9,12]
  */



//Brute Force Implementation      
function findSubstring(s, words) {
    let hash = {}
    let length = 0, result = [];
    for (let i of words) {
        length += i.length;
        hash[i[0]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            if (helper(s.slice(i, i + length), words, hash)) {
                result.push(i);
            }
        }
    }
    return result;
};
let helper = (str, word, hash) => {
    let strr = [];
    for (let i of word)
        strr.push(i);

    for (let i = 0, x = 0; i < str.length; i++, x++) {
        for (let j = 0; j < strr.length; j++) {
            if (hash[str[i]]) {
                console.log(str.slice(i, i + strr[j].length), strr[j])
                if (str.slice(i, i + strr[j].length) === strr[j]) {
                    i += strr[j].length - 1;
                    strr.splice(j, 1);
                }
            }
        }
        // if (i - x !== 0 || word.length == 0)
        //     x = i;
        // else
        //     break;
    }
    return strr.length === 0 ? true : false;
}
console.log(findSubstring("bcabbcaabbccacacbabccacaababcbb",
    ["c", "b", "a", "c", "a", "a", "a", "b", "c"]));