const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/requests.json");

class Request {
  static async getAll() {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  }

  static async getById(id) {
    const requests = await this.getAll();
    return requests.find((request) => request.id === id);
  }

  static async create(requestData) {
    const requests = await this.getAll();
    const newRequest = {
      id: Date.now().toString(),
      ...requestData,
      status: "received",
    };
    requests.push(newRequest);
    await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2));
    return newRequest;
  }

  static async update(id, updateData) {
    const requests = await this.getAll();
    const index = requests.findIndex((request) => request.id === id);
    if (index !== -1) {
      requests[index] = { ...requests[index], ...updateData };
      await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2));
      return requests[index];
    }
    return null;
  }

  static async delete(id) {
    const requests = await this.getAll();
    const filteredRequests = requests.filter((request) => request.id !== id);
    await fs.writeFile(DATA_FILE, JSON.stringify(filteredRequests, null, 2));
  }

  static async complete(id) {
    return this.update(id, { status: "completed" });
  }
}

module.exports = Request;
