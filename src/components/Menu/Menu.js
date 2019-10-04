import React, { useState, useEffect } from "react";
import axios from "axios";

import "./menu.scss";
import MenuItem from "../MenuItem/MenuItem";

let url="https://spreadsheets.google.com/feeds/list/1DkFyeKVHJ4il9Z_MxT9deFf_D1uqDiNKjopiTLqnhd8/od6/public/values?alt=json";

export default function Menu (props) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [data, setData] = useState([]);
    
    useEffect(() => {

        async function fetchData(){
          let response = await axios(url);
          let dayArray = await response.data.feed.entry.filter(function(day) {
            return day.gsx$week.$t === "thisweek"
          });
          setData(dayArray);
        }
    
        fetchData();

      }, [])

    return (
        <>
        <div className="menuwrapper">
            <ul>
                {console.log(data)}
                {data.map(i => 
                    (<li key={i.gsx$day.$t}>
                        {/* <MenuItem description={i.gsx$description.$t} /> */}
                    </li>)

                    )}
                
            </ul> 
        </div>
        </>
    )
}