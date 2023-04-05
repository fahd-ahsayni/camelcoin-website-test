import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const logoRefs = useRef([]);

  function handleLogoClick(logo) {
    setSelectedLogo(logo);
  }

  function handleCenterLogoClick() {
    setIsSpinning(!isSpinning);
  }

  function handleLogoDragStart(event, logo) {
    event.dataTransfer.setData('logo', logo);
  }

  function handleLogoDragOver(event) {
    event.preventDefault();
  }

  function handleLogoDrop(event, index) {
    const droppedLogo = event.dataTransfer.getData('logo');
    const newLogoRefs = [...logoRefs.current];
    newLogoRefs.splice(newLogoRefs.indexOf(droppedLogo), 1);
    newLogoRefs.splice(index, 0, droppedLogo);
    logoRefs.current = newLogoRefs;
  }

  useEffect(() => {
    logoRefs.current.forEach((logoRef, index) => {
      logoRef.style.transform = `rotate(${(360 / logoRefs.current.length) * index}deg) translateX(150px) rotate(-${(360 / logoRefs.current.length) * index}deg)`;
    });
  }, [isSpinning]);

  return (
    <nav className={`navbar ${isSpinning ? 'spin' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo-wrapper">
          <div
            className="navbar-logo"
            ref={(element) => (logoRefs.current[0] = element)}
            draggable={true}
            onDragStart={(event) => handleLogoDragStart(event, 'logo1')}
            onDragOver={handleLogoDragOver}
            onDrop={(event) => handleLogoDrop(event, 0)}
            onClick={() => handleLogoClick('logo1')}
          >
            Logo 1
          </div>
          <div
            className="navbar-logo"
            ref={(element) => (logoRefs.current[1] = element)}
            draggable={true}
            onDragStart={(event) => handleLogoDragStart(event, 'logo2')}
            onDragOver={handleLogoDragOver}
            onDrop={(event) => handleLogoDrop(event, 1)}
            onClick={() => handleLogoClick('logo2')}
          >
            Logo 2
          </div>
          <div
            className="navbar-logo"
            ref={(element) => (logoRefs.current[2] = element)}
            draggable={true}
            onDragStart={(event) => handleLogoDragStart(event, 'logo3')}
            onDragOver={handleLogoDragOver}
            onDrop={(event) => handleLogoDrop(event, 2)}
            onClick={() => handleLogoClick('logo3')}
          >
            Logo 3
          </div>
        </div>
        <div className="navbar-center-logo" onClick={handleCenterLogoClick}>
          Center Logo
        </div>
      </div>
      {selectedLogo && <div className="navbar-content">{selectedLogo}</div>}
    </nav>
  );
}
export default Navbar