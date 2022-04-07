// module.exports = function(sequelize, DataTypes) {
//     var Prescription = sequelize.define("prescriptions", {
//         med_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
            
//         },
//         patient_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         dose: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
            
//         },
        
//         },
//         {
//         expiration_date: {
//             type: DataTypes.STRING,
//             allowNull: false,
            
//         },
//     });

//     Prescription.doctor = (models) => {
//         Prescription.hasMany(models.patient);
//     }
//     return Prescription;
// };