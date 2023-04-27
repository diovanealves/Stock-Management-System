import { Request, Response } from "express";
import { User } from "../../models/user";

export async function listUser(req: Request, res: Response) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Account not found", message: err });
  }
}
