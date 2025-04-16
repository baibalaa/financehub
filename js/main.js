document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const docList = document.getElementsByClassName("doc-list")[0];
    const docs = docList.getElementsByTagName("li");
  
    // Event listener for the search input and category filter
    searchInput.addEventListener("input", filterDocuments);
    categoryFilter.addEventListener("change", filterDocuments);
  
    function filterDocuments() {
      const filterText = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
  
      Array.from(docs).forEach((li) => {
        const text = li.textContent.toLowerCase();
        const categoryClass = li.className;
  
        // Check if the document matches the search and category filter
        const matchesSearch = text.includes(filterText);
        const matchesCategory = selectedCategory === "all" || categoryClass === selectedCategory;
  
        if (matchesSearch && matchesCategory) {
          li.style.display = "list-item";
        } else {
          li.style.display = "none";
        }
      });
    }
  });
  