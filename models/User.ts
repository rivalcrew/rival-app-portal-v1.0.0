// src/models/user.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import bcrypt from 'bcrypt';

class User extends Model {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public username!: string;
  public id_no!: string;
  public passport_no!: string;
  public email!: string;
  public gender!: string | null;
  public marital_status!: string | null;
  public nationality!: string | null;
  public dob!: Date | null;
  public religion!: string | null;
  public avatar_image!: string | null;
  public password!: string;

  // Add any other fields and methods as needed

  // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;

  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  static async findByUsername(username: string): Promise<User | null> {
    return await User.findOne({ where: { username } });
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}



User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name' // serialize with DB
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id_no: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    passport_no: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marital_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

    sequelize,
    modelName: 'User',
    tableName: 'users', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default User;
