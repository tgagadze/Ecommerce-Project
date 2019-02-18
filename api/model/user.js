import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    userType : {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    companyName: {
        type: String,
        default: ""
    },
    companyID: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        require: true
    }
},{timestamps:true});

userSchema.pre('save', function(next) {
    if( !this.isModified('password')) {
        return next();
    }
    bcrypt.hash( this.password, 8, (err, hash) => {
        if( err ) {
            return next(err);
        }
        this.password = hash;
        next();
    });
})


// userSchema.methods.checkPassword = function(password) {
//     const passwordHash = this.password;

//     return new Promise((resolve, reject) => {
//         bcrypt.compare(password, passwordHash, (error, result) => {
//             if(error) {
//                 reject(error);
//             }else {
//                 resolve(result);
//             }
//         });
//     });
// }
const User = mongoose.model('User',userSchema);

// export default User;
module.exports = User;