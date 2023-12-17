// import sendGridMailer from "@sendgrid/mail";
// import Logger from "../logger";
// sendGridMailer.setApiKey(<string>process.env.SENDGRID_API_KEY);
// interface EmailOptioms {
// 	from: string;
// 	subject: string;
// 	html: string;
// 	text?: string;
// 	to?: string;
// }

// const sendEmailSendgrid = async (options: EmailOptioms) => {
// 	try {
// 		await sendGridMailer.send(options);
// 	} catch (err) {
// 		Logger.error(err);
// 	}
// };

// export default sendEmailSendgrid;