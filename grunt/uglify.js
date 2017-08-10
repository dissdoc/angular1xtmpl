module.exports = function(grunt) {

    return {
        build: {
            files: [{
                src: 'build/scripts.js',
                dest: 'build/scripts.<%= version %>.js'
            }]
        }
    }

};