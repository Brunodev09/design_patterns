// ======= MEDIATOR PATTERN =======

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    let users = {}; // list of users
    return {
      register(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send(message, from, to) {
        if (to) {
          // Single user message
          to.receive(message, from);
        } else {
          // Global message
          for (let key in users) {
            if (users[key] !== from) {
              users[key].receive(message, from);
            }
          }
        }
      }
    };
  }
}

const bruno = new User("Bruno");
const jeff = new User("Jeff");
const dino = new User("Dino");

const chat = new Chatroom();

chat.register(bruno);
chat.register(dino);
chat.register(jeff);

bruno.send("hey jeff", jeff);
dino.send("bark bark", bruno);
jeff.send("WARGASF", bruno);
