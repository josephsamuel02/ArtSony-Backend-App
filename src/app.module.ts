import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, AuthModule],
})
export class AppModule {}

// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       name: process.env.DATABASE_NAME,
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => {
//         return {
//           type: 'mysql',
//           host: configService.get(`DATABASE_HOST`),
//           port: configService.get(`DATABASE_PORT`),
//           username: configService.get('DB_USER'),
//           database: configService.get('DATABASE_NAME'),
//           password: configService.get('DB_PASSWORD'),
//           synchronize: false,
//           entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
//           migrations: [__dirname + '/../../migrations/*.{ts,js}'],
//           subscribers: [__dirname + '/../../subscribers/*.{ts,js}'],

//           cli: {
//             entitiesDir: 'src/entities',
//             migrationsDir: 'src/migrations',
//             subscribersDir: 'src/subscribers',
//           },
//           // extra: {
//           //   charset: 'utf8mb4_unicode_ci',
//           // },
//           logging: true,
//         };
//       },
//     }),
//   ],
// })
