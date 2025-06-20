import { FileMigrationProvider, Kysely, Migrator, PostgresDialect } from 'kysely';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { promises as fs } from 'fs';
import { Pool } from 'pg';

const currentEnv = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.join(__dirname, '..', `.env.${currentEnv}`) });

const db = new Kysely({
  dialect: new PostgresDialect({
    pool: new Pool({
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DBNAME,
      // ssl: { rejectUnauthorized: false },
    }),
  }),
});

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, 'migrations'),
  }),
});

async function migrateToLatest() {
  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((result) => {
    if (result.status === 'Success') {
      console.log(`✅ migration "${result.migrationName}" was executed successfully`);
    } else if (result.status === 'Error') {
      console.error(`❌ failed to execute migration "${result.migrationName}"`);
    }
  });

  if (error) {
    console.error('failed to migrate');
    console.error(error);
    process.exit(1);
  }
  await db.destroy();
}

migrateToLatest();
