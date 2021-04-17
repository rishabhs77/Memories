import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";


export const getPosts = async(req, res)=>{
    //res.send("this works");
    try {
        const allposts = await PostMessage.find();
        res.status(200).json(allposts);
        
    } catch (error) {
        res.status(403).json( { message: error.message});
        
    }

}

export const createPost = async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }
}

