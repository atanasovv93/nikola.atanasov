import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name, surname) => {
    console.log(`Hello $(name) $(surname)!`);
});

// myEmitter.emit('greet', 'Nikola', 'Atanasov');
// myEmitter.emit('greet', 'Ivo', 'Velkov');
// myEmitter.emit('greet', 'Vlado', 'Toshkov');

MyEmitter.once('Welcome', () => {
    console.log('Welcome to this App');
});

myEmitter.emit('')