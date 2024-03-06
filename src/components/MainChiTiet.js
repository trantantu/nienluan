import React from "react";
import '../css/chitiet.css';

export default function MainChiTiet(){
    return(
        <div className="app-container flex-full">
  <div className="column8">
    <div className="flex-full">
      <div className="image-product">
        <img
          className="image-product-link"
          src="./img/sanpham/SapGlanzenClay.jpg"
        />
      </div>
      <div className="infor-product">
        <h5 className="name-product">
          Sáp Vuốt Tóc Clay Wax
    
        </h5>
        <div className="flex item-center">
          <div className="flex item-center rating">
            <span className="rating-score">4</span>
            <div className="star-icon flex item-center">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
          </div>
          <span className="count-rating">50 đánh giá</span>
        </div>
        <div className="company">
          <span>
            Thương hiệu:
            <a href="#" className="company-name">
              Glanzen
            </a>
          </span>
        </div>
        <div className="price-product flex">
          <span className="price">360.000đ</span>
          <span className="old-price">400.000đ</span>
        </div>
        <div className="flex item-baseline type-product">
          <span>
            Loại Sản Phẩm:{" "}
            <a href="#" className="type-product-link">
              Sáp Vuốt Tóc
            </a>
          </span>
        </div>
        <div className="flex item-center soluong-product-block item-baseline">
          <span className="soluong-product">Số Lượng: </span>
          <input
            type="number"
            defaultValue={1}
            className="soluong-product-input"
          />
        </div>
        <div className="flex order-product">
          <button className="shopping-product">
            <i className="fa-solid fa-cart-plus" />
            <span className="shopping-product-title">THÊM GIỎ HÀNG </span>
          </button>
          <button className="buy-product">
            <span className="buy-product-title">MUA NGAY</span>
          </button>
        </div>
      </div>
    </div>
    <div className="detail-product">
      <div className="detail-product-title">
        <h5>Chi Tiết Sản Phẩm</h5>
      </div>
      <div className="detail-product-text">
        <p>
          Được sản xuất bởi công nghệ hiện đại của Đức - vùng đất của những sản
          phẩm chất lượng hàng đầu thế giới, Glanzen Clay mang lại chất lượng
          cực tốt cho người sử dụng. Sản phẩm thách thức thời gian với độ giữ
          nếp tới 12h giờ, khả năng thấm hút dầu cực tốt. Sáp vuốt tóc nam
          Glanzen Clay chứa những thành phần cao cấp trong sản phẩm của mình là
          Kaolin được nhập khẩu từ Đức và sáp Carnauba. Công nghệ Đức, thành
          phần Đức đã tạo nên sản phẩm chất lượng không thua kém gì các thương
          hiệu hàng đầu. Nhờ đó Glanzen trở thành sản phẩm bán chạy tại thị
          trường Việt Nam. thông tin thành phần sáp glanzen clay wax Thông tin
          thành phần sáp Glanzen Clay Wax
        </p>
      </div>
    </div>
  </div>
  <div className="column3">
    <div className="camket">
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-1.png" />
          <div className="camket-title">Cam kết 7 ngày hiệu quả</div>
        </div>
      </div>
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-2.png" />
          <div className="camket-title">Mua 1 hưởng 5 đặc quyền</div>
        </div>
      </div>
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-3.png" />
          <div className="camket-title">Chỉnh sách hoàn tiền 100%</div>
        </div>
      </div>
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-4.png" />
          <div className="camket-title">Chất lượng sản phẩm cao cấp</div>
        </div>
      </div>
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-5.png" />
          <div className="camket-title">Giao hàng siêu tốc</div>
        </div>
      </div>
      <div className="camket1">
        <div className="camket2 flex">
          <img src="./img/chitiet/usp-detail-icon-6.png" />
          <div className="camket-title">Nhân viên tư vấn nhanh chống</div>
        </div>
      </div>
    </div>
    <div className="hotline">
      <div className="hotline1 flex">
        <div>
          <i className="fa-solid fa-mobile-screen icon-phone" />
        </div>
        <div className="hotline-title">
          <div className="hotline-title-top">
            <span>Hotline đặt hàng</span>
          </div>
          <div className="hotline-title-bot">
            <span>0999.999.999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}