const router = require('express').Router();
const User = require('../models/User');


var hbsContent = {userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World"}; 

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    id: 1,
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
    has_nuts: false
  },
  {
    id: 2,
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
    has_nuts: true
  },
  {
    id: 3,
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
    has_nuts: false
  },
  {
    id: 4,
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
    has_nuts: false
  },
  {
    id: 5,
    dish_name: 'Pork Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce',
    has_nuts: true
  },
  {
    id: 6,
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
    has_nuts: false
  },
  {
    id: 7,
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegitable curry dish with basmati rice',
    has_nuts: false
  }
];

router.get('/', async (req, res) => {
  res.render('doctor-appointments', { dishes });
});

router.get('/user/', async (req, res) => {
  res.render('user',hbsContent);
});

// CREATE a book
router.post('/user', (req, res) => {
  User.create({
    username: req.body.username,
    // //email: req.body.email,
    password: req.body.password
    // username: 'rekha',
    // password: 'rekha'
})
.then(user => {
    req.session.user = user.dataValues;
    // res.redirect('/dashboard');
})
.catch(error => {
  console.log("Data not stored in the database");
    // res.redirect('/user');
});
});

// get one dish
router.get('/dish/:num', async (req, res) => {
  return res.render('dish', dishes[req.params.num - 1]);
});


module.exports = router;
