import React from "react";
import '../css/style.css';
import '../css/dangnhap.css';
import MainSanPham from "./MainSanPham";

export default function Body(){
    return(
        <React.Fragment>
            <header>
    <div className="container py-3">
      <div className="row">
        <div className="col-3 logo">
          <img src="img/img_logo.png" alt="" />
        </div>
        <div className="col-5">
          <form className="d-flex tk-sp">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Nhập tên sản phẩm bạn muốn tìm"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              <i className="fa-solid fa-magnifying-glass text-white" />
            </button>
          </form>
        </div>
        <div className="col-4">
          {/* Tai Khoan - gio hang  */}
          <section className="hd-right">
            <div className="hd-item">
              <i className="fa-solid fa-user text-white" />
              <a href="dangnhap.html" target="_blank">
                {" "}
                Login
              </a>
            </div>
            <div className=" hd-item mx-3">
              <i className="fa-solid fa-cart-shopping text-white" />
              <a href="giohang.html" target="_blank">
                Giỏ hàng
              </a>
            </div>
            <div className="book hd-item">
              <i className="fa-regular fa-clipboard text-white" />
              <a href="datlich.html" target="_blank">
                Đặt lịch
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div className="container-fluid menu">
      {/* navbar */}
      <section className="menu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    {" "}
                    TRANG CHỦ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dichvu.html">
                    DỊCH VỤ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sanpham.html">
                    {" "}
                    SẢN PHẨM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </header>
  {/* phần nội dung */}
  <main id="main">
    <MainSanPham/>
  </main>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <a href="">
            {" "}
            <p>Thông tin về TRAVIS BARBER SHOP</p>
          </a>
          <a href="">
            {" "}
            <p>Chính sách bảo mật</p>
          </a>
          <p>Giờ phục vụ: 8h30 - 20h30 (Thứ 2-Chủ nhật)</p>
        </div>
        <div className="col-4 contact-fd">
          <p>Theo dõi chúng tôi trên:</p>
          <a href="">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="">
            <i className="fa-brands fa-tiktok" />
          </a>
        </div>
        <div className="col-4 ft-logo py-2">
          <img src="./img/img_logo.png" alt="" width="100%" height="100px" />
        </div>
      </div>
    </div>
  </footer>
          </React.Fragment>
    )
}