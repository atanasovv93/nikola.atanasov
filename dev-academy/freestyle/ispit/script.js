function first(){
    let number = 5;
    return second(number)
}


function second(number) {
     if (true) {
        let number = 6
    }

    return number
};


let number = first();

console.log(number);