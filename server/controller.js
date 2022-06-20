fortunes = ['Believe in yourself and others will too.','The harder you work, the luckier you get.','Your mind is your greatest asset.','Your reputation is your wealth.','With age comes wisdom.'];
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
    createCompliment: (req, res) => {
        let {compliments} = req.body
        let newCompliment = {
            compliment
        }
        compliments.push(newCompliment)
        res.status(200).send()
    },
    deleteFortune: (req,res) => {
        let index = fortunes.findIndex(elem => elem.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
    }
}