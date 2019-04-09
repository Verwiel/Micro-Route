const { send } = require('micro') //Import Micro
const { router, get, post, del, put } = require('microrouter') //Import Micro-Router

// const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`)

// const notfound = (req, res) => send(res, 404, 'Not found route')

// module.exports = router(get('/hello', hello), get('/*', notfound))


//--------------------------------------------------

// function randomNumber(precision) {
//     return Math.floor(Math.random() * precision);
// }


// module.exports = (req, res) => {
//     //odd = heads, even = tails
//   const coin = (randomNumber(1000) % 2)
//     ? 'Heads' : 'Tails';

//   return {
//     data: coin 
//   };
// }

//--------------------------------------------------

module.exports = router (
  get('/', (req, res) => 'hello world'),
  get('/animals', (req, res) => ["Cat", "Dog", "Goat", "Cow", "Whale"])
)