// models/Match.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
// import Team from './Team'; // Importing Team model if needed
// import Venue from './Venue'; // Importing Venue model if needed

class Match extends Model {
  public id!: string;
  public startOn!: Date;
  public expiredOn!: Date;
  public timeStart!: string;
  public timeEnd!: string;
  public status!: string;
  public hostTeamId!: string;
  public guestTeamId!: string;
  public venueId!: string;
  public userId!: string;

  // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;

  // Define associations if needed
//   public hostTeam?: Team;
//   public guestTeam?: Team;
//   public venue?: Venue;
  static findById(id: string): Promise<Match | null> {
    return Match.findOne({ where: { id } });
  }

  static findAllByUserId(id: string): Promise<Match[] | null> {
    return Match.findAll({ where: { id } });
  }
}

Match.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    startOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_on'
    },
    expiredOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'expired_on'
    },
    timeStart: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'time_start'
    },
    timeEnd: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'time_end'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostTeamId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'host_team_id'
    },
    guestTeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'guest_team_id'
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'venue_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'user_id'
    }
  },
  {
    sequelize,
    modelName: 'Match',
    tableName: 'matches', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

// Define associations if needed
// Match.belongsTo(Team, { as: 'hostTeam', foreignKey: 'hostTeamId' });
// Match.belongsTo(Team, { as: 'guestTeam', foreignKey: 'guestTeamId' });
// Match.belongsTo(Venue, { foreignKey: 'venueId' });

export default Match;
