import { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import Pet from "./Pet";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";


const ANIMALS = ["dog", "cat"]
const SearchParams = () => {
    const [animal, setAnimal] = useState()
    const [location, setLocation] = useState("")
    // const [pets, setPets] = useState([])
    const [breeds, state] = useBreedList(animal)
    const [breed, setBreed] = useState("")
    const [theme, setTheme] = useContext(ThemeContext)



    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)} />
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
                <label htmlFor="animal">
                    Animal
                    <select id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value)
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value)
                        }}>
                        <option />
                        {ANIMALS.map(animal =>
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        )}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value)
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value)
                        }}>
                        <option />
                        {breeds.map(animal =>
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        )}
                        <Modal>
                            <div>
                                Show?
                            </div>
                        </Modal>
                    </select>
                </label>
            </form>
        </div>
    )
}
export default SearchParams;