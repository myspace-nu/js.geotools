module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!\n'+
                ' * geotools v<%= pkg.version %>\n'+
                ' * https://github.com/myspace-nu\n'+
                ' *\n'+
                ' * Copyright 2018 Johan Johansson\n'+
                ' * Released under the MIT license\n'+
                ' */\n'
            },
            build: {
                files: [
                    {
                        src: 'src/geotools.js',
                        dest: 'dist/geotools.min.js'
                    },
                    {
                        src: 'src/geotools-swedish-zipcodes.js',
                        dest: 'dist/geotools-swedish-zipcodes.min.js'
                    },
                    {
                        src: 'src/geotools-swedish-zipcodes-cities.js',
                        dest: 'dist/geotools-swedish-zipcodes-cities.min.js'
                    },
                    {
                        src: 'src/geotools-swedish-zipcodes-cities-counties.js',
                        dest: 'dist/geotools-swedish-zipcodes-cities-counties.min.js'
                    },
                    {
                        src: 'src/geotools-danish-zipcodes.js',
                        dest: 'dist/geotools-danish-zipcodes.min.js'
                    },
                    {
                        src: 'src/geotools-danish-zipcodes-cities.js',
                        dest: 'dist/geotools-danish-zipcodes-cities.min.js'
                    },
                    {
                        src: 'src/geotools-danish-zipcodes-cities-counties.js',
                        dest: 'dist/geotools-danish-zipcodes-cities-counties.min.js'
                    },
                    {
                        src: 'src/geotools-finnish-zipcodes.js',
                        dest: 'dist/geotools-finnish-zipcodes.min.js'
                    },
                    {
                        src: 'src/geotools-finnish-zipcodes-cities.js',
                        dest: 'dist/geotools-finnish-zipcodes-cities.min.js'
                    },
                    {
                        src: 'src/geotools-finnish-zipcodes-cities-counties.js',
                        dest: 'dist/geotools-finnish-zipcodes-cities-counties.min.js'
                    },
                    {
                        src: 'src/geotools-norwegian-zipcodes.js',
                        dest: 'dist/geotools-norwegian-zipcodes.min.js'
                    },
                    {
                        src: 'src/geotools-norwegian-zipcodes-cities.js',
                        dest: 'dist/geotools-norwegian-zipcodes-cities.min.js'
                    },
                    {
                        src: 'src/geotools-norwegian-zipcodes-cities-counties.js',
                        dest: 'dist/geotools-norwegian-zipcodes-cities-counties.min.js'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};