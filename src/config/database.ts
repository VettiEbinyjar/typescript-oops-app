import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class Database{
    private MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/express-mongo'  ;
    private static instance: Database;
    private constructor(){
        this.connect();
    };
   public static getInstance(){
         if(!Database.instance){
              Database.instance = new Database();
         }
         return Database.instance;
   }
   private connect(){   
         mongoose.connect(this.MONGO_URI)
          .then(() => {
            console.log('Successfully connected to the database');
          })
          .catch((error) => {
            console.error('Error connecting to the database', error);
          });
   }
}

export default Database.getInstance();