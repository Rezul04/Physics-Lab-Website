import React from 'react'
import './publicationsMain.css'

const PublicationsMain = () => {
  return (
    <div className='publicationMain'>
     <div class="list">
  {/* <h2>Year wise publications</h2> */}
  {/* <div className="yearBox">2023</div> */}
  {/* <div className="vBar"></div> */}

  <div class="publication_body">
        <div className="yearBox1">Publications</div>
  <div className="choiceHolder">
    <button className="choice">Journal</button>
    <button className="choice">Conference Paper</button>
    <button className="choice">Book Chapters</button>
    <button className="choice">All</button>
  </div>
          <table class="research-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Authors and Title</th>
                <th>Journal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Sarjana Yadav, Sneha Senapati, Samir Kumar, Shashank K.
                  Gahlaut, and J. P. Singh
                  <span class="publication-title">
                    <a href="https://www.google.com" target="_blank">
                      “GLAD Based Advanced Nanostructures for Diversified
                      Biosensing Applications: Recent Progress."
                    </a>
                  </span>
                </td>
                <td>Biosensors, 12(12), 1115 (2022)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Yogita Maithani, J. A. Khan, B. R. Mehta, and J. P. Singh
                  <span class="publication-title">
                    <a href="https://www.google.com" target="_blank">
                      “Cubic phase optimization and influence of post-annealing
                      on microstructure, optical, wetting, and nanomechanical
                      properties of zirconia thin films."
                    </a>
                  </span>
                </td>
                <td>Ceramics International, 49(1), 1048-1060 (2023)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Yogita Maithani, B. R. Mehta, and J. P. Singh
                  <span class="publication-title">
                    <a href="https://www.google.com" target="_blank">
                      “Implementation of hybrid Ag nanorods embedded RGO-PDMS
                      conductive material for flexible and dry
                      electrocardiography sensor."
                    </a>
                  </span>
                </td>
                <td>Materials Letters: X, 15, 100152 (2022)</td>
              </tr>
            </tbody>
          </table>
        </div>

  {/* <ul>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    
  </ul>
  <div className="yearBox">2022</div>
  {/* <div className="vBar"></div> */}
  {/* <ul>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum accusamus maxime voluptatem expedita eaque perferendis eum veniam! Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    
  </ul>
  <div className="yearBox">2021</div> */}
  {/* <div className="vBar"></div> */}
  {/* <ul>
  <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
    <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit., repellat consectetur adipisicing elit. Aug 2023 by Prof ABC. <a href='#'>Read</a></span></li>
  </ul> */}
</div>
    </div>
  )
}

export default PublicationsMain
