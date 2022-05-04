const setupTags = recipes => {
  console.log("Hello from utils")
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      //   console.log(tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secontTag] = b
    return firstTag.localeCompare(secontTag)
  })
  //   console.log(allTags)
  return newTags
}

export default setupTags
