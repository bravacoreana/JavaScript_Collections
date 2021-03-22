// * 39. Introduction to Array

// > two ways to create array
// > [1]
// const friends = ["Mike", "Steven", "Peter"]; // > more common way

// > [2]
// const years = new Array(1991, 1994, 2008, 2021);
// console.log(years.length);
// console.log(years[years.length - 1]); // > Last element

// > Change elements of array
// friends[2] = "Jay";
// years[2] = "1923";
// console.log(friends); // > The value CHANGES
// console.log(years); // > The value appended

// > Various types of elements can be in array
// const firstName = "Jonas";
// const jonas = [firstName, "German", 2037 - 2000, friends];
// console.log(jonas);

// > Calculate with elements of Array
// const calcAge = (birthYear) => 2037 - birthYear;
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);
