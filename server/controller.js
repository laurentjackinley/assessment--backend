module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ['Believe in yourself and others will too.','The harder you work, the luckier you get.','Your mind is your greatest asset.','Your reputation is your wealth.','With age comes wisdom.'];

        let randomIndex = Math.floor(Math.random()* fortunes.length);
        let randomfortune =fortunes[randomIndex];
        res.status(200).send(randomfortune)
    },
    createUser: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true})
    },
    incUser: (req,res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++){
            if (database[i].name === name){
                database[i].power_level++
            }
        }
        res.status(200).send({success: true})
    },

    delUser: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database.splice(i, 1);
            }
        }
        res.status(200).send({success: true, info: database})
    },    
    
    
    getPlayer: (req, res) => {
    const players = ["Messi", "Neymar", "Ronaldo","Dembele"];
  
    let randomIndex = Math.floor(Math.random() * players.length);
    let randomplayers = players[randomIndex];
    
    res.status(200).send(randomplayers);
},

getTeams: (req, res) => {
    const Teams = ["AC Milan", "FC Barcelona", "Real Madrid", "Manchester United"];
    
    let randomIndex = Math.floor(Math.random() * Teams.length);
    let randomTeams = Teams[randomIndex];
    
    res.status(200).send(randomTeams);
},

}
const database = [
    {
        name: 'Jack',
        power_level:55
    }
]