
let shiftArrays = {

    //shifts last item to the front &, each item's index ++
    arrayShiftLeft(array) {
        let lh = array.length;
        let lastOne = array[lh - 1];
        array.splice(lh - 1, 1);
        array.unshift(lastOne);
        return array;
    },

    arrayShiftRight(array) {
        
        console.log('before:', array)
        let firstOne = array[0];
        array.splice(0, 1);
        array.push(firstOne)
        console.log('after:', array)
        return array;
    }
}

export default shiftArrays;