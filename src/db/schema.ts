import connect from '.';

export const createDatabase = async () => {
  const client = await connect();

  await client.query(`CREATE DATABASE "zookeeping"`);
};

export const createTableAnimals = async () => {
  const client = await connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS "animals" (
	    "id" SERIAL,
	    "species" TEXT NOT NULL,
	    "name" TEXT NOT NULL,
        "age" INTEGER NOT NULL,
	    "emoji" TEXT NOT NULL,
	    "feedingTime" TEXT NOT NULL,
	    "diet" TEXT NOT NULL,
	    PRIMARY KEY ("id"))`);
};
