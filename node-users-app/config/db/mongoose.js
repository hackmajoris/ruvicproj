import mongoose from "mongoose";

class MongooseInstance {
  connect = async () => {
    const mongoURL = "mongodb://localhost:27017";

    const mongooseInputConfig = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const instance = await mongoose.connect(mongoURL, mongooseInputConfig);
    instance.set('useFindAndModify', false)

  };
}

export default MongooseInstance;
