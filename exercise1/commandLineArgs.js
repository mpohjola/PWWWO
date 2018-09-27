var fs = require('fs');

var dir = '.';

if (process.argv[2]) {
    let i = 2;
    while (i < process.argv.length) {
        dir = process.argv[i];
        i++;
        fs.readdir(dir, (err, files) => {
            if (err) return err;
            console.log(`\nDirectory: ${dir} \n`);
            for (file in files) {
                console.log(files[file]);
            }
        });
    }
} 