const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/zenojunior/zenojunior.com.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)