import { Request, Response } from "express";
import dayjs from "dayjs";
import z from "zod";
import { User } from "../../models/user";

const userSchema = z.object({
  name: z.string().regex(/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    ),
});

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = userSchema.parse(req.body);
    const formattedDate = dayjs().format("DD-MM-YYYY HH:mm");

    const userExits = await User.findOne({ email });

    if (userExits)
      return res
        .status(400)
        .json({ error: "Oops", message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password,
      createdAt: formattedDate,
    });
    res.json(user);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error when registering the account", message: err });
  }
}
