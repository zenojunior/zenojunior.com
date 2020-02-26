const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    history: false,
  },
  () => {
    console.log('Deploy Complete!')
  }
)