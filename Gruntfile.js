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
		    js: {
		      files: [{
		      	expand: true,
		        cwd: 'assets/prod/js',
		        src: 'scripts.js',
		        dest: 'public/js',
		        ext: '.min.js',
		      }]
		    }
		},

	});	

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('css', ['concat:css', 'cssmin']);
	grunt.registerTask('js', ['concat:js', 'uglify']);
	grunt.registerTask('default', ['css', 'js']);
}
