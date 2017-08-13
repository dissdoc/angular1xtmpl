/**
 * + Init project with grunt
 * + Build js files and uglify its
 * + Load grunt configs
 * + Recurse concat files
 * + Remove build directory
 * + Render html file by template
 * + Remove bad files from build directory
 * + build style files less
 * build html by fast template like as jade
 * + watching changes in files
 * + load by hotspot
 * load server mock
 * include angular js
 * build angular templates
 * build templates angular from each directory
 * check code by jslint
 * load test before build files
 * load reports for test
 * add mock server for services
 * add js6 support
 * add rxjs
 * go from 1.4 to 1.6 angular
 * may by add typescript js
 * add mock server for sockets
 */


module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {
        config: {
            version: grunt.file.readJSON('package.json').version
        }
    });

};