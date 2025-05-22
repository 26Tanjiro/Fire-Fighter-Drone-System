import React from 'react';
import './App.css';

function App() {
  const sensorData = {
    temperature: 42.5,
    smoke: true,
    flame: false,
    battery: 78,
    gps: { lat: 14.5995, lng: 120.9842 }
  };

  const handleMockCommand = (cmd) => {
    alert(`Command: ${cmd}`);
  };

  return (
    <>
      <div className='logo'>
        <h1>Fire Fighter System Control</h1>
      </div>

      <div className="app-container">
        <h1>🚁 Firefighter Drone Dashboard</h1>

              <ul className="sensor-list">
        <li className='sensor-item temperature'>
          🌡 Temperature: <strong>{sensorData.temperature} °C</strong>
        </li>
        <li className='sensor-item flame'>
          🔥 Flame: <strong>{sensorData.flame ? 'Detected' : 'None'}</strong>
        </li>
        <li className='sensor-item battery'>
          🔋 Battery: <strong>{sensorData.battery}%</strong>
        </li>
      </ul>


        <section className="section-controls">
          <h2>🎮 Controls</h2>
          <div className="button-group">
            <button onClick={() => handleMockCommand('takeoff')}>Take Off</button>
            <button onClick={() => handleMockCommand('land')}>Land</button>
            <button onClick={() => handleMockCommand('spray')}>Spray Extinguisher</button>
          </div>
        </section>

        <section className="section-Map">
          <h2>🗺 Map Preview</h2>
          <div className="map-preview">
            Map placeholder (GPS: {sensorData.gps.lat}, {sensorData.gps.lng})
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
