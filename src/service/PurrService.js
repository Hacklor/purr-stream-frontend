class PurrService {
  create(data) {
    fetch("http://localhost:8000/purrs/", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }

  list(callback) {
    fetch("http://localhost:8000/purrs")
      .then(response => {
        return response.json();
      })
      .then(json => {
        callback(json)
      })
  }

  destroy() {
    console.log("destroy: to be implemented")
  }
}

export default PurrService;
