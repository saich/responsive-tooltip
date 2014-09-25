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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
	grunt.registerTask('default', ['jshint']);
};
