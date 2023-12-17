import fs from 'fs';

const config = {
	development: {
		username: process.env.PROD_DB_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'postgres',
		dialectOptions: {
			bigNumberStrings: true
		}
	},
	test: {
		username: process.env.PROD_DB_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'postgres',
		dialectOptions: {
			bigNumberStrings: true
		}
	},
	production: {
		username: process.env.PROD_DB_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'postgres',
		dialectOptions: {
			bigNumberStrings: true,
			ssl: {
				ca: fs.readFileSync(__dirname + '/postgres-ca-main.crt')
			}
		}
	}
};

export default config;