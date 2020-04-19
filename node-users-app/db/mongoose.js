import mongoose from "mongoose";

class MongooseInstance {
  connect = async () => {
    const mongoURL = "mongodb://localhost:27017";

    const mongoosInputConfig = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const mongooseInstance =  await mongoose.connect(mongoURL, mongoosInputConfig);
    mongooseInstance.set('useFindAndModify', false)
  };

}

export default MongooseInstance;
