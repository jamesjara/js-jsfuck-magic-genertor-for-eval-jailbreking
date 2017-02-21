const stdio = require('stdio'),
      jsfuck = require('jsfuck').JSFuck;

const options = stdio.getopt({
        'function': {description: 'function', args: 1},
        'eval': {description: 'eval', args: 1},
});

const filter = jsfuck.encode("filter"),
    eval = options.eval,
    func = jsfuck.encode(options.function);

console.log('[]['+filter+']['+func+']('+eval+')()');
