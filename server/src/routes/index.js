// ============================================
// routes/index.js - Central Route Registry
// ============================================
// This file combines all route modules into one.
// All routes are prefixed with /api in app.js:
//   app.use('/api', routes);
//
// So the final URLs are:
//   /api/auth/...
//   /api/resume/...
//   /api/interview/...
//   /api/history/...
// Reference: Router, app.use() - reference-backend.md
// ============================================

import { Router } from "express";
import authRoutes from "./auth.routes.js";
import resumeRoutes from "./resume.routes.js";
import interviewRoutes from "./interview.routes.js";
import historyRoutes from "./history.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/resume", resumeRoutes);
router.use("/interview", interviewRoutes);
router.use("/history", historyRoutes);

export default router;
