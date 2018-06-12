const pwd = require('./pwd');
const ls  = require('./ls');
const cat = require('./cat');

//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); // remove the newline
    const cmdArr = cmd.split(' ');
    let command = cmdArr[0];
    process.stdout.write('You typed: ' + cmd + '\n');

    if(command === 'pwd'){
        pwd.pwd();
    }

    else if(command === 'ls'){
        ls.ls();
    }

    else if(command === 'cat') {
        cat.cat(cmdArr[1]);
    }

});