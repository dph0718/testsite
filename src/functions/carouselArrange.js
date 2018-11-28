
function arrangeCarousel(containingArray, position, row) {

    let rowSize = containingArray.length;
    //firstBack = the first item to be displayed on the second row is 2 after the middle
    let firstBack = 2 + Math.floor(rowSize / 2);
    let distance;
    let className;
    let adjPos;
    let display;
    if (row === 'front') {
        className = 'front-row-item';
    } else {
        className = 'back-row-item';
    }

    //distance = (distance between midpoints of items) * (item's position) - (displacement to left)
    if (className == 'front-row-item') {
        distance = 72 * position - 95 + '%'
        adjPos = position;
    }

    //halfway = the middle of the back row's items
    if (className == 'back-row-item') {
        let halfWay = Math.floor(firstBack / 2);
        //adjPos = (((position )))
        adjPos = (((position + halfWay)) + rowSize) % rowSize;
        distance = (-33 * adjPos) + (halfWay * 33) + '%';
    };

    if (adjPos === rowSize - 1) {
        display = "none"
    } else {
        display = "block"
    }

    let stylin = {
        display,
        distance,
        className,
    };

    return stylin;
};
export default arrangeCarousel;