'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';

import { ProductsContext } from '@/app/context/ProductsContext';
import ProductDetail from '@/app/components/ProductDetail';

const EarphoneItem = () => {
	const pathName = usePathname();
	const { products } = useContext(ProductsContext);

	const productSlug = pathName.split('/').pop();

	const currentProduct = products.find(
		(product) =>
			product.slug === productSlug && product.category === 'earphones',
	);

	console.log(currentProduct);

	return <ProductDetail product={currentProduct} />;
};

export default EarphoneItem;
