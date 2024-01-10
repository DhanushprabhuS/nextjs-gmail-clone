import React from 'react'
import SearchResult from './SearchResult';

const SearchResults = ({emailsdata,backLink}) => {
    

    return (
        <>
          {emailsdata?.map((email) => (
            <SearchResult type={email.type} id={email.id} backLink={backLink} key={email.id}
            expeditor={email.expeditor} messageTitle={email.messageTitle} message={email.message} timestamp={email.timestamp} />
          ))}
          {
            emailsdata.length?
            null
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







