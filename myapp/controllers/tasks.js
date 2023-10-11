const express = require('express');
const Task = require('../models/task');

function list(req, res, next) {
    Task.find().then(objs => res.status(200).json({
        message: "Ok",
        objs: objs
    })).catch(ex => res.status(500).json({
        message: "Error List",
        obj: ex
    }))
}

function index(req, res, next) {
    const id = req.params.id;
    Task.findOne({"_id":id}).then(obj => res.status(200).json({
        message: "Index Ok",
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "Error Index",
        obj: ex
    }))
}

function create(req, res, next) {
    let name = req.body.name;
    let done = req.body.done;

    let task = new Task({
        name: name,
        done: done
    });

    task.save().then(obj => res.status(200).json({
        message: "Correct Create",
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "Error Create",
        obj: ex
    }));
}

function replace(req, res, next) {

    const id = req.params.id;

    let name = req.body.name ? req.body.name : "";
    let done = req.body.done ? req.body.done : "";

    let task = new Object({
        _name: name,
        _done: done
    });

    Task.fineOneAndUpdate({"_id":id}, task, {new : true})
        .then(obj => res.status(200).json({
            message: "Correct Replace",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "Error Replace",
            obj: ex
        }));
}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let done = req.body.done;

    let task = new Object();

    if(name)
        todo._name = name;

    if(done)
        todo._done = done;

    Task.fineOneAndUpdate({"_id":id}, task, {new : true})
        .then(obj => res.status(200).json({
            message: "Correct Update",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "Error update",
            obj: ex
        }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Task.findByIdAndRemove({"_id":id})
        .then(obj => res.status(200).json({
            message: "Correct delete",
            obj: obj
        })).catch(ex => res.status(500).json({
            message: "Error delete",
            obj: ex
        }));
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
}