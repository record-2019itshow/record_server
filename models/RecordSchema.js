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
 record_key: {type: String, unique: true} // 레코드 고유 키
});

var HashTagSchema = new Schema({ // 해시태그
 record_key: String, // 레코드 고유 키
 hashTag: String, // 해시태그
 hashTag_key: {type: Schema.ObjectId, ref:'Record', unique: true} 
 // 해시태그 고유 키
});

var MemberSchema = new Schema({ // 회원
 name: String, // 회원 이름
 id: {type: String, unique: true}, // 회원 아이디
 pw: String // 회원 패스워드
});

// module.exports = mongoose.model('Record', RecordSchema);
// module.exports = mongoose.model('HashTag', HashTagSchema);
// module.exports = mongoose.model('Member', MemberSchema);

let Records = mongoose.model("Record", RecordSchema);
let HashTags = mongoose.model("HashTag", HashTagSchema);
let Members = mongoose.model("Member", MemberSchema);

export { Records, HashTags, Members };

export default db;