var HashMap = /** @class */ (function () {
    function HashMap() {
        this.data = {};
    }
    HashMap.prototype.hash = function (key) {
        var hashCode = 0;
        for (var i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }
        return hashCode;
    };
    HashMap.prototype.set = function (key, value) {
        var hashedKey = this.hash(key);
        this.data[hashedKey] = value;
    };
    HashMap.prototype.get = function (key) {
        var hashedKey = this.hash(key);
        return this.data[hashedKey];
    };
    HashMap.prototype.delete = function (key) {
        var hashedKey = this.hash(key);
        delete this.data[hashedKey];
    };
    HashMap.prototype.has = function (key) {
        var hashedKey = this.hash(key);
        return this.data.hasOwnProperty(hashedKey);
    };
    return HashMap;
}());
// Example usage:
var myMap = new HashMap();
myMap.set('one', 1);
myMap.set('two', 2);
console.log(myMap.get('one')); // Output: 1
console.log(myMap.has('two')); // Output: true
myMap.delete('one');
console.log(myMap.get('one')); // Output: undefined
