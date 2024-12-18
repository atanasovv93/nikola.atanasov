let result = "";

for (let i = 1; i <= 20; i++) {
    result += i; 
    if (i % 2 === 0) {
        result += "\n"; 
    } else {
        result += " "; 
    }
}

console.log(result); 
