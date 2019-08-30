class PurrService {
  constructor(baseUrl) {
    this.url = baseUrl + "/purrs/"
  }

  async list() {
    const response = await fetch(this.url)
    return await response.json()
  }

  async create(data) {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
       'Content-Type': 'application/json'
      }
    })
  }

  async destroy(id) {
    await fetch(this.url + id + '/', {
      method: 'DELETE',
      headers: {
       'Content-Type': 'application/json'
      }
    })
  }
}

export default PurrService;
