module.exports = (message) => {
    console.log(`info - default: ${message}`);
}
module.exports.debug = (message) => {
    console.log(`debug: ${message}`);
}
module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`);
}


