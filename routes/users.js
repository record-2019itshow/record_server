module.exports = function (app, Members) {
    app.post('/signin', async(req, res) => {
        var result = await Members.findOne(req.body);
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

    .post('/signup', async(req, res) =>{
        var member = new Members(req.body);

        try{
            await member.save();
        }catch(e){
            res.status(400).json({
                message : "failed"
            });
        }

        res.status(200).json({
            message : "signin"
        });
        
    });
}