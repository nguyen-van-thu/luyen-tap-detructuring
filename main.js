function detectCollision(objects, point) {
    var x = point.x, y = point.y;
    // let result = objects.find(item =>
    //     (x >= item.x && x <= item.x + item.width &&
    //      y >= item.y && y <= item.y + item.height) ? item : "")
    var result = "";
    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var element = objects_1[_i];
        if (x >= element.x && x <= element.x + element.width &&
            y >= element.y && y <= element.y + element.height) {
            result = element;
        }
    }
    return result;
}
var myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 }
];
console.log(detectCollision(myObjects, { x: 4, y: 2 }));
