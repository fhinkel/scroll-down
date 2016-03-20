var scrollDown = require('./index.js');


var element = [{
    scrollHeight: function() {}
}];

element.scrollTop = function() {};

scrollDown.now(element);

console.log('Done testing. All good');