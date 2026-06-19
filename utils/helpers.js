/*
=================================================
helpers.js
Reusable utility functions
=================================================
*/

/*
Read incoming JSON body
Returns a Promise
*/
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};

module.exports = {
  getRequestBody
};