
// 🔁 Replace this function for every new example
function runExample() {
  // Example: Closure
  function outer() {
    let count = 0;

    return function inner() {
      count++;
      return count;
    };
  }

  const counter = outer();

  return [
    counter(),
    counter(),
    counter()
  ];
}

// ✅ DO NOT CHANGE BELOW (Reusable engine)
document.getElementById("runBtn").addEventListener("click", () => {
  const outputElement = document.getElementById("output");

  try {
    const result = runExample();
    outputElement.textContent = JSON.stringify(result, null, 2);
    console.log("Result:", result);
  } catch (error) {
    outputElement.textContent = error.message;
    console.error(error);
  }
});
