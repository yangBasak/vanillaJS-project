function submitForms() {
  const nickname = document.querySelector("#nickname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const password2 = document.querySelector("#confirmPassword");

  let isSuccess = canSubmit(nickname, email, password, password2)  
  return isSuccess
}

// submit 여부
function canSubmit(nickname, email, password, password2) {
  let answerArr = []
  answerArr.push(checkLength(nickname, 3))
  answerArr.push(confirmEmail(email))
  answerArr.push(checkLength(password, 6))
  answerArr.push(confirmPassword(password2, password))
  
  let isSuccess = true
  for(let i = 0; i<answerArr.length; i++){
    if(!answerArr[i]){
      isSuccess = false
    }
  }
  return isSuccess
}

// 메시지 표출
function showError(ele, msg) {
  ele.parentElement.className = "form-item error-text";
  ele.nextElementSibling.innerText = msg;
}
function correctValue(ele) {
  ele.parentElement.className = "form-item";
}

//유효성 검사
function checkLength(ele, length) {
  if(ele.value.length < length){
    showError(ele, `${length}글자 이상으로 적어주세요.`);
    return false
  }else{
    correctValue(ele)
    return true
  }
}
function confirmPassword(ele,password) {
  if(ele.value !== password.value || ele.value === ""){
    showError(ele, `비밀번호와 동일하게 적어주세요.`);
    return false
  }else{
    correctValue(ele)
    return true
  }
}
function confirmEmail(ele) {
  const emailExg = /^[A-z|0-9]([A-z|0-9]*)(@)([A-z]*)(\.)([A-z]*)$/
  if(!emailExg.test(ele.value)){
    showError(ele, `올바른 email 형식으로 적어주세요.`);
    return false
  }else{
    correctValue(ele)
    return true
  }
}

