// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const comments = require("./data-comments");

const findIndex = comments.findIndex((comment) => comment.id === 823423);
// return the index of element
// comments.splice(findIndex, 1);

// Solution (1)
const index = comments.findIndex((comment) => comment.id === 823423);
//comment.splice(index,1)

// Solution (2)
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log(newComments);
