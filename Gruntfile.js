module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'build/sttyles.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat']);

};