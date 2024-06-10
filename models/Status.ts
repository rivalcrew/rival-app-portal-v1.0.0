// models/Level.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Status extends Model {
  public id!: string;
  public type!: string;
  public description!: string;

  // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;

  static findByType(type: string): Promise<Status | null> {
    return Status.findOne({ where: { type } });
  }
}



Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Level',
    tableName: 'status_enum', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Status;
