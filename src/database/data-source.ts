import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_HOST),
  username: process.env.DB_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  subscribers: ['dist/database/subscribers/*.{ts,js}'],
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
