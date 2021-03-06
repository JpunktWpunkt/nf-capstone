import Note from "../../../../model/note.model";
import dbConnect from "../../../../database/index";

const handler = async (request, response) => {
	const { method } = request;
	await dbConnect();
	console.log("handler", request.body);

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Note.find({ userId: request.query.userId });
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(500).send("ups, something went wrong");
			}
			break;

		case "POST":
			try {
				console.log("try body request", request.body);
				const mongoResponse = await Note.create(request.body);
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("ups, something went wrong");
			}
			break;

		//update content of specific note
		case "PUT":
			try {
				console.log("try body request", request.body);
				const mongoResponse = await Note.findByIdAndUpdate(request.body.noteId, {
					content: request.body.content,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("ups, something went wrong");
			}
			break;

		case "DELETE":
			try {
				console.log("try delete: delete is called");
				console.log("try to get info about request bodynote: ", request.query.noteId);
				const mongoResponse = await Note.findByIdAndDelete({
					_id: request.query.noteId,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("ups, something went wrong");
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
