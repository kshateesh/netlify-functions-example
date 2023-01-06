exports.handler = function(event, context, callback) {
  console.log("log from user");
  callback(null, {
    statusCode: 200,
    body: "Hello, User"
  });
};
