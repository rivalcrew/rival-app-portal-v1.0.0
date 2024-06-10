import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Venue extends Model {
  public id!: string;
  public name!: string;
  public latitude!: number;
  public longitude!: number;
  public address!: string;
  public status!: string;
  public deleted!: boolean;

  // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;
}

Venue.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Venue',
    tableName: 'venues', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Venue;
