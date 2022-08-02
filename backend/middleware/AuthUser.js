import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
	if (!req.session.userId) {
		return res.status(401).json({ msg: "Please Login To Your Account!" });
	}
	const user = await Users.findOne({
		where: {
			uuid: req.session.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User Not Found" });
	req.userId = user.id;
	req.role = user.role;
	next();
};

export const adminOnly = async (req, res, next) => {
	if (!req.session.userId) {
		return res.status(401).json({ msg: "Please Login To Your Account!" });
	}
	const user = await Users.findOne({
		where: {
			uuid: req.session.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User Not Found" });
	if (user.role !== "admin")
		return res.status(403).json({ msg: "Forbidden Access" });
	req.userId = user.id;
	req.role = user.role;
	next();
};
