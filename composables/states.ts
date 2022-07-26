export const useTitle = () => useState<string>('title', () => {
  const { title } = useRuntimeConfig()
  return title;
})