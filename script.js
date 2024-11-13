document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            // Toggle the expanded class to enlarge the box
            box.classList.toggle("expanded");

            // Show/hide options based on the expansion
            const options = box.querySelector(".options");
            if (box.classList.contains("expanded")) {
                options.style.display = "block";
            } else {
                options.style.display = "none";
            }
        });
    });
});
