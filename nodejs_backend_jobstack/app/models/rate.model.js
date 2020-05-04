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
          review: {
            type: Sequelize.STRING
          }
  }, {freezeTableName: true, timestamps: false}
  );
  
  return Rating;
};
