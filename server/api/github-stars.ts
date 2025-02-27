import { defineEventHandler } from 'h3'
import config from '~/config'

const CACHE_KEY = 'github-stars-count'
const CACHE_TTL = 60

function getApiUrl(repoUrl: string) {
  const [, owner, repo] = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/) || []
  return `https://api.github.com/repos/${owner}/${repo}`
}

export default defineEventHandler(async (event) => {
  const storage = useStorage()
  
  const cachedCount = await storage.getItem(CACHE_KEY)
  if (cachedCount) return Number(cachedCount)

  const apiUrl = getApiUrl(config.repositoryUrl)
  const response = await fetch(apiUrl)
  const data = await response.json()
  const starsCount = data.stargazers_count

  await storage.setItem(CACHE_KEY, String(starsCount), {
    ttl: CACHE_TTL
  })

  return starsCount
})
