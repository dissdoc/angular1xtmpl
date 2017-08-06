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