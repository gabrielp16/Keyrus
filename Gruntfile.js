module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/libs/*.js'
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

        sass: {
            dist: {
                files: {
                    'app/styles/css/styles.css': 'app/styles/scss/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
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
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-available-tasks');

    // Tasks
    grunt.registerTask('default', ['concat', 'sass', 'uglify']);
    grunt.registerTask('tasks', ['availabletasks']);
};