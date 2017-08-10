module.exports = {

    options: {
        relative: false
    },
    local_dependencies: {
        files: {
            'build/index.html': ['build/**/*.js', 'build/**/*.css']
        }
    }

};