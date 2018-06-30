var fs = require("fs");

class heroConfig {
    constructor(){
        try{
            var content = fs.readFileSync("hero-config3.json");
            this.hero = JSON.parse(content);
        } catch(err){
            if(process.env.HERO_NAME && process.env.HERO_WEAPONS){
                this.hero = {name: process.env.HERO_NAME, weapons: process.env.HERO_WEAPONS.split(';')}
            } else {
                throw new Error("INVALID CONFIG");
            }
        }
        
    }
}

module.exports = new heroConfig();