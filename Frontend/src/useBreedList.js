import { useState, useEffect } from "react";

const cache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([])
    const [status, setStatus] = useState("unloaded")

    // useEffect(() => {
    //     alert(status)
    // }, [status])

    useEffect(() => {
        if (!animal) {
            setBreedList([])
        } else if (cache[animal]) {
            setBreedList(cache[animal])
        } else {
            requestBreedList();
        }
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading")

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            cache[animal] = json.breeds || [];
            setBreedList(cache[animal])
            setStatus("loaded")
        }
    }, [animal])
    return [breedList, status];
}
