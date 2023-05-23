const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

const BarGraph = () => {
  const maxPopulation = Math.max(
    ...tenHighestPopulation.map((item) => item.population)
  );
  return (
    <div className="bar-graph-container">
      <div className="bar-graph-title">
        <h1>30 Days Of React</h1>
        <p>World population</p>
        <small>Ten most populated countries</small>
      </div>
      {tenHighestPopulation.map((item, index) => (
        <div className="bar" key={index}>
          <div className="bar-name">{item.country}</div>
          <div className="bar-wrapper" key={item.country}>
            <div className="bar-value">
              <div
                className="bar-fill"
                style={{ width: `${(item.population / maxPopulation) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="population">{item.population.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;

// code explanation:
/*
The code provided is a React component that renders a bar graph representing the population of the ten highest populated countries.

Here's a breakdown of the code:

1. tenHighestPopulation is an array of objects containing the country names and their respective populations.

2. The BarGraph component is a functional component defined using an arrow function. It returns JSX (React's syntax extension) to render the bar graph.

3. The maxPopulation variable is calculated using the Math.max function and the spread operator (...). It finds the maximum population value from the tenHighestPopulation array by mapping over the array and extracting the population values. This variable is used later to calculate the width of each bar.

4. The JSX inside the return statement represents the structure of the bar graph. The outermost element is a div with the class name "bar-graph-container", which serves as the container for the entire bar graph.

5. Inside the container, there is a div with the class name "bar-graph-title" that displays the title, subtitle, and description of the bar graph.

6. The tenHighestPopulation array is mapped over using the map function to generate a set of div elements representing each bar in the graph. Each iteration creates a div element with the class name "bar".

7. Inside each bar, there is a div with the class name "bar-name" that displays the name of the country.

8. Next, there is a div with the class name "bar-wrapper" that serves as a wrapper for the bar value. It contains a nested div with the class name "bar-value" and another nested div with the class name "bar-fill".

9. The width of the "bar-fill" div is dynamically set based on the population value of the country. It uses inline styling and the style attribute, where the width is calculated as a percentage of the maximum population value.

10. Finally, there is a div with the class name "population" that displays the population number for each country.

11. The BarGraph component is exported using the export default statement, making it available for import and use in other parts of the application.

Overall, this code generates a bar graph with bars representing the population of the ten highest populated countries. The width of each bar is determined based on its population value relative to the maximum population value.
*/
