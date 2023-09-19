import imageprofile from '../../assets/imageprofile.png'
import '../../styles/avatar.css'

const Avatar = ({person, size}) => {
    console.log(person.name)
    
    return (
        <>
        <img 
            src={imageprofile}
            alt={person.name}
            width={size}
            height={size}
            className="avatar"
        ></img>
        </>
    )
}
export default Avatar;