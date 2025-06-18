function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";


}

document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.getElementsByClassName("domain-button");

  Array.from(buttons).forEach((button) => {
    const dropdown = button.nextElementSibling;
    let isPinned = false; // track if clicked

    if (dropdown && dropdown.classList.contains("skills-dropdown")) {
      // Show on hover
      button.addEventListener("mouseover", () => {
        dropdown.classList.add("show");
        button.style.background = "rgba(255, 255, 255, 0.2)";
        button.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
        button.style.transform = "scale(1.05)";
      });

      // Toggle pinning on click
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent bubbling
        isPinned = !isPinned;
        dropdown.classList.toggle("show", isPinned);
        button.style.background = "rgba(255, 255, 255, 0.2)";
        button.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
        button.style.transform = "scale(1.05)";
      });

      // Hide on mouse leave only if not pinned
      button.parentElement.addEventListener("mouseleave", () => {
        if (!isPinned) {
          dropdown.classList.remove("show");
          button.style.background = "rgba(255, 255, 255, 0.1)";
          button.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.15)";
          button.style.transform = "scale(1)";
          
        }
      });

      // Hide all dropdowns when clicking anywhere else
      document.addEventListener("click", () => {
        isPinned = false;
        dropdown.classList.remove("show");
        button.style.background = "rgba(255, 255, 255, 0.1)";
        button.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.15)";
        button.style.transform = "scale(1)";
      });

      // Prevent outside click from closing if clicked inside dropdown
      dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  });
});

