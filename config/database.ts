// config/database.ts

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'u897223211_rival_my',
  username: 'u897223211_rival_admin',
  password: 'bMr3APVl9!',
  host: '82.180.152.52',
  dialect: 'mysql', // or any other supported dialect
});
