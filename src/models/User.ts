import mongoose, {Document} from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
    password: string;
}

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    password: {type: String, required: true},
});

export const User = mongoose.model<IUser>('User', UserSchema);
