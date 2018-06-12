const fs = require('fs');

module.exports.cat = function(userFile) {
    fs.readFile(userFile, (err, data) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(data)            
            process.stdout.write("\nprompt > ");
        }
    })
}