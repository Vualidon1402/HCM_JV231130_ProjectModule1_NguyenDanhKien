function rederHeader(data = null) {
  const origin = location.origin;
  return `
    <header>
          
            <div class="header-container">
              <div class="header-center">
              <a href="/" class="header-logo">
                  <img style="height:50px" src="${
                    location.origin
                  }/assets/img/logo/logo.jpg" alt="logo" />
                </a>
              <ul class="header-menu">
                <li class="header-menu-item">
                  <a style="color:red;"
                    href="/"
                    class="header-menu-link"
                    ><i class="fa-solid fa-house"></i></a
                  >
                </li>
                <li class="header-menu-item">
                  <a href="${
                    location.origin
                  }/category" class="header-menu-link">All NIKE</a>
                </li>
                
                <li class="header-menu-item"><a href="#" class="header-menu-link">Liên Hệ</a></li>
              </ul>
              <div class="header-authen">
              ${
                data
                  ? `Xin chào ${data.email} <img src="${data.avatar}"> <a class="header-authen-shop" href="/addtocart"><i style="color:red" class="fa-solid fa-cart-shopping"></i></a> <button href="/" onclick="logout()" class="header-authen-logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>`
                  : `
              
              <a class="header-authen-signin" href="http://127.0.0.1:5502/authen/login.html">Đăng Nhập</a>
              <a class="header-authen-signup" href="http://127.0.0.1:5502/authen/register.html">Đăng Ký</a>
              <a class="header-authen-shop" href="/addtocart"><i class="fa-solid fa-cart-shopping"></i></a> `
              }
              </div>
              </div>
              <div class="header-container-search">
            <label For="search" class="icon-search" ><i class="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" placeholder="Find the shoes you want here" id="search"  />
            </div>
            </div>
            
            
            
          
        </header>
    `;
}

function renderFooter() {
  return `
  <footer class="footer">
          <div class="footer-container">
          <div class="footer-list">
              <div class="footer-column">
                <a href="index.html" class="footer-logo">
                  <img src="${location.origin}/assets/img/logo/logo.jpg" alt="logo" />
                </a>
                <hr style="border: 0.5px solid green;width:246px" />
                <p class="footer-desc text">
                  <span class="text-medium">Kien2Hand</span> là cửa hàng bán đồ chính hãng <br /> đã qua sử dụng
                  uy tín top 10000 Việt Nam.
                </p>

                <p class="copyright">
                  ©2024<span class="text-medium">Kien2Hand.</span>
                </p>
              </div>
              <div class="footer-column">
                <h3 class="footer-heading heading-small">Thông tin</h3>
                <ul class="footer-links">
                  <li class="footer-item">
                    <a href="#" class="footer-link">Chính sách bảo mật</a>
                  </li>
                  <li class="footer-item">
                    <a href="#" class="footer-link">FAQs</a>
                  </li>
                  <li class="footer-item">
                    <a href="https://vualidon.io.vn/" class="footer-link"
                      >Chi nhánh cửa hàng Vualidon.io.vn</a
                    >
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h3 class="footer-heading heading-small">Dịch vụ khách hàng</h3>
                <ul class="footer-links">
                  <li class="footer-item">
                    <a href="#" class="footer-link">Hướng dẫn mua hàng</a>
                  </li>
                  <li class="footer-item">
                    <a href="#" class="footer-link">Hình thức thanh toán</a>
                  </li>
                  <li class="footer-item">
                    <a href="#" class="footer-link">Vận chuyển và giao nhận</a>
                  </li>
                  <li class="footer-item">
                    <a href="#" class="footer-link"
                      >Chính sách bảo hành và đổi trả</a
                    >
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h3 class="footer-heading heading-small">
                  Liên hệ với chúng tôi
                </h3>

                <div class="social">
                  <a href="#" class="social-item">
                    <img src="${location.origin}/assets/img/contact/Facebook.png" alt="" />
                  </a>
                  <a href="#" class="social-item">
                    <img src="${location.origin}/assets/img/contact/Twitter.png" alt="" />
                  </a>
                  <a href="#" class="social-item">
                    <img src="${location.origin}/assets/img/contact/Instagram.png" alt="" />
                  </a>
                  </div>
                  </div>
                  </div>
                  <br />
                  <hr style="border: 2px solid white" />
                  <div class="end">
                  <br />
                  <h5>Hỗ trợ thanh toán</h5>
                  <div class="end-list">
                  <div class="money">
                  <img src="${location.origin}/assets/img/bank/bank.a69b4cc78da356dce8042551b80f6f75.svg" alt="v" />
                  <img src="${location.origin}/assets/img/bank/card.2a473b2c0d9397efe6a955cbd6370422.svg" alt="v" />
                  <img src="${location.origin}/assets/img/bank/mastercard.29758bf8933bd55e8113c82e917afa8b.svg" alt="v" />
                  <img src="${location.origin}/assets/img/bank/momo.3c8e7017d0e44e8a5c97f7436941d3ea.svg" alt="v" />
                  <img src="${location.origin}/assets/img/bank/visa.bbd592192069f012fd034c979fcd18a9.svg" alt="v" />
                  <img src="${location.origin}/assets/img/bank/vnpay.9a52465f3495175e8cc3ba102cdac249.svg" alt="v" />
                  </div>
                  <div class="security">
                  <img src="${location.origin}/assets/img/bank/certificate.f25c5d212e74999b5e39610daaa0fa27 (1).svg" alt="v" />
                  </div>
                  </div>
                  </div>
                </div>
            
          
        </footer>
  `;
}

function createToken(data) {
  let dataJsonStr = JSON.stringify({ data, privateKey: "NDK" });
  let hashStr = ``;
  for (let i in dataJsonStr) {
    hashStr += dataJsonStr[i].charCodeAt(0) * 3 + "'";
  }
  return hashStr;
}

function decodeToken(token) {
  let baseStr = ``;
  for (let i in token.split("'")) {
    if (token.split("'")[i] == "") break;

    baseStr += String.fromCharCode(token.split("'")[i] / 3);
  }
  try {
    return JSON.parse(baseStr);
  } catch (err) {
    return false;
  }
}

function hash(str) {
  str = `asasd**_${str}_32423asdsa`;
  let hashStr = "";
  for (let i in str) {
    hashStr += str[i].charCodeAt(0);
  }
  return hashStr * 3 + "vualidon";
}

function checkLogin() {
  if (localStorage.getItem("token")) {
    let tokenData = decodeToken(localStorage.getItem("token"));
    if (tokenData.privateKey != "NDK") {
      localStorage.removeItem("token");
      return null;
    }
    return tokenData.data;
  } else {
    return null;
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
// Hàm fake id

const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const listProduct = [
  {
    id: 1,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 LOW DARK GREY.jpg",
    name1: "NIKE AIR JORDAN 1 MID SE LEGEND LIGHT BROWN ",
    oldPrice: "4,900,000đ",
    newPrice: "4,899,999đ",
  },
  {
    id: 2,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 LOW DUNE RED.jpg",
    name1: "NIKE AIR JORDAN 1 LOW DUNE RED",
    oldPrice: "4,800,000đ",
    newPrice: "4,799,999đ",
  },
  {
    id: 3,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 LOW SE CNY YEAR OF THE DRAGON.jpg",
    name1: "NIKE AIR JORDAN 1 LOW SE CNY YEAR OF THE DRAGON",
    oldPrice: "6,500,000đ",
    newPrice: "6,499,999đ",
  },
  {
    id: 4,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 LOW SE LIGHT CURRY.jpg",
    name1: "NIKE AIR JORDAN 1 LOW SE LIGHT CURRY",
    oldPrice: "3,500,000đ",
    newPrice: "3,499,999đ",
  },
  {
    id: 5,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 MID FEELING THE BLUE 4500000.jpg",
    name1: "NIKE AIR JORDAN 1 MID FEELING THE BLUE",
    oldPrice: "2,500,000đ",
    newPrice: "2,499,999đ",
  },
  {
    id: 6,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 MID GS CHILE RED.jpg",
    name1: "NIKE AIR JORDAN 1 MID GS CHILE RED",
    oldPrice: "3,400,000đ",
    newPrice: "3,399,999đ",
  },
  {
    id: 7,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 MID GS WHITE SHADOW.jpg",
    name1: "NIKE AIR JORDAN 1 MID GS WHITE SHADOW",
    oldPrice: "3,300,000đ",
    newPrice: "3,299,999đ",
  },
  {
    id: 8,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 MID SE DUNE RED.jpg",
    name1: "NIKE AIR JORDAN 1 MID SE DUNE RED",
    oldPrice: "3,250,000đ",
    newPrice: "3,249,999đ",
  },
  {
    id: 9,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 MID SE LEGEND LIGHT BROWN.jpg",
    name1: "NIKE AIR JORDAN 1 MID SE LEGEND LIGHT BROWN",
    oldPrice: "2,900,000đ",
    newPrice: "2,899,999đ",
  },
  {
    id: 10,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 RETRO HIGH OG GS YELLOW OCHRE-3500000.jpg",
    name1: "NIKE AIR JORDAN 1 RETRO HIGH OG GS YELLOW OCHRE",
    oldPrice: "2,800,000đ",
    newPrice: "2,799,999đ",
  },
  {
    id: 11,
    img: "/assets/img/sneaker/nike/NIKE AIR JORDAN 1 RETRO LOW OG CNY YEAR OF THE DRAGON.jpg",
    name1: "NIKE AIR JORDAN 1 RETRO LOW OG CNY YEAR OF THE DRAGON",
    oldPrice: "2,700,000đ",
    newPrice: "2,699,999đ",
  },
  {
    id: 12,
    img: "/assets/img/sneaker/nike/NikeAirJordan1LowSeLegendCoffee-4850000.jpg",
    name1: "NIKE AIR JORDAN 1 LOW SE LEGEND COFFEE",
    oldPrice: "2,900,000đ",
    newPrice: "2,899,999đ",
  },
];
localStorage.setItem("listProduct", JSON.stringify(listProduct));

// -----Hiển thị list hàng ra giao diện-----
function renderProducts() {
  const container = document.getElementById("sneaker-container");

  listProduct.forEach((product) => {
    const productHTML = `
      <div class="sneaker-item">
        <img src="${product.img}" alt="${product.name1}" />
        <p class="text-nike">${product.name1}</p>
        <p>Giá cũ: <span class="oldPrice">${product.oldPrice}</span></p>
        <p>Giá bán: <span class="newPrice">${product.newPrice}</span></p>
        <button onclick="addToCart('${product.id}')">Thêm vào giỏ hàng</button>
      </div>
    `;

    container.innerHTML += productHTML;
  });
}

function addToLocal() {
  localStorage.setItem("users", JSON.stringify(usersLocal));
}

// --------add to cart--------
function addToCart(productId) {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (!userLocal) {
    alert("Bạn cần đăng nhập để sử dụng chức năng này");
    return;
  }

  const productToAdd = listProduct.find((product) => product.id == productId);

  if (!productToAdd) {
    console.error("Product not found");
    return;
  }

  const matchProduct = userLocal.cart.find(
    (product) => product.productId == productId
  );

  if (matchProduct) {
    matchProduct.quantity += 1;
  } else {
    userLocal.cart.push({
      productId: productToAdd.id,
      imageUrl: productToAdd.img,
      description: productToAdd.name1,
      price: productToAdd.newPrice,
      quantity: 1,
    });
  }

  localStorage.setItem("users", JSON.stringify(usersLocal));
  setTimeout(() => {
    window.location.href = "/addtocart";
  }, 2000);

  alert("Sản phẩm đã được thêm vào giỏ hàng");
}

// ------Hiển thị ở giỏ hàng------

function displayCart() {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    const cart = userLocal.cart;
    const tbody1Element = document.getElementById("tbody1"); // Giả sử bạn có một phần tử tbody với ID này để hiển thị giỏ hàng

    // Xóa nội dung trước đó trong tbody1
    tbody1Element.innerHTML = "";

    for (const item of cart) {
      // Tạo HTML cho mỗi mục giỏ hàng
      const cartItemHTML = `
        <tr>
          <td><img src="${item.imageUrl}" alt="${item.description}" style="width: 100px; height: 100px; object-fit: cover;"></td>
          <td>${item.description}</td>
          <td>
            <div>
              <button style="color: white; height: 30px; width: 30px; background-color: gray; font-size: 20px; font-weight: 300;" onclick="increaseQuantity('${item.productId}')">+</button>
              <span style="color: black;">${item.quantity}</span>
              <button style="color: white; height: 30px; width: 30px; background-color: gray; font-size: 20px; font-weight: 300;" onclick="decreaseQuantity('${item.productId}')">-</button>
            </div>
          </td>
          <td>${item.price}</td>
          <td><button class="btn-delete" onclick="deleteProduct('${item.productId}')">DELETE</button></td>
        </tr>
      `;

      // Thêm HTML cho mục giỏ hàng hiện tại vào tbody1
      tbody1Element.innerHTML += cartItemHTML;
    }
  }
}

// Gọi hàm displayCart khi DOM đã được tải đầy đủ
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
});

function deleteProduct(productId) {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    // Find the index of the product in the cart array
    const indexToDelete = userLocal.cart.findIndex(
      (product) => product.productId == productId
    );

    if (indexToDelete !== -1) {
      // Remove the product from the cart array
      userLocal.cart.splice(indexToDelete, 1);

      // Update the localStorage
      localStorage.setItem("users", JSON.stringify(usersLocal));

      // Update the display
      displayCart();
    } else {
      console.error("Product not found in the cart");
    }
  }
}

function updateQuantity(productId, newQuantity) {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    const cart = userLocal.cart;

    // Tìm sản phẩm trong giỏ hàng và cập nhật số lượng
    const updatedCart = cart.map((item) => {
      if (item.productId == productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Cập nhật giỏ hàng trong local storage
    userLocal.cart = updatedCart;
    localStorage.setItem("users", JSON.stringify(usersLocal));

    // Gọi lại hàm hiển thị giỏ hàng và tính tổng số tiền
    displayCart();
    calculateTotal();
  }
}

function increaseQuantity(productId) {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    const cart = userLocal.cart;

    // Tìm sản phẩm trong giỏ hàng
    const selectedItem = cart.find((item) => item.productId == productId);

    if (selectedItem) {
      const newQuantity = selectedItem.quantity + 1;
      updateQuantity(productId, newQuantity);
    }
  }
}

function decreaseQuantity(productId) {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    const cart = userLocal.cart;

    // Tìm sản phẩm trong giỏ hàng
    const selectedItem = cart.find((item) => item.productId == productId);

    if (selectedItem && selectedItem.quantity > 1) {
      const newQuantity = selectedItem.quantity - 1;
      updateQuantity(productId, newQuantity);
    }
  }
}

function calculateTotal() {
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const email = localStorage.getItem("loginId");

  const userLocal = usersLocal.find((user) => user.email === email);

  if (userLocal && userLocal.cart) {
    const cart = userLocal.cart;

    // Tính tổng số tiền
    const total = cart.reduce((accumulator, item) => {
      // Loại bỏ ký tự đơn vị tiền tệ và chuyển đổi thành số
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return accumulator + item.quantity * price;
    }, 0);

    // Hiển thị tổng số tiền ở đây, ví dụ: giả sử bạn có một phần tử có ID là "totalAmount" để hiển thị tổng số tiền
    const totalAmountElement = document.getElementById("totalAmount");
    if (totalAmountElement) {
      // Sử dụng toLocaleString() để định dạng số với dấu phẩy ngăn cách
      totalAmountElement.textContent = `Total: ${total.toLocaleString()}đ`;
    }
  }
}

// ------------ const type = urlParams.get("type"); ---------
