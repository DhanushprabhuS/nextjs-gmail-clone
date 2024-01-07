import React from 'react'
import SearchResult from './SearchResult';

const SearchResults = ({emailsdata,backLink}) => {
    

    return (
        <>
          {emailsdata?.map((email) => (
            <SearchResult type={email.type} id={email.id} backLink={backLink}
            expeditor={email.expeditor} messageTitle={email.messageTitle} message={email.message} timestamp={email.timestamp} />
          ))}
          {
            emailsdata.length?
            <div className='flex items-center justify-end  mx-auto text-sm font-semibold bg-white p-10'>
                <p>Number of results found : {emailsdata.length}</p>
            </div>
            :(
                <div className='flex items-center justify-center mx-auto text-sm font-semibold bg-white p-10'>
                    <p>No messages matched your search.</p>
                </div>
            )
          }
        </>
      );
}

export default SearchResults







