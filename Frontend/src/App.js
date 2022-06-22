import { StrictMode, useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.breed),
//     ]);
// };

const App = () => {
    const theme = useState("darkblue")
    return (
        <StrictMode>
            <ThemeContext.Provider value={theme}>
                <BrowserRouter>
                    <h1>Adopt me</h1>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/search/" element={<SearchParams />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
            <div>
                <h1></h1>
                {/* <Pet name="Luna" breed="Dog" /> */}
                {/* <Pet name="Luna" breed="Dog" /> */}
                {/* <SearchParams /> */}
                {/* <Pet name="Luna" breed="Dog" /> */}
            </div>
        </StrictMode>
    )
}

// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: "brand" }, "doc"),
//         React.createElement(Pet, {
//             name: "Luna",
//             breed: "Dog",
//         }),
//         React.createElement(Pet, {
//             name: "Luna",
//             breed: "Dog",
//         }),
//     ]);
// };

render(<App />, document.getElementById("root"));
