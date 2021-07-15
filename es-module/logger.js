export function log(message){
    console.log(`Going to log ${message}`);
}

export const DEFAULT_LEVEL = 'Debug';

export const LEVELS = {
    error: 0,
    info: 1
}

export class Logger {
    constructor(name) {
        this.name =name;
    }
    log(message){
        console.log(`class -Going to log ${message}`);
    }
}