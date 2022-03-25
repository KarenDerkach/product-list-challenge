const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  }

  static associate(models) {
    // se agrega una ForeingKey categoriId a la tabla Donation
    this.hasMany(models.Label, {
      as: "label",
      foreignKey: "product_id",
    });
  }
}

module.exports = Product;
