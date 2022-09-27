// Usar programação funcional para converter strings em slugs de URL

function urlSlug(title) {

  let localString = title.toLowerCase().trim()
  
  let slug = localString.split(/[^\w-]+/g).join("-")

  console.log(slug)

  return(slug)

}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");