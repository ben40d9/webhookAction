require("dotenv").config();

const axios = require("axios").default;

const UpdatedProductEvent = {
  type: "product-updated",
  timestamp: "12345",
  meta: ["some", "tags"],
  data: {
    before: {
      //updated products name
      name: "thing",
      size: "Small",
      available: 2,
    },

    after: {
      name: "poop",
      size: "Small",
      available: 2,
    },
  },
};

axios
  .post("http://localhost:8081/updatedProduct", {
    ...UpdatedProductEvent,
  })
  .then((r) => {
    console.log(r.data);
  });
