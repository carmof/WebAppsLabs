/*
 * task.spec.js
 *
 * Test file for your task class
 */
var expect, Task;

expect = require('./chai.js').expect;

Task = require('./task.js');

// ADD YOUR TESTS HERE
describe('Tests for function makeNewTask', function() {
   // Add more "it" sections below
   it('defines a variable makeNewTask', function() {
      expect(function() { Task.new; }).to.not.throw(Error);
   });
   it('actually defines a function makeNewTask', function() {
    expect(Task.new).to.be.a('function');
   });
   
});

 describe('Tests for Function makeNewTask', function () {
	var task = Task.new();
	it('Returns an object', function () {
		expect(task).to.be.a('object');
	});
	
	it('Returns object which has id, tags, title and completed time', function () {
		['id','tags','completedTime','title'].forEach(function (key) {
			expect(task[key]).to.be.a('property');
			
		});
		
	});
	
});
describe('Tests for function makeTaskfromObject', function() {
		var objtask = Task.fromObject();
		it('Returns an object', function () {
			expect(objtask).to.be.a('object');

		});
	
});
