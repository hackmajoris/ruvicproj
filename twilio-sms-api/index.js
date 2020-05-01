const express = require("express");
const app = express();

app.get("/sendSMS", function (req, res) {
  var accountSid = "AC1b7ba37757a90a53808cb1f07d2792b5"; // Your Account SID from www.twilio.com/console
  var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

  var twilio = require("twilio");
  var client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: "Hello from Node",
      to: "phone_number", // Text this number
      from: "+14342265201", // From a valid Twilio number
    })
    .then((message) => res.send(`The message with id: ${message} was sent!`));
});

app.listen(3000);
