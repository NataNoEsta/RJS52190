import ItemCard from "../ItemCard/ItemCard"

// eslint-disable-next-line react/prop-types
const ItemList = ({ items }) => {
	return (
        <>
			{
                // eslint-disable-next-line react/prop-types
                items.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </>
	);
};
export default ItemList;
