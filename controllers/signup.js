var bcrypt=require('bcryptjs')

const signup = (req, res, model) => {
    console.log(req)
    const { name, username, email, password, role} = req.body;
    var hash = bcrypt.hashSync(password, 10)
    model.user.create({
        name: name,
        username: username,
        email: email,
        password: hash,
        role: role
    }).then(res.json("Success"))
    .catch(err => res.json(err))
}
module.exports = {
    signup: signup
};
  