

// function sumUniqueNumbers(arr) {
//     let newarr = new Set(arr)
//     let finalarr = Array.from(newarr)
//     let sum = 0
//     for(let i = 0; i<finalarr.length; i++){
//         sum += finalarr[i]
//     }
//     console.log(sum)
// }

// sumUniqueNumbers([3, 8, 12, 5, 9, 15, 3, 12, 7])

// function getFirstLetters(arr) {
//     let newarr = []
//     for(let i = 0; i < arr.length; i++){
//         newarr.push(arr[i][0])
//     }
//     console.log(newarr.join(''))
// }

// getFirstLetters(['გამარჯობა', 'ირაკლი', 'ლეღვი', 'ოთხი' , 'ცა' , 'აეროპორტი', 'ვალერიანი'])

// function getVowelsCount(word) {
//     let newarr = []
//     let count = 0
//     for(let i = 0; i < word.length; i++){
//         if(word[i] == 'ა' || word[i] == 'ე' || word[i] == 'ი' || word[i] == 'ო' || word[i] == 'უ'){
//             newarr.push(word[i])
//             count = newarr.length
//         }
//     }
//     console.log(count)
// }

// getVowelsCount('ეს არის მეექვსე დავალება')

// function getNames(arr) {
//     let newarr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > 4){
//             newarr.push(arr[i])
//         }
//     }
//     let finalarr = new Set(newarr)
//     console.log(finalarr)
// }

// getNames(["John", "Smith", "John", "Smith", "John", "Smith"])

function totalPayments(user) {
    
}

totalPayments({
    name : 'John',
    surname : 'Smith',
    payments : [100, 200, 300, 400]
})

// function reverseWord(word) {
//     let response = ''
//     for (let i = word.length - 1; i >= 0; i--) {
//         response += word[i];
//       }
//       console.log(response);
// }

// reverseWord('javascript')

// function generateDivs(count, color) {
//   for (let i = 0; i < count; i++) {
//     let div = document.createElement('div');
//     div.style.backgroundColor = color;
//     div.style.width = '100px'
//     div.style.height = '100px'
//     document.body.appendChild(div)
// } 
// }

// generateDivs(3, "blue")

// function findCharacterCount(str, char){
//     let newarr = []
//     let count = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == char){
//             newarr.push(str[i])
//             count = newarr.length
//         }
//     }
//     console.log(count)
// }

// findCharacterCount("biblioteka", "b")

// function getEvenNumbers(arr) {
//     let newarr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]%2==0){
//             newarr.push(arr[i])
//         }
//     }
//     console.log(newarr)
// }

// getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// function longestWord(word){
//     let newword = word.split(' ')
//     let rame = newword[0]
//     for(let i = 0; i < newword.length; i++){
//         if(newword[i].length - rame.length > 0){
//             rame = newword[i]
//         }
//     }
//     console.log(rame)
// }

// longestWord("It's the hardest exam I've ever wrote")