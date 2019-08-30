class PurrService {
  constructor(baseUrl) {
    this.url = baseUrl + "/purrs/"
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

  destroy(id) {
    fetch(this.url + id + '/', {
      method: 'DELETE',
      headers: {
       'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }
}

export default PurrService;
