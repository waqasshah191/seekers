const mongoose = require('mongoose');

/* Moved credentials to .env */
//  const mongoUser = 'sumi';
//  const mongoPasswd = 'sumi';
//  const mongoDBName = 'POS';
//  const mongoServer = 'cluster0.bixpu.mongodb.net';
//  const url =
//    `mongodb+srv://${mongoUser}:${mongoPasswd}` +
//    `@${mongoServer}/${mongoDBName}?retryWrites=true&w=majority`;

// const localMongoUrl = "mongodb://localhost:27017/c6Superheroes"
//mongoose.connect("mongodb://localhost:27017/POS", { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.once('open', (_) =>
// //console.log('MongoDB is now connected:')  
//  console.log('MongoDB is now connected:', process.env.MONGODB_URL)
// );
// db.on('error', (err) => console.error('MongoDB connection error!', err));

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.MONGODB_URL, connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};