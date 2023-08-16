import './styles.css';
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    productService.findAll()
      .then(response => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setProducts(response.data.content);
      });
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          } 
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
