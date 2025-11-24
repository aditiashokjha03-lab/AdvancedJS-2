function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
    },
    display: function() {
      console.log("Current count:", count);
    }
  };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.display();  

// multiple counters
const counterA = createCounter();
const counterB = createCounter();

counterA.increment(); 
counterA.increment(); 

counterB.increment(); 
counterB.decrement(); 

counterA.display(); 
counterB.display();  
