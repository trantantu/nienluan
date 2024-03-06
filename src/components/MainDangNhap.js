import React from "react";
import '../css/style.css';
import '../css/dangnhap.css';
export default function MainDangNhap(){
    return(
        <div className="dangnhap py-5">
        <div className="wrapper">
  <div className="form-box login">
    <h2>Đăng nhập</h2>
    <form
      action="sanpham.html"
      method="post"
      onsubmit="return frmValidateLogin()"
      name="dangnhap"
    >
      <div className="input-box">
        <span className="icon">
          <ion-icon name="person-outline" />
        </span>
        <input type="text" name="username" required="" />
        <label>Tên đăng nhập</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="lock-closed-outline" />
        </span>
        <input type="password" name="pass" required="" />
        <label>Mật khẩu</label>
      </div>
      <div className="remember-fogot">
        <label>
          <input type="checkbox" />
          Nhớ mật khẩu
        </label>
        <a href="#">Quên mật khẩu?</a>
      </div>
      <button type="submit" className="blg">
        Đăng nhập
      </button>
      <div className="login-register">
        <p>
          {" "}
          Tạo tài khoản:
          <a href="#" className="register-link">
            {" "}
            Đăng ký
          </a>
        </p>
      </div>
    </form>
  </div>
  <div className="form-box register">
    <h2>Đăng ký</h2>
    <form
      action="#"
      method="post"
      onsubmit=" return frmValidateRegister()"
      name="dangky"
    >
      <div className="input-box">
        <span className="icon">
          <ion-icon name="person-outline" />
        </span>
        <input type="text" name="username" required="" />
        <label>Tên đăng nhập</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="mail-outline" />
        </span>
        <input type="text" name="email" required="" />
        <label>Email</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="lock-closed-outline" />
        </span>
        <input type="password" name="pass" required="" />
        <label>Mật khẩu</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="lock-closed-outline" />
        </span>
        <input type="password" name="pass2" required="" />
        <label>Nhập lại mật khẩu</label>
      </div>
      <button type="submit" className="blg">
        Đăng ký
      </button>
      <div className="login-register">
        <p>
          Đã có tài khoản
          <a href="#" className="login-link">
            Đăng nhập
          </a>
        </p>
      </div>
    </form>
  </div>
</div>
</div>
    )
}