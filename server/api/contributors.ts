import { load } from 'cheerio';

export default defineEventHandler(async (event) => {
  const { file } = useQuery(event);
  const githubUrl = 'https://github.com';
  const repo = 'zenojunior/zenojunior.com';
  const branch = 'main';

  if (!file) return []

  const url = [githubUrl, repo, 'contributors-list', branch, file].filter((path) => !!path).join("/");

  return await $fetch(url)
    .then(html => {
      const $ = load(html.toString());

      const contributors = $('ul li').map(function () {
        return {
          username: $(this).find('a').text().trim(),
          url: githubUrl + $(this).find('a').attr('href').trim(),
          avatar: $(this).find('img').attr('src'),
        }
      }).get();

      return contributors
    })
    .catch(() => {
      return []
    })

})
