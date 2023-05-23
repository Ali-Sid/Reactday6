const NumberContainer = () => {
  const numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
  }

  const isEven = (number) => number % 2 === 0; // Check if a number is even
  const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }; // Check if a number is prime

  const getNumberBackground = (number) => {
    if (isPrime(number)) return "red";
    if (isEven(number)) return "green";
    return "yellow";
  }; // Determine the background color based on number properties

  return (
    <div className="number-container">
      {numbers.map((number) => (
        <div
          key={number}
          style={{ backgroundColor: getNumberBackground(number) }}
          className="number-item"
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumberContainer;

// Code Explanation

/*
The code provided defines a React component called NumberContainer that generates a container with numbers displayed inside colored boxes. Here's a breakdown of the code:

1. NumberContainer is a functional component defined using an arrow function. It returns JSX (React's syntax extension) to render the number container.

2. Inside the component, there is an empty array called numbers that will store the numbers to be displayed.

3. The for loop is used to populate the numbers array with values from 0 to 31. Each iteration of the loop pushes the current value of i into the numbers array.

4. There are two helper functions defined within the component:

a. isEven: This function takes a number as an argument and checks if it is even by performing the modulo operation (%) with 2 and comparing the result to 0. If the number is even, the function returns true; otherwise, it returns false.
b. isPrime: This function takes a number as an argument and checks if it is a prime number. It starts by checking if the number is less than 2, as prime numbers are greater than 1. Then, it iterates from 2 up to the square root of the number and checks if any of those values divide the number evenly. If a divisor is found, the function returns false; otherwise, it returns true.
5. The getNumberBackground function takes a number as an argument and determines the background color for that number's box based on its properties. If the number is prime, it returns "red". If the number is even, it returns "green". Otherwise, it returns "yellow".

6. The JSX inside the return statement represents the structure of the number container. The outermost element is a div with the class name "number-container", which serves as the container for the numbers.

7. Inside the container, the numbers array is mapped over using the map function to generate a set of div elements representing each number. Each iteration creates a div element with the class name "number-item".

8. Each number's div element is given a key attribute with the value of the number itself to ensure a unique identifier for each element.

9. The style attribute is used to set the background color of each number's box based on its value. It calls the getNumberBackground function with the current number and sets the backgroundColor style property accordingly.

10. Inside each number's box, the actual number is displayed as the text content of the div element.

11. The NumberContainer component is exported using the export default statement, making it available for import and use in other parts of the application.

Overall, this code generates a number container with colored boxes representing numbers. The background color of each box is determined based on the number's properties (whether it is prime or even).
*/
