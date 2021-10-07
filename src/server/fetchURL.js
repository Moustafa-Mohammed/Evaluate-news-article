const fetch = require("node-fetch");
const validator = require("validator");
let inputVal = "";

const fetchURL = async (req, res) => {
  if (validator.isURL(req.body.input)) {
    inputVal = "url";
  }

  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${inputVal}=${req.body.input}`
  );
  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = fetchURL;
