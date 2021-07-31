import React from 'react'
import { SearchIcon } from '../shared/AppIcons';

const ShowSearchForm = ({ handleSubmit, handleChange, searchString }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-horizontal">
                <input placeholder="search" type="text" name="searchString" required onChange={handleChange} value= {searchString}/>
                <button type="submit">
                    <SearchIcon height="1rem" width="1rem" />
                </button>
            </form>
        </div>
    );
}

export default ShowSearchForm;
