module.exports = {

    debug: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: 'js/**',
                dest: 'debug/'
            },
            {
                expand: true,
                cwd: 'src/',
                src: 'vendor/**/*.js',
                dest: 'debug/'
            }
        ]
    },

    dist: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: 'vendor/**/*.js',
                dest: 'build/'
            }
        ]
    }

};