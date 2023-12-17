import Logger from "../logger";

const connectToDb = async () => {
	try {
		// Add DB connection here
		Logger.info(`🚀 Db connection successfull`);
	} catch (error: any) {
		Logger.error(`Failed to connect to db: ${error.message}`);
		process.exit(1);
	}
};

export default connectToDb;