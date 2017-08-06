/**
 * Load grunt configs
 * + Recurse concat files
 * Remove build directory
 * Render html file by template
 * build style files
 * build html by fast template
 * watching changes in files
 * load by hotspot
 * include angular js
 * build angular templates
 * build templates angular from each directory
 * check code by jslint
 * load test before build files
 * add mock server for services
 * add js6 support
 * go from 1.4 to 1.6 angular
 * may by add typescript js
 */


module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/**/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'build/sttyles.css'
            }
        },

        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['concat', 'uglify']);

};