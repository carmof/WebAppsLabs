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
	arr.forEach(function(val){
		o.arr.push(val);
	});
	return Object.preventExtensions(o);
};

function helper(arg) {
   
   return ;
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
      var index = helper(arg);
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
