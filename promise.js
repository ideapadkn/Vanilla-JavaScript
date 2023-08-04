console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data");

//   const backendData = {
//     server: "https",
//     port: 300,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

// PROMISE FIXME:

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data");

//     const backendData = {
//       server: "https",
//       port: 300,
//       status: "working",
//     };

//     resolve(backendData);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         reject(data);
//       }, 2000);
//     });
//   })
//   .then((clienData) => {
//     console.log("Data received", clienData);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log('end')
//   })

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// sleep(2000).then(() => {
//   console.log("After 2 seconds");
// });
// sleep(4000).then(() => {
//   console.log("After 4 seconds");
// });

TODO:

// После всех промисов FIXME:
Promise.all([sleep(2000), sleep(4000)])
  .then(() => {
    console.log('All promises')
  })


// После первого промиса FIXME:
Promise.race([sleep(2000), sleep(4000)])
  .then(() => {
    console.log('Race promises')
  })