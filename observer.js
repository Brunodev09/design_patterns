// ======== OBSERVER PATTERN ========

// Alternate between methods with sub/unsub and fire it with the fire method

let choice = "seconds";

class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) return item;
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }
    fire() {
        this.observers.forEach(function(item) {
            item.call();
        }); 
    }
}

const event = new EventObserver();

const getMilli = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getSeconds = function() {
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}

// This could be specially useful in btns? Probably would do very well with Angular
// Can subscribe to multiple functions at once --> Choice could be a btn event or maybe an object/array where I could loop through

if (choice === 'milli') {
    event.subscribe(getMilli);
    event.fire();
}
else if (choice === 'seconds') {
    event.subscribe(getSeconds);
    event.fire();
}
