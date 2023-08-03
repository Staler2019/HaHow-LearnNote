const api = "https://jsonplaceholder.typicode.com/posts";

const req = new XMLHttpRequest();
// event listener
req.addEventListener("load", () => {
    const posts = JSON.parse(req.responseText)
    // console.log(posts)
//   console.log(123);

    posts.forEach(post => {
        console.log(post.title)
    });
});

// get method to api
req.open("GET", api);

req.send();
