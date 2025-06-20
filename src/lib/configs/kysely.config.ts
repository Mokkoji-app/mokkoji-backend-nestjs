import { CamelCasePlugin, KyselyConfig, ParseJSONResultsPlugin, PostgresDialect } from 'kysely';
import { IKyselyModuleConfig } from '../interfaces/kysely.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

export const kyselyModuleConfig: IKyselyModuleConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const config: KyselyConfig = {
      dialect: new PostgresDialect({
        pool: new Pool({
          user: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          host: configService.get('POSTGRES_HOST'),
          port: +configService.get('POSTGRES_PORT'),
          database: configService.get('POSTGRES_DBNAME'),
        }),
      }),
      plugins: [new CamelCasePlugin(), new ParseJSONResultsPlugin()],
    };

    return config;
  },
};
