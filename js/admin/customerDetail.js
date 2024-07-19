document.addEventListener("DOMContentLoaded", function () {
    includeSidebar();

    const estimateLink = document.getElementById("quote-link");
    estimateLink.addEventListener("click", (e) => {
        e.preventDefault();
        loadQuoteModal();
    });
});

function includeSidebar() {
    fetch("../../components/sidebar/sidebarAdmin.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("admin-sidebar-placeholder").innerHTML =
                data;
        });
}

function loadQuoteModal() {
    fetch("../../html/admin/quoteModal.html")
        .then((response) => response.text())
        .then((data) => {
            // 모달 컨테이너에 모달 HTML을 삽입
            var modalContainer = document.getElementById("modal-container");
            modalContainer.innerHTML = data;

            var modal = document.getElementById("modal");
            var span = document.getElementsByClassName("close")[0];

            // 모달 열기
            modal.style.display = "block";

            // 모달 닫기
            span.onclick = function () {
                modal.style.display = "none";
            };

            // 모달 외부 클릭 시 닫기
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        })
        .catch((error) => {
            console.error("Error loading modal:", error);
        });
}