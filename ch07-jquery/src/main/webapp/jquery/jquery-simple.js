let _jQuery = function (elements) {
    this.length = elements.length;
    for (let i = 0; i < this.length; i++) {
        this[i] = elements[i];
    }
};

_jQuery.prototype.jquery = '0.0.1.beta';

_jQuery.prototype.click = function(callback) {
    for(var i = 0; i < this.length; i++){
        this[i].addEventListener('click', callback);
    }
}

_jQuery.prototype.css = function(name, value) {
    for(var i = 0; i < this.length; i++){
        this[i].style[name] = value;
    }
}

let jQuery = function (param) {
    if (typeof param === 'function') {
        window.addEventListener("load", param);
        return;
    }

    let elements;
    if (typeof param === 'string') {
        let elements = document.querySelectorAll(param);
    }
    return new _jQuery(elements || {length: 0});
};
let $ = jQuery