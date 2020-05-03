module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define("RatingsTable", {
      
            userId: {
              type: Sequelize.INTEGER,
              primaryKey: true,
            },
            companyId: {
              type: Sequelize.STRING,
              primaryKey: true,
            },
            dateRated: {
              type: Sequelize.STRING,
              primaryKey: true,
            },
            rating: {
              type: Sequelize.DOUBLE
            },
            good: {
              type: Sequelize.TINYINT
            },
            average: {
                type: Sequelize.TINYINT
            },
            bad: {
                type: Sequelize.TINYINT
            },
    }, {freezeTableName: true, timestamps: false}
    );
    
    return Rating;
  };
  