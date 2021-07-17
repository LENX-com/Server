import React, { useState } from "react";
import { AiFillAlipayCircle } from 'react-icons/ai'
            
const SortByTag = ({ prices, handleFilters }) => {

        const Tag = [
        { 
            name: "Lemon"
        },
        { 
            name: " Mouse "
        },
        { 
            name: " Screen "
        },
        { 
            name: " Laptop "
        },
        { 
            name: " Table "
        },
    ]

    const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    return Tag && Tag.map((tag, i) => (
        <div>
            <div>
                <div>
                    <AiFillAlipayCircle className="w-5 h-5 text white rounded-md p-3 bg-orange-light"/>
                </div>
                <div>
                    {tag.name}
                </div>
            </div>
        </div>
    ));
};

export default SortByTag;


