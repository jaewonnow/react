import React from 'react';
import Book from "./book";

function Library(props) {
    return(
        <div>
            <Book name="첨만파1" NumofPage = {300} />
            <Book name="첨만파2" NumofPage = {400} />
            <Book name="첨만파3" NumofPage = {500} />

        </div>
    );

}

export default Library;
