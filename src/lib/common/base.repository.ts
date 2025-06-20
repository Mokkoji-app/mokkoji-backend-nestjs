import { Kysely } from 'lib/interfaces/kysely.interface';
import { InjectKysely } from 'decorators/kysely.decorator';
import typia from 'typia';

export abstract class BaseRepository {
  constructor(@InjectKysely() protected readonly kysely: Kysely) {}

  protected plainToModel<T>(plain: unknown[]): T[];
  protected plainToModel<T>(plain: unknown): T;
  protected plainToModel<T>(plain: unknown | unknown[]): T | T[] {
    return typia.assert<T | T[]>(plain);
  }
}
