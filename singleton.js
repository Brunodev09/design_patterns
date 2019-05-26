// ======= SINGLETON PATTERN =======

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: "Bruno", age: 22});
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const Instance1 = Singleton.getInstance();
const Instance2 = Singleton.getInstance();

// Always returns one instance
console.log(Instance1 === Instance2);
