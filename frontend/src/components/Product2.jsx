import React from 'react';
import '../Product.css';
import '../Background.css';
import { CustomColor } from './CustomColor';

export const Product2 = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={"/images/black.png"} alt="Rhyno SE03 Lite" />
      </div>
      {/* Customize color */}
      <CustomColor />

      <div className="product-details">
        <h2>SE03 LITE</h2>
        <p>
          <span id="imp-words"> Indulge</span> in the perfect harmony of <span id="imp-words">power and range</span> with this <span id="imp-words">Rhyno</span>. Offering an exhilarating experience with its robust
          <span id="imp-words"> 2000W motor</span>, it ensures a thrilling ride while still delivering an impressive
          <span id="imp-words"> 80-100 km range</span> on a single charge. Like its counterparts, this machine features the safety assurance of a
          <span id="imp-words"> fire-safe advanced LFP battery</span>, along with the comprehensive benefits of owning a
          <span id="imp-words"> Rhino</span>. Boasting a formidable combination of a
          <span id="imp-words"> 2000W motor</span> and a
          <span id="imp-words"> 2.7kWh battery</span>, this beast is ready to
          <span id="imp-words"> roar</span> on the roads, providing an
          <span id="imp-words"> electrifying journey</span> at every turn. Check out the other details below!
        </p>


      </div>
      <div className="product-specs">
        <table>
          <tbody>
            <tr>
              <td>Battery</td>
              <td>2.7Kwh</td>
            </tr>
            <tr>
              <td>Battery features</td>
              <td>
                LFP with 1500 cycles Active <br />
                Balancing Waterproof (IP67)
              </td>
            </tr>
            <tr>
              <td>Battery warranty</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <td>Charging time</td>
              <td>4 hours (12A)</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>1500W</td>
            </tr>
            <tr>
              <td>Max speed</td>
              <td>55 km/h</td>
            </tr>
            <tr>
              <td>Warranty on electronics</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>Max range (@30km/h)</td>
              <td>150 km</td>
            </tr>
            <tr>
              <td>Max range (@45km/h)</td>
              <td>
                110 km
              </td>
            </tr>
            <tr>
              <td>Max range (@full speed)</td>
              <td>
                90 km
              </td>
            </tr>
            <tr>
              <td>Other key benefits</td>
              <td>
                Fire-safe battery <br />
                Range prediction <br />
                Comfortable ride <br />
                Stable and safe <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


