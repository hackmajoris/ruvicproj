import User from "../models/user.js";

class UserService {
  getAll = async () => {
    return await User.find();
  };

  create = async (user) => {
    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
    });
    return newUser.save();
  };

  delete = async (user) => {
    return User.findByIdAndDelete(user.id);
  };

  update = async (user) => {
    const filter = { _id: user.id  };

    return User.findOneAndUpdate(filter, user, {
      new: true,
    });

  };
}

export default UserService;
