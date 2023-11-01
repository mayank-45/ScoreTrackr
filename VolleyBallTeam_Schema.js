const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    team_name:{
        type:String
    },
    institute_name:{
        type:String
    },
    player_count:{
        type:String
    },
    player_info:[{
        full_name:{
            type:String
        },
        email_id:{
            type:String
        },
        mobile_number:{
            type:String
        }
    }]
})

const VolleyballTeam = mongoose.model('VolleyBallTeam',teamSchema)

module.exports = VolleyballTeam