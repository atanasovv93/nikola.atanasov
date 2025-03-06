import Animal from "./animal.js";
import Zoo from "./zoo.js"

// Create some Animals

const lion = new Animal('Leo The King');
const monkey = new Animal('George the monkey');
const elephant = new Animal('Tony the Elephant');

console.log(lion);
// console.log(monkey);
// console.log(elephant);

// Create a zoo
const theZoo = new Zoo();
const secZoo = new Zoo();
// console.log(theZoo);

theZoo.addAnimal(lion);
// console.log(theZoo);

theZoo.emit('animal:"roar', lion);
// lion.setZoo(theZoo);
// console.log(theZoo);
// console.log(lion);


lion.doAction('roar');
monkey.doAction('sleep')