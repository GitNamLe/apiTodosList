var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds135963.mlab.com:35963/namgo';
    }
    
}