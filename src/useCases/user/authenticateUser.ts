import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import z from "zod";
import { User } from "../../models/user";

const authenticateSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function authenticateUser(req: Request, res: Response) {
  try {
    const { email, password } = authenticateSchema.parse(req.body);
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid password" });

    res.json(user);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error when registering the account", message: err });
  }
}
