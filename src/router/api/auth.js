const express = require("express");
const {
  signUpController,
  verifyOtpController,
  resendOtpController,
  signinController,
  forgotPasswordController,
  resetPasswordController,
} = require("../../controller/auth.controller");
const router = express.Router();
router.post("/register", signUpController);
router.post("/verify-otp", verifyOtpController);
router.post("/resend-otp", resendOtpController);
router.post("/login", signinController);
router.post("/forget-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
module.exports = router;
