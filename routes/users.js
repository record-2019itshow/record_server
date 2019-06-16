module.exports = function (app, Member) {
    app.post('/signin', async(req, res) => {
        var result = await Member.findOne({id : req.body.id, pw : req.body.pw});
        if(!result){  // result에 값이 없으면
            res.status(400).json({
                message: "failed"
            });
        }else{
            req.session.logincheck=true;
            req.session.current_id = result.id;

            res.status(200).json({
                message:"signin"
            });
        }
    })

    .post('signup', async(req, res) =>{
        var member = new Member(req.body);
        try{
            await member.save();
        }catch(e){
            res.status(400).json({
                message : "failed"
            });
        }

        res.status(200).json({
            message : "signup"
        });
        
    });
};
