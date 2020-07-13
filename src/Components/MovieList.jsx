import React from 'react';


const MovieList = props => {

    return (
        <table className="table table-striped">
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Run Time</th>
                    <th>Status</th>
                </tr>
                {props.data.map((movie, i) => 
                    <tr key={ i } >
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.runTime} minutes</td>
                        <td>
                            { 
                                movie.status === 0 ? "unwatched " : 
                                    movie.status > 0 ? "liked " : "disliked "
                            }
                            {
                                movie.status === 1 ? 
                                <button disabled className="btn btn-success" onClick={e => props.like(i)}>▲</button>:
                                <button className="btn btn-success" onClick={e => props.like(i)}>▲</button>
                            }
                            {
                                movie.status === -1 ? 
                                <button disabled className="btn btn-danger" onClick={e => props.dislike(i)}>▼</button> :
                                <button className="btn btn-danger" onClick={e => props.dislike(i)}>▼</button>
                            }
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default MovieList;