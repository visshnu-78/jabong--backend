var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const handleSignIn = (req, res, model) => {
    const{email, password} = req.body
    model.user.findOne({
        where: {'email': email}
    }
    ).then(data=> {
        const isValid = bcrypt.compareSync(password, data.password)
       if(isValid) {
        var token = jwt.sign({role: data.role, id: data.id}, 'user',{expiresIn:'5h'})
           res.json({"token":token, "role":data.role})
       }
       else {
        res.status(400).json('wrong credentials')
       }    
    })
}
module.exports = {
    handleSignIn: handleSignIn
}