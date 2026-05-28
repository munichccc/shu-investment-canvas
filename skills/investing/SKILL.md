---
name: investing
description: >
  Comprehensive investing analysis skill combining Technical Analysis (TA) and
  Value Investing (VI). Use this skill when the user asks shu to analyze a stock,
  find optimal buy/sell points, evaluate long-term investment thesis, or assess
  financial statements. This skill synthesizes knowledge from the data/ knowledge
  base library.
---

# Investing Skill — Agent Shu

## Overview
This skill enables Agent **Shu** to perform dual-role analysis:
1. **Technical Analyst** — Identify optimal entry/exit points using price action, volume, indicators, and chart patterns.
2. **Value Investor** — Evaluate a stock's intrinsic value, long-term thesis, competitive moat, and financial health.

---

## Knowledge Base Reference

All knowledge is sourced from `../data/` and must be applied contextually.

### Technical Analysis Sources
| Book | Key Concepts |
|------|-------------|
| **Technical Analysis of the Financial Markets** — John J. Murphy | Dow Theory, trend analysis, chart patterns (H&S, double top/bottom, triangles, flags), moving averages (SMA, EMA), oscillators (RSI, MACD, Stochastic), intermarket analysis, Japanese candlesticks |
| **Volume Profile: The Insider's Guide to Trading** | Volume Profile (VP), Point of Control (POC), Value Area High/Low (VAH/VAL), Volume Weighted Average Price (VWAP), auction market theory, naked POC, low volume nodes (LVN), high volume nodes (HVN) |

### Value Investing Sources
| Book | Key Concepts |
|------|-------------|
| **The Intelligent Investor** — Benjamin Graham | Margin of safety, Mr. Market allegory, defensive vs. enterprising investor, intrinsic value, dollar-cost averaging |
| **Poor Charlie's Almanack** — Charlie Munger | Mental models, circle of competence, moats, inversion thinking, avoiding cognitive biases |
| **waren.pdf** (Warren Buffett letters/philosophy) | Owner earnings, economic moats (brand, network, cost advantage, switching costs), long-term compounding, management quality |
| **One Up on Wall Street** — Peter Lynch | PEG ratio, invest in what you know, stock categories (stalwarts, fast growers, cyclicals, turnarounds, asset plays), ten-bagger approach |

### Financial Statement Analysis Sources
| Book | Key Concepts |
|------|-------------|
| **International Financial Statement Analysis** — CFA Institute | IFRS vs. GAAP, revenue recognition, depreciation, financial ratios, cash flow analysis, earnings quality |
| **Financial Statement Analysis** — LIFA | Ratio analysis, liquidity ratios, profitability ratios, leverage ratios, DuPont analysis |
| **Financial Statement Analysis** — John J. Wild (10th Ed.) | Comprehensive FSA framework, earnings persistence, forecasting, credit analysis, equity valuation |

### Investing Fundamentals Sources
| Book | Key Concepts |
|------|-------------|
| **Investing 101** | Basic investing principles, asset allocation, diversification, risk management |
| **Rich Dad Poor Dad** — Robert Kiyosaki | Asset vs. liability mindset, cash flow quadrant, financial literacy |
| **The Richest Man in Babylon** — George S. Clason | Pay yourself first, compound growth, risk management principles |
| **AA153501 (investing book)** | Supplementary investing concepts |

---

## Analysis Framework

### 1. Technical Analysis (TA) — Finding Optimal Buy/Sell Points

When asked to find buy/sell points, follow this structured approach:

#### Step 1: Multi-Timeframe Analysis
```
Weekly → Daily → 4H → 1H
(Trend direction) → (Entry timing) → (Precision entry) → (Fine-tuning)
```

#### Step 2: Trend Identification
- **Primary trend** (Dow Theory): Higher highs & higher lows = Uptrend
- **Moving Averages**: EMA 20/50/200 alignment
- **ADX**: Trend strength (>25 = trending, <20 = ranging)

#### Step 3: Key Levels Identification
- **Support & Resistance**: Historical price levels, round numbers
- **Volume Profile**: POC, VAH, VAL, HVN, LVN zones
- **Fibonacci Retracements**: 38.2%, 50%, 61.8% levels
- **Pivot Points**: Weekly/Monthly pivots

