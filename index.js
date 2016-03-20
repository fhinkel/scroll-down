
// scroll an element to the bottom
exports.now = function(element) {
    element.scrollTop(element[0].scrollHeight);
    return false;
    // Return false to cancel the default link action
};