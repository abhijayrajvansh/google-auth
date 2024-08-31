import { db } from "@/database";
import { users } from "@/database/schema";
import { exit } from "process";

enum userRole {
  ADMIN = 'ADMIN', USER = 'USER'
}

const myValues: Array<{name: string, email: string, role?: userRole}> = [
  {
    name: "rajvansh",
    email: "bob1@email.com",
    role: userRole.ADMIN
  },
  {
    name: "maddy",
    email: "rajvansh1@email.com",
  }
]

console.log(myValues)

async function seed() {
  try {
    await db.insert(users).values(myValues);
  } catch (error) {
    console.error("caught error while seeding db:", error);
  }
}

seed().then(() => {console.log('\n> db seeded successfully! 🌱')}).finally(exit)