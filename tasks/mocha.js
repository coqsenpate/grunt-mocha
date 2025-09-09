'use strict';

const Mocha = require('mocha')

const DEFAULT_OPTIONS = {
	reporter: 'spec',
}

module.exports = function(grunt) {
	grunt.registerMultiTask('mocha2025', 'Run node unit tests with Mocha', function() {
		const done = this.async()
		if (this.filesSrc.length == 0) {
			grunt.log.writeln('No files to check...')
			done()
			return
		}

		const options = {
			...DEFAULT_OPTIONS,
			...this.options()
		}

		grunt.log.debug('Using options:',options)

		const mocha = new Mocha(options)

		for (const file of this.filesSrc) {
			grunt.log.debug('Adding file:',file)
			mocha.addFile(file)
		}

		mocha.run((failures)=> done(!failures))
	})
}
