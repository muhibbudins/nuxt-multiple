module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    },
    slugify: function(string) {
      return string.toLowerCase().replace(/ /g, '-')
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name:'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description:',
      'default': 'A Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author:'
    }
  },
  complete (data, {logger, chalk}) {
    let message = `
      ${chalk.green.bold('Multiple Nuxt')} already installed

      This projects already have dummy projects
      inside ${chalk.green.bold('app')} directory.

      With details:

      - App Name : Blog
        Source : app/blog/
        Listen On : 127.0.0.1:3050

      - App Name : Admin
        Source : app/admin/
        Listen On : 127.0.0.1:3060

    `

    if (!data.inPlace) {
      message += `
      To get started:
      
        cd ${data.destDirName}
        npm install # Or yarn
        npm run dev
      `
    } else {
      message += `
      To get started:
      
        npm install # Or yarn
        npm run dev
      `
    }

    logger.log(`
      ${message}

      --------------------------------

      Thanks for using ${chalk.green.bold('Multiple Nuxt')}
      Learn more at https://github.com/muhibbudins/nuxt-multiple

      Made with ${chalk.red.bold('♥')} by ${chalk.bold('@muhibbudins')}
    `)
  }
};
