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
    app.post('/addRecord', async (req, res) => {
        let reqReco = new Records(req.body);

        let reqid = reqReco.id;
        


        

        //Members 에 해시태그 추가
        await Members.findOne({id : reqid}, function (err, rawContent){
            if(err) throw err;
            rawContent.hashtags.unshift(reqReco.hashtags);
            rawContent.save(function(err){
                if(err) res.status(400).json({ message: 'Unable to add group' });
            });
        });

    });
   }