import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activee,setActivee] = useState(1);
  return (
    <div className='d-flex flex-column bg-dark text-white p-3 vh-100 justify-content-between sidebaritem'>
      <div>
        <a href="#">
            <i class="bi bi-code-slash text-white me-4 fs-4"></i>
            <span>Sidebar</span>
        </a>
        <hr className='text-secondary'/>
        <ul class="list-group">
            <li class= {activee===1?'list-group-item  text-white ps-0 activee':'list-group-item bg-dark text-white ps-0 activee'} onClick={e=>setActivee(1)}>
                <Link to='/'>
                    <i class="bi bi-speedometer2 text-white ps-3 me-4 fs-5"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li class= {activee===2?'list-group-item  text-white ps-0 activee':'list-group-item bg-dark text-white ps-0 activee'} onClick={e=>setActivee(2)}>
                <Link to='/student'>
                    <i class="bi bi-people text-white ps-3 me-4 fs-5"></i>
                    <span>Students</span>
                </Link>
            </li>
            <li class= {activee===3?'list-group-item  text-white ps-0 activee':'list-group-item bg-dark text-white ps-0 activee'} onClick={e=>setActivee(3)}>
                <Link to='/teacher'>
                    <i class="bi bi-table text-white ps-3 me-4 fs-5"></i>
                    <span>Teachers</span>
                </Link>
            </li>
        </ul>
      </div>
      <div>
      <hr className='text-secondary'/>
        <a href="">
            <i class="bi bi-person-circle text-white me-4 fs-4"></i>
            <span>Code with us</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
