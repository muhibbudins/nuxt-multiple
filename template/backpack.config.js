module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './app/blog/index.js',
      './app/admin/index.js'
    ]

    return config
  }
}
