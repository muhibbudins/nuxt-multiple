module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './app/blog/index.js',
      './app/profile/index.js'
    ]

    return config
  }
}
