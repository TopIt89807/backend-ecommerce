/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authItem', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'name'
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'type'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    ruleName: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'auth_rule',
        key: 'name'
      },
      field: 'rule_name'
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'data'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at',
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
      defaultValue: new Date()
    }
  }, {
    tableName: 'auth_item'
  });
};
