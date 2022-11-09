import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  database: 'moveo',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrationsRun: true,
  username: 'moveo',
  password: 'moveo',
  migrations: ['dist/src/assets/migrations/*.js'],
});

export default dataSource;
