/*
 * collection.spec.js
 *
 * Test file for your collection class
 */
var expect, Task, TaskCollection;

expect = require('./chai.js').expect;

Task = require('./task.js');
TaskCollection = require('./collection.js');

// ADD YOUR TESTS HERE
 describe ("Tests for function makeNewCollection",function () {
   
    // Add more "it" sections below
      var task;
      beforeEach(function() {
              // This ensures every test sees a fresh empty stack
              task = Task.new();
              taskCollection = TaskCollection.new()
          });
      
      it("Returns an object", function () {
         expect(task).to.be.a("object");
         expect(taskCollection).to.be.a("object");
      });
      it("defines a variable makeNewTask", function() {
         expect(function() {
         Task.new; }).to.not.throw(Error);
      });
      it("defines a variable makeNewCollection", function() {
         expect(function() {
         TaskCollection.new; }).to.not.throw(Error);
      });
      it("returns an object with length, isEmpty, get, has, add, new, remove, filter, forEach, groupByTag, print, concat", function() {
         ['length', 'isEmpty', 'get', 'has', 'add', 'new', 'remove', 'filter', 'forEach', 'groupByTag', 'print', 'concat'].forEach(function (key) {
         expect(taskCollection[key]).to.be.a('function');
         });        
      });
      it("length - returns the length ", function () {
         taskCollection.add(task);
         expect(taskCollection.length()).to.be.equal(1);        
      });
      it("isEmpty - returns right boolean when called function", function () {
         taskCollection.add(task);
         expect(taskCollection.isEmpty()).to.be.equal(false);
      });
      
});