/*асинхронные действия запускаются последовательно*/

function asyncMap(arr, func) {
    var promise = Promise.resolve();
    var resultArray = [];
    arr.map(function (value, index, array) {
        promise = promise
            .then(function () {
                return func(value, index, array);
            })
            .then(function () {
                return resultArray.push(value, index, array);
            });
        return promise.then(function () {
            return resultArray;
        });
    });
}

asyncMap(['a', 'b', 'c'], function (value, index, array) {
    return new Promise(function (resolve) {      
        setTimeout(function () {
            console.log(value, index, array);
            resolve(value, index, array);
        }, 500);
    });
});

