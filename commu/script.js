function changeImage() {
    var starImage = document.getElementById("starImage");
    starImage.src = "/images/vuesax-bold-star.svg";
    starImage.alt = "Blue Star";

    // 페이지 이동 (예시로 다른 페이지로 이동)
    window.location.href = "commu_star.html";
}
function changeImagecolor() {
    var starImage = document.getElementById("starImage");
    starImage.src = "/images/vuesax-bold-star.svg";
    starImage.alt = "Blue Star";
}

// 버튼 요소에 마우스 오버 이벤트 리스너 추가
var button = document.querySelector('.star');
button.addEventListener('mouseover', changeImagecolor);