const stripe = require("stripe")(process.env.STRIPE_SECRET);

//Then create a stripe customer
 const customer = await stripe.customers.create({
        name: userNew.firstname,
        email: userNew.email,
      });