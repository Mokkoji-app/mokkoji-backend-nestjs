import { DynamicModule, Module, Provider } from '@nestjs/common';
import { KyselyConfig } from 'kysely';
import { KYSELY_MODULE_CONFIG, KYSELY_MODULE_CONNECTION } from 'lib/constants/kysely.constant';
import { createKeyselyClient, createKeyselyClientProvider } from './kysely.factory';
import { IKyselyModuleConfig } from 'lib/interfaces/kysely.interface';

@Module({})
export class KyselyModule {
  static forRoot(config: KyselyConfig): DynamicModule {
    const provider: Provider = {
      provide: KYSELY_MODULE_CONNECTION,
      useValue: createKeyselyClient(config),
    };

    return {
      module: KyselyModule,
      providers: [provider],
      exports: [provider],
      global: true,
    };
  }

  static forRootAsync(config: IKyselyModuleConfig): DynamicModule {
    const provider: Provider = {
      inject: [KYSELY_MODULE_CONFIG],
      provide: KYSELY_MODULE_CONNECTION,
      useFactory: (config: KyselyConfig) => createKeyselyClient(config),
    };

    return {
      module: KyselyModule,
      imports: config.imports,
      providers: [provider, createKeyselyClientProvider(config)],
      exports: [provider],
      global: true,
    };
  }
}
