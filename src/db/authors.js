export default (sequelize, DataTypes) => {
  const Tutor = sequelize.define("author", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Tutor;
};
