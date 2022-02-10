import Note from "../../../../model/Note.model";
import dbConnect from "../../../../database/index";

const handler = async (request, response) => {
	const { method } = request;
	await dbConnect;

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Note.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		case "POST":
			try {
				const mongoResponse = await Note.create(request.body);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
