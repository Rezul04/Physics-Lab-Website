import React from 'react'
import './ResearchHero.css'
import heroImage from '../../../assets/alumni2.png'
import researchThemes from '../../../../data/research-themes.json'
export const ResearchHero = () => {
    return (
        <>
            <div className="rMainContainer">
                <div className="leftRH">
                    <h1 id="currentTheme">Current Research initiatives</h1>
                    <p id="initiatives">Nanomaterial-Based Memory Devices and Films for Hybrid Energy Harvesting and Storage: Exploring Piezoelectric and Triboelectric Nanogenerators, Piezophotocatalysis, and Tribovoltaic Effects in PENG-TENG Integrated Supercapacitors</p>
                </div>

                <div className="rightRH gridLayout">
                {researchThemes.reserach_themes.slice(0, 4).map((theme, index) => (
                    <img
                        key={index}
                        src={theme.image}
                        alt={`Research Theme ${index + 1}`}
                        className="researchImg"
                    />
                ))}
            </div>
                
            </div>
        </>
    )
}
