async function loadHeader() {
  const response = await fetch("./utils/header.html"); // add ./ for relative path
  const headerHtml = await response.text();
  document.getElementById("header")!.innerHTML = headerHtml;
}

async function loadFooter() {
  const response = await fetch("./utils/footer.html");
  const footerHtml = await response.text();
  document.getElementById("footer")!.innerHTML = footerHtml;
}

loadHeader();
loadFooter();
