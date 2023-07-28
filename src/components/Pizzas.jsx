import { pizzaData } from "../data";
import Pizza from "./Pizza";

const Pizzas = () => {
	return (
		<ul className="pizzas">
			{pizzaData.map(({ name, photoName, ingredients, price, soldOut }) => {
				return (
					<Pizza
						title={name}
						img={photoName}
						ing={ingredients}
						price={price}
						soldout={soldOut}
					/>
				);
			})}
		</ul>
	);
};
export default Pizzas;
