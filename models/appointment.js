// module.exports = function (sequelize, DataTypes){
//     const Appointment = sequelize.define("appointment", {
//         type: DataTypes.STRING,
//         data:DataTypes.DataTypes
//     })
// }

// Appointment.doctor = models => {
//     Appointment.belongsTo(models.doctors, {
//         foreignKey: {
//             field: "doctor_name"
//         },
//         type: DataTypes.STRING
//     })
// }

// Appointment.associate = models => {
//     Appointment.belongsTo(models.patient,{
//         foreignKey: {
//             field: "patient_id"
//         }
//     })
// }

// return Appointment;