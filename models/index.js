const User = require('./User');
const Posts = require('./Blog');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Posts };

