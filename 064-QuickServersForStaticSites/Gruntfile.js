module.exports = function(grunt) {  // All Gruntfiles export a function
    grunt.loadNpmTasks('grunt-contrib-connect'); // Loads the Connect plug-in

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'public', // The base path for static files
                    keepalive: true
                }
            }
        }
    });


    grunt.registerTask('default', ['connect:server']);  // Default command is aliased here
};