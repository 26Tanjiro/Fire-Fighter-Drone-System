# Firefighter Drone Dashboard - React Frontend

This React application serves as a control dashboard for a firefighter drone system. It provides real-time sensor data monitoring and control options for operating the drone.

## Features

- **Sensor Data Display:**  
  Shows critical environmental and drone status information including:  
  - Temperature (in °C)    
  - Flame detection status  
  - Battery level percentage
  -

- **Control Panel:**  
  Interactive buttons allow the user to send mock commands to the drone such as:  
  - Take Off  
  - Land  
  - Spray Extinguisher

- **Map Preview:**  
  Displays a placeholder for the drone’s camera locate and visualize its current position.

## UI Design

- The app features a clean, modern interface with a purple-themed header bar for branding ("Fire Fighter System Control").
- Sensor data is presented in responsive cards with subtle shadows and hover effects for better user experience.
- Control buttons are styled for clarity and ease of use, with hover effects to indicate interactivity.
- The layout is designed to be responsive and user-friendly, suitable for desktop and tablet views.

## Technical Details

- Built with React functional components.
- Uses CSS for styling with a focus on readability, spacing, and accessible color contrasts.
- The app container and header are styled to occupy the full width of the viewport.
- Buttons trigger alert pop-ups simulating command execution.

## Usage

This dashboard is ideal for firefighting teams to remotely monitor drone sensors and send operational commands in real time, improving situational awareness and response efficiency.

---

*Note: The map preview is currently a placeholder and can be integrated with real map APIs (e.g., Google Maps, Mapbox) for enhanced functionality.*
