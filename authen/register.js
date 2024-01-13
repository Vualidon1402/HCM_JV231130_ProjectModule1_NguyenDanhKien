export function register(e) {
  e.preventDefault();
  let newUser = {
    id: Math.ceil(Date.now() * Math.random()),
    userName: e.target.userName.value,
    email: e.target.email.value,
    password: hash(e.target.password.value),
    avatar:
      "../assets/img/logo/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg",
    cart: [],
  };

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (
    users.find(
      (user) => user.email == newUser.email || user.userName == newUser.userName
    )
  ) {
    FuiToast.error("User Name hoặc Email trùng");
    return;
  }

  localStorage.setItem("users", JSON.stringify([...users, newUser]));

  // Sử dụng setTimeout để hiển thị thông báo sau 2 giây
  setTimeout(function () {
    FuiToast.success("Đăng ký thành công!");
  }, 200);

  // Chuyển hướng sau khi đăng ký thành công
  setTimeout(function () {
    location.href = "/authen/login.html";
  }, 1000);
}

document.getElementById("formRegister").addEventListener("submit", (e) => {
  register(e);
});
