const BlogpostModel = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define("blogpost", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // category: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    // },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    read_time_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    read_time_unit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Blogpost;
};
// {
//   "id": 1,
//   "category": "ARTICLE CATEGORY",
//   "title": "ARTICLE TITLE",
//   "cover":"ARTICLE COVER (IMAGE LINK)",
//   "read_time_value": 2,
//   "read_time_unit": "minute"
//   "author":"AUTHOR FOREIGN KEY",
//   "content": "HTML",
//   "created_at": "DATE"          
// }
export default BlogpostModel;
