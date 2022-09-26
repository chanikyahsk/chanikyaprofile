# Map
> it is used to iterate over the array
> it always return the same length of output array as input array
> it is used to apply the logics(add, sub, mul, div)

var a = [4,8,6,23,67,90,12,5]
a.map((data) => {return data*2})
[8, 16, 12, 46, 134, 180, 24, 10]

var a = [4,8,6,23,67]
a.map((abc) => {return `<p>${abc}</p>`})
['<p>4</p>', '<p>8</p>', '<p>6</p>', '<p>23</p>', '<p>67</p>']







# Filter
> filter is use ton filter out the IDBCursorWithValue;
> it may or may not return the same length of output array as input array
> Filter only return those data for which output or condition is true

var a = [4,8,6,23,67,90,12,5]
a.filter((data) => {return data>30})
 [67, 90]

var a = [-1,0,2]
a.map((data) => {return data*2})
[-2, 0, 4]
a.filter((data) => {return data*2})
[-1, 2]

//// callback > when you call function inside another function
a.map (()=>{})