#!/usr/bin/env node
const handler = (argv) => {
 const message = require('./summon/budha')(argv.message)
 if (argv.console) {
  console.log(message)
 }
 if (!argv.lang && ! argv.output) {
  console.log(message)
  return
 }
}

const argv = require('yargs')
 .usage('Usage: $0')
 .command('summon', 'Summon the budha', () => {}, handler)
 .option('console', {
  alias: 'c',
  type: 'boolean',
  description: 'Output to console'
 })
 .option('message', {
  alias: 'm',
  type: 'string',
  description: 'Custom message output'
 })
 .example('budha summon', 'Summon the budha to console')
 .help()
 .argv

module.exports = argv



