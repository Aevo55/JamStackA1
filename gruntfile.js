module.exports = function(grunt) {

     // Project configuration
     grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       
       // sass config
       sass: {
         dist: {
           options: {
             style: 'compressed'
           },
           files: {
               '_site/css/style.css': '_src/sass/style.scss'
           }
         }
       },
       // watch config
       watch: {
         css: {
           files: '**/*.scss',
           tasks: ['sass']
         }
       }
     });
   
     // Load the plugin that provides the "sass" and "watch" tasks.
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
   
     // Register Default task(s) we can run in Terminal
     grunt.registerTask('default', ['watch','sass']);
   
   };
 