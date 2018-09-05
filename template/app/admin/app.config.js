const merge = require('deepmerge')
const nuxt = require('../../nuxt.config.js')

const extend = {
  /**
   * Define source directory
   */
  srcDir: __dirname,
  /**
   * Define build target
   */
  buildDir: '.nuxt/admin',

  /**
   * Custom head title
   */
  head: {
    title: 'Admin Page'
  }
}

/**
 * Export config
 */

module.exports = merge(nuxt, extend)
