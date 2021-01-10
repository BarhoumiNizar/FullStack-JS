module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('personnes', {
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        }
    });

    return Customer;
}