module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**ѹ����������*/
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            builda: {
                src: 'src/js/docker.js',
                dest: 'dist/docker.min.js'
            },
            buildb: {
                src: 'src/js/dockerController.js',
                dest: 'dist/dockerController.min.js'
            },
            buildc: {
                src: 'src/js/dockerDirective.js',
                dest: 'dist/dockerDirective.min.js'
            },
            buildd: {
                src: 'src/js/dockerService.js',
                dest: 'dist/dockerService.min.js'
            }
        },
        /**�ϲ��ļ���������*/
        concat: {

        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};