// models/MatchRequest.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
// import Match from './Match'; // Importing Match model if needed
// import Team from './Team'; // Importing Team model if needed

class MatchRequest extends Model {
  public id!: string;
  public matchId!: string;
  public teamId!: string;
  public userId!: string;
  public status!: string;
  public deleted!: boolean;

    // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;

  static findById(matchId: string): Promise<MatchRequest | null> {
    return MatchRequest.findOne({ where: { matchId } });
  }

}

MatchRequest.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'team_id'
    },
    matchId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'match_id'
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_id'
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
    modelName: 'MatchRequest',
    tableName: 'match_requests', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

// Define associations if needed
// MatchRequest.belongsTo(Match, { foreignKey: 'matchId' });
// MatchRequest.belongsTo(Team, { foreignKey: 'requestingTeamId' });

export default MatchRequest;
