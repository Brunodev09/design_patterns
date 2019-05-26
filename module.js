// ====== STANDARD MODULE PATTERN ======

// ()(); runs function right away

// (function () {
//     // Declare private variables and functions


//     return {
//         // Declare public variables and functions
//     }

// })();

let global_data = "hello world";

const UICtrl = (function() {
    let _text = 'SERIAL21321321';

    const changeText = function() {
        console.log('STD_MOD | Editing global variable!');
        global_data = _text;
    }

    return {
        callChangeText: function() {
            changeText();
        }
    }

})();

UICtrl.callChangeText();

// ====== REVEALING MODULE PATTERN ======

// Returns object literal that directly reveals methods and variables

const ItemCtrl = (function() {
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log(`REV_MOD | Item ${item.name} has been added.`);
    }
    function get(id) {
        console.log(`REV_MOD | Trying to fetch item with ID of ${id}`);
        return _data.find(item => { return item.id === id; });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: "Bruno"});
ItemCtrl.get(1);
