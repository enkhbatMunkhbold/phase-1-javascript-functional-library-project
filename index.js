const allArrays = (coll) => {
  if(typeof(coll) === 'object') {
    return Object.values(coll)
  } else {
    return [...coll]
  }
}

const myEach = (collection, callback) => {
  let newCollection = allArrays(collection)  
  for(const element of newCollection) {
    callback(element)
  }
  return collection
}

const myMap = (collection, callback) => {
  let newCollection = allArrays(collection)
  const modifiedColl = []
  for(const el of newCollection) {
    modifiedColl.push(callback(el))
  }
  return modifiedColl
}

const myReduce = (collection, callback, acc) => {
  let newCollection = allArrays(collection)
  let i = 0
  if(acc === undefined) {
    acc = newCollection[0]
    i = 1
  }

  for(i; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i])
  }
  return acc
}

const myFind = (collection, predicate) => {
  let newCollection = allArrays(collection)
  for(let item of newCollection) {
    if (predicate(item)) return item
  }
}

const myFilter = (collection, predicate) => {
  let newCollection = allArrays(collection)
  let filteredData = []
  for(let item of newCollection) {
    if(predicate(item)) {
      filteredData.push(item)
    } else {
      item
    }
  }
  return filteredData
}

const mySize = collection => {
  if(typeof(collection) === 'object') {
    return Object.keys(collection).length
  } else {
    return collection.length
  }
}

const myFirst = (array, num) => num === undefined ? array[0] : array.slice(0, num)
const myLast = (array, num) => num === undefined ? array[array.length - 1] : array.slice(-num)

// const mySortBy = (array, callback) => {
//   let arrObj = []
//   for(let i = 0; i < array.length; i++) {
//     const obj = {}
//     arrObj.push(obj[array[i]] = callback(array[i]))
//   }
  
//   return Object.keys(arrObj)
// }

const myKeys = obj => {
  const keys = []
  for(const key in obj){
    keys.push(key)
  }
  return keys
}

const myValues = obj => {
  const values = []
  for(const key in obj) {
    values.push(obj[key])
  }
  return values
}

// const unmodifiedTestArr = [1, 2, 3, 4]
// const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
// const testArr = unmodifiedTestArr.slice() // arr is [1, 2, 3, 4]
// const testObj = Object.assign({}, unmodifiedTestObj) // obj is {one: 1, two: 2, three: 3, four: 4}
// const callback = (acc, val, collection) => (acc + (val * 3))
// const reduceWithAcc = myReduce(testArr, callback, 10)
// console.log(reduceWithAcc)