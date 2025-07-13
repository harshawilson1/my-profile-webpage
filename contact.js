// netlify/functions/contact.js

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  // Basic validation example
  if (!data.name || !data.email || !data.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing fields' }),
    };
  }

  // Here you can do things like send email, save data, etc.
  // For demo, just respond with success:

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully!' }),
  };
};
