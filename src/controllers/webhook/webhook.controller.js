import mongoose from "mongoose";
import { z } from "zod";

const serviceSchema = new mongoose.Schema({
  name: String,
  target: String,
});

const webhookSchema = new mongoose.Schema({
  service: serviceSchema,
});

const Webhook = mongoose.model("Webhook", webhookSchema);

const webhookController = {
  mongo: (req, res) => {
    const webhook = req.body;
    Webhook.insertOne(webhook);
    res.send(webhook);
  },
};

export { webhookController };
