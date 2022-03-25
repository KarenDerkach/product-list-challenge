const { Model, DataTypes } = require("sequelize");

class Label extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        label: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: false,
      }
    );
  }

  static associate(models) {
    // se agrega una ForeingKey product_id a la tabla
    this.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  }
}

module.exports = Label;
