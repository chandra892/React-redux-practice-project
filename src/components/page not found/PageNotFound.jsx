import React from 'react'

const PageNotFound = () => {
  return (
    <div className='container m-5'>
      <h1 className='text text-danger py-2'>404 Page Not Found Error</h1>
      <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" width={800} height={300} style={{ border: "1px solid red" }} alt="" />

      <p className='pt-4'>The error indicates that while the server itself is reachable, the specific page showing the error is not</p>

      <p>A 404 error is an HTTP status code that means the page you were trying to reach on a website couldn't be found on their server. Here's what you can do.</p>

      {/* <h4>How to Fix the 404 Not Found Error</h4>
      <p>Check the URL: Make sure you've entered the correct URL.</p>
      <ol>
        <li>copied and pasted the URL, try retyping it.</li>
        <li>Check for typos: Double-check the URL for any typos or spelling errors </li>
        <li>Retry the web page by pressing F5, clicking/tapping the refresh/reload button, or repeatedly trying the URL from the address bar.
          The 404 Not Found error might appear for several reasons even though no real issue exists, so sometimes a simple refresh will often load the page you were looking for.</li>
      </ol> */}


    </div>
  )
}

export default PageNotFound