const mongoose = require('mongoose');

async function connectDatabase() {
    const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    console.log(mongoDbUrl);
    try {
        await mongoose.connect(mongoDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: true,
        });
        console.log('Successfully connected to the database')
    } catch (error) {
        console.log(`Could not connect to the database. Exiting now... \n${error}`);
    }
}

module.exports = { connectDatabase }