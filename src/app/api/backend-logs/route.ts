import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const logPath = path.resolve(process.cwd(), "../../backend/backend.log");
  let logs: string[] = [];
  try {
    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, "utf-8");
      logs = content.trim().split("\n").slice(-100);
    } else {
      logs = ["No backend.log file found."];
    }
  } catch (e) {
    logs = ["Error reading backend log: " + (e as Error).message];
  }
  return NextResponse.json({ logs });
}
