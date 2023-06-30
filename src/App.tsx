import "./App.css";

function App() {
  const expression = "coffee";

  function countCharacters(strng: string): number {
    const numberOfCharacters = strng.length;
    return numberOfCharacters;
  }

  function isEven(nmbr: number): boolean {
    return nmbr % 2 === 0;
  }

  function getParityMessage(bln: boolean): string {
    if (bln === true) {
      return "number is even";
    } else {
      return "number is not even";
    }
  }

  function processString(str?: string | number | boolean): string | undefined {
    if (str !== undefined) {
      return `Expression "${str}" has ${countCharacters(
        expression
      )} characters in it and this ${getParityMessage(
        isEven(countCharacters(expression))
      )}.`;
    } else {
      return "Expression not known, nothing to count.";
    }
  }

  return (
    <>
      <h3>Introduction to TS</h3>
      <div>{processString(expression)}</div>
      <div>{processString()}</div>
    </>
  );
}

export default App;
