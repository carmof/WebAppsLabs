/*
 * history.spec.js
 *
 * Test file for your history class
 */
var expect, DLList, CmdHistory;

expect = require('./chai.js').expect;

DLList = require('./dllist.js');
CmdHistory = require('./history.js');

var LogEntries = [];
var Log = {
   add: function(s) { LogEntries.push(s); return this; },
   get: function() { return LogEntries; },
   clear: function() { LogEntries = []; return this; }
};
var id = 0;
function mockExecute() { Log.add(this.toString + " executed"); }
function mockUnexecute() { Log.add(this.toString + " unexecuted"); }
function mockCommand() {
   id += 1;
   return {
      execute: mockExecute,
      unexecute: mockUnexecute,
      toString: "command " + id
   };
}

// ADD YOUR TESTS HERE
describe('Testing code for history', function() {
	var com1 = mockCommand(); com2 = mockCommand(); com3 = mockCommand();
	beforeEach(function() {
    history = CmdHistory.new();
  });

  it('Testing: add()', function() {
    history.add(com1);
    expect(history.list.last().value).to.be.equal(com1);
    history.add(com2);
    expect(history.list.last().value).to.be.equal(com2);
    history.add(com3);
    expect(history.list.last().value).to.be.equal(com3);
  });


  it('Testing: canRedo() & undo()', function() {
    history.add(com1);
    history.add(com2);
    history.add(com3);
    expect(history.canRedo()).to.be.equal(false);
    history.undo();
    history.undo();
    history.undo();
    expect(history.canRedo()).to.be.equal(true);
    expect(history.undo).to.throw(Error);
  });

  it('Testing: canUndo() & redo()', function() {
    history.add(com1);
    history.add(com2);
    history.add(com3);
    expect(history.redo).to.throw(Error);
    expect(history.canUndo()).to.be.equal(true);
    history.undo();
    history.undo();
    history.undo();
    expect(history.canUndo()).to.be.equal(false);
    history.redo();
    expect(history.canUndo()).to.be.equal(true);
  });

  it('Testing: undoableIterator()', function() {
    var iteratorTest, testBool;
    history.add(com1);
    history.add(com2);
    history.add(com3);
    iteratorTest = history.undoableIterator();
    while(iteratorTest.hasNext()){
      expect(iteratorTest.next()).to.be.equal(history.current.value);
      history.undo();
    }
  });

  it('Testing: redoableIterator()', function() {
    var iteratorTest, testBool;
    history.add(com1);
    history.add(com2);
    history.add(com3);
    history.undo();
    history.undo();
    history.undo();
    iteratorTest = history.redoableIterator();
    while(iteratorTest.hasNext()){
      history.redo();
      expect(iteratorTest.next()).to.be.equal(history.current.value);
      
    }
  });



});