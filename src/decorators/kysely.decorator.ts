import { Inject } from '@nestjs/common';
import { KYSELY_MODULE_CONNECTION } from 'lib/constants/kysely.constant';

export const InjectKysely = () => Inject(KYSELY_MODULE_CONNECTION);
