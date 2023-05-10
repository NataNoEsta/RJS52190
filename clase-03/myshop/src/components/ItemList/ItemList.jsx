import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({ items }) => {
	return (
        <>
			{
                items.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </>
	);
};
export default ItemList;
