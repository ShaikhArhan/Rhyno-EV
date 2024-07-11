import React from 'react';
import '../Product.css';
import '../Background.css';
import { CustomColor } from './CustomColor';

export const Product1 = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={"/images/red.png"} alt="Rhyno SE03 Lite" />
      </div>
      {/* Customize color */}
      <CustomColor/>
      
      <div className="product-details">
        <h2>SE03 LITE</h2>
        <p>
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust
          <span id="imp-words"> 2000W motor</span>, it ensures a thrilling ride while still delivering an impressive
          <span id="imp-words"> 80-100 km range</span> on a single charge. Like its counterparts, this machine features the safety assurance of a
          <span id="imp-words"> fire-safe advanced LFP battery</span>, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a
          <span id="imp-words"> 2000W motor</span> and a
          <span id="imp-words"> 2.7kWh battery</span>, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </p>

      </div>
      <div className="product-specs">
        <table>
          <tbody>
            <tr>
              <td>Warranty on electronics</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>1.8Kwh</td>
            </tr>
            <tr>
              <td>Max range (@30km/h)</td>
              <td>100 km</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>1500W</td>
            </tr>
            <tr>
              <td>Charging time</td>
              <td>3 hours (12A)</td>
            </tr>
            <tr>
              <td>Battery warranty</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <td>Max speed</td>
              <td>50 km/h</td>
            </tr>
            <tr>
              <td>Max range (@full speed)</td>
              <td>70 km</td>
            </tr>
            <tr>
              <td>Max range (@45km/h)</td>
              <td>90 km</td>
            </tr>
            <tr>
              <td>Other key benefits</td>
              <td>
                Fire-safe battery<br />
                Range prediction<br />
                Comfortable ride<br />
                Stable and safe
              </td>
            </tr>
            <tr>
              <td>Battery features</td>
              <td>
                LFP with 1500 cycles<br />
                Active Balancing<br />
                Waterproof (IP67)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export default Product1;
