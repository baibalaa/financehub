document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const docList = document.getElementById("docList");
    const docs = docList.getElementsByTagName("li");
  
    searchInput.addEventListener("input", function () {
      const filter = searchInput.value.toLowerCase();
  
      Array.from(docs).forEach((li) => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(filter) ? "list-item" : "none";
      });
    });
  });
  