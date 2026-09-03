const server = require('./app');
const connectDB = require('./config/db');

connectDB();   

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});