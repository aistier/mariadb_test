var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//생성될 필드명을 정한다.
var URLchema = new Schema({
    url : String
});

module.exports = mongoose.model('urls', URLchema);