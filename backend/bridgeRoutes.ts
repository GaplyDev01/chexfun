import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const UNIVERSAL_BRIDGE_API = process.env.UNIVERSAL_BRIDGE_API || "https://api.universalbridge.io/v1";

// GET /bridge/routes
router.get("/bridge/routes", async (req, res) => {
  try {
    const { fromChain, toChain, token, amount } = req.query;
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/routes`, {
      params: { fromChain, toChain, token, amount }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// GET /bridge/tokens
router.get("/bridge/tokens", async (req, res) => {
  try {
    const { chain } = req.query;
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/tokens`, {
      params: { chain }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// GET /bridge/buy/quote
router.get("/bridge/buy/quote", async (req, res) => {
  try {
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/buy/quote`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// GET /bridge/sell/quote
router.get("/bridge/sell/quote", async (req, res) => {
  try {
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/sell/quote`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// GET /bridge/onramp/status
router.get("/bridge/onramp/status", async (req, res) => {
  try {
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/onramp/status`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

// GET /bridge/status
router.get("/bridge/status", async (req, res) => {
  try {
    const response = await axios.get(`${UNIVERSAL_BRIDGE_API}/status`, { params: req.query });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : String(err) });
  }
});

export default router;
