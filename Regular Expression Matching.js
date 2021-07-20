/**Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:
    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".
Example 2:
    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:
    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:
    Input: s = "aab", p = "c*a*b"
    Output: true
    Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:
    Input: s = "mississippi", p = "mis*is*p*."
    Output: false */



// var isMatch = function (s, p) {
//     let p1 = 0, p2 = 0 ,hash={} ;
//     while (p2 < p.length) {
//         console.log(s[p1],p1, p[p2],p2)
//         if (p[p2] === s[p1]) {
//             if (p[p2 + 1] === '*') {
//                 p1++;
//                 hash[String( s[p1] +'*')]= p1;
//             } else {
//                 p1++;
//                 p2++;
//                 hash={}
//             }
//         }else if (p[p2] === '.') {
//             if (p[p2 + 1] === '*') {
//                 if(p>2){}
//                 p1 = (s.length) ;
//                 p2 += 2;
//             } else {
//                 p1++;
//                 p2++;
//             }
//         } else if (p[p2] !== s[p1] && p[p2] !== '.' && p[p2 + 1] === "*") {
//             p2 += 2;
//         } else if (hash[String(s[p1] + '*')] && p[p2] !== '*') {
//             hash[String(p[p2] + '*')] -= 1;
//             p2++;
//             console.log(hash)
//             if (hash[String(p[p2] + '*')] < -1) {
//                 return false
//             }
//         } else {
//             return false;
//         }

//     }
//     return p1 === s.length && p2 === p.length;
// }




var isMatch = function (s, p) {
    const sLen = s.length;
    const pLen = p.length;
    const map = new Map();

    return check(0, 0);

    function check(idxS, idxP) {
        const key = idxS + ':' + idxP;

        if (map.has(key)) return map.get(key);
        if (idxS > sLen) return false;
        if (idxS === sLen && idxP === pLen) return true;

        const currMatch = p[idxP] === '.' || p[idxP] === s[idxS];

        if (p[idxP + 1] === '*') {
            // Check if you should skip current charP
            // CASE: s = 'ac' | p = 'ab*c'
            const skipCurr = check(idxS, idxP + 2);

            // If there is a current match,
            // Check match between next sChar and current pChar
            // CASE: s = 'aaa' | p = 'a*'
            const currMatchMultiple = currMatch && check(idxS + 1, idxP);

            map.set(key, skipCurr || currMatchMultiple);
        } else {
            // Check if next chars match
            const matchNext = check(idxS + 1, idxP + 1);

            map.set(key, currMatch && matchNext);
        }

        return map.get(key);
    }
};
console.log(isMatch("aaab", "a.*b"))