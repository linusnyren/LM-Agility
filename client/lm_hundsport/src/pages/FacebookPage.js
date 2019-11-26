import React from 'react'
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookPage(){

    return(
        <FacebookProvider appId="758354554592341">
        <Page href="https://www.facebook.com/LMHundsport/" tabs="timeline" style={{width: '30rem'}}/>
      </FacebookProvider>    
    );
}