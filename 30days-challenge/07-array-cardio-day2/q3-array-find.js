// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comments = require("./data-comments");

// Answer
const find = comments.find((comment) => comment.id === 823423);
console.log(find);

// Solution (1)
const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment);

// Solution (2)
const comment_2 = comments.find((comment) => comment.id === 823423);
console.log(comment_2);
