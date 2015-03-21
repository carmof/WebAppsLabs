
var DLList, CmdHistory, proto;

DLList = require("./dllist");

/*
*       Constructors
*/

function makeNewHistory() {
var hist = Object.create(proto);
hist.list = DLList.new();
hist.current = null;
return hist;
}


/*
*       Prototype / Instance methods
*/

proto = {
	// Add instance methods here
	add: function(command){
		var item;
		if (this.current !== null){
			this.list.endAt(this.current);
		}
		this.list.push(command);
		this.current = this.list.last();
		command.execute();
	},
	canRedo: function(){
		if(this.current === null){
			return false;
		}
		return this.current.next !== this.list.sentinel;
	},
	canUndo: function(){
		if(this.current === null){
			return false;
		}
		return this.current !== this.list.sentinel;
	},
	redo: function(){
		if(this.canRedo()){
			this.current = this.current.next;
			this.current.value.execute();
		}else{
			throw new Error("There is nothing to redo");
		}
	},
	undo: function(){
		if(this.canUndo()){
			this.current.value.unexecute();
			this.current = this.current.prev;
		}else{
			throw new Error("There is nothing to undo");
		}
	},
	undoableIterator: function(){
		return this.list.reverseIterateFrom(this.current);
	},
	redoableIterator: function(){
		return this.list.iterateFrom(this.current.next);
	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
CmdHistory = {
new: makeNewHistory
};

Object.defineProperty(CmdHistory, "prototype", {
value: proto,
writable: false
});

module.exports = CmdHistory;