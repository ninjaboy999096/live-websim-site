fetch("https://raw.githubusercontent.com/ninjaboy999096/live-websim-thing/refs/heads/main/site.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
  });
