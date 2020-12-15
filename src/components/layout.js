import React from "react"
import { Link } from "gatsby"

export default function Layout({children}) {
    return (
        <div>
            <Link to={`/`}>
                <h3>
                    Home
                </h3>  
            </Link>
            {children}
        </div>
    );
}


