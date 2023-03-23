///// Sign Up flow.................................

const stripe = require("stripe")(process.env.STRIPE_SECRET);

//Then create a stripe customer
 const customer = await stripe.customers.create({
        name: userNew.firstname,
        email: userNew.email,
      });

//Then update the customer with the new stripe id
let updatedUser = await SignUp.update(
        {
          customer_stripe_id: customer.id,
        },
        {
          where: { id: Number(userNew.dataValues.id) },
          returning: true,
        }
      );

//Then return the updated token
const token = jwt.sign(
        {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          customer_stripe_id: user.customer_stripe_id,
        },
        process.env.jwtPrivateKey
      );

//Login Flow....................
