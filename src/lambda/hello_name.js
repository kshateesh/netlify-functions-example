exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";
  console.log("log from hello name");
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
