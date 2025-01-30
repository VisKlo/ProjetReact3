import { FavFilms } from "@organisms/FavFilms"
import { FavSeries } from "@organisms/FavSeries"


export function Favorites() {
    return (
        <main>
            <FavFilms />
            <FavSeries />
        </main>
    )
}