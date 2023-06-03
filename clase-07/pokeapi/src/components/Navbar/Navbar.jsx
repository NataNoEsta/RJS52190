import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <section className="navbar container flex flex-row min-w-full m-auto min-h-min align-middle">
            <nav className="navbar container flex align-middle min-w-full justify-center gap-10 h-14 pt-4 bg-orange-200">
            <Link to="/">See all </Link> 
            <Link to="pokeapi">Se one</Link>
            <a href ="#foot">footer</a>
            </nav>
        </section>
    )
}