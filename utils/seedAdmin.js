const User = require('../models/userModel');
const hashData = require('./hash');

async function seedAdmin() {
    try {
        const existingAdmin = await User.findOne({ email: 'admin@demo.com' });

        if (!existingAdmin) {
            const lastUser = await User.findOne().sort({ userId: -1 });
            const newId = lastUser ? lastUser.userId + 1 : 1;

            const adminData = { name: 'Admin', email: 'admin@demo.com' };

            await User.create({
                userId: newId,
                name: 'Admin',
                email: 'admin@demo.com',
                password: 'admin123',
                hash: hashData(adminData)
            });

            console.log('Demo admin user created: admin@demo.com / admin123');
        } else {
            console.log('Demo admin user already exists');
        }
    } catch (err) {
        console.error('Error seeding admin user:', err.message);
    }
}

module.exports = seedAdmin;