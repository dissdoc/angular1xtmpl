module.exports = function(grunt) {

    return {
        dist: {
            files: {
                'build/styles.<%= version %>.css': 'src/css/main.less'
            }
        },

        debug: {
            files: {
                'debug/styles.css': 'src/css/main.less'
            }
        }
    }

};