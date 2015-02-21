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
  if (Array.isArray(arr)){
    arr.forEach(function(val){
      o.arr.push(val);
    });
  }
  return Object.preventExtensions(o);
}

function turnArgIntoFunc(arg){
  "use strict";
  var type = typeof arg, that = this, i, reg;
  if (type === "number") {
    return function(){
      for (i = 0; i < that.arr.length; i += 1){
        if (that.arr[ i ].id === arg){
          return i;
        }
      }
      return -1;
    };
  }else if (type === "string") {
    reg = new RegExp(arg);
    return function(){
      for (i = 0; i < that.arr.length ; i += 1){
        if (reg.test(that.arr[ i ].title)){
          return i;
        }
      }
      return -1;
    };
  }else if (type === "object") {
    return function(){
      for (i = 0;i < that.arr.length; i += 1){
        if (arg.test(that.arr[ i ].title)){
          return i;
        }
      }
      return -1;
    };
  }
  return -1;
}

function helper(arg) {
  "use strict";
  if (typeof arg !== "function"){
    return turnArgIntoFunc.call(this, arg)();
  }
  return arg();
}

function addOneTask(task){
  "use strict";
  if (!this.has(task.id)){
    this.arr.push(task);
  }
}

function printTask(task){
  "use strict";
  var print = "", dateArr;
  print += task.title + " ";
  if (task.isCompleted()){
    dateArr = task.completedTime.toLocaleDateString("en-US").split("/");
    print += "(" + dateArr[ 2 ] + "/" + dateArr[ 0 ] + "/" + dateArr[ 1 ] + ") ";
  }
  task.tags.forEach(function(tag){
    if (tag[ 0 ] !== "#"){
      print += "#" + tag + " ";
    }else {
      print += tag + " ";
    }
  });
  if (task.tags.length !== 0){
    print += " ";
  }
  return print + "\n";
}

/*
 *       Prototype / Instance methods
 */

proto = {
   // Add instance methods here

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
      var index = helper.call(this, arg);
      if (index === -1){
         return null;
      }
      return this.arr[ index ];
    },
   has: function (arg) {
      "use strict";
      var index = helper.call(this, arg);
      return index !== -1;
    },
  add: function (arg) {
      "use strict";
      var that = this;
      if (Array.isArray(arg)){
        arg.forEach(function(task){
          addOneTask.call(that, task);
        });
      }else {
        addOneTask.call(that, arg);
      }
      return that;
    },
   new: function () {
      "use strict";
      var task = new Task();
      this.add(task);
      return task;
    },
   remove: function (arg) {
      "use strict";
      var that = this, i = 0;
      if (Array.isArray(arg)){
        arg.forEach(function(id){
          for (i = 0; i < that.arr.length; i += 1){
            if (id === that.arr[ i ].id){
              that.arr.splice(i, 1);
            }
          }
        });
      }else {
        for (i = 0; i < that.arr.length; i += 1){
          if (arg === that.arr[ i ].id){
            that.arr.splice(i, 1);
          }
        }
      }
      return this;
   },
   filter: function (arg) {
      "use strict";
      var index, filtered = TaskCollection.new(), that = this;
      if (Array.isArray(arg)){
        arg.forEach(function (id){
          index = helper.call(that, id);
          if (index !== -1){
             filtered.add(that.arr[ index ]);
          }
        });
      }else {
        filtered.add(that.get(arg));
      }

      return filtered;
   },
   forEach: function (func) {
      "use strict";
      this.arr.forEach(function(task){
        func(task);
      });
      return this;
   },
   groupByTag: function () {
      "use strict";
      var i, obj = {}, task, func;
      func = function(val){
          if (!obj.hasOwnProperty(val)){
            obj[ val ] = TaskCollection.new();
            obj[ val ].add(task);
          }else {
            obj[ val ].add(task);
          }
        };

      for (i = 0; i < this.arr.length; i += 1){
        task = this.arr[ i ];
        task.tags.forEach(func);
      }
      return obj;
   },
   print: function () {
      "use strict";
      var str = "";
      this.arr.forEach(function(task){
        str += printTask(task);
      });
      return str;
   },
   concat: function () {
      "use strict";
      var that = this, args = Array.prototype.slice.call(arguments);
      args.forEach(function(collection){
        collection.forEach(function(task){
          that.add(task);
        });
      });
      return this;
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
