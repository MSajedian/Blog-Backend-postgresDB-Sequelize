export default (sequelize, DataTypes) => {
  const CommentModel = sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // {
  //     "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
  //     "rate": 3, //REQUIRED, max 5
  //     "createdAt": "2019-08-01T12:46:45.895Z" // Server Generated
  // }
  return CommentModel;
};
