module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './app/admin/index.js',
      './app/blog/index.js'
    ]

    return config
  }
}
