try {
   var chai = require('./../chai.js');
   var expect = chai.expect;
   var methods = require('./mapCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

function randomString(len) {
   var arr = [], caseRange, i;
   if (len == null) { len = 5; }
   for (i = 0; i < len; i += 1) {
      caseRange = [65, 97][Math.floor(Math.random() * 2)];
      arr.push(Math.floor(Math.random() * 26) + caseRange);
   }
   return String.fromCharCode.apply(String, arr);
}
// DO NOT CHANGE ANYTHING ABOVE THIS LINE

// Add your tests below

describe('Tests for function makeMap', function() {
   // Add more "it" sections below
   it('defines a variable makeMap', function() {
      expect(function() { makeMap; }).to.not.throw(Error);
   });
   it('actually defines a function makeMap', function() {
    expect(makeMap).to.be.a('function');
   });
   
});

describe('Your makeMap function', function() {
   var map = makeMap();
   it('returns an object', function() {
      expect(map).to.be.a('object');
   });
   
   it('returns an object with has, lookup, add, update, remove', function() {
       ['has', 'lookup', 'add', 'update', 'remove'].forEach(function(key) {
           expect(map[key]).to.be.a('function');
       });
   });
});

describe('Map methods:', function() {
    var map;
    beforeEach(function() {
        // This ensures every test sees a fresh empty stack
        map = makeMap();
    });

    // HAS


    it('HAS - returns false for a new map', function() {
        expect(map.has(randomString())).to.equal(false);
    });

    it('HAS - returns false for element that is not there and map is not empty', function() {
      var key = randomString();
      var ele = randomString();
      var test = randomString();
      map.add(key, ele);
      while (test === key){
         test = randomString();
      }
      expect(map.has(test)).to.equal(false);
    });

    it('HAS - returns true for element that is in the map', function() {
      var key = randomString();
      var ele = randomString();
      map.add(key, ele);
      expect(map.has(key)).to.equal(true);
    });

    it('HAS - throw error if key undefined', function() {
        expect(function() { map.has(); }).to.throw(Error);
    });

    // LOOKUP

    it('LOOKUP - throw error for a new map', function() {
      var key = randomString();
      expect(function() { map.lookup(key); }).to.throw(Error);
    });

    it('LOOKUP - throw error for element that is not there, but map is not empty', function() {
      var key = randomString();
      var ele = randomString();
      var test = randomString();
      map.add(key, ele);
      while (test === key){
         test = randomString();
      }
      expect(function(){ map.lookup(test);} ).to.throw(Error);
    });

    it('LOOKUP - returns value of the element that is in the map', function() {
      var key = randomString();
      var ele = randomString();
      map.add(key, ele);
      expect(map.lookup(key)).to.equal(ele);
    });

    it('LOOKUP - throw error if key undefined', function() {
        expect(function() { map.lookup(); }).to.throw(Error);
    });

    // ADD

    it('ADD - throw error if \'key\' undefined', function() {
        expect(function() { map.add( undefined, "11"); }).to.throw(Error);
    });

    it('ADD - throw error if \'value\' undefined', function() {
        expect(function() { map.add( "11", undefined); }).to.throw(Error);
    });

    it('ADD - return object when add', function() {
      var key = randomString();
      var ele = randomString();
      var obj = map.add(key, ele);
      expect(map).to.equal(obj);
    });

    it('ADD - variable added is in the map', function() {
      var key = randomString();
      var ele = randomString();
      map.add(key, ele);
      expect(map.has(key)).to.equal(true);
    });  

    it('ADD - throw error if \'key\' already exists', function() {
      expect(function() { 
         var key = randomString();
         var ele = randomString();
         map.add(key, ele);
         map.add(key, ele);
      }).to.throw(Error);
    });
    // UPDATE

   it('UPDATE - throw error if \'key\' undefined', function() {
      expect(function() { map.update( undefined, "11"); }).to.throw(Error);
   });

   it('UPDATE - throw error if \'value\' undefined', function() {
      expect(function() { map.update( "11", undefined); }).to.throw(Error);
   });

   it('UPDATE - return object when update', function() {
      var key = randomString();
      var ele = randomString();
      map.add(key, ele);
      var obj = map.update(key, randomString());
      expect(map).to.equal(obj);
    });

   it('UPDATE - throw error for \'key\' that does not exist', function() {
      var key = randomString();
      var ele = randomString();
      var test = randomString();
      map.add(key, ele);
      while (test === key){
         test = randomString();
      }
      expect(function(){ map.update(test);} ).to.throw(Error);
    });
   it('UPDATE - variable was updated', function() {
      var key = randomString();
      var ele = randomString();
      var comp;
      map.add(key, ele);
      comp= map.lookup(key);

      expect(comp).to.equal(ele);
    });  
   // REMOVE

   it('REMOVE - throw error if \'key\' undefined', function() {
      expect(function() { map.remove( undefined, "11"); }).to.throw(Error);
   });
   it('REMOVE - the pair was removed from key', function() {
      var key = randomString();
      var ele = randomString();
      var test = randomString();
      map.add(key, ele);
      map.remove(key);
      expect(map.has(key)).to.equal(false);
      
   });
   it('REMOVE - throw error for \'key\' that does not exist', function() {
      var key = randomString();
      var ele = randomString();
      var test = randomString();
      map.add(key, ele);
      while (test === key){
         test = randomString();
      }
      expect(function(){ map.remove(test);} ).to.throw(Error);
    });

});

