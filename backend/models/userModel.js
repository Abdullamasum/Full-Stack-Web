// Model (usually gets data from database, in this case data is hard coded)
"use strict";
const user = [
  {
    email: "someone@example.com",
    first_name: "James",
    password: "1234",
    phone: "1345665",
    street: "Juustinentie",
    postal_code: "00410",
    city: "Helsinki",
    country: "suomi",
  },
  {
    email: "someone1@example.com",
    first_name: "Mac",
    password: "123467",
    phone: "134566577",
    street: "JuustinentiVijelentie",
    postal_code: "00430",
    city: "Helsinki",
    country: "suomi",
  },
];

module.exports = {
  user,
};
