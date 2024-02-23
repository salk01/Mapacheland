var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var tvshowSchema = new Schema({
  name: { type: String },
  skill: {type: String}
  
});

module.exports = mongoose.model("TVShow", tvshowSchema);
