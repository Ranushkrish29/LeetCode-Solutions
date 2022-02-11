/**Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
A substring is a contiguous sequence of characters within the string.

Example 1:
  Input: s = "ADOBECODEBANC", t = "ABC"
  Output: "BANC"
  Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:
  Input: s = "a", t = "a"
  Output: "a"
  Explanation: The entire string s is the minimum window.
Example 3:
  Input: s = "a", t = "aa"
  Output: ""
  Explanation: Both 'a's from t must be included in the window.
  Since the largest window of s only has one 'a', return empty string.

Constraints:
  m == s.length
  n == t.length
  1 <= m, n <= 105
  s and t consist of uppercase and lowercase English letters.
*/


//Brute Force Implementation 
var minWindow = function (s, t) {

  if (s.length < t.length)
    return '';
  if (s === t)
    return s;

  //variables.
  let indexlist = [],
    Tobj = {},
    SubStringobj = {},
    substring = s,
    startSubStringindex = 0,
    endSubStringindex = 0;

  //store the every character in 't' with the dupliaction count in an object.
  for (let i of t) {
    if (!Tobj[i]) {
      Tobj[i] = 1;
    } else {
      Tobj[i] += 1;
    }
  }

  //find the index of every character in t (including duplicates) present in the s string and store in a list.
  for (let i in s)
    if (Tobj[s[i]])
      indexlist.push(i);

  let state = false;
  while (startSubStringindex < indexlist.length && endSubStringindex < indexlist.length) {

    //SubStringobj 
    if (!SubStringobj[s[indexlist[endSubStringindex]]]) {
      SubStringobj[s[indexlist[endSubStringindex]]] = 1;
    } else {
      if (Tobj[s[indexlist[endSubStringindex]]] > SubStringobj[s[indexlist[endSubStringindex]]])
        SubStringobj[s[indexlist[endSubStringindex]]] += 1;
    }

    //checks if all the character in the TObj is present in the SubStringobj.
    let check = false;
    for (let i in Tobj) {
      if (SubStringobj[i] === Tobj[i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }

    //if check is true , store the substring and increament the startSubStringindex.
    if (check) {
      let substringext = s.slice(indexlist[startSubStringindex] * 1, indexlist[endSubStringindex] * 1 + 1);
      if (substring.length > substringext.length) {
        substring = substringext;
      }
      SubStringobj = {};
      endSubStringindex = startSubStringindex;
      startSubStringindex++;
      state = true;
    }
    //increament the endSubStringindex.
    endSubStringindex++;
  }
  //return 
  return substring == s && !state ? '' : substring;
};

// console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));//BANC




var minWindow = function (s, t) {
  let freq = new Map();
  let totalFreq = 0;
  for (let l of t) {
    if (freq.has(l)) freq.set(l, freq.get(l) + 1);
    else freq.set(l, 1);
    totalFreq++;
  }

  let shortestWindow = "";
  let i = 0, j = 0;

  while (j < s.length) {
    if (freq.has(s[j])) {
      if (freq.get(s[j]) > 0) totalFreq--;
      freq.set(s[j], freq.get(s[j]) - 1);
    }

    while (totalFreq == 0 && i <= j) { //while the window is valid
      if (shortestWindow.length == 0 || shortestWindow.length > j - i)
        shortestWindow = s.substr(i, j - i + 1); //substr takes starting index and length

      if (freq.has(s[i])) {
        if (freq.get(s[i]) >= 0) totalFreq++;
        freq.set(s[i], freq.get(s[i]) + 1);
      }
      i++;

    }


    j++;
  }

  return shortestWindow;
};
console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"));//BANC
