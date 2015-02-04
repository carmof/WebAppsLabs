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
	return Task.fromObject(processString(str));
}


/*
 *       Prototype / Instance methods
 */

proto = {
	// Add instance methods here
	setTags: function(tags){
		"use strict";
		console.log("HIIIII");
		console.log(tags);
		tags  = [1];
		this.tags.concat(tags);
		return this;
	},
	setTitle: function(str){
		"use strict";
		this.title = str.trim();
		return this;
	},
	isCompleted: function(){
		"use strict";
		return this.completedTime !== null;
	},
	toggleCompleted: function(){
		"use strict";
		if (this.isCompleted()){
			this.completedTime = null;
		}else {
			this.completedTime = new Date();
		}
		return this;
	},
	hasTag: function(str){
		"use strict";
		var i;
		for(i=0; i < tags.length ; i++){
			if(this.tags[i] === str){
				return true;
			}
		}
		return false;
	},
	addTag: function(str){
		"use strict";
		if(!this.hasTag()){
			this.tags.push(str);
		}
	},
	removeTag: function(str){
		"use strict";
		var i;
		for(i=0; i < tags.length ; i++){
			if(tags[i] === str){
				this.tags.splice(i, 1);
				return this;
			}
		}
		return this;

	},
	toggleTag: function(str){
		"use strict";
		if(this.hasTag()){
			this.removeTag(str);
		}else{
			this.addTag(str);
		}
		return this;
	},
	addTags: function(listStr){
		"use strict";
		listStr.forEach(function(str){
			this.addTag(str);
		});
		return this;
	},
	removeTags: function(){
		"use strict";
		listStr.forEach(function(str){
			this.addTag(str);
		});
		return this;
	},
	toogleTags: function(){
		"use strict";
		listStr.forEach(function(str){
			this.toggleTag(str);
		});
	},
	clone: function(o){
		"use strict";
		var clone = Task.new();
		clone.setTitle = o.title;
		clone.setTags = o.tags;
		clone.completedTime = o.completedTime;
		return clone;
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
