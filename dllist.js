/*
 * dllist.js
 *
 * Contains implementation for a double-linked list "class"
 */

var Iterator, DLList, proto;

Iterator = require("./iterator");

/*
 *       Constructors
 */

function makeNewList() {
   var lst, sentinel, _length;

   _length = 0;
   lst = Object.create(proto);
   sentinel = { value: null };
   sentinel.next = sentinel;
   sentinel.prev = sentinel;
   lst.sentinel = sentinel;
   lst._length = _length;
   return lst;
}


/*
 *       Prototype / Instance methods
 */

proto = {
   // Add instance methods here
   isEmpty: function () {
      return this._length === 0;
   },
   length: function (){
      return this._length;
   },
   first: function (){
      if (this.isEmpty()) {
         throw new Error("The list has no first element, it is empty.");
      }
      return this.sentinel.next;
   },
   last: function (){
      if (this.isEmpty()) {
         throw new Error("The list has no last element, it is empty.");
      }
      return this.sentinel.prev;
   },
   insertAt: function (value, element) {
      var pointer = this.sentinel.next, newElement = {};
      newElement.value = value;
      while (pointer !== element){
         if (pointer === this.sentinel) {
            return null;
         }
         pointer = pointer.next;
      }
      newElement.next = pointer.next;
      newElement.prev = pointer;
      pointer.next = newElement;
      newElement.next.prev = newElement;
      this._length += 1;
      return newElement;
   },
   unshift: function (value) {
      return this.insertAt(value, this.sentinel);
   },
   push: function (value) {
      return this.insertAt(value, this.sentinel.prev);
   },
   endAt: function (item) {
      var pointer = this.sentinel.next, pointerAux;

      while (pointer !== item){
         if (pointer === this.sentinel){
            return null;
         }
         pointer = pointer.next;
      }

      // processing the new _length
      pointerAux = pointer.next;
      while (pointerAux !== this.sentinel) {
         this._length -= 1;
         pointerAux = pointerAux.next;
      }

      // connecting the two ends
      pointer.next = this.sentinel;
      this.sentinel.prev = pointer;
      return this;
   },
   remove: function (item){
      var pointer = this.sentinel.next;

      while (pointer !== item){
         if (pointer === this.sentinel){
            return null;
         }
         pointer = pointer.next;
      }

      // connecting the two ends
      pointer.next.prev = pointer.prev;
      pointer.prev.next = pointer.next;

      this._length -= 1;
      return pointer.value;
   },
   pop: function (){
      return this.remove(this.last());
   },
   shift: function (){
      return this.remove(this.first());
   },
   isFirst: function (item){
      if (item === this.sentinel){
         return false;
      }
      return item === this.sentinel.next;
   },
   isLast: function (item){
      if (item === this.sentinel){
         return false;
      }
      return item === this.sentinel.prev;
   },
   iterator: function (){
      var next, hasNext, pointer, that = this;
      pointer = that.sentinel;
      next = function (){
         pointer = pointer.next;
         return pointer.value;
      };
      hasNext = function (){
         return pointer.next !== that.sentinel;
      };
      return Iterator.new(next, hasNext);
   },
   forEach: function (func){
      var iterator = this.iterator();
      iterator.forEach(func);
      return this;
   },
   toArray: function(){
      var iterator = this.iterator();
      return iterator.toArray();
   },
   iterateFrom: function(listItem){
      return this.endAt(listItem).iterator();
   },
   reverseIterateFrom: function(listItem){
      var next, hasNext, pointer, newList = this.endAt(listItem);
      pointer = newList.sentinel;
      next = function (){
         pointer = pointer.prev;
         return pointer.value;
      };
      hasNext = function (){
         return pointer.prev !== newList.sentinel;
      };
      return Iterator.new(next, hasNext);
   }
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
DLList = {
   new: makeNewList
};

Object.defineProperty(DLList, "prototype", {
   value: proto,
   writable: false
});

module.exports = DLList;
