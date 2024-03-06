import React from "react";
import '../css/sanpham.css';
export default function ItemSanPham(props){
    return(
<div className="khung">
                  <div className="product-block card" data-product-id="10" data-product-name={props.tensp}
                    data-product-price={props.gia} data-product-img={props.hinh}>
                    <a href="chitiet">
                      <div className="hinhsp">
                        <img className="hinh1" src={props.hinh}/>
                      </div>
                      <div className="box-iconsearch">
                        <img className="iconsearch" src="./img/iconsearch.png"/>
                      </div>
                    </a>
                    <button className="shopping btn-pd"><i className="fa-solid fa-cart-shopping pt-2"></i>
                      <p className="text-sp text-sp1">Thêm vào giỏ hàng</p>
                    </button>
                    <div className="ttsp">
                      <h3 className="tensp">
                        <a href="/chitiet"> {props.tensp}</a>
                      </h3>
                      <div className="khunggia">
                          <span className="gia">{props.gia}</span>
                          <span className="giacu">{props.giacu}</span>
                          
                      </div>
                      <div className="sale-off">
                        <p className="sale-off-percent">{props.tilegiam}</p>
                        <p className="sale-off-label">GIẢM</p>
                        </div>
                    </div>
                  </div>
                </div>
    )
}
    