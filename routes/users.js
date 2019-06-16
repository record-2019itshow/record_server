module.exports = function (app, Member) {
    app.post('/signin', async(req, res) => {
        var result = await Member.findOne(req.body);
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
<<<<<<< HEAD:route/users/users.js
    .post('/signup', async(req, res)=>{
=======

    .post('signup', async(req, res) =>{
>>>>>>> f2af5fa309b46e955ac504a02691d74773b8eba3:routes/users.js
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
<<<<<<< HEAD:route/users/users.js
};
=======
}
>>>>>>> f2af5fa309b46e955ac504a02691d74773b8eba3:routes/users.js
