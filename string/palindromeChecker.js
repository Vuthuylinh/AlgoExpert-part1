/*
Prompt:  Given a string, create a function that return boolean, corresponding to whether that string is a palindrome (spell the same backward and forward)
Our palindrome check is case- insensitive

Edge cases:
-	Is a string still a palindrome if it contains spaces?
   -> as long as the spaces are in the same position backward and forwards in the string ->  yes
-	What if string has only 1 character
   -> palindrome : true
-	Empty string -> debatable but in this case it’s also palindrome: true

Example:
   input: "abcbac"
   output: false

   input: "racecar"
   ouput: true

Approach1: O(n^2)|O(n)
 -> reverse the string into another string => compare

Approach1: O(n)|O(n)
 -> reverse te string, store chars in an array -> compare

Approach3:O(n)|O(1)
 use while loop (while felt<right)
- check if the 1st element ?= the last element of the string
   -> if(first !== last) => return false

   -> first ===last
      input: "racecar" -> "aceca" -> "cec" => e
              ^     ^      ^   ^      ^ ^
      - keep compare new first and new last
       first and last both make their way to middle
      - If any point first !== last => return false
      -if we get to the middle(either single character or no character left unchecked) and everything has matched
       => return true

*/

//Solution1: O(n^2)|O(n)
function isPalindrome(string) {
  let revesreString = ""
  for(let i= string.length-1; i>=0; i--){
     revesreString +=string[i]
  }
  return string ===revesreString
}

//Solution2: O(n)|O(n)
function isPalindrome2(string){
  let arr=[]
  for(let i=string.length-1; i>=0; i--){
    arr.push(string[i])
  }
  return string === arr.join("")
}

//Solution3: O(n)|O(1)

function isPalindrome3(string){
  let leftIndx= 0
  let rightIndex = string.length-1
 while(leftIndx<rightIndex){
   if(string[leftIndx]!==string.rightIndex){
     return false
   }
   leftIndx++
   rightIndex--
 }
return true
}
