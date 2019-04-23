var Dispatcher = require('./../Dispatcher');
const data = [
    {
        img: 'images/apple.png',
        words:['chicken', 'water', 'apple', 'cheese', 'eggs', 'milk', 'tea'],
        correct: 2,
        translate: 'Яблоко',
        transcription: 'yabloko'
    },
    {
        img: 'images/cheese.png',
        words:['water', 'cheese', 'apple', 'carrot', 'cucumber', 'potato', 'rice'],
        correct: 1
    },
    {
        img: 'images/pineapple.png',
        words:['banana', 'blackberry', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 6
    },
    {
        img: 'images/bread.png',
        words:['bread', 'cabbage', 'candy', 'fish', 'lemon', 'orange', 'meat'],
        correct: 0
    },
    {
        img: 'images/orange.png',
        words:['banana', 'blackberry', 'mushroom', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 5
    },
    {
        img: 'images/banana.png',
        words:['banana', 'melon', 'blueberry', 'mushroom', 'lemon', 'orange', 'pineapple'],
        correct: 0
    },
    {
        img: 'images/potato.png',
        words:['banana', 'nut', 'peach', 'pepper', 'lemon', 'potato', 'pineapple'],
        correct: 5
    },
    {
        img: 'images/lemon.png',
        words:['chocolate', 'apricot', 'tea', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 4
    },
    {
        img: 'images/tomato.png',
        words:['banana', 'tomato', 'blueberry', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 1
    },
    {
        img: 'images/pear.png',
        words:['banana', 'blackberry', 'blueberry', 'pear', 'lemon', 'orange', 'pineapple'],
        correct: 3
    },
    {
        img: 'images/meat.png',
        words:['banana', 'blackberry', 'meat', 'cherry', 'lemon', 'orange', 'pineapple'],
        correct: 2
    },
    {
        img: 'images/mushroom.png',
        words:['banana', 'mushroom', 'blueberry', 'cherry', 'plum', 'pie', 'pineapple'],
        correct: 1,
        translate: ''
    },
];

var Store = {
    value: 0,
    teach_value: 0,
    page: 'home',

    listeners: [], // list of listening objects
    callbacks: [], // list of methods that should be called on those objects (as strings)

    incrementValue: function () {
        this.value++;
    },

    incrementTeachValue: function () {
        this.teach_value++;
    },

    setPage: function (route) {
        this.page = route;
    },

    getData: function () {
        return data;
    },

    getTeachValue: function () {
        return this.teach_value;
    },

    getValue: function () {
        return this.value;
    },

    getPage: function () {
        return this.page;
    },

    bind: function (listener, callback) {
        this.listeners.push(listener);
        this.callbacks.push(callback);
    },

    unbind: function (listener, callback) {
        var indexListener = this.listeners.indexOf(listener);
        var indexCallback = this.callbacks.indexOf(callback);
        // check if listener and callback exists
        if (indexListener === indexCallback && indexListener > -1) {
            // remove if exists
            this.listeners.splice(indexListener, 1);
            this.callbacks.splice(indexCallback, 1);
        }
    },

    trigger: function () {
        // notify all listeners
        for (var i in this.listeners) {
            this.listeners[i][this.callbacks[i]]();
        }
    }
};

// register increment action
Dispatcher.register(function (payload) {
    switch (payload.eventName) {
        case 'increment':
            Store.incrementValue();
            Store.trigger();
            break;
        case 'increment_teach':
            Store.incrementTeachValue();
            Store.trigger();
            break;
        case 'updatePage':
            Store.setPage(payload.route);
            Store.trigger();
            break;
    }

    return true; // needed for Flux promise resolution

});

module.exports = Store;