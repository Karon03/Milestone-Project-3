'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Account extends Model {}

    Account.init({
        account_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Account',
        tableName: 'accounts',
        timestamps: false
    })

    Account.associate = (models) => {
        Account.hasMany(models.Transaction, {
            foreignKey: 'userId',
            as: 'transactions'
        });
    }

    return Account
}

