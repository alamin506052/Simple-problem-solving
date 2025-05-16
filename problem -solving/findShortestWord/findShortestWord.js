// function findShortestWord(str){
    // let cleanedStr = str.replace(/[^\w\s]/g,'');
    // let words = cleanedStr.split(' ');
    // let shortest = words[0];
// 
    // for (let word of words){
        // if (word.length < shortest.length){
            // shortest = word;
        // }
    // }
    // return shortest;
// }
// 
// console.log(findShortestWord
    // ("The quick brown fox jumps over the lazy")) 


    function findLargeWord(str){
        let cleanedStr= str.replace(/[^\w\s]/g, '');
        let words = cleanedStr.split(' ');
        let largest = words[0];

        for (let word of words){
            if (word.length > largest.length){
                largest = word;
            }
        }
        return largest;
    }

    console.log(findLargeWord("The quick brown fox jumps over the lazy"))