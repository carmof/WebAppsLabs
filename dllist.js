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
   isEmpty : function () {
      return this._length === 0;
   },
   length : function (){
      return this._length;
   },
   first : function (){
      if(this.isEmpty()){
         throw new Error("The list has no first element, it is empty.");
      }
      return this.sentinel.next;
   },
   last : function (){
      if(this.isEmpty()){
         throw new Error("The list has no last element, it is empty.");
      }
      return this.sentinel.prev;
   },
   insertAt : function (value, element) {
      var pointer = this.sentinel.next, newElement = {};
      newElement.value = value;
      while(pointer !== element){
         if(pointer === this.sentinel){
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
   unshift : function (value){
      return this.insertAt(value, this.sentinel);
   },
   push : function (value){
      return this.insertAt(value, this.sentinel.prev);
   },
   endAt : function (item){
      var pointer = this.sentinel.next, pointerAux;

      while(pointer !== item){
         if(pointer === this.sentinel){
            return null;
         }
         pointer = pointer.next;
      }

      //processing the new _length
      pointerAux = pointer.next;
      while(pointerAux !== this.sentinel){
         this._length -= 1;
         pointerAux = pointerAux.next;
      }

      //connecting the two ends
      pointer.next = this.sentinel;
      this.sentinel.prev = pointer;
   },
   remove : function (item){
      var pointer = this.sentinel.next;

      while(pointer !== item){
         if(pointer === this.sentinel){
            return null;
         }
         pointer = pointer.next;
      }

      //connecting the two ends
      pointer.next.prev = pointer.prev;
      pointer.prev.next = pointer.next;

      this._length -= 1;
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
