import ejs from "ejs";

const getHtmlContent = async ({ template, ...options }: any): Promise<string> => {
	try {
		const html = await ejs.renderFile(
			`${__dirname}/../templates/${template}`,
			options
		) as string;

		return html;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to load email..");
	}
};

export default getHtmlContent;