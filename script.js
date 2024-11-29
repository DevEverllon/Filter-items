document.getElementById("searchInput").addEventListener("input", function () {
  const filterValue = this.value.toLowerCase(); // Valor do filtro em minúsculas
  const items = document.querySelectorAll(".item"); // Seleciona os itens

  items.forEach((item) => {
    const itemText = item.textContent.toLowerCase(); // Texto do item em minúsculas
    if (itemText.includes(filterValue)) {
      item.classList.add("visible"); // Mostra o item
    } else {
      item.classList.remove("visible"); // Esconde o item
    }
  });
});

const input = document.getElementById("searchInput");
const items = document.querySelectorAll(".item");

input.addEventListener("input", function () {
  const filterValue = this.value.toLowerCase();

  items.forEach((item) => {
    const originalText = item.textContent;
    const lowerText = originalText.toLowerCase();

    // Verifica se o texto do item contém o valor do filtro
    if (lowerText.includes(filterValue) && filterValue !== "") {
      item.classList.add("visible");

      // Envolve a parte correspondente com a tag <span>
      const highlightedText = originalText.replace(
        new RegExp(`(${filterValue})`, "gi"), // Encontra o termo (case-insensitive)
        '<span class="highlight">$1</span>' // Envolve a correspondência em <span>
      );
      item.innerHTML = highlightedText; // Define o HTML do item com destaque
    } else {
      item.classList.remove("visible");
      item.textContent = originalText; // Restaura o texto original se não houver filtro
    }
  });
});

