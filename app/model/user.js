const client = require("../config/db")

class User {
 
    constructor(obj){
        this.id = obj.id;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.nickname = obj.nickname;
        this.mail = obj.mail;
        this.password = obj.password;
        this.trophies = obj.trophies;
        this.honor_point = obj.honor_point;
        this.team = obj.team;
        this.role = obj.role;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;

    }
// create user
   static async create(userTemp){
       const result = await client.query(``)
   }



};

module.exports = User;