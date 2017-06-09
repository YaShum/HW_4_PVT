/*асинхронные действия запускаются параллельно*/

function asyncMap(arr, func) {
    var promise = Promise.resolve();
    return Promise.all(arr.map(function (value, index, array) {
        return promise = promise.then(function () {
            return func(value, index, array);
        })
    }))
}

asyncMap(['a', 'b', 'c'], function (value, index, array) {
    return new Promise(function (resolve) {       
        setTimeout(function () {
            console.log(value, index, array);
            resolve(value, index, array);
        }, 500);
    });
}).then(function (resultArray) {
    console.log(resultArray);
});
