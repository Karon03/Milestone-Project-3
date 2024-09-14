'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {}

    Transaction.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'accounts',
              key: 'account_id'
            }
        },
        type: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'Transaction',
        tableName: 'transactions',
        timestamps: true
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.Account, {
            foreignKey: 'userId',
            as: 'account',
            onDelete: 'CASCADE'  // Automatically delete transactions when the associated account is deleted
        });
    };

    return Transaction;
};
