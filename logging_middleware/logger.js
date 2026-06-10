import axios from "axios";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    await axios.post(
      process.env.LOG_API_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.error("Log API Error:", error.message);
  }
};