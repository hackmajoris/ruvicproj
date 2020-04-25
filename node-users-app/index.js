import MongooseInstance from "./config/db/mongoose.js";
import UserService from "./service/user-service.js";

const main = async () => {
  const mongooseInstance = new MongooseInstance()
  console.info("Connecting to the Mongo Database")
  mongooseInstance.connect()

  const userService = new UserService() 

  console.info("Returning all users")

  const allUsers = await userService.getAll()

  console.info(allUsers)

  const userToDelete = {
    id: "5e9d82a54c0d944c927f0699"
  }

  // console.info("Deleting user")
  // const result = await userService.delete(userToDelete)

  // console.info(result)


  // console.info("Creating new user")

  // const newUser = {
  //   firstName: "John",
  //   lastName: "The Great"
  // }

  // const resutl = await userService.create(newUser)
  // console.info(resutl)

  console.info("Updating user")

  const userToUpdate = {
    id: "5e9d8e3ac011104f096b33b2",
    firstName: "JohnUpdated",
    lastName: "Th Great"
  }

  const result = await userService.update(userToUpdate)


  console.info(result)


};

main()
 