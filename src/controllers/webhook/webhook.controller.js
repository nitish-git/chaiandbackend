import { z } from "zod";

const webhookController = {
  mongo: (req, res) => {
    const name = req.body;
    res.send(name);
  },
};

export { webhookController };
