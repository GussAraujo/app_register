const db = require('../db/db').pool;

var loginController = {
  login: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?",
    [email, password], (err, result) => {
      if(err) {
        res.send(err);
      }
      if(result.length > 0){
        res.send({msg: "Usuário logado com sucesso!"});
      } else {
        res.send({msg: "Conta não encontrada!"});
      }
    })
  }
}

module.exports = loginController;