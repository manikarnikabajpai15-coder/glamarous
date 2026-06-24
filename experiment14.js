import React from "react";

function App() {
  const images = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3"
  ];

  return (
    <div>
      <h1>Image Gallery</h1>

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          width="200"
        />
      ))}
    </div>
  );
}

export default App;