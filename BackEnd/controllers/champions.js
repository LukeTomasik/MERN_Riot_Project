const axios = require('axios')



module.exports= {
    fullChampionList: async (req,res) => {
        console.log('you got me!')
        try {

            const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion.json')
            
            console.log(response.data)
        }
        catch {
            console.log('Something went wrong!')
        }
        
       
    }
}