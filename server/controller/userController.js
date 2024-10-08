const express = require("express");
const userService = require("../services/userService");
const logger = require("../config/logger");
const { User } = require("../models");
const {
    jwtAuthMiddleware,
    generateToken,
} = require("../middlewares/jwtAuthMiddleware");
const bcrypt = require("bcrypt")

const createUserController = async (req, res) => {
    try {
        /*
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const newUser = await userService.createUser(req.body);
        logger.info(`User created: ${newUser}`);
        res.status(201).json(newUser);
        */

        res.redirect('/login');
    } catch (err) {
        logger.error(`Err: ${err}`);
        res.status(500).json({ message: err.message });
    }
};

const updateUserController = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        logger.info(`User updated: ${user}`);
        res.status(200).json(user);
    } catch (err) {
        logger.error(`Err: ${err}`);
        res.status(500).json({ message: err.message });
    }
};

// const signIn

const logInController = async (req, res) => {

    try {

        /*
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = generateToken(user.id);
        res.cookie("authToken", token, {
            httpOnly: true,
            // expires: new Date(Date.now() + 50000),
        });

        res.status(200).json({ message: "User signed in successfully", token });
        */

        res.redirect('/dashboard');
    } catch (err) {
        logger.error(err);
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }
};

const logoutController = async (req, res) => {
    try {
        // Clear the authToken cookie
        res.clearCookie("authToken");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (err) {
        logger.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

const showSignInForm = async (req, res) => {
    res.render('login');
}

const showSignUpForm = async (req, res) => {
    res.render('signup');
}

const dashboard = async (req, res) => {
    res.render('dashBoard');
}

const landingPageController = async (req, res) => {
    res.render('landing_page');
}

const profile =  async(req,res)=>{
    res.render('profile')
}
module.exports = {
    createUserController,
    logInController,
    logoutController,
    updateUserController,
    showSignInForm,
    showSignUpForm,
    dashboard,
    landingPageController,
    profile
};


