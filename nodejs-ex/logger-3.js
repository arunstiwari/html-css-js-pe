class Logger {
    constructor(name) {
        this.name= name;
    }

    info(message){
        console.log(`info - class: ${message}`);
    }

    debug(message){
        console.log(`debug - class: ${message}`);
    }
    verbose(message){
        console.log(`verbose - class: ${message}`);
    }
}

module.exports = new Logger('DEFAULT');
