// Listen for messages from the main thread
onmessage = (event) => {
    const data = event.data;

    // Perform some task using the data
    const result = doSomeTask(data);

    // Send the result back to the main thread
    postMessage({ result });
  };

  // Define a function that performs some task
  function doSomeTask(data) {

    


    return data.toUpperCase();
  }
