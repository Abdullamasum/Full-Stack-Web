// Model (usually gets data from database, in this case data is hard coded)
"use strict";
const user = [
  {
    id: "1",
    name: "Frank",
    age: "6",
    weight: "5",
    owner: "1",
    filename: "http://placekitten.com/400/300",
  },
  {
    id: "2",
    name: "James",
    age: "4",
    weight: "11",
    owner: "2",
    filename: "http://placekitten.com/400/302",
  },
];

module.exports = {
  user,
};
