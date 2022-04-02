module.exports = function(sequelize, DataTypes) {
    var Prescription = sequelize.define("prescriptions", {
        med_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dose: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },
        expiration_date: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
    });

    Prescription.associate = (models) => {
        Prescription.hasMany(models.patient);
    }
    return Prescription;
};