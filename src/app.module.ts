import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { kyselyModuleConfig } from 'lib/configs/kysely.config';
import { KyselyModule } from 'modules/kysely/kysely.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
      cache: true,
    }),
    KyselyModule.forRootAsync(kyselyModuleConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
