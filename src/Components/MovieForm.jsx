import React, { useState } from 'react';


const MovieForm = props => {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(1990);
    const [genre, setGenre] = useState("");
    const [runTime, setRunTime] = useState(90);

    const addMovie = e => {
        e.preventDefault();
        props.onNewMovie({title, year, genre, runTime, status: 0});
        setTitle("");
        setYear(1990);
        setGenre("")
        setRunTime(90);
    }

    return (
        <form onSubmit={addMovie}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="number" className="form-control" onChange={e => setYear(e.target.value)} value={year} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Genre:</label>
                        <input type="text" className="form-control" onChange={e => setGenre(e.target.value)} value={genre} />
                    </div>
                    <div className="form-group">
                        <label>Run Time (minutes):</label>
                        <input type="number" className="form-control" onChange={e => setRunTime(e.target.value)} value={runTime} />
                    </div>
                </div>
            </div>
            <input type="submit" value="Add to Watch List" className="btn btn-info btn-block" />
        </form>
    );
}

export default MovieForm;