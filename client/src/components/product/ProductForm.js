import React from "react";

const ProductForm = () => {
  return (
    <div>
      <form encType="multipart/form-data">
        <div>
          <input type="text" name="itemcode" placeholder="ex: 000000123896" />
          <input type="text" name="name" placeholder="Product name" />
        </div>
        <div>
          <input type="number" name="stock" placeholder="0" />
          <input type="number" name="price" placeholder="0" />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
