import { Client } from 'pg';

const connect = async (): Promise<Client> => {
  const client = new Client({
    host: 'postgres',
    user: 'postgres',
    password: 'password',
    port: 5432,
  });

  await client.connect();

  return client;
};

export default connect;
