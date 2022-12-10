// Model (usually gets data from database, in this case data is hard coded)
"use strict";
const product = [
  {
    product_id: "1",
    product_name: "Frank",
    product_category: "Kitchen applience",
    product_details: "good condition",
    product_media: "http://placekitten.com/400/300",
  },
  {
    product_id: "2",
    product_name: "David",
    product_category: "Home applience",
    product_details: "little scratch",
    product_media: "http://placekitten.com/400/302",
  },
];

module.exports = {
  product,
};
