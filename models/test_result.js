// module.exports = function(sequelize,DataTypes){
//     var TestResult = sequelize.define("test_results",{
//         test_ID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     },
//     {
//     patientID: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     test_result: {
//         type: DataTypes.String,
//         allowNull: false 
//     },
//     Illness: {
//         type: DataTypes.String,
//         allowNull: false
//     },
//     doctor_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
     
// });

// TestResult.associate = (models)=> {
//     TestResult.belongsTo(models.patient,{
//         foreignKey: {
//             allowNull: false,
//         }
//     })
// }

// return TestResult; 