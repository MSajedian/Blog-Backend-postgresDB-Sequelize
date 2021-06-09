import express from "express";
import models from "../../db/index.js";
const Blogpost = models.Blogpost;
const Author = models.Author;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Blogpost.findAll({
        // include: [
        //   { model: Author, through: { attributes: [] } },
        // ],
      });
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Blogpost.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router.route("/:blogpostId/addAuthor/:authortId/").post(async (req, res, next) => {
  try {
    const data = await Blogpost.create({
      blogpostId: req.params.blogpostId,
      authorId: req.params.authorId,
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

// router.route("/:classId/addStudent/:studentId").post(async (req, res, next) => {
//   try {
//     const data = await StudentClass.create({
//       classId: req.params.classId,
//       studentId: req.params.studentId,
//     });
//     res.send(data);
//   } catch (e) {
//     console.log(e);
//   }
// });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Blogpost.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Blogpost.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const row = await Blogpost.destroy({ where: { id: req.params.id } });
      if (row > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
    }
  });

export default router;
