// say what your models are require all models at top and export all models at bottom

// define relationships between models

// 2 models blogposts belong to user 

// one to many user to blog posts define relationsships both ways

// user has many blog posts and blog posts belong to users look into the sequlize doc and in orm week for help w this


const User = require('./User');
const BlogPost = require('./BlogPost');


User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});




module.exports = { User, BlogPost };
