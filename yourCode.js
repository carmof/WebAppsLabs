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
   var tagCounts = {};
   var i = 0;
   var l = 0;
   // Add your code here
   items.forEach(function(item, index){//goes through objects
   		if(Array.isArray(item.tags)){
   			l = item.tags.length;
   			for(i=0; i<l; i++){
   				if(tagCounts.hasOwnProperty(item.tags[i])){
   					tagCounts[item.tags[i]] ++;
   					console.log(tagCounts[item.tags[i]]);
   				}else{
   					tagCounts[item.tags[i]] = 1;
   				}
   			}
   		}
   });

   return tagCounts;
};

/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {
	var stim = str.match(/#[a-zA-Z]+/g);
	var result =[]
	var i = 0;
	if(stim === null || stim === undefined){
		return [];
	}
	stim = stim.filter(function(e, p){
		return stim.indexOf(e) === p;
	});
	stim.forEach(function(item, index){
		stim[index] = item.substr(1, item.length);
	});
	return stim;
};
