const {info, verbose, debug} = require('./logger');
const logger = require('./logger-1');
const Logger = require('./logger-2');
const Logger1 = require('./logger-3');


const {constants} = require('fs');
const {copyFile} = require('fs/promises');

const copyFileToDestination = async ()=> {
    try {
        await copyFile('source.txt', 'destination.txt');
        console.log(' File has been successfully copied');
    }catch (e) {
        console.log(' Exception while copying :',e);
    }
}

copyFileToDestination();