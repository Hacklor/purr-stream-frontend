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

    list() {
        console.log("list: to be implemented")
    }

    destroy() {
        console.log("destroy: to be implemented")
    }
}

export default PurrService;