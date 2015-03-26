module.exports = function(grunt) {
    grunt.initConfig({
        distFolder: 'assets/build',
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            files: {
                src: 'assets/scripts/*.js',
                dest: 'assets/build/',
                expand: true,
                flatten: true
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/build',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify', 'cssmin']);
};