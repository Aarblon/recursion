// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringified = "";
  var single = '"';
  if(typeof obj === 'string') {
    stringified += single + obj + single;
  } else if(typeof obj === 'number') {
  	stringified += String(obj);
  } else if(typeof obj === 'boolean') {
  	stringified += String(obj);
  } else if(obj === null) {
  	stringified += String(obj);
  } else if(Array.isArray(obj)) {
  	if(obj.length === 0) {
      stringified += "[]";
    } else if(obj.length === 1) {
      return "[" + stringifyJSON(obj[0]) + "]";
    } else {
      for(var i = 0; i < obj.length; i++) {
        if(i === 0) {
      	  stringified += "[";
      	  stringified += stringifyJSON(obj[i]);
      	  stringified += ",";
        } else if(i === obj.length - 1) {
      	  stringified += stringifyJSON(obj[i]);
      	  stringified += "]";
        } else {
      	  stringified += stringifyJSON(obj[i]);
      	  stringified += ",";
        }
  	  }
  	}
  }  else {
  	var keys = _.keys(obj);
    stringified += "{";
      for(var prop in obj) {
      	if(typeof obj[prop] === 'function' || obj[prop] === undefined) {
       	} else if(prop === keys[keys.length - 1]) {
      	  stringified += stringifyJSON(prop);
          stringified += ":";
          stringified += stringifyJSON(obj[prop]);
        } else {
          stringified += stringifyJSON(prop);
          stringified += ":";
          stringified += stringifyJSON(obj[prop]);
          stringified += ",";
        }
      }
    stringified += "}";
  }
  
  return stringified;
};
