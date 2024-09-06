import { pgTable, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core"
import type { AdapterAccountType } from "next-auth/adapters"

export const authRole = pgEnum("auth_role", ['USER', 'ADMIN'])

// for magiclinks first auth
export const users = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: authRole('role').notNull().default('USER'),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

// for user with social logins
export const accounts = pgTable("account", {
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }), // foreign-key relation with user table
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    id_token: text("id_token"),
    scope: text("scope"),
    session_state: text("session_state"),
    token_type: text("token_type"),
  }
)
