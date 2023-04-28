import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import z from "zod";
import { User } from "./../../models/user";

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    ),
  confirmPassword: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    ),
});

export async function resetPassword(req: Request, res: Response) {
  try {
    const { token, password, confirmPassword } = resetPasswordSchema.parse(
      req.body
    );
    const user = await User.findOne({ resetToken: token });
    const hashedPassword = await bcrypt.hash(password, 12);

    if (!user)
      return res
        .status(403)
        .send({ message: "User not found or invalid token" });

    if (password != confirmPassword)
      return res.status(403).send({ message: "Passwords do not match" });

    const updatePassword = await User.findOneAndUpdate(
      { _id: user.id },
      {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiration: null,
      },
      { new: true }
    );

    res.status(200).send({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}
