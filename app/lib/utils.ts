
export function hasTag(tags: any, searchedFor: string) {
  for (let i = 0; i < tags.length; i++) {
      if (tags[i].name === searchedFor) {
          return true
      }
  }
  return false
}