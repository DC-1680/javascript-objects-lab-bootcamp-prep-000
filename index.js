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
  delete newObj.prop3;
  return obj3;
}

var obj4 = {'prop4': "4", 'prop5': "5"}

function destructivelyDeleteFromObjectKey(obj, key) {
  return Object.assign(obj, {[key]:value});
}
destructivelyDeleteFromObjectKey(obj, 'prop')
