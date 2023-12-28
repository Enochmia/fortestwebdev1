const scrollable = document.querySelector('.scrollable');
const moving = document.querySelector('.moving');

// This should print 500, which is the same height as the child div
// "content".
console.log(scrollable.scrollHeight);

scrollable.addEventListener("scroll", e => {
  // This shows how far down in the element we've scrolled.
  let x = scrollable.scrollTop;
  console.log(scrollable.scrollTop);
  moving.style.WebkitTransform="translate(10px)";
})

