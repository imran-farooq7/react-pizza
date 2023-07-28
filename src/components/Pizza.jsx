const Pizza = ({ title, img, ing, price, soldout }) => {
	return (
		<div className={` ${soldout ? "sold-out pizza" : "pizza"}`}>
			<img src={img} alt="pizza" />
			<div>
				<h3>{title}</h3>
				<p>{ing}</p>
				<span>{soldout ? "Sold" : price}$</span>
			</div>
		</div>
	);
};
export default Pizza;