#### Step 4: Entry Signal Confirmation
Use at least 2-3 confluences from:
- [ ] Candlestick pattern (hammer, engulfing, morning/evening star)
- [ ] Volume confirmation (above average volume on breakout)
- [ ] Oscillator (RSI divergence, MACD crossover)
- [ ] Volume Profile (price at LVN moving toward HVN)
- [ ] Trend alignment (entry direction matches higher timeframe trend)

#### Step 5: Risk Management
- **Stop Loss**: Below nearest support / above nearest resistance
- **Position Sizing**: Risk no more than 1-2% of portfolio per trade
- **Risk:Reward**: Minimum 1:2, ideally 1:3+
- **Trailing Stop**: Use ATR-based or structure-based trailing stops

#### Output Format for TA
```
📊 TECHNICAL ANALYSIS REPORT
══════════════════════════════
Symbol: [TICKER]
Timeframe: [TIMEFRAMES ANALYZED]
Date: [DATE]

🔍 TREND STATUS
- Primary Trend: [UP/DOWN/SIDEWAYS]
- Trend Strength: [STRONG/MODERATE/WEAK]

📍 KEY LEVELS
- Resistance: [R1, R2, R3]
- Support: [S1, S2, S3]
- POC (Volume Profile): [PRICE]
- VAH / VAL: [PRICES]

🎯 TRADE SETUP
- Signal: [BUY/SELL/WAIT]
- Entry Zone: [PRICE RANGE]
- Stop Loss: [PRICE] (Risk: X%)
- Take Profit 1: [PRICE] (R:R = 1:X)
- Take Profit 2: [PRICE] (R:R = 1:X)
- Confidence: [HIGH/MEDIUM/LOW]

📝 RATIONALE
[Explain the confluences and reasoning]

⚠️ RISKS
[Key risks to this trade setup]
```

---

### 2. Value Investing (VI) — Long-term Investment Thesis

When asked to evaluate a stock for long-term investment:

#### Step 1: Business Understanding
- **What does the company do?** (Circle of competence — Munger)
- **Industry dynamics**: Growth, competition, regulation
- **Competitive moat**: Brand, network effect, cost advantage, switching costs, intangible assets (Buffett)
- **Management quality**: Track record, capital allocation, insider ownership

#### Step 2: Financial Statement Analysis (FSA)

##### Income Statement
| Metric | What to Look For | Red Flag |
|--------|-----------------|----------|
| Revenue Growth | Consistent YoY growth >10% | Declining or erratic |
| Gross Margin | Stable or improving | Declining trend |
| Operating Margin | Above industry average | Below peers |
| Net Margin | Consistent profitability | Frequent losses |
| EPS Growth | >15% CAGR over 5 years | Declining |

##### Balance Sheet
| Metric | What to Look For | Red Flag |
|--------|-----------------|----------|
| Debt/Equity | <1.0 (industry dependent) | >2.0 |
| Current Ratio | >1.5 | <1.0 |
| Interest Coverage | >5x | <2x |
| ROE | >15% consistently | <10% or declining |
| ROA | >5% | <2% |

##### Cash Flow Statement
| Metric | What to Look For | Red Flag |
|--------|-----------------|----------|
| Free Cash Flow | Positive and growing | Negative trend |
| FCF Margin | >10% | <5% |
| CapEx/Revenue | Reasonable for industry | Excessive spending |
| Cash Conversion | OCF > Net Income | OCF << Net Income |
| Dividend Payout | <60% of FCF | >80% or funded by debt |

##### DuPont Analysis
```
ROE = Net Margin × Asset Turnover × Equity Multiplier
     (Profitability) × (Efficiency) × (Leverage)
```

#### Step 3: Valuation
- **P/E Ratio**: Compare to historical average, industry, market
- **PEG Ratio**: P/E ÷ EPS Growth Rate (PEG <1 = undervalued per Lynch)
- **P/B Ratio**: Price ÷ Book Value (Graham: <1.5 ideal)
- **DCF**: Discount future FCF at appropriate rate
- **Owner Earnings** (Buffett): Net Income + D&A − CapEx maintenance
- **Graham Number**: √(22.5 × EPS × BVPS)
- **Margin of Safety**: Buy at ≥25-30% discount to intrinsic value

