import { z } from "zod";

const getUsers = (req, res) => {
  const name = z.string().safeParse(req.query.name);
  res.send(name);
};

const userController = {
  getUsers,
};

export { userController };
