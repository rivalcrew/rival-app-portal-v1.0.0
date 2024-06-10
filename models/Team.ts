// models/Team.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Team extends Model {
  public id!: number;
  public name!: string;
  public image!: string;
  public foundingDate!: Date;
  public status!: string;
  public levelId!: string;
  public userId!: string;
  public deleted!: boolean;

   // Timestamps
   public createdAt!: Date;
   public updatedAt!: Date;
}

Team.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    foundingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'founding_date'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'level_id'
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'user_id'
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Team',
    tableName: 'teams', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Team;
