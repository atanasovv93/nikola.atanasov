console.log("i am in nodejs runtime environment.");

const add = (a, b) => {
    return a + b;
};

const addResult = add(4, 3);
console.log("The result of adding 4 and 3 is:", addResult);

const person = {
    name: "John",
    age: 30,
    gender: "male"
}

console.log("The person object is:", person);