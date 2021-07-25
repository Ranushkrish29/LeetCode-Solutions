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