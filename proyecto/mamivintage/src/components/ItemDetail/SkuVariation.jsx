import { useEffect } from "react";

const SkuVariation = ({ setVariant, options }) => {

	const handleSelect = (e) => {
		setVariant(e.target.value);
		console.log(e.target.value);
	};
    useEffect(()=>{
        setVariant(options[0].value)
    },[])

	return (
        <select onChange={handleSelect}>
            {   
                options.map(opt => <option value={opt.value} key={opt.value}>{opt.label}</option>)
            }
        </select>
    )
    
};
export default SkuVariation;
