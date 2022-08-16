const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let n = result.input
    let a = parseInt(n / 1000);
    let b = parseInt((n / 100) % 10);
    let c = parseInt((n / 10) % 10);
    let d = parseInt(n % 10);

    if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0 && d % 2 == 0) {
        console.log('YES')

    } else {
        console.log('NO');

    }  
});
