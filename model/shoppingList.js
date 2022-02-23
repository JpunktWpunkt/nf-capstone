import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
	name: String,
});

export default mongoose.models.ShoppingList || mongoose.model("ShoppingList", shoppingListSchema);
