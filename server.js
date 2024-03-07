const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const url = process.env.DATABASE_URL;


const conn = async () => {
    try {
        await mongoose.connect(url);
        console.log("Conected to MongoDB Server");
    } catch (error) {
        console.log(error);
    }
}

module.exports = conn;