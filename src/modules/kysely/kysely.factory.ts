import { Provider } from '@nestjs/common';
import { Kysely, KyselyConfig } from 'kysely';
import { KYSELY_MODULE_CONFIG } from 'lib/constants/kysely.constant';
import { IKyselyModuleConfig } from 'lib/interfaces/kysely.interface';

export function createKeyselyClient<Tables>(config: KyselyConfig): Kysely<Tables> {
  return new Kysely<Tables>(config);
}

export function createKeyselyClientProvider(config: IKyselyModuleConfig): Provider {
  return {
    inject: config.inject,
    provide: KYSELY_MODULE_CONFIG,
    useFactory: config.useFactory,
  };
}
