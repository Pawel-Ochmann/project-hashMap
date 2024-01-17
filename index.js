var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = new Array(127);
        this.size = 0;
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    };
    HashTable.prototype.set = function (key, value) {
        var index = this._hash(key);
        if (this.table[index]) {
            for (var i = 0; i < this.table[index].length; i++) {
                // Find the key/value pair in the chain
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            // not found, push a new key/value pair
            this.table[index].push([key, value]);
        }
        else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    };
    HashTable.prototype.get = function (key) {
        var target = this._hash(key);
        if (this.table[target]) {
            for (var i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[target][i][1];
                }
            }
        }
        return undefined;
    };
    HashTable.prototype.remove = function (key) {
        var index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            for (var i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    HashTable.prototype.display = function () {
        this.table.forEach(function (values, index) {
            var chainedValues = values.map(function (_a) {
                var key = _a[0], value = _a[1];
                return "[ ".concat(key, ": ").concat(value, " ]");
            });
            console.log("".concat(index, ": ").concat(chainedValues));
        });
    };
    return HashTable;
}());
var ht = new HashTable();
ht.set('France', 111);
ht.set('Spain', 150);
ht.set('ǻ', 192);
ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]
console.log(ht.size); // 3
ht.remove('Spain');
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
