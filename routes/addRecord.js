import multer from 'multer';
import path from 'path';

const URL = 'images/';

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/' + URL);
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    }),
});

module.exports = (app, Records, Members) => {
    app.post('/addRecord', upload.single('img'), async (req, res) => {
        let reqReco = new Records(req.body);
        
        reqReco.record_key = randomString(10);
        //임시로 랜덤 스트링 10개 생성
        reqReco.img = URL + req.file.filename;

        //레코드 저장
        await reqReco.save(async(err)=>{
                if(err) res.status(400).json({message: "error!"});
            });

        await Members.updateOne({id: reqReco.id}, {$addToSet: { hashtags: { $each: reqReco.hashtags } }},
             async(err)=>{
                if(err) res.status(400).json({message: "error!"});
                res.status(200).json({ message : "ok!"});
             });
    });
}

    function randomString(len) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomstring = '';
            for (var i=0; i<len; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum,rnum+1);
            }
        return randomstring;
        }