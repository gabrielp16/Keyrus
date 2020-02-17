'use strict';

var src = 'src';
var dest = 'dist';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    '/js/global.js' // This specific file
                ],
                dest: '/js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: '/js/build/production.js',
                dest: '/js/build/production.min.js'
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: '../public',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass']
            }
        },
        availabletasks: {
            tasks: {
                options: {
                    filter: 'exclude',
                    tasks: ['availabletasks', 'tasks']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-available-tasks');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
    grunt.registerTask('tasks', ['availabletasks']);
};