/**Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
    What should we return when needle is an empty string? This is a great question to ask during an interview.
    For the purpose of this problem, we will return 0 when needle is an empty string.
    This is consistent to C's strstr() and Java's indexOf().

Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2
Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1
Example 3:
    Input: haystack = "", needle = ""
    Output: 0 */


//Opitimized Implementation   -- runtime O(n)  ||  space O(1) 
function strStr(haystack, needle) {
    if (haystack.length == 0 && needle.length == 0 || needle.length == 0)
        return 0;
    let start = -1;
    for (let i = 0; i < haystack.length; i++)
        if (haystack[i] === needle[0])
            if (haystack.slice(i, i + needle.length) === needle)
                return i;
    return start;
}
console.log(strStr(haystack = "hello", needle = "ll"));//2