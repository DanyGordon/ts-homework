function updateObjectInArray<T>(initialArray: Array<T>, keyToFind: string, keyValueToFind: string | number, patch: Partial<T>): Array<T> {
  const indx = initialArray.findIndex(item => item[keyToFind] === keyValueToFind);
  const newArray = initialArray.map(item => deepCopy<T>(item));
  if(indx) {
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