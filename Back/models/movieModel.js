const mongoose = require('mongoose')

var Movies = mongoose.model('Movies',
{
    id : {type:Number},
    name : {type:String},
    year : {type: Number},
    desc : {type:String},
},'movies')

module.exports = { Movies }