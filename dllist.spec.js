/*
 * history.spec.js
 *
 * Test file for your history class
 */
var expect, DLList, CmdHistory;

expect = require('./chai.js').expect;

DLList = require('./dllist.js');
CmdHistory = require('./history.js');

// ADD YOUR TESTS HERE
describe("Testing dllist.js", function(){
	var val1 = 1, val2 = 2, val3 = 3, val4 = 4;
	beforeEach(function() {
        // This ensures every test sees a fresh empty stack
        list = DLList.new();
    });

	it("Testing: isEmpty()", function(){
		expect(list.isEmpty()).to.be.equal(true);
		list.push(val1);
		expect(list.isEmpty()).to.be.equal(false);
	});

	it("Testing: length()", function(){
		expect(list.length()).to.be.equal(0);
		list.push(val1);
		list.push(val2);
		expect(list.length()).to.be.equal(2);
	});

	it("Testing: first()", function(){
		expect(list.first).to.throw(Error);
	});

	it("Testing: last()", function(){
		list.push(val1);
		expect(list.last()).to.be.equal(list.sentinel.prev);
		list.push(val2);
		expect(list.last()).to.be.equal(list.sentinel.prev);
	});

	it("Testing: insertAt()", function(){
		list.push(val1);
		list.insertAt(100, list.last());
		expect(list.last().value).to.be.equal(100);
		list.insertAt(100, list.first());
		expect(list.last().prev.value).to.be.equal(100);
	});

	it("Testing: unshift()", function(){
		list.push(val1);
		list.push(val2);
		list.unshift(val3);
		expect(list.first().value).to.be.equal(val3);
	});

	it("Testing: push()", function(){
		list.push(val1);
		list.push(val2);
		expect(list.first().value).to.be.equal(val1);
		expect(list.last().value).to.be.equal(val2);
		list.push(val3);
		expect(list.first().value).to.be.equal(val1);
		expect(list.last().value).to.be.equal(val3);

	});

	it("Testing: endAt()", function(){
		list.push(val1);
		list.push(val2);
		list.push(val3);
		list.endAt(list.first());
		expect(list.length()).to.be.equal(1);
		expect(list.first().value).to.be.equal(val1);
		list.push(val2);
		list.push(val3);
		list.endAt(list.first().next);
		expect(list.length()).to.be.equal(2);
		expect(list.last().value).to.be.equal(val2);

	});

	it("Testing: remove()", function(){
		var val;
		list.push(val1);
		list.push(val2);
		list.push(val3);
		val = list.remove(list.first().next);
		expect(list.length()).to.be.equal(2);
		expect(list.first().next.value).to.be.equal(val3);
		expect(val).to.be.equal(val2);
	});

	it("Testing: pop()", function(){
		var val;
		list.push(val1);
		list.push(val2);
		list.push(val3);
		val = list.pop();
		expect(list.length()).to.be.equal(2);
		expect(list.last().value).to.be.equal(val2);
		expect(val).to.be.equal(val3);
	});

	it("Testing: shift()", function(){
		expect(list.shift).to.throw(Error);
		list.push(val1);
		list.push(val2);
		list.push(val3);
		expect(list.shift()).to.be.equal(val1);
		expect(list.shift()).to.be.equal(val2);
		expect(list.shift()).to.be.equal(val3);
	});

	it("Testing: isFirst()", function(){
		expect(list.isFirst(val1)).to.be.equal(false);
		list.push(val1);
		list.push(val2);
		list.push(val3);
		expect(list.isFirst(list.sentinel.next)).to.be.equal(true);
		expect(list.isFirst(list.sentinel.next.next)).to.be.equal(false);
	});

	it("Testing: isLast()", function(){
		expect(list.isLast(val3)).to.be.equal(false);
		list.push(val1);
		list.push(val2);
		list.push(val3);
		expect(list.isLast(list.sentinel.prev)).to.be.equal(true);
		expect(list.isLast(list.sentinel.prev.prev)).to.be.equal(false);
	});

	it("Testing: iterator()", function(){
		//expect().to.not...
	});

	it("Testing: forEach()", function(){
		//expect().to.not...
	});

	it("Testing: toArray()", function(){
		//expect().to.not...
	});

	it("Testing: iterateFrom()", function(){
		//expect().to.not...
	});

	it("Testing: reverseIterateFrom()", function(){
		//expect().to.not...
	});
});