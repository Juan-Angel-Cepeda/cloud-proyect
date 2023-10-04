const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _done: String
});

class Task {
    constructor(name, done){
        this._name = name;
        this._done = done;
    }

    get name(){
        return this._name;
    }
    set name(v){
        this._name = v;
    }

    get done(){
        return this._done;
    }
    set done(v){
        this._done = v;
    }
}

schema.loadClass(Task);
module.exports = mongoose.model('Task', schema);