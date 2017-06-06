/*function asyncMap(arr, mapper) {
    var q = Promise.resolve();
    return Promise.all(arr.map(function (v) {
        return q = q.then(function () {
            return mapper(v);
        })
    }))
}

asyncMap(['a', 'b', 'c'], function (v) {
    return new Promise(function (resolve) {
        console.log("Start " + v);
        setTimeout( function () {
            console.log("End " + v);
            resolve("foo" + v);
        }, 500);
    });
}).then(function (a) {
    console.log(a);
});*/

/*function asyncMap(arr, func) {
    var promise = Promise.resolve();
    return Promise.all(arr.map(function (value, index, array) {
        return promise = promise.then(function () {
            return func(value, index, array);
        })
    }))
}*/

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
            return promise.then (function () {
                return resultArray;
            });
    });
}

asyncMap(['a', 'b', 'c'], function (value, index, array) {
    return new Promise(function (resolve) {
        console.log("Start " + value, index, array);
        setTimeout( function () {
            console.log("End " + value, index, array);
            resolve("foo" + value, index, array);
        }, 500);
    });
})/*.then(function (resultArray) {
    console.log(resultArray);
})*/;
