const express = require ("express");

// Create a new Router
const router = new express.Router();
const mensRanking = require("../models/mens");

// To create DATA

router.post("/mens" , async (req,res) => {
    try {
        const addingMensRecords = new mensRanking (req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
     } catch (e) {
        res.status(400).send(e);
    }
 });
 
 
 //To Read DATA
 
 router.get("/mens" , async (req,res) => {
    try {
        const getMens = await mensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
     } catch (e) {
        res.status(400).send(e);
    }
 });
 
 //To Read Indivisual DATA
 
 router.get("/mens/:id" , async (req,res) => {
     try {
         const _id = req.params.id;
         const getMen = await mensRanking.findById(_id);
         res.send(getMen);
      } catch (e) {
         res.status(400).send(e);
     }
  });
 
  //To Update or Patch
 
  router.patch("/mens/:id" , async (req,res) => {
    try {
        const _id = req.params.id;
        const getMens = await mensRanking.findByIdAndUpdate(_id , req.body , {
           new:true
        });
        res.send(getMens);
     } catch (e) {
        res.status(500).send(e);
    }
 });
 
 //To Delete
 
 router.delete("/mens/:id" , async (req,res) => {
    try {
        const getMens = await mensRanking.findByIdAndDelete(req.params.id);
        res.send(getMens);
     } catch (e) {
        res.status(500).send(e);
    }
 });

 module.exports = router;