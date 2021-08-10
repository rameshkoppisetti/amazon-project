const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51JIq3XSBSwM9xOe7MX9Px9PTQgHu7EXFIhy4VJ8D9dZdq0ASNBAMtfAROQn0z48YBt8b4WJKcHJdWtVPMyNZz45a00d2Q2esfG"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async(request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);