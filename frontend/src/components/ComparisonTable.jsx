import React, { useState } from 'react';
import '../ComparisonTable.css';
import '../Background.css';

const ComparisonTable = () => {
    const [activeCells, setActiveCells] = useState([]);

    const handleCellClick = (index) => {
        setActiveCells(prevState =>
            prevState.includes(index)
                ? prevState.filter(cellIndex => cellIndex !== index)
                : [...prevState, index]
        );
    };

    const specifications = [
        { feature: 'Battery', lite: '1.8Kwh', se03: '2.7Kwh', max: '2.7Kwh' },
        { feature: 'Battery features', lite: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', se03: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', max: 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)' },
        { feature: 'Battery warranty', lite: '3 years', se03: '3 Years', max: '3 Years' },
        { feature: 'Charging time', lite: '3 hours (12A)', se03: '4 hours (12A)', max: '4 hours (12A)' },
        { feature: 'Motor', lite: '1500W', se03: '1500W', max: '2000W' },
        { feature: 'Max speed', lite: '55 km/h', se03: '55 km/h', max: '65 km/h' },
        { feature: 'Warranty on electronics', lite: '1 year', se03: '1 year', max: '1 year' },
        { feature: 'Max range (@30 km/h)', lite: '100 km', se03: '150 km', max: '120 km' },
        { feature: 'Max range (@45 km/h)', lite: '90 km', se03: '110 km', max: '100 km' },
        { feature: 'Max range (@full speed)', lite: '60 km', se03: '90 km', max: '80 km' },
        { feature: 'Other key benefits', lite: 'Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe', se03: 'Fire-safe battery\nRange prediction\nComfortable ride\nStable and safe', max: 'Fire-safe battery\nRange prediction\nComfortable ride\nStable and safe' }
    ];

    const selectedCount = {
        lite: activeCells.filter(cell => cell.endsWith('-lite')).length,
        se03: activeCells.filter(cell => cell.endsWith('-se03')).length,
        max: activeCells.filter(cell => cell.endsWith('-max')).length
    };

    const bestProduct = () => {
        const maxCount = Math.max(selectedCount.lite, selectedCount.se03, selectedCount.max);
        if (selectedCount.lite === maxCount) return 'Rhyno SE03 Lite';
        if (selectedCount.se03 === maxCount) return 'Rhyno SE03';
        if (selectedCount.max === maxCount) return 'Rhyno SE03 Max';
        return 'None';
    };

    return (
        <>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="comparison-table-container">
                <div className="comparison-table">
                <h1 style={{marginLeft:"4%"}}>Products comparison:</h1>
                <div style={{width:"auto",border:"5px solid #61f6e2b3",borderRadius:"30px",marginLeft:"4%"}}></div>
                    <div className="header-row">
                        <div className="cell"><h2>Specification</h2></div>
                        <div className="cell" style={{ backgroundColor: "rgba(90, 163, 1, 0.5)", borderRadius: "20px 0px 0px 20px" }}><h2>RhynoSE03 Lite</h2></div>
                        <div className="cell" style={{ backgroundColor: "rgba(90, 163, 1, 0.5)", borderRadius: "0px 0px 0px 0px" }}><h2>RhynoSE03</h2></div>
                        <div className="cell" style={{ backgroundColor: "rgba(90, 163, 1, 0.5)", borderRadius: "0px 20px 20px 0px" }}><h2>RhynoSE03 Max</h2></div>
                    </div>
                    <hr style={{ width: "98%" }} />
                    {
                        specifications.map((spec, index) => (
                            <div className="row" key={index}>
                                <div className="cell feature">{spec.feature}</div>
                                <div
                                    className={`cell1 cell ${activeCells.includes(`${index}-lite`) ? 'active' : ''}`}
                                    onClick={() => handleCellClick(`${index}-lite`)}
                                >
                                    {spec.lite}
                                </div>
                                <div
                                    className={`cell2 cell ${activeCells.includes(`${index}-se03`) ? 'active' : ''}`}
                                    onClick={() => handleCellClick(`${index}-se03`)}
                                >
                                    {spec.se03}
                                </div>
                                <div
                                    className={`cell3 cell ${activeCells.includes(`${index}-max`) ? 'active' : ''}`}
                                    onClick={() => handleCellClick(`${index}-max`)}
                                >
                                    {spec.max}
                                </div>
                            </div>
                        ))
                    }
                    <div className="selected-counts">
                        <div id="tableCounters">
                            <h2 style={{ color: "wheat" }}>Selected counts:</h2>
                            <hr style={{ width: "100%" }} />
                            <p>RhynoSE03 Lite : <span style={{ color: "rgb(0, 77, 116)", fontSize: "x-large" }}>{selectedCount.lite}</span></p>
                            <p>RhynoSE03 : <span style={{ color: "rgb(0, 77, 116)", fontSize: "x-large" }}>{selectedCount.se03}</span></p>
                            <p>RhynoSE03 Max : <span style={{ color: "rgb(0, 77, 116)", fontSize: "x-large" }}>{selectedCount.max}</span></p>
                        </div>
                        <div id="hr"></div>

                        <div id="showProduct">
                            <h1>Product sutable to you: <span style={{ color: "rgb(155, 189, 2)" }}> {bestProduct()} </span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComparisonTable;
