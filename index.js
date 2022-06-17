// The map() method - creates a new array with the results of calling a function for every array element
// The map() method calls the provided function once for each element in an array, in order

const numbers = [1, -1, 2, 3];

// const items = numbers.map(num => "<li>" + num + "</li>");

// console.log(items);

// const html = "<ul>" + items.join('') + "</ul>";
// console.log(html);

// const items = numbers.map(num => {
//     return {value: num}
//     // return obj;
// })

const items = numbers.map(num => ({value: num}));
    // return obj;

console.log(items);
