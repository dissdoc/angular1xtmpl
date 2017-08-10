module.exports = function(grunt) {

    return {
        js: {
            src: ['src/js/**/*.js'],
            dest: 'build/scripts.js'
        },
        css: {
            src: ['src/css/*.css'],
            dest: 'build/styles.<%= version %>.css'
        }
    }

};