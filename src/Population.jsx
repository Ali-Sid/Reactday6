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
