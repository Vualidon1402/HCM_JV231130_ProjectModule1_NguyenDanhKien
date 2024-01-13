import { signInWithGoogle } from "./firebase.js";

if (checkLogin()) window.location.href = "/";

export function login(e) {
  e.preventDefault();
  let data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  // Khởi tạo login từ data
  let loginId = data.email;
  localStorage.setItem("loginId", loginId);

  let user = users.find((item) => item.email == data.email);
  if (!user) {
    FuiToast.error("Tài khoản không tồn tại");
    return;
  }

  if (hash(data.password) != user.password) {
    FuiToast.error("Mật khẩu không chính xác");
    return;
  }

  let token = createToken(user);
  localStorage.setItem("token", token);
  setTimeout(function () {
    FuiToast.success("Đăng nhập thành công!");
  }, 200);

  // Chuyển hướng sau khi đăng ký thành công
  setTimeout(function () {
    location.href = "/";
  }, 500);
}

document.getElementById("formSignIn").addEventListener("submit", (e) => {
  login(e);
});

document
  .getElementById("signInWithGoogle")
  .addEventListener("click", async () => {
    try {
      let result = await signInWithGoogle();
      let users = JSON.parse(localStorage.getItem("users") || "[]");

      let checkUser = users.find((user) => user.email == result.user.email);

      if (checkUser) {
        // login
        localStorage.setItem("loginId", result.user.email);
        let token = createToken(checkUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        // register + login
        let newUser = {
          id: Math.ceil(Date.now() * Math.random()),
          userName: Math.ceil(Date.now() * Math.random()),
          email: result.user.email,
          password: hash(Math.ceil(Date.now() * Math.random())),
          avatar: result.user.photoURL,
          cart: [],
        };

        users = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(users));
        let token = createToken(newUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err) {
      alert("Vui lòng thử lại");
    }
  });
