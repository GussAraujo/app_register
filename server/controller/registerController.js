const db = require('../db/db').pool;

var registerController = {
  register: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
    (err, result) => {
      if(err){
        res.send(err);
      }
      if(result.length == 0) {
        db.query("INSERT INTO usuarios (email, password) VALUES(?, ?)",
        [email, password], (err, result) => {
          if(err){
            res.send(err);
          }

          res.send({ msg: "Cadastrado com sucesso!" });
        })
      } else {
        res.send({ msg: "Usuário já cadastrado! "})
      }
    });
  },
};

module.exports = registerController;