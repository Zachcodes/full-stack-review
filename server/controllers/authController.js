const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
  async login(req, res) {
    let { username, password } = req.body;
    const db = req.app.get('db');
    let [existingUser] = await db.get_user_by_username(username);
    if (!existingUser) return res.status(401).send('Username not found');
    let hash = await bcrypt.hash(password, saltRounds);
    let result = await bcrypt.compare(password, hash);
    if (result) {
      req.session.user = { username: existingUser.username, loggedIn: true };
      res.send(req.session.user);
    } else res.status(401).send('Username or password incorrect');
  },
  async register(req, res) {
    let { username, password } = req.body;
    const db = req.app.get('db');
    let [existingUser] = await db.get_user_by_username(username);
    if (existingUser) return res.status(200).send('Username exists already');
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    let [user] = await db.create_user([username, hash]);
    req.session.user = { username: user.username, loggedIn: true };
    res.send(req.session.user);
  }
};
