fetch('https://127.0.0.1:8000/core/tree/')
  .then(res => res.json())

  .then(data => {
    document.getElementById("message").textContent = data.message;
  })
  
  .catch(err => {
    document.getElementById("message").textContent = "Error connecting to backend";
    console.error(err);
  });