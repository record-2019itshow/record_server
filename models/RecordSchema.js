var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DB Connect
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongodb server");
});

var RecordSchema = new Schema({ // record
 id:  { type: String, required: true }, // 레코드 작성한 사람의 아이디
 img:  { type: String, required: true }, // 레코드에 들어가는 이미지 path
 content:  { type: String, required: true }, // 레코드에 들어가는 한 줄
 time: { type: Date, default: Date.now(), required: true }, // 레코드 작성 시간
 record_key: { type: String, unique: true, required: true }, // 레코드 고유 키
 hashtags: [{
  type: String,
  require: true
 },]
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

var MemberSchema = new Schema({ // 회원
 name:  { type: String, required: true }, // 회원 이름
 id: { type: String, unique: true, required: true }, // 회원 아이디
 pw:  { type: String, required: true }, // 회원 패스워드
 hashtags: [{
   type: String
 },]
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

let Records = mongoose.model("Record", RecordSchema);
let Members = mongoose.model("Member", MemberSchema);

export { Records, Members };

export default db;