// ======== FACTORY PATTERN ========

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;
    if (type === "simple") {
      member = new Simple(name);
    } else if (type === "std") {
      member = new Std(name);
    } else if (type === "super") {
      member = new Super(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}) --> ${this.cost}`);
    };

    return member;
  };
}

const Simple = function(name) {
  this.name = name;
  this.cost = 50;
};

const Std = function(name) {
  this.name = name;
  this.cost = 100;
};

const Super = function(name) {
  this.name = name;
  this.cost = 150;
};

const clients = [];
const factory = new MemberFactory();

clients.push(factory.createMember("Bruno", "std"));

clients.forEach(function(client) {
    client.define();
});
