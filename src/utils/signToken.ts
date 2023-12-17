import jwt from "jsonwebtoken";

interface JWT_DATA {
	id: number,
	userId: string,
	email: string,
	role: string;
}

const signToken = (data: JWT_DATA) => {
	return jwt.sign(data, <string>process.env.JWT_SECRET, {
		expiresIn: <string>process.env.JWT_EXPIRES_IN,
	});
};

export default signToken;