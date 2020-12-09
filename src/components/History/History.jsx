//dependencies
import React from "react";

const History = () => {
  return (
    <section className="History">
      <h4 className="TertiaryTitle">Redeem History</h4>
      <div className="HistoryList">
        <div className="HistoryProduct">
          <img src="https://dummyimage.com/600x400/000/fff.jpg" alt="Product" />
          <div className="ProductInfo">
            <h4 className="ProductTitle">Producto</h4>
            <h6 className="ProductCategory">12000 pts</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
