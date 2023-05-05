import React, { useState, useEffect,useCallback } from 'react';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setInputNumber(parseInt(event.target.value));
  };


  const handleEnter = useCallback((event) => {
    event.preventDefault();
    if (isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("FizzBuzz");
    } else if (inputNumber % 3 === 0) {
      setAnswer("Fizz");
    } else if (inputNumber % 5 === 0) {
      setAnswer("Buzz");
    } else {
      setAnswer(inputNumber.toString() + " is not fizz or buzz" );
    }
  }, [inputNumber]);
  


return (
  <>

<div className='bg-green-300 h-screen w-screen font-serif'> 
<h1 className='text-4xl font-bold py-8 px-12' >FizzBuzz</h1>
<h2 className='text-2xs px-20'>
  FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple 
of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of 
three and five.
</h2>
  <div className='flex  justify-center pt-12  '>
   <form    onSubmit={handleEnter}>
        <label className='uppercase text-2xs justify-evenly ' >Enter a number : </label>
        <input className='bg-blue-200 rounded text-center m-3 ' type="number" value={inputNumber} onChange={handleInputChange} />
        <button className='px-8 bg-yellow-100 rounded-md hover:bg-slate-600' type="submit">Enter</button>
  </form>
  </div>
   

    <div className='flex flex-col py-5 items-center '>
       <h2  className='' >Number is <span>{inputNumber}</span> </h2>
       <h2  className=''>Answer is : <span>{answer}</span> </h2>
    </div>
</div>

       
     
    </>
  )
}

export default App
