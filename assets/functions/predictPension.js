exports.getTest = async function (req, res) {
    var nStart = new Data().getTime();

    const pythonShell = require('python-shell');
    var options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-U'],
        scriptPath: ''
    };

    pythonShell.pythonShell.run('get.py', options, function(err, results) {
        console.log(results);
        var nEnd = new Data().getTime();
        console.log(nEnd-nStart + "ms");
    })
}