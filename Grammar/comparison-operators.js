const log = console.log;

log(0 == "0"); // Returns true   : value is equal
log(typeof 0 == "0"); // Returns false  : different type
log(0 == true); // Returns false  : 0 is false, false == true : false
log(0 == false); // Returns true   : 0 is false, false == false : true
log(Boolean("0")); // Returns true   : '0' is true(not empty string)
log("0" == true); // Returns false  : the value of '0' is 0(false), false == true : true
log("0" == false); // Returns true   : the value of '0' is 0(false), false == false : true
log("'0'" == false); // Returns false  : "'0'" is true(not empty string), true == false : false
log(0 === true); // Returns false  : 0 is not boolean
log(0 === false); // Returns false  : 0 is not boolean
log("0" === false); // Returns false  : '0' is not boolean
log("0" === true); // Returns false  : '0' is not boolean
log([] === false); // Returns false  : [] is not boolean
log(0 == "0"); // Returns true   : value is equal
log(0 == true); // Returns false  : 0 is false, false == true : false
log([] == true); // Returns false  : [] is false(null),false == true : false
log([] == false); // Returns true   : [] is false(null), false == false : true
log([] == 0); // Returns true   : [] is false(null), 0 is false, false == false : true
log([1] == true); // Returns true   : [1] is not null, so it's true, true == true : true
log([] == ""); // Returns true   : [] is false(null), '' is false, false == false : true
log("" == 0); // Returns true   : false == false : true
log(0 == []); // Returns true   : false == false(null) : true
log(typeof []); // Returns object
log([] == false); // Returns true   : false(null) == false : true
log("0" == []); // Returns false  : true == false(null) : falses
