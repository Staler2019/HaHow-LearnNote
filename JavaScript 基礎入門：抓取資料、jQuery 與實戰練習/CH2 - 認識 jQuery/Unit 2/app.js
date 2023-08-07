const url = "http://jsonplaceholder.typicode.com/posts";

// = $.ajax({ url: url }); : ES6 簡寫方式
$.ajax({ url }).done((posts) => {
  // posts 已經轉成 json 格式
  posts.forEach((post) => {
    console.log(post.title);
  });
});
