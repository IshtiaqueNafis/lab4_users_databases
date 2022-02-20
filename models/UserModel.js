const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        minLength: 4

    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'enter right email']

    },

    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true,

        },
        zipcode: {
            type: String,
            required: true,
            match: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'zipcode must be thing format ']
        },
        city: {
            type: String,
            required: true,
            match: [/^[a-zA-Z ]*$/, "Please enter valid City format"]
        },
        geo: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/^(1)[\s\-]?((\(\d{3}\))|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/, 'please enter correct phone format']
    },
    website: {
        type: String,
        required: true,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]// this is used for matching.
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true,


        },
        bs:{
            type: String,
            required: true
        }
    }

});

module.exports = mongoose.model('User', UserSchema);