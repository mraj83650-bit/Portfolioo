<script>
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Day Mode";
        } else {
            themeBtn.textContent = "🌙 Night Mode";
        }
    });
</script>