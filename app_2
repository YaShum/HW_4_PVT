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
        console.log("Start " + value, index, array);
        setTimeout(function () {
            console.log("End " + value, index, array);
            resolve("foo" + value, index, array);
        }, 500);
    });
}).then(function (resultArray) {
    console.log(resultArray);
});
