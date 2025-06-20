import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { Kysely as KyselyCore, KyselyConfig } from 'kysely';
import { DB } from './db.d';

export interface IKyselyModuleConfig extends Pick<ModuleMetadata, 'imports'>, Pick<FactoryProvider, 'inject'> {
  useFactory: (...args: any[]) => Promise<KyselyConfig> | KyselyConfig;
}

export type Kysely = KyselyCore<DB>;
