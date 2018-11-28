

const demFunctions = {
    initializePositions(arrayOfObjects) {

        arrayOfObjects.forEach((e, i) => {
            e.position = i;
        })
    },

    increasePositions(arrayOfObjects) {
        arrayOfObjects.forEach((e, i) => {
            if (e.position == arrayOfObjects.length-1) {
                e.position = 0;
            } else {
                e.position++;
            }
        })
    },

    decreasePositions(arrayOfObjects) {
        arrayOfObjects.forEach((e, i) => {
            if (e.position == 0) {
                e.position = arrayOfObjects.length-1;
            } else {
                e.position--;
            }
        })
    },
}


export default demFunctions;