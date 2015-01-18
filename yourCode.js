/*
 * Name 1: YourNameHere
 * Name 2: YourNameHere
 */

/*
 * BINARY SEARCH
 */
var binarySearch = function binarySearch(arr, val) {
   var lo, hi, mid;

   // You may need to add things here
   lo = 0;
   hi = arr.length-1;
   mid = Math.floor(hi/2);
   if(hi < 0 || hi === undefined){
   	  return false;
   }
   while ((lo <= hi)) {     // You should change this with a proper condition
   	  mid = Math.floor((hi+lo)/2);
   	  if(mid === hi || mid ===lo){
   	  	return (arr[lo] === val || arr[hi] === val);
   	  }
   	  if(arr[mid] === val){
   		return true;
   	  }
      if(arr[mid] < val){
      	lo = mid;
      }else{
      	hi = mid;
      }
   }
   // You may need to add things here
   return false;
};

/*
 * COUNTING TAGS
 */
var countTags = function countTags(items) {
   // Declare your local variables here. One was done for you.
   var tagCounts = 0;

   // Add your code here
   items.forEach(function(item, index){

   });

   return tagCounts;
};

/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {

};
