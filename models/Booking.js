const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Booking extends Model {
    // set up method to run on instance data (per user) to check password
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

// define table columns and configuration
Booking.init(
    {
        // define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // define an appointment ID column
        appointmentid: {
          type: DataTypes.STRING,
          allowNull: false
        },        
        // define a username column
        patientid: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        doctorid: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // define a date column
        date: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // define a time column
        time: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // define a symptoms column
        symptoms: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        // checkedIn:{
        //   type: DataTypes.STRING,
        //   allowNull: true
        // }

      },
  {
      // hooks: {
      //   // set up beforeCreate lifecycle "hook" functionality
      //   async beforeCreate(newUserData) {
      //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //       return newUserData;
      //   },
      //     // set up beforeUpdate lifecycle "hook" functionality
      //   async beforeUpdate(updatedUserData) {
      //       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      //       return updatedUserData;
      //   }
      // },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking'
  }
);

module.exports = Booking;