class PurrService {
  constructor(base_url) {
    this.url = base_url + "/purrs/"
  }

  list(callback) {
    fetch(this.url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        callback(json)
      })
  }

  create(data) {
    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
       'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }

  destroy() {
    console.log("destroy: to be implemented")
  }
}

export default PurrService;
