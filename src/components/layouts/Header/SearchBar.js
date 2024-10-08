import React from 'react';
import { BsSearch } from "react-icons/bs";

function SearchBar() {
    return (
        <div className='flex items-center space-x-2 w-auto max-sm:w-full md:w-[50%]  bg-layout-second px-4 py-2.5 rounded-[999px]'>
            <BsSearch className='text-[20px]'/>
            <input 
                className='w-full bg-transparent'
                placeholder='Tìm kiếm'
            />
        </div>
    );
}

export default SearchBar;