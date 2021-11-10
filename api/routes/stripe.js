const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Ju3YWHOuog4jpqw14EcJsa1OMARgnsbIj3wddzAYVYP3IpUUGMfA76hMqvVjbhk5fipJcp4uAakjNfGoBQQAKg3004BRC4BZE");

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;