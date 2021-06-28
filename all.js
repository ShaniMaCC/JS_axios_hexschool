// https://hexschool.github.io/ajaxHomework/data.json

// let arr = [];
// axios.get('https://hexschool.github.io/ajaxHomework/data.json')
//   .then(function (response) {
//      arr = response.data;
//     console.log('資料回傳了'); //2
//     renderData();
//   });

// function renderData(){ 
//     console.log(arr); //3
//     const title = document.querySelector(".title");
//     title.textContent = arr[0].name;
// }
  
// console.log(arr);  //1

//https://github.com/hexschool/nodejs_ajax_tutorial
//https://hexschool-tutorial.herokuapp.com/api/signin

const signupAccount = document.querySelector(".signupAccount");
const signupPassword = document.querySelector(".signupPassword");
const signupSend = document.querySelector(".signupSend");
const signupMessage = document.querySelector(".signupMessage");
signupSend.addEventListener("click",function(e){
  callSignup();
})

function callSignup(){
  if(signupAccount.value =="" || signupPassword.value==""){
    signupMessage.textContent="請確實填寫資料";
    signupAccount.value="";
    signupPassword.value="";
    return;
  }
let obj={};
obj.email = signupAccount.value;
obj.password = signupPassword.value;

axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',obj)
.then(function (response) {
  if(response.data.message =="帳號註冊成功"){
    signupMessage.textContent ="恭喜你帳號註冊成功";
  }
  else{
    alert("帳號註冊失敗!email已被使用請重新註冊");
  }
  signupAccount.value="";
  signupPassword.value="";
})
.catch(function (error) {
  console.log(error);
});
 }

const signinAccount = document.querySelector(".signinAccount");
const signinPassword = document.querySelector(".signinPassword");
const signinSend = document.querySelector(".signinSend");
const signinMessage = document.querySelector(".signinMessage");

signinSend.addEventListener("click",function(e){
  callSignin();
})

function callSignin(){
  if(signinAccount.value =="" || signinPassword.value==""){
    signinMessage.textContent="請確實填寫資料";
    signinAccount.value="";
    signinPassword.value="";
    return;
  }

  let obj={};

obj.email = signinAccount.value;
obj.password = signinPassword.value;


 axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',obj)
.then(function (response) {
  if(response.data.message=="登入成功"){
    signinMessage.textContent ="恭喜你登入成功";
  }
  else{
    signinMessage.textContent="此帳號或密碼資料錯誤";
  }
  signinAccount.value="";
  signinPassword.value="";
})
.catch(function (error) {
  console.log(error);
});
}