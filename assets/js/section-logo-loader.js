const logoFilenames = [
  "logo-walmart-dark-gray.svg",
  "logo-invision-dark-gray.svg",
  "logo-netflix-dark-gray.svg",
  "logo-logitech-dark-gray.svg",
    "logo-amazon-dark-gray.svg",
  ];
  
  const logoContainer = document.getElementById("logoContainer");
  
  logoFilenames.forEach(name => {
    console.log(name)
    const div = document.createElement("div");
    div.className = "logo-box";
  
    const img = document.createElement("img");
    img.src = `assets/images/logo/${name}`;
    img.alt = name.split(".")[0];
  
    div.appendChild(img);
    logoContainer.appendChild(div);
  });
  