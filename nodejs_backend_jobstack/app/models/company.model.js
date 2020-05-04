module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("CompanyTable", {
        companyId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        companyName: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        }
    }, { freezeTableName: true, timestamps: false }
    );
    return Company;
}