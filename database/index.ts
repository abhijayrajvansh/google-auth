import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from '@/database/schema';
import "dotenv/config";

const connectionString = process.env.DATABASE_URL as string;

const client = postgres(connectionString, { max: 1 });
export const db = drizzle(client, { schema, logger: true });