export default function HexaColor() {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const renderColorBoxes = () => {
    const colorBoxes = Array.from({ length: 32 }).map((_, index) => {
      const color = generateRandomColor();
      const boxStyle = {
        backgroundColor: color,
      };
      return (
        <div className="color-box" key={index} style={boxStyle}>
          <span className="hex-code">{color}</span>
        </div>
      );
    });

    return colorBoxes;
  };

  /*
  
In the given code snippet, the renderColorBoxes function uses the map method to generate an array of color boxes. Here's a breakdown of what's happening:

1. Array.from({ length: 100 }) creates a new array of length 100. This array doesn't contain any elements; it's simply an array with 100 empty slots.

2. The map method is called on the created array. It iterates over each element (in this case, the empty slots) and performs an operation on each element.

3. In the map callback function, the '_' parameter is used as a placeholder for the current element, which is not being used in the operation. The index parameter represents the index of the current iteration.

4. Inside the map callback function, generateRandomColor() is called to generate a random color using hexadecimal values. This function returns a random color in the form of a hexadecimal string, such as #AABBCC.

5. A boxStyle object is created with a single property backgroundColor, which is set to the generated random color.

6. The return statement returns a JSX <div> element representing a color box. It has a class name of "color-box", a unique key attribute based on the index, and a style attribute that applies the generated background color and inside of this div tag, a <span> tag has been used with css in index.css to display the hexcode on each boxes.

7. The map method continues iterating over all 100 elements, generating a color box for each iteration and adding it to the colorBoxes array.

8. Finally, the colorBoxes array is returned from the renderColorBoxes function.

By using the map method, the code efficiently generates an array of color boxes, where each box has a unique background color obtained from the generateRandomColor function. The resulting array of JSX elements can be rendered within the parent component to display the color boxes.
*/

  return (
    <div style={{ marginTop: "30%" }}>
      <h1>30 Days Of React</h1>
      <p>Hexadecimal Colors</p>
      <div className="hex-color-grid">{renderColorBoxes()}</div>
    </div>
  );
}
