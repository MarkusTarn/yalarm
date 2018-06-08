const exec = require('child_process').exec;
const os = require('os').platform();
const timer = process.argv[2] * 1000 * 60 || 1000 * 60 * 30;
const url = process.argv[3] || 'https://www.youtube.com/watch?v=z4hQG-XTVa4';

function triggerAlarm() {
    switch (os) {
        case 'darwin' :
            exec(`open -a "Google Chrome" ${url}`, (error) => {
                console.log(error ? error : "Alarm started");
            });
            break;
        case 'win32':
            exec(`start chrome ${url}`, (error) => {
                console.log(error ? error : "Alarm started");
            });
            break;
        case 'linux':
            exec(`google-chrome ${url}`, (error) => {
                console.log(error ? error : "Alarm started");
            });
            break;
        case 'android':
            exec(`google-chrome ${url}`, (error) => {
                console.log(error ? error : "Alarm started");
            });
            break;
        default:
            console.log("Unfortunately your platform is unsupported")
    }
}

console.log(`Alarm will be triggered on ${new Date(Date.now() + timer).toLocaleString()}`);
setTimeout(triggerAlarm, timer);