function combineStrings(stringsArray) {
    let combined = "";
    for (let i = 0; i < stringsArray.length; i++) {
        combined += stringsArray[i];
        if (i < stringsArray.length - 1) {
            combined += " ";
        }
    }
    return combined;
}

let exampleArray = ["Programming", "is", "fun", "at", "Qinshift"];
let result = combineStrings(exampleArray);
console.log(result);
alert(result);
