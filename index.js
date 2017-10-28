var recipes = {
  breakfast: "3 eggs",
  lunch: "3 bean soup",
  dinner: "meatloaf"
}

var obj = { "prop": "1"};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {['prop2']:"2"});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj['prop2'] = "2";
  return obj;
}

var obj3 = {prop3: '3'}
var newObj = Object.assign({}, obj3);

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectKey(object, key) {
  delete object.key;
  return object;
}
