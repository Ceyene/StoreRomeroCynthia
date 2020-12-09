//dependencies
import React from "react";

const Product = () => {
  return (
    <article className="ProductContainer">
      <div className="ProductIndicator">♥</div>
      <div className="Product">
        <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="Product" />
        <div className="ProductInfo">
          <h6 className="ProductCategory">Categoría</h6>
          <h4 className="ProductTitle">Producto</h4>
        </div>
      </div>
      <div className="ProductHover">
        <div className="Value">
          <p className="ProductValue">12000</p>
          <p>○</p>
        </div>
        <button className="ProductButton">Redeem now</button>
      </div>
    </article>
  );
};

export default Product;
