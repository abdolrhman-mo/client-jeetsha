// Export products only if it contains any of this tags
export function hasTag(tags: any, searchedFor: string) {
  for (let i = 0; i < tags.length; i++) {
      if (tags[i].name === searchedFor) {
          return true
      }
  }
  return false
}