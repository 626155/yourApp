const db = require('./db');


const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO login_master SET ?", newUser, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};


User.findByUsername = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM login_master WHERE username = ? AND password = ?';
    const values = [username, password];
    db.query(query, values, (err, result) => {
      if (err) {
        return reject(err);
      }
      const users = JSON.parse(JSON.stringify(result)); // Convert Query object to array of objects
      resolve(users);
    });
  });
};


User.checkUsernameAlreadyExist = (username) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM login_master WHERE username = ?';
    const values = [username];
    db.query(query, values, (err, result) => {
      if (err) {
        return reject(err);
      }
      const users = JSON.parse(JSON.stringify(result)); // Convert Query object to array of objects
      resolve(users);
    });
  });
};


User.findById = (id) => {
  return db.query("SELECT * FROM users WHERE id = ?", id);
};


User.getAll = () => {
  return db.query("SELECT * FROM users");
};


User.updateById = (id, user) => {
  return db.query("UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?", [user.username, user.email, user.password, id]);
};


User.deleteById = (id) => {
  return db.query("DELETE FROM users WHERE id = ?", id);
};

module.exports = User;
