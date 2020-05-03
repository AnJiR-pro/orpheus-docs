import React from 'react';

function Meme(props){
    console.log(props);
    return(
        <table className="memecontent">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Meme Name</th>
                    <th>Text Needed</th>
                    <th>Example Picture</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row =>(
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.box}</td>
                            <td><img src={row.imgsrc} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Meme;