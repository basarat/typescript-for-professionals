const main = () => {
  setTimeout(() => {
    console.log('1s');
    setTimeout(() => {
      console.log('2s');
      setTimeout(() => {
        console.log('3s');
      }, 1000);
    }, 1000);
  }, 1000);
};

main();