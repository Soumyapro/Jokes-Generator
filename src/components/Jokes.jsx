import React from "react";
import { useState } from "react";
function Jokes() {

    const [jokes, setJokes] = useState('');

    const fetch_data = async () => {

        try {
            const res = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            const data = await res.json()
            setJokes(data.joke)
            console.log(data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full p-12 rounded-lg shadow-lg" style={{ backgroundColor: "#97cba9" }}>
                <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: "#668ba4" }}>Jokes Generator</h1>
                <div className="flex justify-center">
                    <button onClick={fetch_data} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded">
                        Click Me!
                    </button>
                </div>
                <div className="p-3">
                    <h2 style={{ color: "#668ba4" }}><b>{jokes}</b></h2>
                </div>
            </div>
        </div>
    );
}

export default Jokes;
