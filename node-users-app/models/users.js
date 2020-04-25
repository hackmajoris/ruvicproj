import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema({
    firstName: {
        type: String
    },

    lastName: {
        type: String
    }
})


const User = Mongoose.model("User", UserSchema)

export default User