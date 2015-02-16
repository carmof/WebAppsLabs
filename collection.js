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
   
   var blablabla = Object.create(proto, {
      
   });
}


/*
 *       Prototype / Instance methods
 */

proto = {
   // Add instance methods here
   legth: function(str){
      "use strict";

   },
   isEmpty: function () {
      "use strict";

   },
   get: function () {
      "use strict";

      return null;
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
