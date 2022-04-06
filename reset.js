const fs = require('fs')
const {exec} = require('child_process')

const pkglock = './package-lock.json'
const node_modules = './node_modules'

try {
    if (fs.existsSync(pkglock)) {
        fs.unlinkSync(pkglock)
        console.log('removed package-lock.json')
      //file exists
    }
  } 
  catch(err) {
    console.error(err)
}

try {
    if (fs.existsSync(node_modules)) {
        fs.rmSync(node_modules, { recursive: true, force: true });
        console.log('removed node_modules directory')
      //file exists
    }
  } 
  catch(err) {
    console.error(err)
}


try {
    if (!fs.existsSync(pkglock)) {
        console.log('installing node packages')

        exec('npm install', (error, stdout, stderr) => {
            if (error) {
            console.error(`error: ${error.message}`);
            return;
            }
        
            if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
            }
        
            console.log(`stdout:\n${stdout}`);
        });
        
      //file exists
    }
  } 
  catch(err) {
    console.error(err)
}