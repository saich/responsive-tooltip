/*jshint node: true*/

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/'],
        jshint: {
        	all: ['*.js', '*.json'],
        	options: {
        		jshintrc: true,
        		extensions: 'json'
        	}
        },
        copy: {
            all: {
                files: [
                    {src: ['tooltip.js', 'tooltip.css'], dest: 'dist/'}
                ]
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: true,
                preserveComments: 'some'
            },
            all: {
                options: {
                    sourceMapName: 'dist/tooltip.min.map'
                },
                files: {
                    'dist/tooltip.min.js': ['dist/tooltip.js']
                }
            }
        },
        cssmin: {
            all: {
                src: 'dist/tooltip.css',
                dest: 'dist/tooltip.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
	grunt.registerTask('default', ['clean', 'jshint', 'copy', 'uglify', 'cssmin']);
};
