var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let db = mongoose.connection;

var RecordSchema = new Schema({ // record
 id: {type : String}, // 레코드 작성한 사람의 아이디
 img: {type : String}, // 레코드의 이미지 path
 content: {type : String}, // 레코드에 들어가는 한 줄
 time: {type: Date, default: Date.now()}, // 레코드 작성 시간
 key: {type: String, unique: true} // 레코드 고유 키
});

var HashTagSchema = new Schema({ // 해시태그
 record_key: {type : String}, // 레코드 고유 키
 hashTag: {type : String}, // 해시태그
 hashTag_key: {type: Schema.ObjectId, ref:'Record', unique: true} 
 // 해시태그 고유 키
});

var MemberSchema = new Schema({ // 회원
 name: {type : String}, // 회원 이름
 id: {type: String, unique: true}, // 회원 아이디
 pw: {type : String} // 회원 비밀번호
});

let Record = mongoose.model('Record', RecordSchema);
let HashTag = mongoose.model('HashTag', HashTagSchema);
let Member = mongoose.model('Member', MemberSchema);

export {Record, HashTag, Member};

export default db;