import jwt from "jsonwebtoken";

export const CreateAccessToken = async (payload) => {
  try {
    const token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log(error.msg);
  }
};
