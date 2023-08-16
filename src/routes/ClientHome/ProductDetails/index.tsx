import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-template-expressions
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setProduct(response.data);
      });
  }, []);
  
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
