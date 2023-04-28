import React, { useState } from 'react'

const Navbar = ({Toggle}) => {
  const [show,setShow]=useState(false);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div className='text-white me-4 fs-1' onClick={Toggle}>
    <i class="bi bi-list-ul"></i>
    </div>
    <a class="navbar-brand" href="#">Dashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse py-4 ${show?"show":""}`} id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
