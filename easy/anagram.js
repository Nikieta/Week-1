/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//method 1:
// function isAnagram(str1, str2) {
//   for (let i=0;i<str2.length;i++){
//     for(let j=0;j<str1.length;j++){
//       if(str2[i]==str1[j]&&i>=j){
//         i++;
//       }
//       else{
//         j++;
//       }
//     }
    
//   }
//   return true;

// }

//method 2
// function isAnagram(str1, str2) {
//   let strj1=str1.toLowerCase();
//   let strj2=str2.toLowerCase();
//   let string1=[];
//   let string2=[];
//   for(let i of strj1){
    
//     string1.push(i)

//   }
//   for(let j of strj2){
   
//    string2.push(j)

//   }
//   string1.sort();
//   string2.sort();

//   let STRING1=string1.join('')
//   let STRING2=string2.join('')
//   if(STRING1==STRING2){
//     return true;
//   }
//   else{
//     return false;
//   }



// }

//method 3
function isAnagram(str1, str2) {
  let string1=[];
  let string2=[];
  string1=str1.toLowerCase().split('').sort().join('');
  string2=str2.toLowerCase().split('').sort().join('');



  return string1===string2;
  


}


module.exports = isAnagram;
