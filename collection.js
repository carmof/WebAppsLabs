/*
 * collection.js
 *
 * Contains implementation for a "TaskCollection" "class"
 */

var TaskCollection, Task, proto;

Task = require("./task");

/*
 *       Constructors
 */
function makeNewCollection(arr) {
	"use strict";
	var o = Object.create(proto, {
                arr: {
                    enumerable: true,
                    configurable: true,
                    writeable: true,
                    value: []
                }
            });
  if(Array.isArray(arr)){
  	arr.forEach(function(val){
  		o.arr.push(val);
  	});
  }
	return Object.preventExtensions(o);
}

function turnArgIntoFunc(arg){
  var type = typeof arg, that = this, i;
  if (type === 'number') {
    return function(){
      for( i = 0; i< that.arr.length ; i+= 1){
        if(that.arr[i].id === arg){
          return i;
        }
      }
      return -1;
    };
  }else if (type === 'string') {
    var reg = new RegExp(arg)
    return function(){
      for( i = 0; i< that.arr.length ; i+= 1){
        if((reg).test(that.arr[i].title)){
          return i;
        }
      }
      return -1;
    };
  }else if (type === 'object') {
    return function(){
      for( i = 0; i< that.arr.length ; i+= 1){
        if((arg).test(that.arr[i].title)){
          return i;
        }
      }
      return -1;
    };
  }
  return -1;
}

function helper(arg) {
  if (typeof arg === 'function'){
    return arg();
  }else{
    return turnArgIntoFunc.call(this, arg)();
  }
}
/*
 *       Prototype / Instance methods
 */

proto = {
   //Add instance methods here
   length: function () {
      "use strict";
      return this.arr.length;
   },
   isEmpty: function () {
      "use strict";
      return this.length() === 0;
   },
   get: function (arg) {
      "use strict";
      var that = this;
      var index = helper.call(that, arg);
      console.log("fim");
      if(index === -1){
         return null;
      }
      return this.arr[index];
   },
   has: function () {
      "use strict";

      
      return false;
   },
   add: function () {
      "use strict";

   },
   new: function () {
      "use strict";

   },
   remove: function () {
      "use strict";

   },
   filter: function () {
      "use strict";

   },
   forEach: function () {
      "use strict";

   },
   groupByTag: function () {
      "use strict";

   },
   print: function () {
      "use strict";

   },
   concat: function () {
      "use strict";

   }
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
TaskCollection = {
   new: makeNewCollection
};

Object.defineProperty(TaskCollection, "prototype", {
   value: proto,
   writable: false
});

module.exports = TaskCollection;
