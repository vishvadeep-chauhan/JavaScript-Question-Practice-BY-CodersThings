// const countdown = (start) => {
//   for (let i = start; i > 0; i--) {
//     setTimeout(() => console.log(i), (start - i) * 1000);
//   }
// };

// countdown(5);

const showEvenOdd = (n) => {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      if (i % 2 == 0) {
        console.log(`even: ${i}`);
      } else {
        console.log(`odd: ${i}`);
      }
    }, 1000);
  }
};

showEvenOdd(5);
