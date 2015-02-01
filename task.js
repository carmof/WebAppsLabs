/*
 * task.js
 *
 * Contains implementation for a "task" "class"
 */

var Task, proto, idGenerator = 0;

// Helper method. You should not need to change it.
// Use it in makeTaskFromString
function processString(s) {
   "use strict";
   var tags, title;

   tags = [];
   title = s.replace(/\s*#([a-zA-Z]+)/g, function(m, tag) {
      tags.push(tag);
      return "";
   });

   return { title: title, tags: tags };
}

/*
 *       Constructors
 */

function makeNewTask() {
	"use strict";
	idGenerator += 1;
	var o = Object.create(proto, {
                id: {
                    enumerable: true,
                    configurable: false,
                    writeable: false,
                    value: idGenerator
                },
                tags: {
                    enumerable: false,
                    configurable: false,
                    writeable: false,
                    value: []
                }
            });
	o.completedTime = null;
	o.title = "";
	return Object.preventExtensions(o);
}

function makeTaskFromObject(o) {
	"use strict";
	var objTask = Task.new();
	if (o !== undefined){
		if (o.hasOwnProperty('title')){
			objTask.setTitle(o.title);
		}
		if (o.hasOwnProperty('tags')){
			objTask.setTags(o.tags);
		}
	}
	return objTask;
}

function makeTaskFromString(str) {
	"use strict";
}


/*
 *       Prototype / Instance methods
 */

proto = {
	// Add instance methods here
	setTitle: function(title){
		this.title = title;
	},
	setTags: function(tags){
		this.tags = tags;
	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Task = {
   new: makeNewTask,
   fromObject: makeTaskFromObject,
   fromString: makeTaskFromString
};

Object.defineProperty(Task, proto, {
   value: proto,
   writable: false
});

module.exports = Task;
