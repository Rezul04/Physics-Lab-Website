import React from 'react'
import "./Profile.css";

export const Profile = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="row mt-5">
                        <div className="col-md-5"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnoyoFHmxBmYhNqFMWyeXbBjBIon1VGgkqw&usqp=CAU" alt="" className='w-100' /></div>
                        <div className="col-md-7 h-100 mt-5">
                            <h1>Vishal Singh</h1>
                            <h3><b>Year of joining :</b> 2019</h3>
                            <h3><b> Research Area: </b>
                                Piezoelectric and Triboelectric Nanogenerators</h3>
                            <h3><b>Email:</b> virat.singh0007@gmail.com</h3>
                        </div>
                    </div>
                    <h2 className='text-center'>Bio Data</h2>
                    <p className='bio mt-2 mb-5'>Vishal Singh is a research scholar at Delhi Technological University, Delhi pursuing his research in the Applied Physics Department since July 2018. Prior to this, he completed his Master in Physics from Department of Physics, Deenbandhu Chhotu Ram University of Science and Technology, Murthal Sonipat (Haryana) in the year 2017 and Bachelor of Science from Govt. P.G. College Bhiwani, Maharshi Dayanand University Rohtak in the year 2015. He has been awarded the Commendable Research Award for excellence in Research by DTU in year 2023. He has received best poster presentation award in ICMAT 2023, at SUNTEC, Singapore, 26th - 30th June, 2023. His present research interests are in the field of fabrication of piezoelectric and triboelectric nanogenerators for mechanical energy harvesting and their applications in making wearable devices.</p>
                </div>
            </div>
        </div>
    )
}
