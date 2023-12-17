import nodemailer from "nodemailer";

export interface Email {
	to: string;
	from: string;
	subject: string;
	html: string;
}

interface EmailAuth {
	user: string;
	pass: string;
}

interface EmailConfig {
	host: string;
	port: string;
	auth: EmailAuth;
}

interface EmailOptioms {
	email: string;
	subject: string;
	html: string;
	senderName?: string;
}

function createTransporter(config: any) {
	return nodemailer.createTransport(config);
}

const defaultConfig: EmailConfig = {
	host: process.env.SMTP_HOST!,
	port: process.env.SMTP_PORT!,
	auth: {
		user: process.env.SMTP_EMAIL!,
		pass: process.env.SMTP_PASSWORD!,
	},
};

const sendEmailNodemailer = async (options: EmailOptioms) => {

	const mailOptions = {
		from: `${options.senderName || "Planethiring Account"} <${process.env.SMTP_EMAIL}>`,
		to: options.email,
		subject: options.subject,
		html: options.html,
	};
	try {
		const transporter = createTransporter(defaultConfig);
		await transporter.verify();
		await transporter.sendMail(mailOptions);
	} catch (err) {
		console.log(err);
	}
};

export default sendEmailNodemailer;