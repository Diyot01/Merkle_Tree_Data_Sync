const server = require('./app');
const connectDB = require('./config/db');
const seedAdmin = require('./utils/seedAdmin');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    seedAdmin();
});

server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});