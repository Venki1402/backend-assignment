const Request = require("../models/Request");

exports.getAllRequests = async (req, res) => {
  try {
    const requests = await Request.getAll();
    const sortedRequests = requests.sort((a, b) => a.priority - b.priority);
    res.json(sortedRequests);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving requests", error: error.message });
  }
};

exports.getRequestById = async (req, res) => {
  try {
    const request = await Request.getById(req.params.id);
    if (request) {
      res.json(request);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving request", error: error.message });
  }
};

exports.createRequest = async (req, res) => {
  try {
    const newRequest = await Request.create(req.body);
    res.status(201).json(newRequest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating request", error: error.message });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    const updatedRequest = await Request.update(req.params.id, req.body);
    if (updatedRequest) {
      res.json(updatedRequest);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating request", error: error.message });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await Request.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting request", error: error.message });
  }
};

exports.completeRequest = async (req, res) => {
  try {
    const completedRequest = await Request.complete(req.params.id);
    if (completedRequest) {
      res.json(completedRequest);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error completing request", error: error.message });
  }
};
