document.getElementById("upload-button").addEventListener("click", function () {
  document.getElementById("profile-upload").click();
});

document
  .getElementById("profile-upload")
  .addEventListener("change", function (e) {
    const reader = new FileReader();

    reader.onload = function () {
      const image = document.getElementById("profile-image");
      image.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  });

document
  .getElementById("profile-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("프로필이 저장되었습니다!");
    // 실제 저장 로직은 여기에서 구현
  });
