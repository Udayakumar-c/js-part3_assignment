//-----------------------------------------------------------------------------
//Task 3: Asynchronous JavaScript - Theory
//---------------------------------------------------------------------------------
/*1. Explain what a Callback is and how it is used in asynchronous operations.
--------------------------------------------------------------------------------
Asynchronous JavaScript lets a program continue doing other work while waiting for a task to finish.
For example, when you order food at a restaurant, you can talk to your friends while the food is being
prepared. When it is ready, the waiter brings it to you.
Similarly, JavaScript can request data from a server and continue running other code while waiting. 
When the data arrives, it handles the result.
Callbacks, Promises and Async/Await are ways to tell JavaScript what to do when the result is ready.

1.Callback
------------
--A callback is a function passed into another function, to be run later.
--It handles async work by running after the task finishes (e.g., file read, timer, API call).
--The program does not wait. It continues, and the callback runs when the result is ready.

---------------------------------------------------------------------------------------------------
 2. Explain what a Promise is and describe its three states: Pending, Fulfi lled, and Rejected.
---------------------------------------------------------------------------------------------------
2.Promise
----------------------------------------------------------------------
--A Promise is a JavaScript object that stands for the future result of an async task.
--It is like a token: “I don’t have the result now, but I’ll give it to you later.”
--It ends in one of two ways: success (resolve) or failure (reject).
--The three states
  *Pending: The starting state. The task is still running, so there is no result yet.
  *Fulfilled: The task succeeded, and resolve(value) was called. The result is handled in .then().
  *Rejected: The task failed, and reject(error) was called. The error is handled in .catch().

 --A Promise moves once: Pending → Fulfilled or Pending → Rejected.
 --After that, the state never changes. It is “settled”.
-----------------------------------------------------------
3. Explain how Async/Await is used to handle Promises.
-------------------------------------------------------------
--async before a function makes it always return a Promise.
--await pauses the async function until the Promise is fulfilled or rejected.
-Errors are handled with try...catch.

-------------------------------------------------------------------------------------------
4. Mention one advantage of using Async/Await compared with traditional callbacks.
----------------------------------------------------------------------------------------
-- Async code reads like normal step-by-step (synchronous) code, which avoids callback hell and makes 
 code easier to read and debug.
-- Error handling is simpler: one try...catch instead of checking for errors in every nested callback.
*/

// example of all three approaches
//Callback

function getDataWithCallback(callback) {
  setTimeout(() => callback("Data received using Callback"), 500);
}

//Promise
function getDataWithPromise(success) {
  return new Promise((resolve, reject) => {
    // Pending until setTimeout finishes
    setTimeout(() => {
      if (success) resolve("Data received using Promise"); // Fulfilled
       else reject("Error: Promise was rejected");        // Rejected  
      }, 500);
  });
}

// Async/Await
async function getDataWithAsyncAwait() {
  try {
    const data = await getDataWithPromise(true); // Wait for the Promise to settle
    console.log(data.replace("Promise", "Async/Await"));
      await getDataWithPromise(false); // Handle the fulfilled value
     } catch (error) {
    console.log("caught with try...catch ->", error);    // Handle the rejected error
  }
}

getDataWithCallback((message) => {
  console.log(message); 
  getDataWithPromise(true)
    .then((data) => {
      console.log(data);  
      return getDataWithAsyncAwait();
     })
     .catch((err) => console.log("err"));    // Handle the rejected error
    });