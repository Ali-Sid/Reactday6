// 30DaysOfReact: Day6 - Mapping Arrays

// Exercises: Level 1

// 1. Why you need to map an array ?
// We need to map an array to render list of elements dynamically. When you have an array of data and want to render a component for each item in the array, you can use the map() function to iterate over the array and return a new array of React components.

// 2. Why we need keys during mapping an array ?
// Keys in react are used to identify the items that have changed, removed, or added to give identity to the element. The keys should be unique and id can be used as keys. If we do not pass key to React during mapping it raises a warning on the browser.

// 3. What is the importance of destructuring your code ?
// Destructuring in React allows you to extract values from props and state objects, improving code readability and reducing repetition. It provides a cleaner syntax for accessing and using specific values, simplifies nested object handling, enables default values, and enhances component composition.Using destructuring in React leads to more concise and maintainable code.

// 4. Does destructuring make your code clean and easy to read ?
// Yes, Destructuring makes your code clean and easy to read as it allows you to extract values from props, state objects and has a cleaner syntax.


// Exercise: Level 2
// 1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component
// refer App.jsx