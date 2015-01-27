/*
 * Name 1: Felipe Carmo
 * Name 2: Filipe Oliveira
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o;
   // Use this object to store the key-value pairs:
   var storedPairs;

   // Add initialization code here
   storedPairs = {};
   var o = {};
   // Add local functions here
   function varError(x){
      return (x === undefined || x === null);
   };

   o = {

      has : function has(key){
         if(varError(key)){
            throw new Error('at makeMap.has; Invalid argument!'); 
         }
         return storedPairs.hasOwnProperty(key);
      },


      lookup : function lookup(key){
         if(varError(key)){
            throw new Error('at makeMap.lookup; Invalid argument!'); 
         }
         if (storedPairs.hasOwnProperty(key)) {
             return storedPairs[key];
         } else {
            throw new Error('at makeMap.lookup; Key (' + key + ') doesn\'t exists!');
         }
      },


      add : function add(key, value){
         if(varError(key)||varError(value)){
            throw new Error('at makeMap.add; Invalid argument(s)!'); 
         }
         if (storedPairs.hasOwnProperty(key)) {
             throw new Error('at makeMap.add; Key (' + key + ') already exists!');
         } else {
            storedPairs[key] = value;
         }
      },

      update : function update(key,value){
         if(varError(key)||varError(value)){
            throw new Error('at makeMap.update; Invalid argument(s)!'); 
         }
         if (!storedPairs.hasOwnProperty(key)) {
             throw new Error('at makeMap.update; Key (' + key + ') doesn\'t exist!');
         } else {
            storedPairs[key] = value;
            return storedPairs;
         }
      },

      remove : function remove(key){
         if(varError(key)){
            throw new Error('at makeMap.delete; Invalid argument!'); 
         }
         if (!storedPairs.hasOwnProperty(key)) {
             throw new Error('at makeMap.delete; Key (' + key + ') doesn\'t exist!');
         } else {
            delete storedPairs[key];
         }
      }
   };
   // Prepare the object o before returning it
   return o;
}


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      makeMap: makeMap
   };
} catch (e) {}
