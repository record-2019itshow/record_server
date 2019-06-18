var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// DB Connect
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongodb server");
});

var RecordSchema = new Schema({ // record
 id: String, // 레코드 작성한 사람의 아이디
 img: String, // 레코드에 들어가는 이미지 path
 content: String, // 레코드에 들어가는 한 줄
 time: {type: Date, default: Date.now()}, // 레코드 작성 시간
 record_key: {type: String, unique: true}, // 레코드 고유 키
 hashtags: [{
  //token: { type: String },
  type: String
 }]
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

<<<<<<< HEAD
var HashTagSchema = new Schema({ // 해시태그
 record_key: String, // 레코드 고유 키
 hashTag: String, // 해시태그
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

=======
>>>>>>> ff8cdecdfa2258e523ce1db2cce5aadbcd8d4421
var MemberSchema = new Schema({ // 회원
 name: String, // 회원 이름
 id: {type: String, unique: true}, // 회원 아이디
 pw: String, // 회원 패스워드
 hashtags: [{
   token: { type: String },
 }]
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

let Records = mongoose.model("Record", RecordSchema);
let Members = mongoose.model("Member", MemberSchema);

export { Records, Members };

export default db;