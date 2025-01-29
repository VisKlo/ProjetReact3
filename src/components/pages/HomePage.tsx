import { Link } from "react-router-dom"
import { Button } from "@atoms/Button"

export function HomePage() {
    return (
        <div className="home-page">
            <h1>Bienvenue !</h1>
            <p>Explorez les films et séries.</p>

            <div className="cta">
                <h2>Commencez maintenant</h2>
                <div className="links">
                    <Link to="/films"><Button label="Voir les Films" className="bouton"/></Link>
                    <Link to="/series"><Button label="Voir les séries" className="bouton"/></Link>
                    <Link to="/favorites"><Button label="Voir les favoris" className="bouton"/></Link>
                </div>
            </div>
        </div>
    )
}