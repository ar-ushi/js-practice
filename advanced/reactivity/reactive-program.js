//Reactive Programming Patterns using Javascript

//1. Pub-Sub

const pubSub = {
    events : {},
    subscribe(event, callbackFn){
        if (!this.events[event]) this.events[event] = [];
        const token = Symbol();
        this.events[event].push({token,callbackFn});
        
        //handle unsubscribing to the event
        return () => {this.events[event] = this.events[event].filter(sub => sub.token !== token)}
    }, //add callback function called by event  - subscribe to the event
    publish(event, data){
        if (this.events[event]) this.events[event].forEach(sub=> sub.callbackFn(data)); //call function 
    }
};


const unsubscribeUpdate = pubSub.subscribe('update', data => console.log(data))
pubSub.publish('update', 'Hi there!') 

unsubscribeUpdate();
pubSub.publish('update', 'Hi there!') 


//2. Native Browser API for PubSub
const updateEvent = new CustomEvent("deliverEvent", {
    detail:{
        name : "Quant"
    }
})

window.addEventListener("deliverEvent", (e) => console.log(e));
window.dispatchEvent(updateEvent);

//3. Observers
class Subject {
    constructor() {
        this.observers = [];
        this.state = 'Default State';
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
          this.observers.splice(index, 1);
        }
      }

    setState(stateChange){
        this.state = stateChange;
        this.notify();
    }

    notify(data){
        this.observers.forEach(observer => observer.update(data, this.state!= 'Default State' ? this.state : null));
    }
}

class Observer{
    update(data, state){
        console.log(`${data} ${state}`);
    }
}

const subject = new Subject();
const observer = new Observer();

subject.addObserver(observer);
subject.notify('Delivery is here!');
subject.setState('Pixel');

//4. Reactive Object Props with Proxies
const handler = {
    get : function (target, property) {
        console.log(property);
        return target[property];
    },
    set : function(target, property, value){
        target[property] = value;
        return true;
    }
};

const iceCream = {name: 'Chocochhip', toppings: ['sprinkles', 'drizzle']};
const proxiedIceCream = new Proxy(iceCream, handler);

console.log(proxiedIceCream.name);
proxiedIceCream.name = 'Mint Choco';
console.log(proxiedIceCream.name);

//4 - Understanding Proxies in JS
const data ={
    name: 'John',
    age: 30,
    isAdmin: false,
    isAlive: true,
}

const logHandler = {
    get : function (target, property) {
        console.log(property);
        return target[property];
    },
    set : function(target, property, value){
        target[property] = value;
        return true;
    }
}

const validationHandler = {
    set : function(target, property, value){
        if (property === 'age' && (typeof value !== 'number' || value < 0 || value > 100 || !isAlive)) {
            console.error('Invalid age value');
            return false;
          }
          target[property] = value;
          return true;
        },      
}

const accessControl = {
    get: function(target, property) {
        if (property === 'isAdmin' && !target.isAdmin) {
          console.error('Access denied: isAdmin property');
          return undefined; // Hide the property
        }
        return target[property];
      },  
}
