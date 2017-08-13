module.exports = {

    options: {
        livereload: true
    },
    files: ['src/css/*.less', 'src/js/**/*.js'],
    tasks: ['copy:debug', 'less:debug', 'htmlbuild:debug']

};