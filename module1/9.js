  const number = parseInt(prompt("Enter a positive number: "));
  let isPrime = true;

  if (number === 1) {
      document.querySelector(`#target`).innerHTML = "is neither a prime number nor a composite" + number
  }

  else if (number > 1) {
      for (let i = 2; i < number; i++) {
          if (number % i === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          document.querySelector(`#target`).innerHTML = "is a prime number " + number
      } else {
          document.querySelector(`#target`).innerHTML = "is not a prime number " + number
      }
  }
  else {
      document.querySelector(`#target`).innerHTML = "is not a prime number " + number
  }