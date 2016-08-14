module.exports = function(grunt) {
	
	grunt.initConfig({
		
		concat: {
			css: {
			  src: ['assets/dev/css/**.css'],
			  dest: 'assets/prod/css/styles.css',
			},

			js: {
			  src: ['assets/dev/js/**.js'],
			  dest: 'assets/prod/js/scripts.js',
			},
			angular: {
			  src: [
			  	'app/app.module.js',
			  	'app/app.routes.js',
			  	'app/shared/**/**.js',
			  ],
			  dest: 'assets/prod/js/app.js',
			}
		},

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/prod/css',
		      src: ['styles.css'],
		      dest: 'public/css',
		      ext: '.min.css',
		    }]
		  }
		},

		uglify: {
		    angular: {
		     	src: ['assets/prod/js/app.js'],
		     	dest: 'public/js/app.min.js',
		    },
		},

	});	

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('css', ['concat:css', 'cssmin']);
	grunt.registerTask('js', ['concat:js', 'uglify:js']);
	grunt.registerTask('angular', ['concat:angular', 'uglify:angular']);
	grunt.registerTask('default', ['css', 'js']);
}
