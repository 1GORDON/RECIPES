const mangoose = require('mangoose')

// Mongooese ie mangoose.connect always returns a promise. We shal use async for that instead of .then.
const connectDB = async () => {
    try {
      // Connection variable
      const conn = await mangoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })

    //   Lets connect to the database
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        console.log(1)
    }
}

module.exports = connectDB;