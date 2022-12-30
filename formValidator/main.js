function submitForm(e) {
  const nickname = document.querySelector("#nickname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");

  isEmpty([nickname, email, password, confirmPassword]);
}

function isEmpty(inputArr) {
  inputArr.forEach((item) => {
    if (item.value === "") {
      showError(item, "입력해주세요");
    } else {
      checkLength(item, 3);
      confirmEmail(item);
      checkLength(item, 6);
      confirmPassword(item);
    }
  });
}

function showError(ele, msg) {
  ele.parentElement.className = "form-item error-text";
  ele.nextElementSibling.innerText = msg;
}

function correctValue(ele) {
  ele.parentElement.className = "form-item";
}

function checkLength(ele, length) {
  /**
   * 맞으면 correctValue(ele) 호출
   * 틀리면 showError(ele, msg) 호출
   */
}
function confirmPassword() {
  /**
   * 맞으면 correctValue(ele) 호출
   * 틀리면 showError(ele, msg) 호출
   */
}
function confirmEmail() {
  /**
   * 맞으면 correctValue(ele) 호출
   * 틀리면 showError(ele, msg) 호출
   */
}
