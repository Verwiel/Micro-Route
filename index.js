const { send } = require('micro') //Import Micro
const { router, get, post, del, put } = require('microrouter') //Import Micro-Router


module.exports = router (
  get('/', (req, res) => 'hello world'),
  get('/animals', (req, res) => ["Cat", "Dog", "Goat", "Cow", "Whale"])
)