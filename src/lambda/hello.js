exports.handler = function(event, context, callback) {
  console.log("log from hello");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
