function updateObjectInArray<ObjectShape>(initialArray: Array<ObjectShape>, keyToFind: string, keyValueToFind: string | number, patch: Partial<ObjectShape>): Array<ObjectShape> {
  const indx = initialArray.findIndex(item => item[keyToFind] === keyValueToFind);
  const newArray = initialArray.map(item => deepCopy<ObjectShape>(item));
  if(indx || indx === 0) {
    newArray[indx] = { ...newArray[indx], ...patch };
  }
  return newArray;
}

function deepCopy<T>(obj: T): T {
  const keys = Object.keys(obj);
  const copy = {};

  for(const key of keys) {
    if(typeof obj[key] !== 'object') {
      copy[key] = obj[key];
    } else {
      copy[key] = deepCopy(obj[key]);
    }
  }
  
  return copy as T;
}
