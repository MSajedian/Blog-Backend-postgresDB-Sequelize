import pg from "pg";
import s from "sequelize";
const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;

import BlogpostModel from "./blogposts.js";
import AuthorModel from "./authors.js";
import CommentModel from "./comments.js";
import CategoryModel from "./categories.js";

// Getting Environment Variables by pg
const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

// Connecting to a database by sequelize (sequelize is connection instance)
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
});

// Testing the connection
const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
test();

const pool = new pg.Pool();

// `sequelize` is `connection instance` (Connecting to a database)
// `sequelize.define`s are in each functions (Student, Blogpost, Module, Author, ...)
// `sequelize.define` returns the model
const Models = {
  Author: AuthorModel(sequelize, DataTypes),
  Blogpost: BlogpostModel(sequelize, DataTypes),
  Comment: CommentModel(sequelize, DataTypes),
  Category: CategoryModel(sequelize, DataTypes),
  sequelize: sequelize, // We need to pass the `connection instance`
  pool: pool,
};

// One Blogpost has One Category
Models.Category.hasOne(Models.Blogpost, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Models.Blogpost.belongsTo(Models.Category);

// One Author has many Blogposts, while each Blogpost belongs to a single Author.
// To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
Models.Author.hasMany(Models.Blogpost, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Models.Blogpost.belongsTo(Models.Author);

// One Blogpost has many Comments, while each Comment belongs to a single Blogpost.
// To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
Models.Blogpost.hasMany(Models.Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Models.Comment.belongsTo(Models.Blogpost);

export default Models;