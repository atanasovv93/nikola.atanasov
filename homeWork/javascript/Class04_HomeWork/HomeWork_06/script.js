function getFullNames(firstNames, lastNames) {
    let fullNames = [];
    
    for (let i = 0; i < firstNames.length; i++) {
        fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }

    return fullNames;
}

let firstNames = ["Bob", "Vlado", "Satoshi", "Mike"];
let lastNames = ["Marley", "Stefanovski", "Nakamoto", "Ilich"];

let fullNames = getFullNames(firstNames, lastNames);

console.log(fullNames);  
alert(fullNames);