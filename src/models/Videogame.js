const { DataTypes } = require("sequelize");
// const allPlatforms = require("../assets/allPlatforms.js");
const releasedPattern = require("../assets/releasedPattern.js");
const imagePattern = require("../assets/imagePattern.js");
const allPlatforms = require("../assets/allPlatforms.js");
const today = require("../assets/today.js");
const noImage = require("../assets/noImage.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validateName(name) {
          const error0 = new Error("'Name' must be between 3 and 75 characters long.");
          if(name.length < 3 || name.length > 75) throw error0;
        }
      }
    },
    plot: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validatePlot(plot) {
          const error0 = new Error("'Plot' must be between 75 and 300 characters long.");
          if(plot.length < 75 || plot.length > 300) throw error0;
        }
      }
    },
    released: {
      type: DataTypes.DATEONLY,
      defaultValue: today,
      validate: {
        validateReleased(released) {
          const error0 = new Error("If provided, 'released' format must be 'yyyy-mm-dd'.");
          const error1 = new Error("If provided, 'released' cannot be later than current date.");
          if(!releasedPattern.test(released)) throw error0;
          if(Date.parse(released) > Date.now()) throw error1;
        }
      }
    },
    rating: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      validate: {
        validateRating(rating) {
          const error0 = new Error("If provided, 'rating' must be a number between 0 and 5 inclusive");
          if(typeof rating !== "number" || rating < 0 || rating > 5) throw error0;
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: noImage,
      validate: {
        validateImage(image) {
          const error0 = new Error("If provided, 'Image' must be an URL.");
          const error1 = new Error("If provided, 'Image' must be between 30 and 300 characters long.");
          if(!imagePattern.test(image)) throw error0;
          if(image.length < 30 || image.length > 300) throw error1;
        }
      }
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // type: DataTypes.ARRAY(DataTypes.ENUM),
      allowNull: false,
      // values: allPlatforms,
      validate: {
        validatePlatforms(platforms) {
          const error0 = new Error("At least one value must be provided for 'platforms'.");
          const error1 = new Error("All values must be valid gaming platforms.");
          if(platforms.length < 1) throw error0;
          if(!platforms.every(platform => allPlatforms.includes(platform))) throw error1;
        }
      }
    }
  });
};