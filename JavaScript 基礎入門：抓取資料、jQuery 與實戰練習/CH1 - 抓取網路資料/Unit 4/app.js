const api = "https://jsonplaceholder.typicode.com/posts";

// // or use "fetch" function GET
// // this is browser's function: return Promise Object
// fetch(api)
//   .then((resp) => {
//     console.log(resp);
//     return resp.json(); // can use "then" keyword again use return and you
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element.title);
//     });
//   });

// or use async/await to GET
async function getPost() {
  const resp = await fetch(api);
  const posts = await resp.json();

  posts.forEach((post) => {
    console.log(post.title);
  });
}

// 看你用法
getPost();
await getPost();
console.log("go!");


// CORS: cross-origin resource sharing: default-False, you'll be block if using browser's js
// -> block browser's js ->> use others way to crawler, eg: Python, Rudy, ...
