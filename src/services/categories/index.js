import express from "express";
import Models from "../../db/index.js";

const Category = Models.Category
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
     const categories = await Category.findAll()
     res.send(categories)
    
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const category = await Category.create(req.body)
      res.send(category)
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
     
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default router;
