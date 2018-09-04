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
      'message': 'Project name :'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description :',
      'default': 'A Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author :'
    }
  },
  completeMessage: ''+
    '{{#inPlace}}' + 
      'To get started:\n\n  npm install # Or yarn\n  npm run dev' +
    '{{else}}' +
      'To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev' +
    '{{/inPlace}}'
};
