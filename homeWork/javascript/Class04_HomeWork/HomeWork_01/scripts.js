function createStory(details) {
    let character = details[0];
    let feeling = details[1];
    let action = details[2];
    return `Meet ${character}. ${character} is very kind. Today, they feel ${feeling}. They spend the day ${action}. Isn't that great?`;
}

let myStory = createStory(["Petar", "excited", "reading books"]);
console.log(myStory);
alert(myStory);
