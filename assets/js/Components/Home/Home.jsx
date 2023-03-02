import * as React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return(
    <>
      <div>Home page</div>
      <Link to={'/user/register'}>Register</Link>
    </>
  );
}