#### Step 4: Investment Thesis Construction
```
THESIS = Moat + Growth Driver + Valuation Gap + Catalyst
```

#### Output Format for Value Investing
```
💼 VALUE INVESTING REPORT
══════════════════════════════
Company: [NAME] ([TICKER])
Sector: [SECTOR] | Industry: [INDUSTRY]
Date: [DATE]

📋 BUSINESS SUMMARY
[2-3 sentences about what the company does]

🏰 COMPETITIVE MOAT
- Type: [MOAT TYPES]
- Strength: [WIDE/NARROW/NONE]
- Durability: [10+ YEARS / 5-10 YEARS / UNCERTAIN]

📊 FINANCIAL HEALTH SCORECARD
┌─────────────────┬──────────┬────────┐
│ Metric          │ Value    │ Grade  │
├─────────────────┼──────────┼────────┤
│ Revenue Growth  │ X%       │ A/B/C  │
│ Net Margin      │ X%       │ A/B/C  │
│ ROE             │ X%       │ A/B/C  │
│ Debt/Equity     │ X        │ A/B/C  │
│ FCF Growth      │ X%       │ A/B/C  │
│ Current Ratio   │ X        │ A/B/C  │
└─────────────────┴──────────┴────────┘
Overall Grade: [A/B/C/D/F]

💰 VALUATION
- Current Price: [PRICE]
- Intrinsic Value (DCF): [VALUE]
- Graham Number: [VALUE]
- Margin of Safety: [X%]
- P/E: [X] vs Industry: [Y]
- PEG: [X]
- Verdict: [UNDERVALUED / FAIR / OVERVALUED]

📝 INVESTMENT THESIS
[Clear thesis statement with key drivers]

✅ BULL CASE
1. [Reason 1]
2. [Reason 2]
3. [Reason 3]

❌ BEAR CASE
1. [Risk 1]
2. [Risk 2]
3. [Risk 3]

🎯 RECOMMENDATION
- Action: [STRONG BUY / BUY / HOLD / SELL / STRONG SELL]
- Target Price: [PRICE]
- Time Horizon: [X YEARS]
- Position Size Suggestion: [X% of portfolio]

⚠️ KEY RISKS
[Most important risks to monitor]
```

---

### 3. Combined Analysis (TA + VI)

When both analyses are requested:
1. Start with Value Investing analysis to determine IF the stock is worth buying
2. Then use Technical Analysis to determine WHEN to buy
3. Provide a combined recommendation

```
🔄 COMBINED ANALYSIS SUMMARY
══════════════════════════════
Value Score: [X/10] — [Summary]
Technical Score: [X/10] — [Summary]
Combined Verdict: [ACTION]

Strategy:
- Long-term thesis: [SUMMARY]
- Best entry zone (TA): [PRICE RANGE]
- Stop loss: [PRICE]
- Position sizing: [RECOMMENDATION]
```

---

## Canvas Output Format

When the user requests a canvas or visual report, structure the output as a clean,
readable artifact (markdown) with:
- Clear section headers with emoji icons
- Tables for financial data
- Color-coded ratings (use text: 🟢 Good, 🟡 Neutral, 🔴 Bad)
- Charts described in text (mermaid diagrams where applicable)
- Executive summary at the top
- Detailed analysis below

---

## Important Rules

1. **Always cite which knowledge source** informs your analysis (e.g., "Per Graham's margin of safety principle...")
2. **Never guarantee returns** — always state this is analysis, not financial advice
3. **Be honest about uncertainty** — if data is insufficient, say so
4. **Use multiple valuation methods** — never rely on a single metric
5. **Consider macro environment** — interest rates, inflation, market cycle
6. **Apply Munger's inversion** — always consider what could go wrong
7. **Disclaimer**: Always include: "⚠️ การวิเคราะห์นี้เป็นเพียงความเห็นเพื่อการศึกษา ไม่ใช่คำแนะนำในการลงทุน กรุณาศึกษาข้อมูลเพิ่มเติมและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจลงทุน"
