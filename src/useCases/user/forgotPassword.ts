import { Request, Response } from "express";
import crypto from "crypto";
import dayjs from "dayjs";
import z from "zod";
import dotenv from "dotenv";
dotenv.config();

import { User } from "../../models/user";
import { transporter } from "../../modules/mailer";

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export async function forgotPasswordUser(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: "User not found" });

    const token =
      crypto.randomBytes(3).toString("hex") + crypto.randomInt(100, 999);
    const tokenExpiration = dayjs().add(1, "hour").format("HH.mm");

    const updatedToken = await User.findOneAndUpdate(
      { _id: user.id },
      {
        resetToken: token,
        resetTokenExpiration: tokenExpiration,
      },
      { new: true }
    );

    transporter.sendMail({
      to: user.email,
      subject: "Código para alteração da senha",
      template: "auth/forgotPassword",
      context: { token: token, user: user.name },
    });

    res.status(200).send({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).send({
      error: "Error when using the forgot password function",
      message: err,
    });
  }
}
