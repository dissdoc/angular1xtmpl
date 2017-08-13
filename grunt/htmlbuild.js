module.exports = function(grunt) {

    return {

        dist: {
            src: 'src/index.html',
            dest: 'build/',
            options: {
                prefix: '/',
                beautify: true,
                relative: true,
                scripts: {
                    prod: [
                        'build/js/scripts.<%= version %>.js'
                    ]
                },
                styles: {
                    prod: [
                        'build/styles.<%= version %>.css'
                    ]
                }
            }
        },

        debug: {
            src: 'src/index.html',
            dest: 'debug/',
            options: {
                prefix: '/',
                beautify: true,
                relative: true,
                scripts: {
                    prod: [
                        'src/js/**/*.js'
                    ]
                },
                styles: {
                    prod: [
                        'debug/*.css'
                    ]
                }
            }
        }

    };

};