app.get('/oauth/battlenet',
    passport.authenticate('bnet'));

app.get('/oauth/battlenet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
    });