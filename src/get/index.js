exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));
  console.log("hey there");
  return { status: 200, body: "hello" };
};
