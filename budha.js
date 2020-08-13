#!/usr/bin/env node
const argv = require('yargs')
 .usage('Usage: $0')
 .command('summon', 'Summon the budha', () => {}, () => {
  require('./summon/budha')()
 })
 .example('budha summon', 'Summon the budha to console')
 .help()
 .argv

module.exports = argv



