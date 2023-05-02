class Formatter {
  //add static methods here
  static capitalize(word) {
      let array = word.split('')
      
      array[0] = array[0].toUpperCase()
      
      array = array.join('')
      return array
  }
  static sanitize(string) {

    let array = string.split(' ')

    for( let i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[^A-Za-z0-9-']+/g, "");
    }
    array = array.join(' ')
   
    return array
  }
  static titleize(string) {
    let array = string.split(' ')
    let i = 0
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    for(  i = 1; i < array.length; i++) {
      if(array[i] != "the" && array[i] != "a" && array[i] != "but" && array[i] != "of"&& array[i] != "and"&& array[i] != "for"&& array[i] != "at"&& array[i] != "by"&& array[i] != "from"&& array[i] != "an") {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      }
    }
    array = array.join(' ')
   console.log(array)
    return array
  }
}