module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("UserCompanyTable", {
        companyId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        userId: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    }, { freezeTableName: true, timestamps: false }
    );
    return Company;
}