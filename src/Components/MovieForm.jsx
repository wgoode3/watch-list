import React, { useState } from 'react';


const MovieForm = props => {

    const [title, setTitle] = useState("");
    const [titleTouched, setTitleTouched] = useState(false);
    const [year, setYear] = useState(1990);
    const [genre, setGenre] = useState("");
    const [genreTouched, setGenreTouched] = useState(false);
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
                        <input type="text" className="form-control" onBlur={e => setTitleTouched(true)} onChange={e => setTitle(e.target.value)} value={title} />
                        {
                            titleTouched && title.length < 2 ? 
                            <p className="text-danger">Title must be 2 characters or longer</p> : 
                            ""
                        }
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="number" className="form-control" onChange={e => setYear(e.target.value)} value={year} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Genre:</label>
                        <input type="text" className="form-control" onBlur={e => setGenreTouched(true)} onChange={e => setGenre(e.target.value)} value={genre} />
                        {
                            genreTouched && genre.length < 4 ? 
                            <p className="text-danger">Genre must be 5 characters or longer</p> : 
                            ""
                        }
                    </div>
                    <div className="form-group">
                        <label>Run Time (minutes):</label>
                        <input type="number" className="form-control" onChange={e => setRunTime(e.target.value)} value={runTime} />
                    </div>
                </div>
            </div>
            {
                title.length >= 2 && genre.length >= 4 ?
                <input type="submit" value="Add to Watch List" className="btn btn-info btn-block" /> :
                <input disabled type="submit" value="Add to Watch List" className="btn btn-info btn-block" />
            }
        </form>
    );
}

export default MovieForm;