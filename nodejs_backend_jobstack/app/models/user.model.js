module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("UserTable", {
    
          userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          userFirstName: {
            type: Sequelize.STRING
          },
          userLastName: {
            type: Sequelize.STRING
          },
          school: {
            type: Sequelize.STRING
          },
          university: {
            type: Sequelize.STRING
          },
          dateOfBirth: {
            type: Sequelize.DATE
          },
          gender: {
            type: Sequelize.STRING
          },
          userEmail: {
            type: Sequelize.STRING
          },
          userPassword: {
            type: Sequelize.STRING
          },
          codingSkill: {
            type: Sequelize.TINYINT
          },
          languageSkill: {
            type: Sequelize.TINYINT
          },
          socialSkill: {
            type: Sequelize.TINYINT
          },
          programDevelopment: {
            type: Sequelize.TINYINT
          },
          degreeId: {
            type: Sequelize.TINYINT
          },
          frontEndDevelopment: {
            type: Sequelize.TINYINT
          },
          backEndDevelopment: {
            type: Sequelize.TINYINT
          },
          fullStack: {
            type: Sequelize.TINYINT
          },
          mobileDevelopment: {
            type: Sequelize.TINYINT
          },
          webDevelopment: {
            type: Sequelize.TINYINT
          },
          uiUx: {
            type: Sequelize.TINYINT
          },
  }, {freezeTableName: true, timestamps: false}
  );
  
  return User;
  
};
