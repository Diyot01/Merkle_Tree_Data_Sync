const crypto = require('crypto');

function hashData(data) {
    return crypto
        .createHash('sha256')
        .update(JSON.stringify(data))
        .digest('hex');
}


const user = {
    name: "Evra123",
    email: "evra@gmail.com"
};

console.log(hashData(user));