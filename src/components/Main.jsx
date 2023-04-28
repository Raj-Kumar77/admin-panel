import React from 'react'
import PieChart from './PieChart'
import LineChart from './LineChart'

const Main = () => {
  return (
    <div className='container-fluid'>
      <div className="row p-2">
        <div className="col-md-3 d-flex p-3 justify-content-around align-items-center border border-secondary">
        <i class="bi bi-graph-up-arrow fs-1"></i>
        <div>
            <span>Passing %</span>
            <h2>92%</h2>
        </div>
        </div>
        <div className="col-md-3 d-flex p-3 justify-content-around align-items-center border border-secondary">
        <i class="bi bi-graph-down-arrow fs-1"></i>
        <div>
            <span>Failing</span>
            <h2>8%</h2>
        </div>
        </div>
        <div className="col-md-3 d-flex p-3 justify-content-around align-items-center border border-secondary">
        <i class="bi bi-people-fill fs-1"></i>
        <div>
            <span>Total Student</span>
            <h2>210</h2>
        </div>
        </div>
        <div className="col-md-3 d-flex p-3 justify-content-around align-items-center border border-secondary">
        <i class="bi bi-people fs-1"></i>
        <div>
            <span>Total Teacher</span>
            <h2>54</h2>
        </div>
        </div>
        
      </div>

      <div className="row my-3">
        <div className="col-md-8">
            <LineChart/>
        </div>
        <div className="col-md-4">
            <PieChart/>
        </div>
      </div>
    </div>
  )
}

export default Main
