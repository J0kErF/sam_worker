"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    productInfo.location[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">קטגוריה:</p>
        <p className="text-base-bold">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold">₪ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">תיאור:</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">כמות במלאי:</p>
        <p className="text-heading3-bold">{productInfo.quantity}</p>
      </div>

      {productInfo.location.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">מיקום:</p>
          <div className="flex gap-2">
            {productInfo.location.map((location, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedLocation === location && "bg-black text-white"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">גדלים:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">כמות:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity < productInfo.quantity && setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            location: selectedLocation,
            size: selectedSize,
          });
        }}
      >
        הוסף לסל
      </button>
    </div>
  );
};

export default ProductInfo;
