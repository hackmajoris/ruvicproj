
import MongooseInstance from "./db/mongoose.js";
import UserService from './service/UseService.js'

const main = async () => {
  const mongooseInstance = new MongooseInstance();
  await mongooseInstance.connect();

  const userService = new UserService()

  const allUser  = await userService.getAll()

  console.log(allUser)

  const newUser = {
      firstName: 'dsfsdfd',
      lastName: "sdfsdfdsd"
  }

  const result = await userService.create(newUser)
  console.log(result)

  const userToDelete = {
      id: "5e9c8d1e5b1c2829435a4b1d"
  }

  const r = await userService.delete(userToDelete)
  console.log(r)

  const userToUpdate = {
    id: "5e9c8c22a7e88f28ccbf1493",
    firstName: 'IonUpdatedTwice',
    lastName: 'JohnUpdated',
  }

  const rr = userService.update(userToUpdate)
};

main();

