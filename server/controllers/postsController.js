module.exports = {
  async getPosts(req, res) {
    let { userId } = req.params;
    console.log(userId);
    const db = req.app.get('db');
    let posts = await db.get_posts_by_user(+userId);
    res.send(posts);
  }
};
