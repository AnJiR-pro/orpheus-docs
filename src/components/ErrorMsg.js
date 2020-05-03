import React from 'react';
import {Link} from 'react-router-dom';

function ErrorMsg(){
    return(
        <div>
            <h1>404</h1>
            <h3>Page Not Found!</h3>
            <Link to="/">
                <p>
                    Back to Home
                </p>
            </Link>
        </div>
    );
}

export default ErrorMsg;