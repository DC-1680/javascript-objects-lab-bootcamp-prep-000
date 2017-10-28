var recipes = {
  breakfast: "3 eggs",
  lunch: "3 bean soup",
  dinner: "meatloaf"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  console.log(object;)
  var newObj = Object.assign({}, object);
  delete newObj.key;
  console.log(newObj);
  return newObj;
}

function destructivelyDeleteFromObjectKey(object, key) {
  delete object.key;
  return object;
}
