const moment = require('moment');
module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
    getDateNowISOLocal: function (dateTime) {
        try {
            let dateNow = moment().format(dateTime);
            dateNow = new Date(dateNow);
            return dateNow;
        } catch (error) {
            throw Error(error.message);
        }
    }
};
