import multer from "multer";
import fs from "fs";
import { config } from "../config/base";

const isProduction = config.nodeEnv === "production";
const uploadDir = isProduction ? "./dist/src/uploads" : "./src/uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage }).single("image");
