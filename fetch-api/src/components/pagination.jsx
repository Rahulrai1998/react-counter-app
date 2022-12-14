import React from 'react';


const Pagination = ({postsPerPage , totalPosts , paginate}) => {

    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i)

    }
    return (  
        <nav>
            <ul className='pageNumClass'>
                {
                    pageNumbers.map(number=>(
                        <li className='pgNumListItem'>
                            <a onClick={()=>paginate(number)} href="!#" className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
 
export default Pagination;