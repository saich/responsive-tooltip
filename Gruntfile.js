/*jshint node: true*/

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
        	all: ['*.js', '*.json'],
        	options: {
        		jshintrc: true,
        		extensions: 'json'
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
                    'dist/tooltip.min.js': ['tooltip.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
	grunt.registerTask('default', ['jshint', 'uglify']);
};
