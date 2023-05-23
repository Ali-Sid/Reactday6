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
