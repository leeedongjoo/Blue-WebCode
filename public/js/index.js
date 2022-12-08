/* eslint-disable no-undef */
const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');
const localUserName = localStorage.getItem('userName');


const userhackElement = document.querySelector('#hack');
const localUserhack = localStorage.getItem('userhack');
const userEmailElement = document.querySelector('#Email');
const localUserEmail = localStorage.getItem('userEmail');

const setUserNameInnerHtml = (name) =>{
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};
if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () =>{
  const userName = prompt('이름을 입력해 주세요.');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

const setUserEmailInnerHtml = (Email) =>{
  userEmailElement.innerHTML = `${Email}`;
  userEmailElement.textContent = Email;
};
const setUserhackInnerHtml = (hack) =>{
  userhackElement.innerHTML = `${hack}`;
  userhackElement.textContent = hack;
};
if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}
if (localUserhack) {
  setUserhackInnerHtml(localUserhack);
}

userEmailElement.onclick = () =>{
  const userEmail = prompt('이메일을 입력해 주세요.');
  let count = 0;
  let jcount = 0;
  for (i=0; i<=userEmail.length; i++) {
    const ac = userEmail[i];
    if ((ac<'A'||ac>'Z')&&(ac<'a'||ac>'z')&&(ac<'0'||ac>'9')&&ac!=='@'&&ac!=='.') {
      alert('형식에 어긋났습니다.');
      return false;
    } else {
      if (ac==='@') {
        count = count + 1;
      }
      if (ac==='.') {
        jcount = jcount + 1;
      }
    }
  }
  if (count!==1||jcount!==1) {
    alert('이메일 양식에 맞게 작성하세요(@ 과 .)');
    return false;
  }
  localStorage.setItem('userEmail', userEmail);
  setUserEmailInnerHtml(userEmail);
};
userhackElement.onclick = () =>{
  const userhack = prompt('학번을 입력해 주세요.');
  if (userhack.length<9) {
    alert('학번을 9자리 이상으로 다시 입력 해주세요.');
    return false;
  }
  // eslint-disable-next-line no-constant-condition
  for (i=0; i<=userhack.length; i++) {
    const ch = userhack[i];
    if (ch<'0'||ch>'9') {
      alert('숫자만 입력하세요');
      return false;
    }
  }
  localStorage.setItem('userhack', userhack);
  setUserhackInnerHtml(userhack);
};

// for (i=0; i<=userEmail.length; i++){
//   if(i)
// }
