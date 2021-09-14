const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING(50), allowNull: false },
        address: { type: DataTypes.STRING(255), allowNull: false },
        phone: { type: DataTypes.STRING(13), allowNull: false },
        gender: {
            type: Sequelize.ENUM("laki-laki", "perempuan")
        },
        email: { type: DataTypes.STRING(255), allowNull: false },
        password: { type: DataTypes.STRING(255), allowNull: false }
    };

    // const options = {
    //     defaultScope: {
    //         // exclude hash by default
    //         attributes: { exclude: ['hash'] }
    //     },
    //     scopes: {
    //         // include hash with this scope
    //         withHash: { attributes: {}, }
    //     }
    // };

    return sequelize.define('User', attributes);
}