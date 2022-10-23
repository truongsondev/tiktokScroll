document.addEventListener("scroll", () => {
  const divElement = document.querySelector(".render");

  const ScrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const ScrollHeight = document.documentElement.scrollHeight;
  const ClientHeight = document.documentElement.clientHeight;

  const percents = Math.floor(
    (ScrollTop / (ScrollHeight - ClientHeight)) * 100
  );

  console.log(percents);

  divElement.style.width = percents + "%";
});
