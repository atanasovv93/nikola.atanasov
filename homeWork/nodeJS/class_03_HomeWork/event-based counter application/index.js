import { EventEmitter } from 'events';

class Counter extends EventEmitter {
    constructor(min = -10, max = 10) {
        super();
        this.value = 0;
        this.min = min;
        this.max = max;
        this.stats = { increases: 0, decreases: 0, resets: 0 };
    }

    increase() {
        if (this.value < this.max) {
            this.value++;
            this.stats.increases++;
            this.emit('increase', this.value);
            this._checkThresholds();
        } else {
            this.emit('maxReached', this.value);
        }
    }

    decrease() {
        if (this.value > this.min) {
            this.value--;
            this.stats.decreases++;
            this.emit('decrease', this.value);
            this._checkThresholds();
        } else {
            this.emit('minReached', this.value);
        }
    }

    reset() {
        this.value = 0;
        this.stats.resets++;
        this.emit('reset', this.value);
        this.emit('zero');
    }

    _checkThresholds() {
        if (this.value === 0) this.emit('zero');
        if (this.value > 0) this.emit('positive', this.value);
        if (this.value < 0) this.emit('negative', this.value);
    }

    getStats() {
        this.emit('stats', this.stats);
    }
}

// Example usage
const counter = new Counter(-5, 5);

counter.on('increase', num => console.log(`Number increased to: ${num}`));
counter.on('decrease', num => console.log(`Number decreased to: ${num}`));
counter.on('zero', () => console.log('Counter is zero!'));
counter.on('positive', num => console.log(`Counter is now positive: ${num}`));
counter.on('negative', num => console.log(`Counter is now negative: ${num}`));
counter.on('maxReached', num => console.log(`Max limit reached at: ${num}`));
counter.on('minReached', num => console.log(`Min limit reached at: ${num}`));
counter.on('reset', () => console.log('Counter has been reset.'));
counter.on('stats', stats => console.log('Counter stats:', stats));

// Demonstration
counter.increase();
counter.increase();
counter.decrease();
counter.reset();
counter.getStats();
