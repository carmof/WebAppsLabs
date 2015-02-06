/*
 * task.spec.js
 *
 * Test file for your task class
 */
var expect, Task;

expect = require("./chai.js").expect;

Task = require("./task.js");

// ADD YOUR TESTS HERE
function addRandomTags(size) {
	var vet = [], i;
	for(i = 0 ; i < size ; i+=1){
		vet.push("#test"+i);
	}	
	return vet;
}
 describe("Tests for function makeNewTask", function() {
   "use strict";
   // Add more "it" sections below
	var task;
	beforeEach(function() {
	        // This ensures every test sees a fresh empty stack
	        task = Task.new();
	    });
	
	it("Returns an object", function () {
		expect(task).to.be.a("object");
	});
    it("defines a variable makeNewTask", function() {
    	expect(function() {
		 Task.new; }).to.not.throw(Error);
    });
	it("returns an object with setTitle, isCompleted, toggleCompleted, hasTag, addTag, removeTag, toggleTag, addTags, removeTags, toggleTags, clone", function() {
	       ['setTitle', 'isCompleted', 'toggleCompleted', 'hasTag', 'addTag', 'removeTag', 'toggleTag', 'addTags', 'removeTags', 'toggleTags', 'clone'].forEach(function(key) {
	           expect(task[key]).to.be.a('function');
	       });
	   });
	it("setTitle - ",function () {
		task.setTitle("chuchu");
		expect(task.title).to.be.equal("chuchu");
	});
	it("isCompleted - returns true if completed ", function () {
		task.toggleCompleted();
		expect(task.isCompleted()).to.equal(true);
	});
	it("isCompleted - returns false if not completed ", function () {
			expect(task.isCompleted()).to.equal(false);
	});
	it("hasTag - Returns false if does not have a tag", function () {
		expect(task.hasTag("chuchu")).to.be.equal(false);
	});
	it("hasTag - check if has the tag", function () {
		task.addTag("chuchu") ;
		expect(task.hasTag("chuchu")).to.be.equal(true);
	});
	it("addTask - check if addTask is adding the tag ", function () {
		task.addTag("chuchu");
		expect(task.tags[ 0 ] ).to.be.equal("chuchu");
	});
	it("addTask - Returns false if does not add a tag", function () {
		task.addTag("chuchu") ;
		task.hasTag("chichi");
		expect(task.hasTag("chichi")).to.be.equal(false);
	});	
	it("addTask - If addTag has already the tag added, don't include it ", function () {
		task.addTag("chuchu");
		task.addTag("chuchu");
		expect(task.tags.length).to.be.equal(1);
	});
	it("removeTag - If added, delete it ", function () {
		task.addTag("chuchu");
		task.removeTag("chuchu");
		expect(task.hasTag("chuchu")).to.be.equal(false);
	});
	it("removeTag - check the return of removeTag", function () {
		task.addTag("chuchu");
		expect(task.removeTag("chuchu")).to.equal(task)
	});
	it("toggleTag - add tag when it's not there", function () {
		task.toggleTag("chuchu");
		expect(task.hasTag("chuchu")).to.equal(true);
	});
	it("toggleTag - remove tag when it's there", function () {
		task.addTag("chuchu");
		task.toggleTag("chuchu");
		expect(task.hasTag("chuchu")).to.equal(false);
	});
	it("toggleTag - check the return of toggleTag, with a previous tag", function () {
		task.addTag("chuchu");
		expect(task.toggleTag("chuchu")).to.equal(task);
		});
    it("toggleTag - check the return of toggleTag, without a previous tag", function () {
		expect(task.toggleTag("chuchu")).to.equal(task);
		}); 
	
	
	
 	it("addTags - check if addTasks is adding the tag ", function () {
		var vet = addRandomTags(10);
		task.addTags(vet);
		vet.forEach(function (key) {
		expect(task.hasTag(key)).to.be.equal(true);
		});
	});
	it("addTags - if is already added, don't include it", function () {
		var vet = ["test1","test1","test1","test1"];
		task.addTags(vet);
		expect(task.tags.length).to.be.equal(1);
	});
	it("addTags - check the return of addTags", function () {
		var vet = addRandomTags(10);
			expect(task.addTags(vet)).to.be.equal(task);
	});	
	it("removeTags - If added, delete it ", function () {
		var vet = addRandomTags(10);
		task.addTags(vet);
		task.removeTags(vet);
		vet.forEach(function (key) {
			expect(task.hasTag(key)).to.be.equal(false);
		});
	});
	it("removeTags - check the return of removeTags", function () {
			var vet = addRandomTags(10);
				expect(task.removeTags(vet)).to.be.equal(task);
	});	
	it("toggleTags - add tag when it's not there", function () {
		var vet = addRandomTags(10);
		task.toggleTags(vet);
		vet.forEach(function (key) {
			expect(task.hasTag(key)).to.be.equal(true);
		});

	});
	it("toggleTags - remove tag when it's there", function () {
		var vet = addRandomTags(10);
		task.addTags(vet);
		task.toggleTags(vet);
		vet.forEach(function (key) {
				expect(task.hasTag(key)).to.be.equal(false);
		});
	});
	
	it("toggleTags - check the return of toggleTags, with a previous tag", function () {
		var vet = ["chuchu","chuchu2"];
		var vet2 = ["chuchu2"];
		task.toggleTags(vet);
		task.toggleTags(vet2);
		expect(task.tags.length).to.be.equal(1);
		expect(task.hasTag("chuchu")).to.be.equal(true);
	});
    it("toggleTags - check the return of toggleTags", function () {
		var vet = [];
		expect(task.toggleTags(vet)).to.be.equal(task);
	});
	it("clone - Returns an object", function () {
		var o = task.clone();
		expect(task).to.be.a("object");
	});
	it("cloned object has the following methods: setTitle, isCompleted, toggleCompleted, hasTag, addTag, removeTag, toggleTag, addTags, removeTags, toggleTags, clone", function() {
		var o = task.clone();
		['setTitle', 'isCompleted', 'toggleCompleted', 'hasTag', 'addTag', 'removeTag', 'toggleTag', 'addTags', 'removeTags', 'toggleTags', 'clone'].forEach(function(key) {
		           expect(o[key]).to.be.a('function');
		 });
	});
	it("clone - returns same title", function () {
		task.setTitle("chuchu");
		var o = task.clone();
		expect(o.title).to.be.equal("chuchu");
	});
	it("clone - returns same status", function () {
		task.toggleCompleted();
		var o = task.clone();
		expect(o.completedTime).to.be.equal(task.completedTime);
	});
	it("clone - returns same tags", function () {
		var vet = addRandomTags(10);
		task.addTags(vet);
		var o = task.clone();
		vet.forEach(function (key) {
			expect(o.hasTag(key)).to.be.equal(true);
		});
	});
});
