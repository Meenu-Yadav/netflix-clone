import { User } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { eMail, password } = req.body;
    if (!eMail || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ eMail });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or password",
        success: false,
      });
    }

    const tokenData = {
      id: user._id,
    };

    const token = await jwt.sign(tokenData, "sdmsdksjfhweuif", {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome ${user.fullName}`,
        success: true,
        user: user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User Logged Out successfully",
      success: true,
    });
};
export const Register = async (req, res) => {
  try {
    const { fullName, eMail, password } = req.body;
    if (!fullName || !eMail || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ eMail });
    if (user) {
      return res.status(401).json({
        message: "This Email is already used",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      eMail,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
