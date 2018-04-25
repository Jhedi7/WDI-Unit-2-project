const db     = require('../config/connection');
const bcrypt = require('bcrypt');
//const User     = {};

findUser = (userName) =>{
    const queryPromise = db.one(`
        SELECT *
        FROM users
        WHERE  userName = $1
        `, userName)
    return queryPromise;
};

createUser = (user) => {
    const queryPromise = db.one(`
    INSERT INTO users (userName, email, password_digest)
    VALUES ($/userName/, $/email/, $/password_digest/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

module.exports = {
    findUser,
    createUser
}


