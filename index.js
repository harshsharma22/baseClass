const { db } = require('mongodb').Db
class baseClass {

    static async findByEmail(email){
        return db.collection("user").findOne(email);

    }
    

}
module.exports = baseClass