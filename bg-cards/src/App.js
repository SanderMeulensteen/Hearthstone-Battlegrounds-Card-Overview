import react from 'react'
import './components.css'
import { Table } from 'react-bootstrap'

const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID;
const BNET_SECRET = process.env.BNET_SECRET;

/* // Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost:3000/oauth/battlenet/callback",
    region: "eu"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
})); */

/* app.get('/oauth/battlenet',
    passport.authenticate('bnet'));

app.get('/oauth/battlenet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
    }); */

class App extends react.Component {
    constructor(props){
        super(props)
        this.state = {
            cards:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/players")
        .then(res => res.json())
        .then(json => {
            this.setState({
                cards: json
            })
        });
    }

    render (){
        return (
            <div>
                <br/>
                <h1 className='text-center'> Battlegrounds Card Overview </h1>
                <br/>
                <Table striped hover>
                    <thead>
                        <tr>
                            <td> Card name </td>
                            <td> Card tier </td>
                            <td> Card type </td>
                            <td> Card keyword </td>
                            <td> Card image </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cards.map(
                                card =>
                                <tr key = {card.id}>
                                    <td> {card.name} </td>
                                    <td> {card.tier} </td>
                                    <td> {card.type} </td>
                                    <td> {card.keyword} </td>
                                    <td> {card.image} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default App;
