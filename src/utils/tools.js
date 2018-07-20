export function dashToCamelCase(string) {
  return string.replace(/(-.)/g,function(word){
    return word[1].toUpperCase()
  })
} 