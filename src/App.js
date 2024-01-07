import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import ProductDetail from './routes/productdetails/productdetails.component';
import ProductPage from './routes/product-page/product-page.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/' element={<Shop />} />
				<Route path='products/:productId' element={<ProductDetail />} />
				<Route path='products/' element={<ProductPage />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
