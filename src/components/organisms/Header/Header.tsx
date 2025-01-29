import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"

export function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><Button label="Acceuil" className="button"/></Link> | <Link to="/films"><Button label="Films" className="button"/></Link> | <Link to="/series"><Button label="Séries" className="button"/></Link> | <Link to="/favorites"><Button label="Favoris" className="button"/></Link>
            </nav>
        </header>
    )
}