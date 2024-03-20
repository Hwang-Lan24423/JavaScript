/* Bài tập JS ngày 17/1/204 */
// Bài 1: Switch case
var mang = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"];
var x = 5;
switch (x) {
    case 2:
      console.log("Thứ hai");
      break;
    case 3:
      console.log("Thứ ba");
      break;
    case 4:
      console.log("Thứ tư");
      break;
    case 5:
      console.log("Thứ năm");
      break;
    case 6:
      console.log("Thứ sáu");
      break;
    case 7:
      console.log("Thứ bảy");
      break;
    default:
      console.log("Chủ nhật");
      break;
  }
  // var y = 5;
  // switch (y) {
  //   case 2:
  //     console.log(mang[y - 2]);
  //     break;
  //   case 3:
  //     console.log(mang[y - 2]);
  //     break;
  //   case 4:
  //     console.log(mang[y - 2]);
  //     break;
  //   case 5:
  //     console.log(mang[y - 2]);
  //     break;
  //   case 6:
  //     console.log(mang[y - 2]);
  //     break;
  //   case 7:
  //     console.log(mang[y - 2]);
  //     break;
  //   default:
  //     console.log(mang[y - 2]);
  //     break;
  // }

//Bài 2: Switch case + array
var y = ("Thứ hai, Thứ ba, Thứ tư, Thứ năm, Thứ sáu, Thứ bảy, Chủ nhật");
switch (y) {
    case 2:
        console.log(y[x-2]);
        break;
    case 3:
        console.log(y[x-2]);
        break;
    case 4:
        console.log(y[x-2]);
        break;
    case 5:
        console.log(y[x-2]);
        break;
    case 6:
        console.log(y[x-2]);
        break;
    case 7:
        console.log(y[x-2]);
        break;
    case 8:
        console.log(y[x-2]);
        break;
    default:
        break;
}
// Bài 3: Func kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkAndPrintPrime(number) {
    if (isPrime(number)) {
        console.log(number + ' là số nguyên tố.');
    } else {
        console.log(number + ' không phải là số nguyên tố.');
    }
}

// Ví dụ kiểm tra số 7
checkAndPrintPrime(7);

// Ví dụ kiểm tra số 10
checkAndPrintPrime(10);

//Bài 4: Ma trận 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j] + ' ');
    }
    console.log('\n'); 
}

// Bài 5: Regex 
function checkPassword(password) {
    const regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;

if (regex.test(password)) {
      document.getElementById("r_password").innerHTML = "Password ok!";
      return true;
    } else {
      document.getElementById("r_password").innerHTML =
        "Password phải có ít nhất một chữ cái in hoa, ít nhất một số, ít nhất một chữ cái thường, và có ít nhất tám ký tự";
      return false;
    }
  }

// Hàm kiểm tra email
  function checkEmail(email) {
    const regex = /^(?=.[0-9])(?=.[a-zA-Z]).*@gmail.com$/;

if (regex.test(email)) {
      document.getElementById("r_email").innerHTML = "Email ok!";
      return true;
    } else {
      document.getElementById("r_email").innerHTML =
        "Email phải chứa ít nhất một số, một chữ cái, và kết thúc bằng @gmail.com";
      return false;
    }
  }

// Hàm submit form
  function submitForm() {
    // Lấy giá trị từ các ô input
    const hotenValue = document.getElementById("hoten").value;
    const emailValue = document.getElementById("email").value;
    const tendangnhapValue = document.getElementById("tendangnhap").value;
    const passwordValue = document.getElementById("password").value;

// Kiểm tra các ô input có rỗng không
    if (hotenValue === "") {
      alert("Họ tên không được để trống");
      return;
    }
    if (emailValue === "") {
      alert("Email không được để trống");
      return;
    }
    if (tendangnhapValue === "") {
      alert("Tên đăng nhập không được để trống");
      return;
    }
    if (passwordValue === "") {
      alert("Mật khẩu không được để trống");
      return;
    }

// Kiểm tra email và mật khẩu có hợp lệ không
    if (checkEmail(emailValue) && checkPassword(passwordValue) === false) {
      return;
    } else {
      // Xóa thông báo lỗi
      document.getElementById("hoten").innerHTML = "";
      document.getElementById("email").innerHTML = "";
      document.getElementById("tendangnhap").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      document.getElementById("r_email").innerHTML = "";
      document.getElementById("r_password").innerHTML = "";
    }

// Tạo một đối tượng chứa thông tin người dùng
    const info = {
      hoten: hotenValue,
      email: emailValue,
      tendangnhap: tendangnhapValue,
      matkhau: passwordValue,
    };

// Tạo một chuỗi HTML để hiển thị thông tin người dùng
    const result =
      "Họ và tên: " +
      info.hoten +
      "<br>" +
      "Email: " +
      info.email +
      "<br>" +
      "Tên đăng nhập: " +
      info.tendangnhap +
      "<br>" +
      "Mật khẩu: " +
      info.matkhau;

// Hiển thị thông tin người dùng lên trang web
    document.getElementById("ketqua").innerHTML = result;
  }