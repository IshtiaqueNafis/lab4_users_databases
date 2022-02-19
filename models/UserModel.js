const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 4

    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    website: {
        type: String,
        required: true,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]// this is used for matching.
    },
    city: {
        type: String,
        required: true,
        match: [/^[a-zA-Z ]*$/, "Please enter valid City format"]
    },
    zip: {
        type: String,
        required: true,
        match: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'plese follow the format for javascript']
    },
    phone: {
        type: String,
        required: true,
        match: [/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, 'please enter current phone number']
    }

});

module.exports = mongoose.model('User', UserSchema);