import User from "../models/users.js"

class UserService {

    getAll = async () => {
        return User.find()
    }

    delete = async(user) => {
        return User.findByIdAndDelete(user.id)
    }

    create = async(user) => {
        const newUser = new User({
            firstName: user.firstName,
            lastName: user.lastName
        })

        return newUser.save()
    }

    update = async(user) => {
        const filter = {_id: user.id}
        
        return User.findOneAndUpdate(filter, user, {
            new: true 
        })
    }

}

export default UserService