var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
 id: String,
 img: String,
 content: String,
 time: {type: Date, default: Date.now()},
 key: {type: String, unique: true}
});

var HashTagSchema = new Schema({
 record_key: String,
 hashTag: String,
 hashTag_key: {type: Schema.ObjectId, ref:'Record', unique: true}
});

var MemberSchema = new Schema({
 name: String,
 id: {type: String, unique: true},
 pw: String
});

module.exports = mongoose.model('Record', RecordSchema);
module.exports = mongoose.model('HashTag', HashTagSchema);
module.exports = mongoose.model('Member', MemberSchema);