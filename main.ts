function detectCollision(objects, point) {

    let {x, y} = point;
    // let result = objects.find(item =>
    //     (x >= item.x && x <= item.x + item.width &&
    //      y >= item.y && y <= item.y + item.height) ? item : "")
    let result = "";
    for (const element of objects) {
        if (x >= element.x && x <= element.x + element.width &&
            y >= element.y && y <= element.y + element.height) {
            result = element;
        }
    }
    return result
}

const myObjects = [


    {x: 10, y: 20, width: 30, height: 30},


    {x: -40, y: 20, width: 30, height: 30},


    {x: 0, y: 0, width: 10, height: 5}


]

console.log(detectCollision(myObjects, {x: 4, y: 2}))