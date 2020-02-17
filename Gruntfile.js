'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/*.js',
                    '/js/global.js'
                ],
                dest: '/js/build/production.js',
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['concat']);
};