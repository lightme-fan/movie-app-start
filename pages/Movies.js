import React from 'react'

const movies = [
    {
        name: '36th Chamber'
    },

    {
        name: 'Man of Iron'
    },

    {
        name: 'Venoms'
    }
]

export function MoviesList() {
    return (
        <div>
            <ul>
                { movies.map((movie) => {
                    return (
                        <li key={movie.name}>{movie.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}