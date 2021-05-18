const { Model, DataTypes } = require('sequilize');

class User extends Model {
    //User inherits everything that model implements 

    // Add additional User specific methods in here
    /*
    ............
    */
}

User.init(
// how you initialize your model
  {  id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },

    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },

    },
  },
  {
    hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
  }
);

module.exports = User;