function findNumber(number, array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    
    console.log(`There are ${count} occurrences of number ${number} in the array`);
}

let array1 = [5, 3, 5, 6, 5, 1];
let array2 = [2, 2, 4, 2, 7];
let array3 = [1, 8, 9, 5, 5, 5, 5];

findNumber(5, array1); 
findNumber(2, array2); 
findNumber(5, array3); 
