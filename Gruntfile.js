module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/js/<%= pkg.name %>.min.css'
            },
            build: {
                src: 'src/<%= pkg.name %>.css',
                dest: 'build/css/<%= pkg.name %>.min.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};