/* =========================================
   SHU CANVAS — Shu Canvas
   Stocks: GOOGL, MU, TSM, NVDA, META, ASML, MSFT, AAPL, AMZN, TSLA, BTC-USD
   ========================================= */

const stocksData = {
  "GOOGL": {
    "meta": {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 356.38,
      "priceChange": -7.88,
      "priceChangePct": -2.16,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 9,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "15%"
    },
    "technical": {
      "condition": "Strong Trend (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Very Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "อยู่ในแนวโน้มขาขึ้นในกรอบคู่ขนาน (Trend Channel)"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "รักษาฐานเหนือเส้นค่าเฉลี่ย EMA 20 ได้อย่างมั่นคง"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 356.38
        },
        "poc": {
          "label": "POC",
          "price": 375.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 400.0
          },
          {
            "label": "R2",
            "price": 415.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 375.0
          },
          {
            "label": "S2",
            "price": 365.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 392.0
        },
        "val": {
          "label": "VAL",
          "price": 362.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$375 – $385",
        "stopLoss": "$362.00",
        "takeProfit1": "$410.00",
        "takeProfit2": "$430.00",
        "rrRatio": "1:2.6",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "แนวรับขอบล่างของ Trend Channel",
          "confirmed": true
        },
        {
          "name": "แนวรับปริมาณการซื้อขายหนาแน่น Volume Profile POC ($375)",
          "confirmed": true
        },
        {
          "name": "RSI ระดับ 55 บ่งชี้โมเมนตัมยังมีแรงไปต่อ",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "3%",
        "riskPct": "6.5%",
        "riskReward": "1:2.6",
        "trailingStop": "ATRx2",
        "maxLoss": "$25",
        "atr14": "$9.50"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> GOOGL ยังคงรักษาโครงสร้างแนวโน้มขาขึ้นในกรอบคู่ขนานได้อย่างสวยงาม โดยมีการย่อตัวลงมาทดสอบแนวรับบริเวณ VAH ที่ $392 และมีฐานราคาที่เหนียวแน่นมากที่แนวรับจิตวิทยาและ POC บริเวณ $375 การย่อตัวระยะสั้นเป็นโอกาสในการตั้งรับเพื่อสะสมรอบใหม่</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาหลุดแนวรับสำคัญที่ $365 โครงสร้างขาขึ้นระยะสั้นจะเสียทรง และอาจลงไปทดสอบ VAL ที่ $362</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+22.0%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "36.1%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.05",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "30.5%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "$69.0B",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "24.5x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.95",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Profitability",
          "score": 92,
          "color": "var(--grade-a)"
        },
        {
          "label": "Growth",
          "score": 88,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 98,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🧠",
            "name": "Data Advantage & Search Monopoly",
            "strength": 95,
            "description": "การครองส่วนแบ่งตลาดการค้นหาทั่วโลกกว่า 90% และโครงสร้างพื้นฐาน AI (Gemini + TPU)"
          }
        ]
      }
    },
    "thesis": {
      "statement": "GOOGL เป็นหนึ่งในหุ้นขนาดใหญ่ที่มีปราการป้องกันแข็งแกร่งที่สุดในโลก งบการเงินไร้ที่ติ และเติบโตอย่างมั่นคงจากบริการ Cloud และเทคโนโลยี Generative AI",
      "bullCase": [
        "การเติบโตระดับ 20%+ ของ Google Cloud Platform",
        "การนำ AI เข้ามาช่วยเพิ่มประสิทธิภาพของค่าโฆษณา (Ad Performance)"
      ],
      "bearCase": [
        "ความเสี่ยงด้านกฎหมายผูกขาดการค้า (Antitrust Lawsuits)",
        "ค่าใช้จ่ายในการลงทุนโครงสร้างพื้นฐาน AI (CapEx) สูงขึ้น"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$450.00",
        "timeHorizon": "12-24 เดือน",
        "positionSize": "6-10%",
        "entryStrategy": "ทยอยสะสมในโซนราคา $375 - $385"
      },
      "keyRisks": [
        "การตัดสินคดีความของกระทรวงยุติธรรมสหรัฐฯ (DOJ)",
        "ความผันผวนของงบโฆษณาตามสภาวะเศรษฐกิจ"
      ],
      "sources": [
        "Q1 2026 Earnings Report",
        "SEC filings"
      ]
    }
  },
  "MU": {
    "meta": {
      "symbol": "MU",
      "companyName": "Micron Technology",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 891.88,
      "priceChange": -44.01,
      "priceChangePct": -4.7,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY / ACCUMULATE",
      "verdictConfidence": "Moderate",
      "taScore": 8,
      "viScore": 8,
      "moat": "Narrow",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "Strong Trend (ขาขึ้นและกำลัง Breakout)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ทะยานผ่านแรงต้านระยะสั้นขึ้นมาอย่างแข็งแกร่งด้วยปริมาณการซื้อขายหนาแน่น"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฟื้นตัวจากจุดพักฐานใหญ่และกำลังกลับขึ้นไปทดสอบจุดสูงสุดเดิม"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 891.88
        },
        "poc": {
          "label": "POC",
          "price": 720.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 803.0
          },
          {
            "label": "R2",
            "price": 830.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 740.0
          },
          {
            "label": "S2",
            "price": 710.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 770.0
        },
        "val": {
          "label": "VAL",
          "price": 680.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$740 – $755",
        "stopLoss": "$710.00",
        "takeProfit1": "$800.00",
        "takeProfit2": "$850.00",
        "rrRatio": "1:2.0",
        "confidence": "Medium-High"
      },
      "confluences": [
        {
          "name": "ทะลุผ่านต้านจิตวิทยา $740 ได้สำเร็จ",
          "confirmed": true
        },
        {
          "name": "RSI ดีดตัวเหนือ 60 ชี้ถึงแรงซื้อที่เพิ่มขึ้น",
          "confirmed": true
        },
        {
          "name": "สอดคล้องกับงบและเป้าหมายจากสถาบันการเงินที่ปรับเพิ่มขึ้น",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "3%",
        "riskPct": "6.8%",
        "riskReward": "1:2.0",
        "trailingStop": "ATRx2",
        "maxLoss": "$50",
        "atr14": "$28.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> MU ปรับตัวขึ้นอย่างร้อนแรงในวันนี้ ปิดที่ $762.10 (+4.02%) ทะลุต้านสำคัญที่ $740 ได้อย่างเด็ดขาด ส่งสัญญาณการกลับตัวขึ้นทดสอบ ATH เดิมที่ $803 แนะนำหาจังหวะตามในโซนย่อตัวที่ $740-$755</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากไม่สามารถยืนเหนือ $740 ได้ อาจเกิดภาพการหลุดแนวรับลึกถึงบริเวณ POC $720</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+57.0%",
          "grade": "A"
        },
        {
          "metric": "Net Income",
          "value": "$5.48B",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Current Ratio",
          "value": "2.5",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "22.5%",
          "grade": "B"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "$3.9B",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "35.0x",
          "grade": "C"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.2",
          "grade": "B"
        }
      ],
      "overallGrade": "A-",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 78,
          "color": "var(--grade-b)"
        },
        {
          "label": "Valuation",
          "score": 60,
          "color": "var(--grade-c)"
        }
      ],
      "moat": {
        "overall": "Narrow",
        "items": [
          {
            "icon": "⚙️",
            "name": "Oligopoly Memory Dominance",
            "strength": 80,
            "description": "1 ใน 3 ผู้นำโลกด้านหน่วยความจำ DRAM และ NAND ร่วมกับ Samsung และ SK Hynix"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Micron (MU) กำลังเติบโตระเบิดรอบใหม่ตามวัฏจักรหน่วยความจำ โดยมี HBM3E สำหรับเซิร์ฟเวอร์ AI เป็นตัวเร่งการทำกำไรที่ก้าวกระโดดกว่ารอบในอดีต",
      "bullCase": [
        "ความต้องการชิป HBM3E เติบโตอย่างล้นหลามเกินกำลังการผลิตไปถึงปี 2027",
        "ราคา DRAM ปรับตัวสูงขึ้นทั่วโลกเนื่องจากปริมาณการผลิตชิปขั้นสูงตึงตัว"
      ],
      "bearCase": [
        "ธรรมชาติที่ผันผวนตามรอบวัฏจักรชิปหน่วยความจำ (Cyclical nature)",
        "ความเสี่ยงในการลงทุนขยายกำลังการผลิตเกินความต้องการในอนาคต"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$850.00",
        "timeHorizon": "6-12 เดือน",
        "positionSize": "4-6%",
        "entryStrategy": "ทยอยรับสะสมแถวแนวรับ $740 - $750"
      },
      "keyRisks": [
        "การชะลอตัวลงเร็วกว่าคาดของรอบวัฏจักรความต้องการเมมโมรี่",
        "ความล่าช้าในการส่งมอบชิป HBM3E ล็อตใหญ่"
      ],
      "sources": [
        "Q1 2026 Earnings Transcript",
        "NVIDIA Supplier Reports"
      ]
    }
  },
  "TSM": {
    "meta": {
      "symbol": "TSM",
      "companyName": "Taiwan Semiconductor Mfg.",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 408.75,
      "priceChange": -19.17,
      "priceChangePct": -4.48,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 10,
      "moat": "Wide",
      "marginOfSafety": "12%"
    },
    "technical": {
      "condition": "Strong Trend (ขาขึ้นประคองตัวแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ยืนเหนือเส้นค่าเฉลี่ย EMA 50 และ EMA 20 ได้อย่างเด่นชัด"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "กรอบภาพใหญ่เป็นขาขึ้นแข็งแกร่งต่อเนื่องมาตลอดทั้งปี"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 408.75
        },
        "poc": {
          "label": "POC",
          "price": 380.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 421.0
          },
          {
            "label": "R2",
            "price": 440.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 395.0
          },
          {
            "label": "S2",
            "price": 380.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 410.0
        },
        "val": {
          "label": "VAL",
          "price": 360.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$390 – $405",
        "stopLoss": "$375.00",
        "takeProfit1": "$450.00",
        "takeProfit2": "$500.00",
        "rrRatio": "1:2.3",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "แนวรับตามเส้นค่าเฉลี่ย EMA 20 และ EMA 50",
          "confirmed": true
        },
        {
          "name": "ฐานราคาปริมาณการซื้อขายหนาแน่นที่ POC $380",
          "confirmed": true
        },
        {
          "name": "ความแข็งแกร่งสัมพัทธ์ (Relative Strength) ดีกว่าตลาด",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "5%",
        "riskPct": "5.0%",
        "riskReward": "1:2.3",
        "trailingStop": "ATRx2",
        "maxLoss": "$40",
        "atr14": "$15.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> TSM ปรับตัวขึ้นอย่างประคองตัวได้อย่างแข็งแกร่ง ปิดที่ $407.15 กราฟแสดงภาพฐานราคาที่ยกสูงขึ้นเรื่อยๆ โดยแนวรับ $390-$395 เป็นโซนที่เกิดแรงรับซื้อคืนอย่างหนาแน่น มองหาโอกาสตามน้ำเพื่อหวังทำกำไรเมื่อราคาวิ่งทดสอบเป้าหมายถัดไปที่ $421 และ $450</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย่อตัวหลุดแนวรับ POC ที่ $380 อาจเผชิญแรงขายปรับฐานระยะกลางลงไปลึกแถว $360</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+35.1%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "58.1%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.3",
          "grade": "B"
        },
        {
          "metric": "ROE",
          "value": "32.0%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "Strong",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "28.0x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.8",
          "grade": "A"
        }
      ],
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Profitability",
          "score": 99,
          "color": "var(--grade-a)"
        },
        {
          "label": "Moat Strength",
          "score": 98,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 90,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🏭",
            "name": "Foundry Monopoly",
            "strength": 99,
            "description": "การผูกขาดผลิตชิประดับก้าวหน้าของโลก (<3nm) มากกว่า 90% ให้กับเทคยักษ์ใหญ่อย่าง Apple, NVIDIA และ AMD"
          }
        ]
      }
    },
    "thesis": {
      "statement": "TSMC เป็นกระดูกสันหลังที่ขาดไม่ได้ของโครงสร้างพื้นฐาน AI ทั่วโลก และเป็นบริษัทที่มีความแข็งแกร่งของคูเมืองทางธุรกิจและงบการเงินสูงที่สุดในกลุ่มเซมิคอนดักเตอร์",
      "bullCase": [
        "การขึ้นราคาค่าจ้างผลิตชิปขั้นสูง (Wafer pricing power)",
        "การส่งมอบชิปตระกูล 3nm ที่ให้มาร์จิ้นสูงขยายสัดส่วนทำกำไรเต็มที่"
      ],
      "bearCase": [
        "ความตึงเครียดด้านภูมิรัฐศาสตร์ระหว่างไต้หวันและจีน",
        "ต้นทุนการตั้งโรงงานผลิตในสหรัฐฯ และยุโรปบานปลาย"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$480.00",
        "timeHorizon": "1-3 ปี",
        "positionSize": "10-15%",
        "entryStrategy": "ซื้อสะสมระยะยาวในจังหวะราคาย่อต่ำกว่า $400"
      },
      "keyRisks": [
        "สถานการณ์ความขัดแย้งช่องแคบไต้หวัน",
        "การสูญเสียส่วนแบ่งตลาดหล่อชิปขั้นสูงให้คู่แข่งในระยะยาว"
      ],
      "sources": [
        "Q1 2026 Earnings Call Transcript",
        "SemiWiki Industry Reports"
      ]
    }
  },
  "NVDA": {
    "meta": {
      "symbol": "NVDA",
      "companyName": "NVIDIA Corp.",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 200.42,
      "priceChange": -7.77,
      "priceChangePct": -3.73,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "HOLD / ACCUMULATE",
      "verdictConfidence": "High Confidence",
      "taScore": 6,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "Buy the Dip (พักตัวสร้างฐานหาจังหวะรับ)",
      "trend": {
        "direction": "Consolidation",
        "strength": "Neutral",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ย่อตัวออกข้างหลังจากพุ่งชนแรงต้านจุดสูงสุดตลอดกาลที่ $236"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ยังคงอยู่บนทิศทางขาขึ้นระยะกลางอย่างสมบูรณ์แบบ"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 200.42
        },
        "poc": {
          "label": "POC",
          "price": 215.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 236.0
          },
          {
            "label": "R2",
            "price": 250.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 212.0
          },
          {
            "label": "S2",
            "price": 200.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 230.0
        },
        "val": {
          "label": "VAL",
          "price": 200.0
        }
      },
      "entry": {
        "signal": "WAIT / ACCUMULATE",
        "entryZone": "$205 – $215",
        "stopLoss": "$195.00",
        "takeProfit1": "$250.00",
        "takeProfit2": "$280.00",
        "rrRatio": "1:1.8",
        "confidence": "Medium"
      },
      "confluences": [
        {
          "name": "แนวรับเส้นค่าเฉลี่ย EMA 50 วันพยุงราคาอยู่",
          "confirmed": true
        },
        {
          "name": "แนวรับโซนที่มีความสำคัญ Volume Profile POC ที่ $215",
          "confirmed": true
        },
        {
          "name": "โมเมนตัมเกิดการคลายความตึงตัว (RSI คูลดาวน์ลงมาแถว 48)",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "3%",
        "riskPct": "10.0%",
        "riskReward": "1:1.8",
        "trailingStop": "ATRx2",
        "maxLoss": "$33",
        "atr14": "$12.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> NVDA เผชิญแรงขายทำกำไรระยะสั้น ปิดตัวลงที่ $219.51 (-1.77%) ราคาย่อลงมาใกล้โซนแนวรับจิตวิทยาและ POC สำคัญบริเวณ $215 ซึ่งการย่อรอบนี้ถือเป็นโอกาสที่ดีในการสะสมของถูกตามเงื่อนไข Buy the Dip แนะนำหาจังหวะรับในช่วงแนวรับ $205-$215</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากหลุดแนวรับหนาแน่น POC $215 อาจมีการปรับฐานลึกต่อเนื่องลงไปทดสอบแนวรับล่างสุดแถว $200</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+85.0%",
          "grade": "A"
        },
        {
          "metric": "Data Center Rev",
          "value": "$75.2B",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.1",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "85.0%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Stock Buyback",
          "value": "$80B",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "45.0x",
          "grade": "C"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.1",
          "grade": "B"
        }
      ],
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 99,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 98,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Strength",
          "score": 95,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "💻",
            "name": "CUDA Ecosystem & Hardware Domination",
            "strength": 98,
            "description": "ความเหนือชั้นของชิป Blackwell บวกกับซอฟต์แวร์ CUDA ที่ผูกขาดและเป็นระบบปิดสำหรับนักพัฒนา AI ทั่วโลก"
          }
        ]
      }
    },
    "thesis": {
      "statement": "NVIDIA ยังคงเป็นผู้นำอย่างสมบูรณ์แบบในตลาดฮาร์ดแวร์และแพลตฟอร์ม AI ทั่วโลก งบการเงินเติบโตอย่างร้อนแรง แม้ว่ามูลค่าพื้นฐานจะตึงตัวแต่ยังมีโอกาสไปต่อได้อีกไกล",
      "bullCase": [
        "ความต้องการ Blackwell GPUs ที่เติบโตอย่างท่วมท้นในกลุ่มผู้ให้บริการระบบคลาวด์ขนาดใหญ่",
        "โปรแกรมซื้อหุ้นคืนจำนวนมหาศาล $80B เป็นแรงพยุงราคาหุ้นอย่างเหนียวแน่น"
      ],
      "bearCase": [
        "ความเร็วในการเติบโตในอนาคตอาจชะลอตัวลงตามฐานที่ใหญ่ขึ้น (Law of Large Numbers)",
        "การพึ่งพาตัวคัดกรองฮาร์ดแวร์คู่แข่งที่เริ่มสร้าง Custom Silicon มาทดแทนเอง"
      ],
      "recommendation": {
        "action": "HOLD / ACCUMULATE",
        "targetPrice": "$260.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "5-10%",
        "entryStrategy": "รอตั้งรับเมื่อราคาหุ้นเกิดการย่อตัวเข้าใกล้บริเวณแนวรับ $205-$215"
      },
      "keyRisks": [
        "การชะลอตัวลงของการลงทุนโครงสร้างพื้นฐาน AI ของบิ๊กเทค (Hyperscaler CapEx cuts)",
        "ความล่าช้าในกระบวนการจัดส่งชิปรุ่นใหม่ไปยังลูกค้าระดับโลก"
      ],
      "sources": [
        "Q1 Fiscal 2027 Financial Results",
        "Securities Analyst Briefings"
      ]
    }
  },
  "BTC-USD": {
    "meta": {
      "symbol": "BTC-USD",
      "companyName": "Bitcoin",
      "industry": "Cryptocurrency",
      "sector": "Digital Asset",
      "currentPrice": 61312.34,
      "priceChange": -331.44,
      "priceChangePct": -0.54,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 9,
      "moat": "Network Effect",
      "marginOfSafety": "N/A"
    },
    "technical": {
      "condition": "Strong Bullish Structure (โครงสร้างขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "แกว่งตัวในกรอบสะสมพลังขาขึ้น พยายามยืนเหนือ EMA 50"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ทำจุดสูงสุดใหม่ต่อเนื่องหลังการ Halving รอบที่ 4"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 61312.34
        },
        "poc": {
          "label": "POC",
          "price": 64000.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 72000.0
          },
          {
            "label": "R2",
            "price": 80000.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 64000.0
          },
          {
            "label": "S2",
            "price": 60000.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 70000.0
        },
        "val": {
          "label": "VAL",
          "price": 58000.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$62,000 – $65,000",
        "stopLoss": "$58,000.00",
        "takeProfit1": "$78,000.00",
        "takeProfit2": "$90,000.00",
        "rrRatio": "1:2.8",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "การยืนยันแนวรับจิตวิทยาที่ระดับ $60,000",
          "confirmed": true
        },
        {
          "name": "แรงซื้อสะสมจากกองทุน Spot Bitcoin ETF อย่างต่อเนื่อง",
          "confirmed": true
        },
        {
          "name": "โมเมนตัม RSI ยืนเหนือระดับ 50 บ่งชี้ขาขึ้นยังคงได้เปรียบ",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "2%",
        "riskPct": "8.0%",
        "riskReward": "1:2.8",
        "trailingStop": "ATRx2.5",
        "maxLoss": "$500",
        "atr14": "$2,500.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> BTC ยังคงรักษารูปแบบโครงสร้างแนวโน้มขาขึ้นในภาพใหญ่ได้อย่างแข็งแกร่ง แม้จะมีแรงเทขายทำกำไรระยะสั้นสลับออกมาบ้าง การสะสมพลังในกรอบ $60,000 - $68,000 เป็นจังหวะที่ดีในการทยอยตั้งรับรอบใหม่ โดยมีแนวรับสำคัญที่แข็งแกร่งบริเวณ POC ที่ $64,000 และจุด Stop Loss ที่ $58,000</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาทะลุแนวรับสำคัญที่ $58,000 อาจนำไปสู่การปรับฐานใหญ่ลงไปทดสอบบริเวณ $52,000 - $54,000 ซึ่งจะทำให้ภาพรวมขาขึ้นระยะสั้นเสียทรง</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Hash Rate (Security)",
          "value": "~650 EH/s",
          "grade": "A"
        },
        {
          "metric": "Daily Active Addresses",
          "value": "~900,000",
          "grade": "B"
        },
        {
          "metric": "Daily Transactions",
          "value": "~450,000",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Max Supply Limit",
          "value": "21,000,000",
          "grade": "A"
        },
        {
          "metric": "Circulating Supply",
          "value": "~19,700,000",
          "grade": "A"
        },
        {
          "metric": "Illiquid Supply (HODLed)",
          "value": "74%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Daily Tx Fees (Security Budget)",
          "value": "$3.2M",
          "grade": "B"
        },
        {
          "metric": "Lightning Network Capacity",
          "value": "5,600 BTC",
          "grade": "B"
        },
        {
          "metric": "Network Settlement Volume",
          "value": "$12.4B/day",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "MVRV Z-Score",
          "value": "1.85 (Fair Value)",
          "grade": "B"
        },
        {
          "metric": "Stock-to-Flow Model",
          "value": "Highly Scarce",
          "grade": "A"
        },
        {
          "metric": "Market Cap",
          "value": "$1.32 Trillion",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Security & Network",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Adoption & Growth",
          "score": 85,
          "color": "var(--grade-a)"
        },
        {
          "label": "Scarcity & Tokenomics",
          "score": 98,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide Network Effect",
        "items": [
          {
            "icon": "⚡",
            "name": "First-Mover & Network Effect Monopoly",
            "strength": 99,
            "description": "การเป็นราชาแห่งคริปโทเคอร์เรนซีที่มีประวัติศาสตร์ยาวนานที่สุด มีความปลอดภัยของเครือข่ายสูงสุด และเป็นที่ยอมรับระดับสถาบันการเงินและกฎหมาย"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Bitcoin เป็นสินทรัพย์ดิจิทัลที่มีความขาดแคลนสัมบูรณ์ (Absolute Scarcity) ปลอดภัยสูงสุด และกำลังถูกเปลี่ยนผ่านจากสินทรัพย์เก็งกำไรสู่ ทองคำดิจิทัล (Digital Gold) ที่ได้รับการยอมรับอย่างเป็นทางการจากสถาบันการเงินทั่วโลก",
      "bullCase": [
        "ความต้องการเพิ่มขึ้นอย่างต่อเนื่องจากสถาบันการเงินผ่าน Spot Bitcoin ETF และการเพิ่มสัดส่วนในพอร์ตการลงทุน",
        "การ Halving ทุกๆ 4 ปี ทำให้อัตราเงินเฟ้อของระบบลดลงครึ่งหนึ่ง ส่งผลให้เกิด Supply Shock เสมอ",
        "การพัฒนา Layer 2 เช่น Lightning Network หรือ Taproot ช่วยขยายการใช้งานและความเป็นส่วนตัว"
      ],
      "bearCase": [
        "ความเสี่ยงด้านกฎระเบียบและการแบนจากประเทศมหาอำนาจ",
        "ความผันผวนของราคาที่รุนแรงในระยะสั้นอาจไม่เหมาะกับผู้ลงทุนที่รับความเสี่ยงได้ต่ำ",
        "ความกังวลด้านการใช้พลังงานไฟฟ้าในการขุด (แม้ปัจจุบันจะเปลี่ยนมาใช้พลังงานสะอาดมากกว่า 55%)"
      ]
    }
  },
  "MSFT": {
    "meta": {
      "symbol": "MSFT",
      "companyName": "Microsoft Corporation",
      "industry": "Software - Infrastructure",
      "sector": "Technology",
      "currentPrice": 397.36,
      "priceChange": -6.05,
      "priceChangePct": -1.5,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 10,
      "moat": "Wide",
      "marginOfSafety": "12%"
    },
    "technical": {
      "condition": "Strong Trend (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ประคองตัวยืนเหนือเส้น EMA 20 และ 50 วันได้อย่างมั่นคง"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "แนวโน้มหลักเป็นขาขึ้นชัดเจนในกรอบคู่ขนานระยะยาว"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 397.36
        },
        "poc": {
          "label": "POC",
          "price": 415.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 435.0
          },
          {
            "label": "R2",
            "price": 450.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 410.0
          },
          {
            "label": "S2",
            "price": 395.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 428.0
        },
        "val": {
          "label": "VAL",
          "price": 402.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$410 - $418",
        "stopLoss": "$395.00",
        "takeProfit1": "$440.00",
        "takeProfit2": "$465.00",
        "rrRatio": "1:2.3",
        "confidence": "High"
      }
    },
    "fundamental": {
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 98,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 96,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 100,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "44.6%",
        "roe": "38.4%",
        "pegRatio": "1.8",
        "debtToEquity": "0.35",
        "currentRatio": "1.4"
      },
      "valuation": {
        "forwardPE": "32.4",
        "beta": "0.95",
        "dividendYield": "0.72%",
        "marketCap": "$3.12T"
      },
      "cashFlow": {
        "operatingCashFlow": "$110B",
        "freeCashFlow": "$74B",
        "cashConversionCycle": "-32 days"
      }
    },
    "thesis": {
      "statement": "Microsoft มีความเป็นผู้นำระดับโลกด้าน Cloud Computing (Azure) และการบูรณาการ Generative AI (Copilot) เข้ากับซอฟต์แวร์สำนักงาน ส่งผลให้มีรายได้แบบต่อเนื่อง (Recurring Revenue) สูงมากและมีความมั่นคงทางการเงินในระดับ Triple-A",
      "bullCase": [
        "ความต้องการบริการคลาวด์ Azure ที่ขับเคลื่อนด้วยเทคโนโลยี AI เติบโตอย่างก้าวกระโดด",
        "รายได้ซอฟต์แวร์ Office 365 เติบโตแข็งแกร่งจากอัตราการปรับขึ้นราคาค่าบริการ Copilot AI",
        "ความแข็งแกร่งของกระแสเงินสดอิสระและการถือหุ้นใหญ่ใน OpenAI"
      ],
      "bearCase": [
        "แรงกดดันด้านค่าใช้จ่าย CapEx ที่สูงขึ้นในการจัดซื้อชิป AI และขยายศูนย์ข้อมูล (Data Center)",
        "ความเสี่ยงจากการถูกตรวจสอบด้านการผูกขาดทางการค้าและการร่วมทุนกับ OpenAI",
        "อัตราการเติบโตของซอฟต์แวร์ดั้งเดิมอาจชะลอตัวลงตามภาวะเศรษฐกิจมหาภาค"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$465.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "8-10%",
        "entryStrategy": "ทยอยรับสะสมเมื่อราคาย่อตัวลงทดสอบแนวรับช่วง $410 - $415"
      },
      "keyRisks": [
        "การแข่งขันที่รุนแรงในตลาดโครงสร้างพื้นฐานคลาวด์จาก AWS และ Google Cloud",
        "ความล้มเหลวในการแปลงรายได้จากบริการ Copilot ให้คุ้มค่ากับต้นทุนค่าประมวลผลเซิร์ฟเวอร์"
      ],
      "sources": [
        "Microsoft Q3 FY2026 Earnings",
        "Cloud Infrastructure Market Outlook"
      ]
    }
  },
  "AAPL": {
    "meta": {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "industry": "Consumer Electronics",
      "sector": "Technology",
      "currentPrice": 291.58,
      "priceChange": 1.03,
      "priceChangePct": 0.35,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY THE DIP",
      "verdictConfidence": "High Confidence",
      "taScore": 6,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "15%"
    },
    "technical": {
      "condition": "Buy the Dip (ตลาดย่อตัวเข้าจุดเก็บ)",
      "trend": {
        "direction": "Neutral (Short-term)",
        "strength": "Medium",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bearish",
            "note": "ราคาย่อตัวปรับฐานลงมาทดสอบแนวรับเส้นค่าเฉลี่ย EMA 200 วัน"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เทรนด์ใหญ่ระยะยาวรักษาระดับฐานรากที่แข็งแกร่งอย่างมั่นคง"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 291.58
        },
        "poc": {
          "label": "POC",
          "price": 182.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 198.0
          },
          {
            "label": "R2",
            "price": 208.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 184.0
          },
          {
            "label": "S2",
            "price": 175.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 195.0
        },
        "val": {
          "label": "VAL",
          "price": 178.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$182 - $188",
        "stopLoss": "$175.00",
        "takeProfit1": "$205.00",
        "takeProfit2": "$220.00",
        "rrRatio": "1:2.4",
        "confidence": "Medium-High"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 88,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 100,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 92,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "30.8%",
        "roe": "154.2%",
        "pegRatio": "2.2",
        "debtToEquity": "1.45",
        "currentRatio": "1.0"
      },
      "valuation": {
        "forwardPE": "27.5",
        "beta": "1.12",
        "dividendYield": "0.52%",
        "marketCap": "$2.94T"
      },
      "cashFlow": {
        "operatingCashFlow": "$115B",
        "freeCashFlow": "$98B",
        "cashConversionCycle": "-58 days"
      }
    },
    "thesis": {
      "statement": "Apple มีความโดดเด่นในฐานะแบรนด์สินค้าพรีเมียมอันดับหนึ่งของโลก พร้อมระบบนิเวศ iOS ที่แข็งแกร่งและมีอัตราการเปลี่ยนเครื่องที่เหนียวแน่น (Switching Costs สูง) โดยมีการเติบโตของรายได้ส่วนงาน Services เป็นเสาหลักใหม่ในการสร้างกระแสเงินสด",
      "bullCase": [
        "ระบบนิเวศอุปกรณ์ (Active Devices) ที่เติบโตทะลุ 2.2 พันล้านเครื่อง สร้างฐานผู้ใช้ที่แข็งแกร่ง",
        "รายได้จากกลุ่ม Services (App Store, iCloud, Apple Music) มีอัตรากำไรขั้นต้นสูงกว่า 70%",
        "การบูรณาการ Apple Intelligence (AI บนอุปกรณ์) กระตุ้นรอบการอัปเกรด iPhone ครั้งใหญ่"
      ],
      "bearCase": [
        "ยอดขาย iPhone ในตลาดใหญ่อย่างประเทศจีนเผชิญการแข่งขันที่รุนแรงและการกดดันจากภาครัฐ",
        "แรงกดดันด้านกฎหมายและคดีผูกขาดทางการค้าเกี่ยวกับ App Store ในสหรัฐฯ และสหภาพยุโรป",
        "อัตราการเติบโตของฮาร์ดแวร์หลักค่อนข้างทรงตัวและขาดนวัตกรรมปฏิวัติวงการชั่วคราว"
      ],
      "recommendation": {
        "action": "BUY THE DIP",
        "targetPrice": "$220.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "6-8%",
        "entryStrategy": "ทยอยสะสมในโซนแนวรับเมื่อราคายืดตัวเข้าใกล้เส้นค่าเฉลี่ย 200 วัน ($182 - $186)"
      },
      "keyRisks": [
        "ความล่าช้าในการเปิดตัวคุณสมบัติ Apple Intelligence ในหลายภูมิภาค",
        "ความขัดแย้งด้านภูมิรัฐศาสตร์ที่ส่งผลกระทบต่อห่วงโซ่อุปทานและโรงงานประกอบในเอเชีย"
      ],
      "sources": [
        "Apple Q2 2026 Operational Results",
        "Global Premium Smartphone Market Analysis"
      ]
    }
  },
  "AMZN": {
    "meta": {
      "symbol": "AMZN",
      "companyName": "Amazon.com, Inc.",
      "industry": "Internet Retail",
      "sector": "Consumer Cyclical",
      "currentPrice": 238.0,
      "priceChange": -6.19,
      "priceChangePct": -2.53,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 7,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "18%"
    },
    "technical": {
      "condition": "Strong Trend (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาสามารถยืนสร้างฐานเหนียวแน่นเหนือกรอบสะสมเดิมช่วง $175 ได้สำเร็จ"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "แนวโน้มขาขึ้นได้รับการสนับสนุนด้วยโวลุ่มซื้อขายที่เพิ่มขึ้นอย่างมั่นคง"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 238.0
        },
        "poc": {
          "label": "POC",
          "price": 172.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 192.0
          },
          {
            "label": "R2",
            "price": 205.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 175.0
          },
          {
            "label": "S2",
            "price": 164.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 186.0
        },
        "val": {
          "label": "VAL",
          "price": 162.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$172 - $178",
        "stopLoss": "$164.00",
        "takeProfit1": "$195.00",
        "takeProfit2": "$215.00",
        "rrRatio": "1:2.8",
        "confidence": "High"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 94,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 86,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 90,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "10.7%",
        "roe": "22.3%",
        "pegRatio": "1.3",
        "debtToEquity": "0.58",
        "currentRatio": "1.1"
      },
      "valuation": {
        "forwardPE": "38.2",
        "beta": "1.15",
        "dividendYield": "0.00%",
        "marketCap": "$1.89T"
      },
      "cashFlow": {
        "operatingCashFlow": "$96B",
        "freeCashFlow": "$52B",
        "cashConversionCycle": "-14 days"
      }
    },
    "thesis": {
      "statement": "Amazon เป็นยักษ์ใหญ่ผู้ครองส่วนแบ่งตลาด Cloud Services (AWS) อันดับหนึ่งของโลก และธุรกิจค้าปลีกอีคอมเมิร์ซที่ผสานระบบโลจิสติกส์อย่างไร้คู่แข่ง โดยมีการเติบโตของโฆษณาดิจิทัล (Advertising Services) ที่มีกำไรสูงเป็นตัวช่วยหนุนผลประกอบการ",
      "bullCase": [
        "AWS เร่งตัวขึ้นอย่างแข็งแกร่งจากการเติบโตของเวิร์กโหลด AI และระบบคลาวด์ระดับองค์กร",
        "อัตรากำไรของอีคอมเมิร์ซปรับตัวดีขึ้นต่อเนื่องจากการจัดโครงสร้างเครือข่ายกระจายสินค้าแบบภูมิภาค",
        "ธุรกิจโฆษณาดิจิทัลเติบโตรวดเร็วและมีอัตราการทำกำไรขั้นต้นที่สูงมาก"
      ],
      "bearCase": [
        "การฟ้องร้องคดีผูกขาดทางการค้าโดย FTC ซึ่งอาจกดดันโครงสร้างการทำธุรกิจของ Amazon Prime",
        "การใช้จ่ายด้านทุน (CapEx) เพื่อสนับสนุนโครงสร้างพื้นฐาน AWS AI ในปริมาณที่สูงมาก",
        "การบริโภคสินค้าค้าปลีกของสหรัฐฯ อาจชะลอตัวลงตามภาวะอัตราเงินเฟ้อหรือการจ้างงาน"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$215.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "6-8%",
        "entryStrategy": "ทยอยรับสะสมในบริเวณราคาแนวรับจิตวิทยาแถว $174 - $178"
      },
      "keyRisks": [
        "สงครามราคาและการแย่งชิงส่วนแบ่งการตลาดในธุรกิจ Cloud กับคู่แข่ง",
        "การเพิ่มขึ้นอย่างรวดเร็วของต้นทุนการจัดส่งสินค้าและโลจิสติกส์"
      ],
      "sources": [
        "Amazon Q1 2026 Earnings Release",
        "E-commerce Logistics Infrastructure Review"
      ]
    }
  },
  "META": {
    "meta": {
      "symbol": "META",
      "companyName": "Meta Platforms",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 570.98,
      "priceChange": -13.61,
      "priceChangePct": -2.33,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY THE DIP",
      "verdictConfidence": "High Confidence",
      "taScore": 5,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "Buy the Dip (ตลาดย่อตัวเข้าจุดเก็บ)",
      "trend": {
        "direction": "Downtrend (Short-term)",
        "strength": "Neutral",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bearish",
            "note": "ย่อตัวปรับฐานลงมาต่ำกว่าแนวรับ MA 50 วัน จากแรงกดดันงบ CapEx"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เทรนด์ระยะยาวยังคงทรงตัวในระดับสูง แข็งแกร่งสอดคล้องกับงบการเงิน"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 570.98
        },
        "poc": {
          "label": "POC",
          "price": 575.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 615.0
          },
          {
            "label": "R2",
            "price": 630.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 560.0
          },
          {
            "label": "S2",
            "price": 530.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 592.0
        },
        "val": {
          "label": "VAL",
          "price": 545.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$560 - $575",
        "stopLoss": "$530.00",
        "takeProfit1": "$610.00",
        "takeProfit2": "$650.00",
        "rrRatio": "1:2.6",
        "confidence": "High"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 95,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 90,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 95,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "34.1%",
        "roe": "31.2%",
        "pegRatio": "1.25",
        "debtToEquity": "0.08",
        "currentRatio": "2.1"
      },
      "valuation": {
        "forwardPE": "24.5",
        "beta": "1.20",
        "dividendYield": "0.33%",
        "marketCap": "$1.52T"
      },
      "cashFlow": {
        "operatingCashFlow": "$72B",
        "freeCashFlow": "$44B",
        "cashConversionCycle": "24 days"
      }
    },
    "thesis": {
      "statement": "Meta มีข้อได้เปรียบเชิงโครงสร้างที่เกือบผูกขาดในตลาด Social Media ของโลก (ผู้ใช้งานรายเดือน 3.2 พันล้านคนบน Facebook, IG, WhatsApp, Threads) และมีความโดดเด่นด้านกำไรขั้นต้นจากการเติบโตของโฆษณา AI ปรับปรุงประสิทธิภาพ",
      "bullCase": [
        "ความสามารถของระบบ AI ในการสแกนและแนะนำเนื้อหา (Reels) เพิ่มระยะเวลาการใช้งานของผู้ใช้",
        "โมเนไทเซชันและโฆษณาในแอปพลิเคชันอย่าง Reels และ Threads ที่เติบโตอย่างรวดเร็ว",
        "งบดุลและฐานะการเงินที่แข็งแกร่งมาก มีหนี้ระยะยาวต่ำเป็นประวัติการณ์"
      ],
      "bearCase": [
        "งบรายจ่ายเพื่อลงทุน (CapEx) สำหรับพัฒนา AI และ Reality Labs ในระดับที่สูงมากอย่างต่อเนื่อง",
        "ความเสี่ยงจากการพึ่งพารายได้ด้านโฆษณาเป็นสัดส่วนสูงถึง 98% ของบริษัท",
        "กฎระเบียบการปกป้องข้อมูลส่วนบุคคลในประเทศแถบยุโรปที่เป็นอุปสรรคต่อโมเดลโฆษณา"
      ],
      "recommendation": {
        "action": "BUY THE DIP",
        "targetPrice": "$650.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "6-8%",
        "entryStrategy": "ทยอยสะสมในกรอบแนวรับ $560 - $575 เพื่อลดความผันผวนของราคา"
      },
      "keyRisks": [
        "การชะลอตัวของเศรษฐกิจมหาภาคที่อาจทำให้งบโฆษณาของธุรกิจขนาดกลางและย่อมลดลง",
        "การเข้ามามีบทบาทของระบบโฆษณาที่ขับเคลื่อนด้วย AI ของคู่แข่งอื่นๆ"
      ],
      "sources": [
        "Meta Q1 2026 Earnings Report",
        "Global Advertising Spend Trends 2026"
      ]
    }
  },
  "TSLA": {
    "meta": {
      "symbol": "TSLA",
      "companyName": "Tesla, Inc.",
      "industry": "Auto Manufacturers",
      "sector": "Consumer Cyclical",
      "currentPrice": 381.59,
      "priceChange": -15.09,
      "priceChangePct": -3.8,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "REVERSAL SETUP",
      "verdictConfidence": "Medium Confidence",
      "taScore": 6,
      "viScore": 8,
      "moat": "Narrow",
      "marginOfSafety": "20%"
    },
    "technical": {
      "condition": "Reversal Setup (กลับตัวสร้างฐานจากจุดต่ำสุด)",
      "trend": {
        "direction": "Uptrend (Short-term)",
        "strength": "Medium",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาทะลุผ่านแนวต้านเส้นเทรนด์ไลน์ขาลงระยะสั้น พร้อมโวลุ่มสนับสนุน"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ราคากำลังพยายามสะสมกำลังเพื่อทวงคืนเส้นค่าเฉลี่ย EMA 50 สัปดาห์"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 381.59
        },
        "poc": {
          "label": "POC",
          "price": 168.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 192.0
          },
          {
            "label": "R2",
            "price": 208.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 165.0
          },
          {
            "label": "S2",
            "price": 152.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 184.0
        },
        "val": {
          "label": "VAL",
          "price": 158.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$166 - $174",
        "stopLoss": "$158.00",
        "takeProfit1": "$195.00",
        "takeProfit2": "$215.00",
        "rrRatio": "1:2.6",
        "confidence": "Medium"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 82,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 78,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 96,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "9.2%",
        "roe": "14.8%",
        "pegRatio": "2.4",
        "debtToEquity": "0.12",
        "currentRatio": "1.8"
      },
      "valuation": {
        "forwardPE": "58.5",
        "beta": "1.45",
        "dividendYield": "0.00%",
        "marketCap": "$562B"
      },
      "cashFlow": {
        "operatingCashFlow": "$12.4B",
        "freeCashFlow": "$4.2B",
        "cashConversionCycle": "12 days"
      }
    },
    "thesis": {
      "statement": "Tesla ไม่ได้เป็นเพียงบริษัทผู้ผลิตรถยนต์ไฟฟ้า (EV) แต่คือบริษัท AI และพลังงานชั้นนำของโลกที่มีความเป็นเลิศด้านการผลิตแบตเตอรี่ ระบบขับขี่อัตโนมัติ Full Self-Driving (FSD) และหุ่นยนต์ Optimus ซึ่งพร้อมเป็นแรงขับเคลื่อนหลักในระยะยาว",
      "bullCase": [
        "ความเป็นผู้นำการลดต้นทุนการผลิตรถยนต์ EV แบบ Next-Gen Platform ที่คู่แข่งยังตามไม่ทัน",
        "การเติบโตของธุรกิจกักเก็บพลังงาน (Megapack/Energy Storage) ที่มีอัตรากำไรดีเยี่ยม",
        "โอกาสทำรายได้มหาศาลจากระบบการให้บริการเครือข่ายรถแท็กซี่ไร้คนขับ (Robotaxi/FSD)"
      ],
      "bearCase": [
        "การแข่งขันที่รุนแรงและการทำสงครามราคารถ EV จากแบรนด์คู่แข่งในตลาดประเทศจีน",
        "อัตรากำไรขั้นต้นของยานยนต์ (Automotive Margin) ปรับตัวลดลงจากกลยุทธ์การลดราคาขาย",
        "ความเสี่ยงจากการล่าช้าในการเปิดตัวซอฟต์แวร์ FSD เต็มรูปแบบและการอนุมัติทางกฎหมาย"
      ],
      "recommendation": {
        "action": "BUY ON WEAKNESS",
        "targetPrice": "$215.00",
        "timeHorizon": "2-3 ปี",
        "positionSize": "4-6%",
        "entryStrategy": "ทยอยแบ่งไม้รับสะสมเมื่อราคายืนสร้างฐานมั่นคงเหนือระดับ $168 - $172 ได้ต่อเนื่อง"
      },
      "keyRisks": [
        "ความไม่แน่นอนเกี่ยวกับแผนการส่งมอบรถรุ่นประหยัด (Model 2/Next-Gen)",
        "ความผันผวนในการตัดสินใจเชิงกลยุทธ์หรือการแบ่งเวลาของ CEO Elon Musk"
      ],
      "sources": [
        "Tesla Q1 2026 Operational Results",
        "Autonomous Vehicles Global Legal Frameworks"
      ]
    }
  },
  "ASML": {
    "meta": {
      "symbol": "ASML",
      "companyName": "ASML Holding N.V.",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 1734.19,
      "priceChange": -43.58,
      "priceChangePct": -2.45,
      "analysisDate": "2026-06-10"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 7,
      "viScore": 10,
      "moat": "Wide",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "Reversal Setup (กลับตัวสร้างฐานจากจุดต่ำสุด)",
      "trend": {
        "direction": "Uptrend (Short-term)",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคารีบาวด์ขึ้นอย่างแข็งแกร่งจากแนวรับจิตวิทยาจิตวิทยา $1,350 พร้อมโวลุ่มหนุนหนาแน่น"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ประคองตัวยืนเหนือแนวรับเส้นค่าเฉลี่ยสัปดาห์ได้อย่างแข็งแกร่งเป็นประวัติการณ์"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 1734.19
        },
        "poc": {
          "label": "POC",
          "price": 1320.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1420.0
          },
          {
            "label": "R2",
            "price": 1480.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1320.0
          },
          {
            "label": "S2",
            "price": 1280.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1395.0
        },
        "val": {
          "label": "VAL",
          "price": 1285.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$1310 - $1345",
        "stopLoss": "$1260.00",
        "takeProfit1": "$1450.00",
        "takeProfit2": "$1550.00",
        "rrRatio": "1:2.4",
        "confidence": "High"
      }
    },
    "fundamental": {
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Growth Quality",
          "score": 98,
          "color": "var(--accent-primary)"
        },
        {
          "label": "Capital Efficiency",
          "score": 100,
          "color": "#10b981"
        },
        {
          "label": "Balance Sheet Safety",
          "score": 95,
          "color": "#6366f1"
        }
      ],
      "ratios": {
        "operatingMargin": "32.4%",
        "roe": "52.8%",
        "pegRatio": "1.75",
        "debtToEquity": "0.38",
        "currentRatio": "1.6"
      },
      "valuation": {
        "forwardPE": "42.5",
        "beta": "1.18",
        "dividendYield": "0.68%",
        "marketCap": "$582B"
      },
      "cashFlow": {
        "operatingCashFlow": "$10.8B",
        "freeCashFlow": "$7.2B",
        "cashConversionCycle": "88 days"
      }
    },
    "thesis": {
      "statement": "ASML Holding เป็นบริษัทผู้ผลิตเครื่องพิมพ์โฟโตลิโทกราฟีระบบ EUV รายเดียวในโลกซึ่งเป็นกุญแจสำคัญในการพิมพ์ชิประดับ 3nm/2nm หรือต่ำกว่า ทำให้บริษัทมีอำนาจผูกขาดสูงที่สุดในห่วงโซ่อุปทานเซมิคอนดักเตอร์โลก",
      "bullCase": [
        "เครื่องพิมพ์ High-NA EUV รุ่นใหม่ส่งมอบอย่างต่อเนื่อง ช่วยเร่งการพัฒนาชิปความเร็วสูงสำหรับ AI",
        "กระแสความต้องการชิป AI ขนาดย่อมระดับโลกช่วยผลักดันให้เกิดการสั่งซื้อเครื่องมือระยะยาวอย่างเหนียวแน่น",
        "คูเมืองทางเทคโนโลยี (Wide Moat) จากสิทธิบัตรและการลงทุนทำวิจัยที่คู่แข่งไม่สามารถลอกเลียนแบบได้"
      ],
      "bearCase": [
        "มาตรการจำกัดการส่งออกของรัฐบาลเนเธอร์แลนด์และสหรัฐฯ ที่ห้ามจำหน่ายเครื่องมือระดับสูงไปยังประเทศจีน",
        "การใช้จ่ายเงินทุน (CapEx) ของโรงหล่อชิปรายใหญ่อาจเลื่อนจังหวะสั่งซื้อออกไปตามความผันผวนของดีมานด์",
        "ความเสี่ยงจากการประกอบเครื่องมือที่มีความซับซ้อนและการควบคุมคุณภาพโรงงานในระดับไมโคร"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$1,550.00",
        "timeHorizon": "2-3 ปี",
        "positionSize": "8-10%",
        "entryStrategy": "ทยอยสะสมแบบเฉลี่ยต้นทุน (DCA) หรือแบ่งไม้รับในกรอบแนวรับ $1,320 - $1,350"
      },
      "keyRisks": [
        "นโยบายการจัดเก็บภาษีและสงครามการค้าระหว่างประเทศที่ทวีความรุนแรงขึ้น",
        "ระยะเวลาการผลิตและการประกอบเครื่องยาวนาน (Lead Time สูง) ซึ่งกระทบต่ออัตราการรับรู้รายได้"
      ],
      "sources": [
        "ASML Q1 2026 Operational Results",
        "EUV Lithography Supply Chain Monopoly Review"
      ]
    }
  },
  "ORCL": {
    "meta": {
      "symbol": "ORCL",
      "companyName": "Oracle",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 201.26,
      "priceChange": -4.55,
      "priceChangePct": -2.21,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 3,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $191.11"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 201.26
        },
        "poc": {
          "label": "POC",
          "price": 193.21
        },
        "resistances": [
          {
            "label": "R1",
            "price": 211.32
          },
          {
            "label": "R2",
            "price": 225.41
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 191.11
          },
          {
            "label": "S2",
            "price": 181.13
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 207.3
        },
        "val": {
          "label": "VAL",
          "price": 183.15
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$191.2 - $199.25",
        "stopLoss": "$173.88",
        "takeProfit1": "$211.32",
        "takeProfit2": "$225.41",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($191.11) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 49.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.75x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$10.56",
        "maxLoss": "$14.08",
        "atr14": "$7.04"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 30,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "1.2",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "26.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Oracle (ORCL) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$211.32",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($181.13) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($181.13) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "NOW": {
    "meta": {
      "symbol": "NOW",
      "companyName": "ServiceNow",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 106.06,
      "priceChange": -0.91,
      "priceChangePct": -0.85,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 1,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $105.37"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 106.06
        },
        "poc": {
          "label": "POC",
          "price": 101.82
        },
        "resistances": [
          {
            "label": "R1",
            "price": 111.36
          },
          {
            "label": "R2",
            "price": 118.79
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 105.37
          },
          {
            "label": "S2",
            "price": 95.45
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 109.24
        },
        "val": {
          "label": "VAL",
          "price": 96.51
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$100.76 - $105.0",
        "stopLoss": "$91.63",
        "takeProfit1": "$111.36",
        "takeProfit2": "$118.79",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($105.37) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 49.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.56x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$5.56",
        "maxLoss": "$7.42",
        "atr14": "$3.71"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 10,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "2.5",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "55.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น ServiceNow (NOW) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (55.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$111.36",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($95.45) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($95.45) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "PLTR": {
    "meta": {
      "symbol": "PLTR",
      "companyName": "Palantir",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 130.21,
      "priceChange": -1.86,
      "priceChangePct": -1.41,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 0,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $123.7"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 130.21
        },
        "poc": {
          "label": "POC",
          "price": 125.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 136.72
          },
          {
            "label": "R2",
            "price": 145.84
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 123.7
          },
          {
            "label": "S2",
            "price": 117.19
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 134.12
        },
        "val": {
          "label": "VAL",
          "price": 118.49
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$123.7 - $128.91",
        "stopLoss": "$112.50",
        "takeProfit1": "$136.72",
        "takeProfit2": "$145.84",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($123.7) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.73x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.84",
        "maxLoss": "$9.12",
        "atr14": "$4.56"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 0,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "3.73",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "82.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Palantir (PLTR) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 0/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (82.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$136.72",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($117.19) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($117.19) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "ANET": {
    "meta": {
      "symbol": "ANET",
      "companyName": "Arista Networks",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 151.76,
      "priceChange": -0.4,
      "priceChangePct": -0.26,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 3,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $144.17"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 151.76
        },
        "poc": {
          "label": "POC",
          "price": 145.69
        },
        "resistances": [
          {
            "label": "R1",
            "price": 159.35
          },
          {
            "label": "R2",
            "price": 169.97
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 144.17
          },
          {
            "label": "S2",
            "price": 140.28
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 156.31
        },
        "val": {
          "label": "VAL",
          "price": 138.1
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$144.17 - $150.24",
        "stopLoss": "$134.67",
        "takeProfit1": "$159.35",
        "takeProfit2": "$169.97",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($144.17) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 46.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.69x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$7.96",
        "maxLoss": "$10.62",
        "atr14": "$5.31"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 30,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "1.75",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "38.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Arista Networks (ANET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (38.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$159.35",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($136.58) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($140.28) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "AMD": {
    "meta": {
      "symbol": "AMD",
      "companyName": "AMD",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 452.4,
      "priceChange": -23.11,
      "priceChangePct": -4.86,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $397.55"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 452.4
        },
        "poc": {
          "label": "POC",
          "price": 434.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 475.02
          },
          {
            "label": "R2",
            "price": 506.69
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 397.55
          },
          {
            "label": "S2",
            "price": 271.56
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 465.97
        },
        "val": {
          "label": "VAL",
          "price": 411.68
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$429.78 - $447.88",
        "stopLoss": "$260.70",
        "takeProfit1": "$475.02",
        "takeProfit2": "$506.69",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($397.55) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 50.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.87x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$23.75",
        "maxLoss": "$31.66",
        "atr14": "$15.83"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "2.18",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "48.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น AMD (AMD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (48.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$475.02",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($407.16) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($271.56) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "AVGO": {
    "meta": {
      "symbol": "AVGO",
      "companyName": "Broadcom",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 372.1,
      "priceChange": -20.06,
      "priceChangePct": -5.12,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 3,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $353.5"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 372.1
        },
        "poc": {
          "label": "POC",
          "price": 357.22
        },
        "resistances": [
          {
            "label": "R1",
            "price": 390.71
          },
          {
            "label": "R2",
            "price": 416.75
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 353.5
          },
          {
            "label": "S2",
            "price": 358.1
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 383.26
        },
        "val": {
          "label": "VAL",
          "price": 338.61
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$353.5 - $368.38",
        "stopLoss": "$343.78",
        "takeProfit1": "$390.71",
        "takeProfit2": "$416.75",
        "rrRatio": "1:0.7",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($353.5) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 37.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.24x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.7",
        "trailingStop": "$19.53",
        "maxLoss": "$26.04",
        "atr14": "$13.02"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 30,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "1.6",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "35.2",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Broadcom (AVGO) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.7) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (35.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$390.71",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($334.89) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($358.1) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "NFLX": {
    "meta": {
      "symbol": "NFLX",
      "companyName": "Netflix",
      "industry": "Communication Industry",
      "sector": "Communication",
      "currentPrice": 82.0,
      "priceChange": 0.59,
      "priceChangePct": 0.72,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 1,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $77.9"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 82.0
        },
        "poc": {
          "label": "POC",
          "price": 78.72
        },
        "resistances": [
          {
            "label": "R1",
            "price": 86.1
          },
          {
            "label": "R2",
            "price": 91.84
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 77.9
          },
          {
            "label": "S2",
            "price": 73.8
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 84.46
        },
        "val": {
          "label": "VAL",
          "price": 74.62
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$77.9 - $81.18",
        "stopLoss": "$70.85",
        "takeProfit1": "$86.10",
        "takeProfit2": "$91.84",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($77.9) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 33.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.03x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.30",
        "maxLoss": "$5.74",
        "atr14": "$2.87"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 10,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.65",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "36.4",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Netflix (NFLX) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Communication",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (36.4x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$86.10",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($73.8) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($73.8) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "COIN": {
    "meta": {
      "symbol": "COIN",
      "companyName": "Coinbase",
      "industry": "Financials Industry",
      "sector": "Financials",
      "currentPrice": 153.97,
      "priceChange": -1.53,
      "priceChangePct": -0.98,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 1,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $146.27"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 153.97
        },
        "poc": {
          "label": "POC",
          "price": 147.81
        },
        "resistances": [
          {
            "label": "R1",
            "price": 161.67
          },
          {
            "label": "R2",
            "price": 172.45
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 146.27
          },
          {
            "label": "S2",
            "price": 138.57
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 158.59
        },
        "val": {
          "label": "VAL",
          "price": 140.11
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$146.27 - $152.43",
        "stopLoss": "$133.03",
        "takeProfit1": "$161.67",
        "takeProfit2": "$172.45",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($146.27) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 36.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.66x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$8.08",
        "maxLoss": "$10.78",
        "atr14": "$5.39"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 10,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.3",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "28.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Coinbase (COIN) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (28.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$161.67",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($138.57) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($138.57) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "CRWD": {
    "meta": {
      "symbol": "CRWD",
      "companyName": "CrowdStrike",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 647.74,
      "priceChange": 2.81,
      "priceChangePct": 0.44,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $570.49"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 647.74
        },
        "poc": {
          "label": "POC",
          "price": 621.83
        },
        "resistances": [
          {
            "label": "R1",
            "price": 680.13
          },
          {
            "label": "R2",
            "price": 725.47
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 570.49
          },
          {
            "label": "S2",
            "price": 497.59
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 667.17
        },
        "val": {
          "label": "VAL",
          "price": 589.44
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$615.35 - $641.26",
        "stopLoss": "$477.69",
        "takeProfit1": "$680.13",
        "takeProfit2": "$725.47",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($570.49) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 53.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.65x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$34.01",
        "maxLoss": "$45.34",
        "atr14": "$22.67"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "3.27",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "72.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น CrowdStrike (CRWD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (72.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$680.13",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($582.97) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($497.59) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "SMCI": {
    "meta": {
      "symbol": "SMCI",
      "companyName": "Super Micro",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 29.27,
      "priceChange": -11.37,
      "priceChangePct": -27.98,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $27.81"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 29.27
        },
        "poc": {
          "label": "POC",
          "price": 28.1
        },
        "resistances": [
          {
            "label": "R1",
            "price": 30.73
          },
          {
            "label": "R2",
            "price": 32.78
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 27.81
          },
          {
            "label": "S2",
            "price": 26.34
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 30.15
        },
        "val": {
          "label": "VAL",
          "price": 26.64
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$27.81 - $28.98",
        "stopLoss": "$25.29",
        "takeProfit1": "$30.73",
        "takeProfit2": "$32.78",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($27.81) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 38.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 3.79x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$1.53",
        "maxLoss": "$2.04",
        "atr14": "$1.02"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "0.84",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "18.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Super Micro (SMCI) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$30.73",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($26.34) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($26.34) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "CELH": {
    "meta": {
      "symbol": "CELH",
      "companyName": "Celsius",
      "industry": "Consumer Defensive Industry",
      "sector": "Consumer Defensive",
      "currentPrice": 28.37,
      "priceChange": 0.18,
      "priceChangePct": 0.64,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 0,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $26.95"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 28.37
        },
        "poc": {
          "label": "POC",
          "price": 27.24
        },
        "resistances": [
          {
            "label": "R1",
            "price": 29.79
          },
          {
            "label": "R2",
            "price": 31.77
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 26.95
          },
          {
            "label": "S2",
            "price": 25.53
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 29.22
        },
        "val": {
          "label": "VAL",
          "price": 25.82
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$26.95 - $28.09",
        "stopLoss": "$24.51",
        "takeProfit1": "$29.79",
        "takeProfit2": "$31.77",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($26.95) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 39.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.73x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$1.48",
        "maxLoss": "$1.98",
        "atr14": "$0.99"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 0,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "2.05",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "45.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Celsius (CELH) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 0/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Consumer Defensive",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (45.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$29.79",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($25.53) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($25.53) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "VRT": {
    "meta": {
      "symbol": "VRT",
      "companyName": "Vertiv",
      "industry": "Industrials Industry",
      "sector": "Industrials",
      "currentPrice": 280.98,
      "priceChange": -8.54,
      "priceChangePct": -2.95,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $266.93"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 280.98
        },
        "poc": {
          "label": "POC",
          "price": 269.74
        },
        "resistances": [
          {
            "label": "R1",
            "price": 295.03
          },
          {
            "label": "R2",
            "price": 314.7
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 266.93
          },
          {
            "label": "S2",
            "price": 229.2
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 289.41
        },
        "val": {
          "label": "VAL",
          "price": 255.69
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$266.93 - $278.17",
        "stopLoss": "$220.03",
        "takeProfit1": "$295.03",
        "takeProfit2": "$314.70",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($266.93) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 33.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.13x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$14.75",
        "maxLoss": "$19.66",
        "atr14": "$9.83"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.75",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "38.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Vertiv (VRT) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Industrials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (38.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$295.03",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($252.88) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($229.2) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "NU": {
    "meta": {
      "symbol": "NU",
      "companyName": "Nu Holdings",
      "industry": "Financials Industry",
      "sector": "Financials",
      "currentPrice": 11.62,
      "priceChange": -0.26,
      "priceChangePct": -2.19,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 2,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.04"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 11.62
        },
        "poc": {
          "label": "POC",
          "price": 11.16
        },
        "resistances": [
          {
            "label": "R1",
            "price": 12.2
          },
          {
            "label": "R2",
            "price": 13.01
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.04
          },
          {
            "label": "S2",
            "price": 10.46
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 11.97
        },
        "val": {
          "label": "VAL",
          "price": 10.57
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$11.04 - $11.5",
        "stopLoss": "$10.04",
        "takeProfit1": "$12.20",
        "takeProfit2": "$13.01",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.04) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 34.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.56x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$0.61",
        "maxLoss": "$0.82",
        "atr14": "$0.41"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 20,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.29",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "28.4",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Nu Holdings (NU) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 2/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (28.4x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$12.20",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.46) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.46) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "MELI": {
    "meta": {
      "symbol": "MELI",
      "companyName": "MercadoLibre",
      "industry": "Consumer Cyclical Industry",
      "sector": "Consumer Cyclical",
      "currentPrice": 1588.29,
      "priceChange": -52.87,
      "priceChangePct": -3.22,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 0,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $1508.88"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 1588.29
        },
        "poc": {
          "label": "POC",
          "price": 1524.76
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1667.7
          },
          {
            "label": "R2",
            "price": 1778.88
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1508.88
          },
          {
            "label": "S2",
            "price": 1429.46
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1635.94
        },
        "val": {
          "label": "VAL",
          "price": 1445.34
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$1508.88 - $1572.41",
        "stopLoss": "$1372.28",
        "takeProfit1": "$1667.70",
        "takeProfit2": "$1778.88",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($1508.88) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.7x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$83.39",
        "maxLoss": "$111.18",
        "atr14": "$55.59"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 0,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "2.11",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "46.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น MercadoLibre (MELI) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 0/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Consumer Cyclical",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (46.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$1667.70",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($1429.46) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($1429.46) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "MSTR": {
    "meta": {
      "symbol": "MSTR",
      "companyName": "MicroStrategy",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 115.35,
      "priceChange": -1.67,
      "priceChangePct": -1.43,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 1,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $109.58"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 115.35
        },
        "poc": {
          "label": "POC",
          "price": 110.74
        },
        "resistances": [
          {
            "label": "R1",
            "price": 121.12
          },
          {
            "label": "R2",
            "price": 129.19
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 109.58
          },
          {
            "label": "S2",
            "price": 103.81
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 118.81
        },
        "val": {
          "label": "VAL",
          "price": 104.97
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$109.58 - $114.2",
        "stopLoss": "$99.66",
        "takeProfit1": "$121.12",
        "takeProfit2": "$129.19",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($109.58) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 30.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.85x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.06",
        "maxLoss": "$8.08",
        "atr14": "$4.04"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 10,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "4.32",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "95.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น MicroStrategy (MSTR) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (95.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$121.12",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($103.81) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($103.81) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "HOOD": {
    "meta": {
      "symbol": "HOOD",
      "companyName": "Robinhood",
      "industry": "Financials Industry",
      "sector": "Financials",
      "currentPrice": 86.36,
      "priceChange": 2.59,
      "priceChangePct": 3.09,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 5,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $81.22"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 86.36
        },
        "poc": {
          "label": "POC",
          "price": 82.91
        },
        "resistances": [
          {
            "label": "R1",
            "price": 90.68
          },
          {
            "label": "R2",
            "price": 96.72
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 81.22
          },
          {
            "label": "S2",
            "price": 77.72
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 88.95
        },
        "val": {
          "label": "VAL",
          "price": 78.59
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$82.04 - $85.5",
        "stopLoss": "$74.61",
        "takeProfit1": "$90.68",
        "takeProfit2": "$96.72",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($81.22) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 55.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.47x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.53",
        "maxLoss": "$6.04",
        "atr14": "$3.02"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 50,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.1",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "24.2",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Robinhood (HOOD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (24.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$90.68",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($77.72) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "LUNR": {
    "meta": {
      "symbol": "LUNR",
      "companyName": "Intuitive Machines",
      "industry": "Industrials Industry",
      "sector": "Industrials",
      "currentPrice": 26.54,
      "priceChange": -0.93,
      "priceChangePct": -3.39,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $25.21"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 26.54
        },
        "poc": {
          "label": "POC",
          "price": 25.48
        },
        "resistances": [
          {
            "label": "R1",
            "price": 27.87
          },
          {
            "label": "R2",
            "price": 29.72
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 25.21
          },
          {
            "label": "S2",
            "price": 19.73
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 27.34
        },
        "val": {
          "label": "VAL",
          "price": 24.15
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$25.21 - $26.27",
        "stopLoss": "$18.94",
        "takeProfit1": "$27.87",
        "takeProfit2": "$29.72",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($25.21) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.48x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$1.40",
        "maxLoss": "$1.86",
        "atr14": "$0.93"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "0.68",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "15.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Intuitive Machines (LUNR) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Industrials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (15.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$27.87",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($23.89) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($19.73) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "QCOM": {
    "meta": {
      "symbol": "QCOM",
      "companyName": "Qualcomm",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 191.2,
      "priceChange": -14.22,
      "priceChangePct": -6.92,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $181.64"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 191.2
        },
        "poc": {
          "label": "POC",
          "price": 183.55
        },
        "resistances": [
          {
            "label": "R1",
            "price": 200.76
          },
          {
            "label": "R2",
            "price": 214.14
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 181.64
          },
          {
            "label": "S2",
            "price": 169.61
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 196.94
        },
        "val": {
          "label": "VAL",
          "price": 173.99
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$181.64 - $189.29",
        "stopLoss": "$162.83",
        "takeProfit1": "$200.76",
        "takeProfit2": "$214.14",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($181.64) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 43.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.79x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$10.04",
        "maxLoss": "$13.38",
        "atr14": "$6.69"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "0.83",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "18.2",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Qualcomm (QCOM) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.3) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$200.76",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($172.08) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($169.61) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "ARM": {
    "meta": {
      "symbol": "ARM",
      "companyName": "ARM Holdings",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 307.43,
      "priceChange": -17.43,
      "priceChangePct": -5.37,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $254.68"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 307.43
        },
        "poc": {
          "label": "POC",
          "price": 295.13
        },
        "resistances": [
          {
            "label": "R1",
            "price": 322.8
          },
          {
            "label": "R2",
            "price": 344.32
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 254.68
          },
          {
            "label": "S2",
            "price": 180.29
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 316.65
        },
        "val": {
          "label": "VAL",
          "price": 279.76
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$292.06 - $304.36",
        "stopLoss": "$173.08",
        "takeProfit1": "$322.80",
        "takeProfit2": "$344.32",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($254.68) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 52.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.63x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$16.14",
        "maxLoss": "$21.52",
        "atr14": "$10.76"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 40,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "3.41",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "75.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น ARM Holdings (ARM) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (75.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$322.80",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($276.69) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($180.29) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "PANW": {
    "meta": {
      "symbol": "PANW",
      "companyName": "Palo Alto",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 263.22,
      "priceChange": 2.7,
      "priceChangePct": 1.04,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 5,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $224.73"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 263.22
        },
        "poc": {
          "label": "POC",
          "price": 252.69
        },
        "resistances": [
          {
            "label": "R1",
            "price": 276.38
          },
          {
            "label": "R2",
            "price": 294.81
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 224.73
          },
          {
            "label": "S2",
            "price": 199.35
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 271.12
        },
        "val": {
          "label": "VAL",
          "price": 239.53
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$250.06 - $260.59",
        "stopLoss": "$191.38",
        "takeProfit1": "$276.38",
        "takeProfit2": "$294.81",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($224.73) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.66x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$13.82",
        "maxLoss": "$18.42",
        "atr14": "$9.21"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 50,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "2.18",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "48.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Palo Alto (PANW) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (48.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$276.38",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($199.35) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "NET": {
    "meta": {
      "symbol": "NET",
      "companyName": "Cloudflare",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 219.67,
      "priceChange": -16.46,
      "priceChangePct": -6.97,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 3,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $208.69"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 219.67
        },
        "poc": {
          "label": "POC",
          "price": 210.88
        },
        "resistances": [
          {
            "label": "R1",
            "price": 230.65
          },
          {
            "label": "R2",
            "price": 246.03
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 208.69
          },
          {
            "label": "S2",
            "price": 207.57
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 226.26
        },
        "val": {
          "label": "VAL",
          "price": 199.9
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$208.69 - $217.47",
        "stopLoss": "$199.27",
        "takeProfit1": "$230.65",
        "takeProfit2": "$246.03",
        "rrRatio": "1:0.5",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($208.69) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 46.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.23x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.5",
        "trailingStop": "$11.54",
        "maxLoss": "$15.38",
        "atr14": "$7.69"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 30,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "3.09",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "68.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Cloudflare (NET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.5) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (68.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$230.65",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($197.7) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($207.57) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "DDOG": {
    "meta": {
      "symbol": "DDOG",
      "companyName": "Datadog",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 227.63,
      "priceChange": 0.29,
      "priceChangePct": 0.13,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 5,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $189.29"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 227.63
        },
        "poc": {
          "label": "POC",
          "price": 218.52
        },
        "resistances": [
          {
            "label": "R1",
            "price": 239.01
          },
          {
            "label": "R2",
            "price": 254.95
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 189.29
          },
          {
            "label": "S2",
            "price": 155.09
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 234.46
        },
        "val": {
          "label": "VAL",
          "price": 207.14
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$216.25 - $225.35",
        "stopLoss": "$148.89",
        "takeProfit1": "$239.01",
        "takeProfit2": "$254.95",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($189.29) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 57.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.57x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$11.96",
        "maxLoss": "$15.94",
        "atr14": "$7.97"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 50,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "2.45",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "54.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Datadog (DDOG) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (54.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$239.01",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($155.09) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "SNOW": {
    "meta": {
      "symbol": "SNOW",
      "companyName": "Snowflake",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 239.9,
      "priceChange": 0.24,
      "priceChangePct": 0.1,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 3,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $188.25"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 239.9
        },
        "poc": {
          "label": "POC",
          "price": 230.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 251.9
          },
          {
            "label": "R2",
            "price": 268.69
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 188.25
          },
          {
            "label": "S2",
            "price": 199.04
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 247.1
        },
        "val": {
          "label": "VAL",
          "price": 218.31
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$227.91 - $237.5",
        "stopLoss": "$191.08",
        "takeProfit1": "$251.90",
        "takeProfit2": "$268.69",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($188.25) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 66.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.54x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$12.60",
        "maxLoss": "$16.80",
        "atr14": "$8.40"
      }
    },
    "fundamental": {
      "overallGrade": "B",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 40,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 30,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "2.82",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "62.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Snowflake (SNOW) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (62.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$251.90",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($215.91) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($199.04) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "ABNB": {
    "meta": {
      "symbol": "ABNB",
      "companyName": "Airbnb",
      "industry": "Consumer Cyclical Industry",
      "sector": "Consumer Cyclical",
      "currentPrice": 129.1,
      "priceChange": -2.25,
      "priceChangePct": -1.71,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 2,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $122.64"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 129.1
        },
        "poc": {
          "label": "POC",
          "price": 123.94
        },
        "resistances": [
          {
            "label": "R1",
            "price": 135.56
          },
          {
            "label": "R2",
            "price": 144.59
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 122.64
          },
          {
            "label": "S2",
            "price": 116.19
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 132.97
        },
        "val": {
          "label": "VAL",
          "price": 117.48
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$122.64 - $127.81",
        "stopLoss": "$111.54",
        "takeProfit1": "$135.56",
        "takeProfit2": "$144.59",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($122.64) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 39.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.96x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.78",
        "maxLoss": "$9.04",
        "atr14": "$4.52"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 20,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.2",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "26.5",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Airbnb (ABNB) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 2/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Consumer Cyclical",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$135.56",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($116.19) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($116.19) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "UBER": {
    "meta": {
      "symbol": "UBER",
      "companyName": "Uber",
      "industry": "Industrials Industry",
      "sector": "Industrials",
      "currentPrice": 68.61,
      "priceChange": -1.77,
      "priceChangePct": -2.51,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 0,
      "viScore": 5,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $65.18"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 68.61
        },
        "poc": {
          "label": "POC",
          "price": 65.87
        },
        "resistances": [
          {
            "label": "R1",
            "price": 72.04
          },
          {
            "label": "R2",
            "price": 76.84
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 65.18
          },
          {
            "label": "S2",
            "price": 61.75
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 70.67
        },
        "val": {
          "label": "VAL",
          "price": 62.44
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$65.18 - $67.92",
        "stopLoss": "$59.28",
        "takeProfit1": "$72.04",
        "takeProfit2": "$76.84",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($65.18) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 36.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.06x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$3.60",
        "maxLoss": "$4.80",
        "atr14": "$2.40"
      }
    },
    "fundamental": {
      "overallGrade": "B+",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 60,
          "color": "var(--color-bearish)"
        },
        {
          "label": "Trend Momentum",
          "score": 0,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "15.4%",
        "roe": "16.2%",
        "pegRatio": "1.43",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "31.4",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น Uber (UBER) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 0/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Industrials",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (31.4x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$72.04",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($61.75) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($61.75) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  },
  "PATH": {
    "meta": {
      "symbol": "PATH",
      "companyName": "UiPath",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 10.75,
      "priceChange": 0.0,
      "priceChangePct": 0.0,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 2,
      "viScore": 7,
      "moat": "Calculated Moat (High Growth)",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $10.21"
          },
          {
            "tf": "Weekly",
            "bias": "neutral",
            "note": "ฐานระยะยาวยังคงขับเคลื่อนด้วยแนวโน้มขาขึ้นหลัก"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 10.75
        },
        "poc": {
          "label": "POC",
          "price": 10.32
        },
        "resistances": [
          {
            "label": "R1",
            "price": 11.29
          },
          {
            "label": "R2",
            "price": 12.04
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 10.21
          },
          {
            "label": "S2",
            "price": 9.68
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 11.07
        },
        "val": {
          "label": "VAL",
          "price": 9.78
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$10.21 - $10.64",
        "stopLoss": "$9.29",
        "takeProfit1": "$11.29",
        "takeProfit2": "$12.04",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($10.21) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 46.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.97x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$0.57",
        "maxLoss": "$0.76",
        "atr14": "$0.38"
      }
    },
    "fundamental": {
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Valuation Strength",
          "score": 80,
          "color": "var(--color-bullish)"
        },
        {
          "label": "Trend Momentum",
          "score": 20,
          "color": "var(--color-accent)"
        },
        {
          "label": "Efficiency Score",
          "score": 75,
          "color": "#10b981"
        }
      ],
      "ratios": {
        "operatingMargin": "22.5%",
        "roe": "24.8%",
        "pegRatio": "1.0",
        "debtToEquity": "0.45",
        "currentRatio": "1.5"
      },
      "cashFlow": {
        "operatingCashFlow": "N/A (Algo)",
        "freeCashFlow": "N/A (Algo)",
        "cashConversionCycle": "-15 วัน"
      },
      "valuation": {
        "forwardPE": "22.0",
        "beta": "1.22",
        "dividendYield": "0.42%",
        "marketCap": "Calculated (Algo)"
      }
    },
    "thesis": {
      "statement": "หุ้น UiPath (PATH) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 2/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (22.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$11.29",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($9.68) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($9.68) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
        "แรงเทขายทำกำไรระยะสั้นในกลุ่มอุตสาหกรรมอ้างอิงหลังวิ่งเข้าใกล้โซนแนวต้านหลัก"
      ],
      "sources": [
        "Yahoo Finance API Real-Time Technical Feed",
        "Shu Algorithmic Daily Breakout Engine"
      ]
    }
  }
};
const screenerData = [
  {
    "symbol": "MSFT",
    "name": "Microsoft",
    "sector": "Technology",
    "price": 397.36,
    "change": -6.05,
    "pct": -1.5,
    "pe": 32.4,
    "rsi": 39.4,
    "volSpike": 0.83,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 410.0,
    "s2": 395.0
  },
  {
    "symbol": "BTC-USD",
    "name": "Bitcoin",
    "sector": "Digital Asset",
    "price": 61312.34,
    "change": -331.44,
    "pct": -0.54,
    "pe": 999.0,
    "rsi": 23.4,
    "volSpike": 0.76,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 64000.0,
    "s2": 60000.0
  },
  {
    "symbol": "AAPL",
    "name": "Apple",
    "sector": "Technology",
    "price": 291.58,
    "change": 1.03,
    "pct": 0.35,
    "pe": 27.5,
    "rsi": 43.8,
    "volSpike": 0.97,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 184.0,
    "s2": 175.0
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA",
    "sector": "Technology",
    "price": 200.42,
    "change": -7.77,
    "pct": -3.73,
    "pe": 58.2,
    "rsi": 41.1,
    "volSpike": 0.84,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 212.0,
    "s2": 200.0
  },
  {
    "symbol": "AMZN",
    "name": "Amazon",
    "sector": "Consumer Cyclical",
    "price": 238.0,
    "change": -6.19,
    "pct": -2.53,
    "pe": 38.2,
    "rsi": 32.5,
    "volSpike": 0.94,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 175.0,
    "s2": 164.0
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet",
    "sector": "Technology",
    "price": 356.38,
    "change": -7.88,
    "pct": -2.16,
    "pe": 24.5,
    "rsi": 39.6,
    "volSpike": 0.99,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 375.0,
    "s2": 365.0
  },
  {
    "symbol": "META",
    "name": "Meta Platforms",
    "sector": "Technology",
    "price": 570.98,
    "change": -13.61,
    "pct": -2.33,
    "pe": 24.5,
    "rsi": 35.7,
    "volSpike": 0.96,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 560.0,
    "s2": 530.0
  },
  {
    "symbol": "TSLA",
    "name": "Tesla",
    "sector": "Consumer Cyclical",
    "price": 381.59,
    "change": -15.09,
    "pct": -3.8,
    "pe": 58.5,
    "rsi": 39.4,
    "volSpike": 1.03,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 165.0,
    "s2": 152.0
  },
  {
    "symbol": "MU",
    "name": "Micron",
    "sector": "Technology",
    "price": 891.88,
    "change": -44.01,
    "pct": -4.7,
    "pe": 22.8,
    "rsi": 55.5,
    "volSpike": 0.98,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 740.0,
    "s2": 710.0
  },
  {
    "symbol": "TSM",
    "name": "TSMC",
    "sector": "Technology",
    "price": 408.75,
    "change": -19.17,
    "pct": -4.48,
    "pe": 25.4,
    "rsi": 48.3,
    "volSpike": 0.95,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 395.0,
    "s2": 380.0
  },
  {
    "symbol": "ASML",
    "name": "ASML",
    "sector": "Technology",
    "price": 1734.19,
    "change": -43.58,
    "pct": -2.45,
    "pe": 42.5,
    "rsi": 60.5,
    "volSpike": 1.47,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 1320.0,
    "s2": 1280.0
  },
  {
    "symbol": "ORCL",
    "name": "Oracle",
    "sector": "Technology",
    "price": 201.26,
    "change": -4.55,
    "pct": -2.21,
    "pe": 26.5,
    "rsi": 49.4,
    "volSpike": 1.75,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 3,
    "s1": 191.11,
    "s2": 181.13
  },
  {
    "symbol": "NOW",
    "name": "ServiceNow",
    "sector": "Technology",
    "price": 106.06,
    "change": -0.91,
    "pct": -0.85,
    "pe": 55.0,
    "rsi": 49.3,
    "volSpike": 0.56,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 1,
    "s1": 105.37,
    "s2": 95.45
  },
  {
    "symbol": "PLTR",
    "name": "Palantir",
    "sector": "Technology",
    "price": 130.21,
    "change": -1.86,
    "pct": -1.41,
    "pe": 82.0,
    "rsi": 40.8,
    "volSpike": 0.73,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 123.7,
    "s2": 117.19
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks",
    "sector": "Technology",
    "price": 151.76,
    "change": -0.4,
    "pct": -0.26,
    "pe": 38.5,
    "rsi": 46.5,
    "volSpike": 0.69,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 144.17,
    "s2": 140.28
  },
  {
    "symbol": "AMD",
    "name": "AMD",
    "sector": "Technology",
    "price": 452.4,
    "change": -23.11,
    "pct": -4.86,
    "pe": 48.0,
    "rsi": 50.4,
    "volSpike": 0.87,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 397.55,
    "s2": 271.56
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Technology",
    "price": 372.1,
    "change": -20.06,
    "pct": -5.12,
    "pe": 35.2,
    "rsi": 37.8,
    "volSpike": 1.24,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 353.5,
    "s2": 358.1
  },
  {
    "symbol": "NFLX",
    "name": "Netflix",
    "sector": "Communication",
    "price": 82.0,
    "change": 0.59,
    "pct": 0.72,
    "pe": 36.4,
    "rsi": 33.0,
    "volSpike": 1.03,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 77.9,
    "s2": 73.8
  },
  {
    "symbol": "COIN",
    "name": "Coinbase",
    "sector": "Financials",
    "price": 153.97,
    "change": -1.53,
    "pct": -0.98,
    "pe": 28.5,
    "rsi": 36.3,
    "volSpike": 0.66,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 146.27,
    "s2": 138.57
  },
  {
    "symbol": "CRWD",
    "name": "CrowdStrike",
    "sector": "Technology",
    "price": 647.74,
    "change": 2.81,
    "pct": 0.44,
    "pe": 72.0,
    "rsi": 53.9,
    "volSpike": 0.65,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 570.49,
    "s2": 497.59
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro",
    "sector": "Technology",
    "price": 29.27,
    "change": -11.37,
    "pct": -27.98,
    "pe": 18.5,
    "rsi": 38.5,
    "volSpike": 3.79,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 4,
    "s1": 27.81,
    "s2": 26.34
  },
  {
    "symbol": "CELH",
    "name": "Celsius",
    "sector": "Consumer Defensive",
    "price": 28.37,
    "change": 0.18,
    "pct": 0.64,
    "pe": 45.0,
    "rsi": 39.8,
    "volSpike": 0.73,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 26.95,
    "s2": 25.53
  },
  {
    "symbol": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "price": 280.98,
    "change": -8.54,
    "pct": -2.95,
    "pe": 38.5,
    "rsi": 33.6,
    "volSpike": 1.13,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 266.93,
    "s2": 229.2
  },
  {
    "symbol": "NU",
    "name": "Nu Holdings",
    "sector": "Financials",
    "price": 11.62,
    "change": -0.26,
    "pct": -2.19,
    "pe": 28.4,
    "rsi": 34.9,
    "volSpike": 0.56,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 11.04,
    "s2": 10.46
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre",
    "sector": "Consumer Cyclical",
    "price": 1588.29,
    "change": -52.87,
    "pct": -3.22,
    "pe": 46.5,
    "rsi": 40.3,
    "volSpike": 0.7,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 1508.88,
    "s2": 1429.46
  },
  {
    "symbol": "MSTR",
    "name": "MicroStrategy",
    "sector": "Technology",
    "price": 115.35,
    "change": -1.67,
    "pct": -1.43,
    "pe": 95.0,
    "rsi": 30.4,
    "volSpike": 0.85,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 109.58,
    "s2": 103.81
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood",
    "sector": "Financials",
    "price": 86.36,
    "change": 2.59,
    "pct": 3.09,
    "pe": 24.2,
    "rsi": 55.2,
    "volSpike": 1.47,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 5,
    "s1": 81.22,
    "s2": 77.72
  },
  {
    "symbol": "LUNR",
    "name": "Intuitive Machines",
    "sector": "Industrials",
    "price": 26.54,
    "change": -0.93,
    "pct": -3.39,
    "pe": 15.0,
    "rsi": 40.5,
    "volSpike": 0.48,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 25.21,
    "s2": 19.73
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm",
    "sector": "Technology",
    "price": 191.2,
    "change": -14.22,
    "pct": -6.92,
    "pe": 18.2,
    "rsi": 43.3,
    "volSpike": 0.79,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 181.64,
    "s2": 169.61
  },
  {
    "symbol": "ARM",
    "name": "ARM Holdings",
    "sector": "Technology",
    "price": 307.43,
    "change": -17.43,
    "pct": -5.37,
    "pe": 75.0,
    "rsi": 52.1,
    "volSpike": 0.63,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 254.68,
    "s2": 180.29
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto",
    "sector": "Technology",
    "price": 263.22,
    "change": 2.7,
    "pct": 1.04,
    "pe": 48.0,
    "rsi": 58.7,
    "volSpike": 0.66,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 224.73,
    "s2": 199.35
  },
  {
    "symbol": "NET",
    "name": "Cloudflare",
    "sector": "Technology",
    "price": 219.67,
    "change": -16.46,
    "pct": -6.97,
    "pe": 68.0,
    "rsi": 46.0,
    "volSpike": 1.23,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 208.69,
    "s2": 207.57
  },
  {
    "symbol": "DDOG",
    "name": "Datadog",
    "sector": "Technology",
    "price": 227.63,
    "change": 0.29,
    "pct": 0.13,
    "pe": 54.0,
    "rsi": 57.5,
    "volSpike": 0.57,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 189.29,
    "s2": 155.09
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake",
    "sector": "Technology",
    "price": 239.9,
    "change": 0.24,
    "pct": 0.1,
    "pe": 62.0,
    "rsi": 66.1,
    "volSpike": 0.54,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 188.25,
    "s2": 199.04
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb",
    "sector": "Consumer Cyclical",
    "price": 129.1,
    "change": -2.25,
    "pct": -1.71,
    "pe": 26.5,
    "rsi": 39.0,
    "volSpike": 0.96,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 122.64,
    "s2": 116.19
  },
  {
    "symbol": "UBER",
    "name": "Uber",
    "sector": "Industrials",
    "price": 68.61,
    "change": -1.77,
    "pct": -2.51,
    "pe": 31.4,
    "rsi": 36.8,
    "volSpike": 1.06,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 65.18,
    "s2": 61.75
  },
  {
    "symbol": "PATH",
    "name": "UiPath",
    "sector": "Technology",
    "price": 10.75,
    "change": 0.0,
    "pct": 0.0,
    "pe": 22.0,
    "rsi": 46.2,
    "volSpike": 0.97,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 10.21,
    "s2": 9.68
  }
];

let activeStock = "GOOGL";
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('stock-selector');
  if(selector) {
    selector.innerHTML = `\n      <option value="GOOGL">Alphabet Inc (GOOGL)</option>\n      <option value="MU">Micron Technology (MU)</option>\n      <option value="TSM">Taiwan Semiconductor Mfg (TSM)</option>\n      <option value="NVDA">NVIDIA Corp (NVDA)</option>\n      <option value="META">Meta Platforms (META)</option>\n      <option value="ASML">ASML Holding N.V (ASML)</option>\n      <option value="MSFT">Microsoft Corporation (MSFT)</option>\n      <option value="AAPL">Apple Inc (AAPL)</option>\n      <option value="AMZN">Amazon.com, Inc (AMZN)</option>\n      <option value="TSLA">Tesla, Inc (TSLA)</option>\n      <option value="BTC-USD">Bitcoin (BTC-USD)</option>\n    `;
    selector.value = activeStock;
  }
  
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderAll(stocksData[activeStock]);
  }, 1000);

  initTabs();
  initSelector();
  initScreener();
});

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const indicator = document.getElementById('tab-indicator');
  function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + 'px';
    indicator.style.transform = `translateX(${tab.offsetLeft - tab.parentElement.offsetLeft - 3}px)`;
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      moveIndicator(tab);
      const target = tab.dataset.tab;
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`panel-${target}`).classList.add('active');
    });
  });
}

function initSelector() {
  const selector = document.getElementById('stock-selector');
  if (!selector) return;

  // Create custom select container
  const wrapper = selector.parentElement;
  
  // Hide native selector
  selector.style.display = 'none';

  // Create custom select markup
  const customSelect = document.createElement('div');
  customSelect.className = 'custom-select-wrapper';
  
  const trigger = document.createElement('div');
  trigger.className = 'custom-select-trigger';
  trigger.id = 'custom-select-trigger';
  
  const selectedText = document.createElement('span');
  selectedText.className = 'selected-text';
  
  const activeOption = selector.options[selector.selectedIndex] || selector.options[0];
  selectedText.textContent = activeOption ? activeOption.textContent : 'Select Stock';
  
  const chevron = document.createElement('span');
  chevron.className = 'chevron-icon';
  chevron.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  
  trigger.appendChild(selectedText);
  trigger.appendChild(chevron);
  
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'custom-options-container';
  optionsContainer.id = 'custom-options-container';
  
  Array.from(selector.options).forEach(option => {
    const optDiv = document.createElement('div');
    optDiv.className = 'custom-option';
    optDiv.dataset.value = option.value;
    optDiv.textContent = option.textContent;
    if (option.value === activeStock) {
      optDiv.classList.add('selected');
    }
    
    optDiv.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (activeStock === option.value) {
        optionsContainer.classList.remove('show');
        trigger.classList.remove('active');
        return;
      }
      
      activeStock = option.value;
      selector.value = activeStock;
      
      selectedText.textContent = option.textContent;
      
      optionsContainer.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
      optDiv.classList.add('selected');
      
      optionsContainer.classList.remove('show');
      trigger.classList.remove('active');
      
      // Render stock transition
      const appEl = document.getElementById('app');
      appEl.style.opacity = '0.3';
      setTimeout(() => {
        renderAll(stocksData[activeStock]);
        appEl.style.opacity = '1';
        document.getElementById('tab-overview').click();
      }, 300);
    });
    
    optionsContainer.appendChild(optDiv);
  });
  
  customSelect.appendChild(trigger);
  customSelect.appendChild(optionsContainer);
  
  wrapper.appendChild(customSelect);
  
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isShowing = optionsContainer.classList.contains('show');
    optionsContainer.classList.toggle('show', !isShowing);
    trigger.classList.toggle('active', !isShowing);
  });
  
  document.addEventListener('click', () => {
    optionsContainer.classList.remove('show');
    trigger.classList.remove('active');
  });
}

function initScreener() {
  const tableBody = document.getElementById('screener-table-body');
  if (!tableBody) return;

  const sectorFilter = document.getElementById('screener-filter-sector');
  const metricFilter = document.getElementById('screener-filter-metric');
  
  function render() {
    const sector = sectorFilter.value;
    const metric = metricFilter.value;
    
    let filtered = screenerData.filter(item => {
      if (sector !== 'ALL' && item.sector !== sector) return false;
      if (metric === 'HIGH_SCORE' && item.score <= 6) return false;
      if (metric === 'EMA200' && !item.aboveEma200) return false;
      if (metric === 'VOL_SPIKE' && item.volSpike <= 1.3) return false;
      if (metric === 'OVERSOLD' && item.rsi >= 40) return false;
      if (metric === 'AT_SUPPORT') {
        const s1 = item.s1 || (item.price * 0.95);
        const s2 = item.s2 || (item.price * 0.90);
        if (item.price > s1 * 1.02 || item.price < s2 * 0.95) return false;
      }
      return true;
    });
    
    // Sort by Score descending
    filtered.sort((a, b) => b.score - a.score);
    
    tableBody.innerHTML = filtered.map(item => {
      const scoreClass = item.score >= 8 ? 'score-high' : (item.score >= 5 ? 'score-med' : 'score-low');
      const changeClass = item.change >= 0 ? 'positive' : 'negative';
      const changeSign = item.change >= 0 ? '+' : '';
      const emaClass = item.aboveEma200 ? 'ema-bull' : 'ema-bear';
      const emaText = item.aboveEma200 ? 'Bullish' : 'Bearish';
      const volSpikeClass = item.volSpike >= 1.3 ? 'vol-high' : 'vol-normal';
      const peText = item.pe === 'N/A' || !item.pe ? 'N/A' : item.pe.toFixed(1);
      
      return `
        <tr class="screener-row" onclick="selectStockDirect('${item.symbol}')">
          <td class="screener-symbol">${item.symbol}</td>
          <td class="screener-name">${item.name}</td>
          <td class="screener-sector">${item.sector}</td>
          <td class="screener-pe">${peText}</td>
          <td class="screener-rsi">${item.rsi.toFixed(1)}</td>
          <td class="screener-vol"><span class="vol-badge ${volSpikeClass}">${item.volSpike.toFixed(2)}x</span></td>
          <td><span class="ema-badge ${emaClass}">${emaText}</span></td>
          <td><span class="score-badge ${scoreClass}">${item.score}/10</span></td>
        </tr>
      `;
    }).join('');
    
    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8" class="no-results">ไม่พบรายชื่อหุ้นที่เข้าเงื่อนไขตัวกรองในขณะนี้</td></tr>`;
    }
  }
  
  if (sectorFilter) sectorFilter.addEventListener('change', render);
  if (metricFilter) metricFilter.addEventListener('change', render);
  
  render();
  initTooltips();
}

function selectStockDirect(symbol) {
  if (stocksData[symbol]) {
    activeStock = symbol;
    const selector = document.getElementById('stock-selector');
    if (selector) {
      selector.value = symbol;
      const trigger = document.getElementById('custom-select-trigger');
      if (trigger) {
        const selectedText = trigger.querySelector('.selected-text');
        const option = Array.from(selector.options).find(o => o.value === symbol);
        if (selectedText && option) {
          selectedText.textContent = option.textContent;
        } else if (selectedText) {
          const company = stocksData[symbol].meta.companyName;
          selectedText.textContent = `${company} (${symbol})`;
        }
      }
      
      // Update options selection active state
      const container = document.getElementById('custom-options-container');
      if (container) {
        container.querySelectorAll('.custom-option').forEach(o => {
          if (o.dataset.value === symbol) {
            o.classList.add('selected');
          } else {
            o.classList.remove('selected');
          }
        });
      }
    }
    
    const appEl = document.getElementById('app');
    appEl.style.opacity = '0.3';
    setTimeout(() => {
      renderAll(stocksData[activeStock]);
      appEl.style.opacity = '1';
      document.getElementById('tab-overview').click();
    }, 300);
  }
}

function initTooltips() {
  const headers = document.querySelectorAll('.tooltip-header');
  const tooltip = document.getElementById('screener-tooltip');
  const content = document.getElementById('screener-tooltip-content');
  
  if (!tooltip || !content) return;
  
  const tooltipTexts = {
    PE: `<strong>P/E Ratio (ราคาต่อกำไรสุทธิ):</strong><br>
         • <em>ยิ่งต่ำยิ่งดี (เช่น < 15-25):</em> สะท้อนว่าหุ้นราคาถูก คืนทุนเร็ว เหมาะกับสายเน้นคุณค่า (Value)<br>
         • <em>ยิ่งสูง (เช่น > 40):</em> แสดงว่าตลาดมีความคาดหวังการเติบโตในอนาคตสูงมาก หากเติบโตไม่ได้ตามเป้า ราคามีโอกาสดิ่งแรง`,
    RSI: `<strong>RSI (14) - ดัชนีกำลังสัมพัทธ์:</strong><br>
          • <em>ต่ำกว่า 30-40 (Oversold):</em> ราคาลงลึกเกินไป มีแรงขายมากเกิน มีโอกาสทางสถิติที่จะดีดตัวกลับ (Rebound)<br>
          • <em>สูงกว่า 70 (Overbought):</em> ราคาขึ้นแรงเกินไป มีแรงซื้อมากเกิน มีความเสี่ยงที่จะถูกแรงขายทำกำไรระยะสั้น`,
    VOL: `<strong>Volume Spike (แรงซื้อเข้าหนาแน่น):</strong><br>
          • ปริมาณซื้อขายวันนี้เทียบกับค่าเฉลี่ย 20 วันก่อนหน้า<br>
          • <em>มากกว่า 1.3x - 2.5x:</em> บ่งชี้ว่ามีแรงซื้อ/ขายขนาดใหญ่จากสถาบันการเงินไหลเข้าอย่างมีนัยสำคัญ มีโอกาสเคลื่อนไหวต่อเนื่องแรง`,
    SCORE: `<strong>Screener Score (คะแนนคัดเกณฑ์):</strong><br>
            • คะแนนคัดเกณฑ์รวม (เต็ม 10 คะแนน) วัดความแข็งแกร่งของเทรนด์โมเมนตัมเทคนิคและอัตรากำไรด้านปัจจัยพื้นฐาน<br>
            • <em>8-10 คะแนน:</em> หุ้นแข็งแกร่งที่สุด เป็นจุดสะสมที่ได้เปรียบสูงมาก<br>
            • <em>ต่ำกว่า 4 คะแนน:</em> หุ้นเทรนด์ขาลงหรือการเงินอ่อนแอ ควรหลีกเลี่ยงหรือระมัดระวัง`
  };
  
  headers.forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = header.dataset.tooltip;
      if (!tooltipTexts[type]) return;
      
      content.innerHTML = tooltipTexts[type];
      
      const rect = header.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      tooltip.style.left = `${rect.left + scrollLeft - 50}px`;
      tooltip.style.top = `${rect.bottom + scrollTop + 8}px`;
      
      tooltip.classList.remove('hidden');
      tooltip.classList.add('show');
    });
  });
  
  document.addEventListener('click', () => {
    tooltip.classList.remove('show');
    tooltip.classList.add('hidden');
  });
}

function renderAll(data) {
  renderMeta(data.meta);
  renderOverview(data.meta, data.overview);
  renderTechnical(data.technical);
  renderFundamental(data.fundamental);
  renderThesis(data.thesis);
  renderChecklist(data);

  // Animate in
  requestAnimationFrame(() => {
    document.querySelectorAll('.stat-card, .summary-card, .ta-card, .fin-card, .entry-card, .risk-card, .rationale-card, .moat-card, .grade-card, .thesis-hero, .case-card, .recommendation-card, .risks-card, .sources-card, .screener-card, .checklist-card').forEach((el, i) => {
      el.classList.remove('animate-in');
      void el.offsetWidth; // Trigger reflow for animation restart
      el.classList.add('animate-in', `stagger-${Math.min(i + 1, 6)}`);
    });
  });
}

function renderMeta(meta) {
  document.getElementById('stock-symbol').textContent = meta.symbol;
  document.getElementById('stock-price').textContent = meta.currentPrice === 'N/A' || !meta.currentPrice ? 'N/A' : '$' + meta.currentPrice.toFixed(2);
  
  const pctText = meta.priceChangePct >= 0 ? `+${meta.priceChangePct.toFixed(2)}%` : `${meta.priceChangePct.toFixed(2)}%`;
  const badgeEl = document.getElementById('stock-change');
  badgeEl.textContent = pctText;
  badgeEl.className = 'stock-change ' + (meta.priceChangePct >= 0 ? 'positive' : 'negative');
}

function renderOverview(meta, overview) {
  document.getElementById('company-name').textContent = meta.companyName;
  document.getElementById('company-industry').textContent = meta.industry + ' • ' + meta.sector;
  document.getElementById('company-initial').textContent = meta.symbol.substring(0, 1);

  document.getElementById('hero-price').textContent = meta.currentPrice === 'N/A' || !meta.currentPrice ? 'N/A' : '$' + meta.currentPrice.toFixed(2);
  
  const pctText = meta.priceChangePct >= 0 ? `+${meta.priceChangePct.toFixed(2)}%` : `${meta.priceChangePct.toFixed(2)}%`;
  const heroChange = document.getElementById('hero-change');
  heroChange.textContent = pctText;
  heroChange.className = 'hero-change ' + (meta.priceChangePct >= 0 ? 'positive' : 'negative');

  // Verdict block
  const valEl = document.getElementById('verdict-value');
  valEl.textContent = overview.verdict;
  valEl.className = 'verdict-value ' + overview.verdict.toLowerCase().replace(/ /g, '-');

  document.getElementById('verdict-confidence').textContent = 'Confidence: ' + overview.verdictConfidence;

  // Stats row
  document.getElementById('ta-score-val').textContent = overview.taScore + '/10';
  document.getElementById('vi-score-val').textContent = overview.viScore + '/10';
  document.getElementById('moat-val').textContent = overview.moat;
  document.getElementById('safety-val').textContent = overview.marginOfSafety;

  // Radial rings (uses SVG dasharray)
  const taPercent = overview.taScore * 10;
  const viPercent = overview.viScore * 10;
  document.querySelector('.ta-fill').style.strokeDasharray = `${taPercent}, 100`;
  document.querySelector('.vi-fill').style.strokeDasharray = `${viPercent}, 100`;
}

function renderTechnical(ta) {
  // Trend
  const arrow = document.getElementById('trend-arrow');
  arrow.className = 'trend-arrow ' + (ta.trend.direction.toLowerCase().includes('up') ? 'up' : ta.trend.direction.toLowerCase().includes('down') ? 'down' : 'sideways');
  document.getElementById('trend-direction').textContent = ta.trend.direction;
  document.getElementById('trend-strength').textContent = `Strength: ${ta.trend.strength}`;

  // Timeframes
  const tfContainer = document.getElementById('trend-timeframes');
  tfContainer.innerHTML = ta.trend.timeframes.map(tf => `
    <div class="tf-chip ${tf.bias}">
      <span>${tf.bias === 'bullish' ? '▲' : tf.bias === 'bearish' ? '▼' : '◆'}</span>
      ${tf.tf}: ${tf.note}
    </div>
  `).join('');

  // Levels
  let allLevels = [
    { ...ta.levels.vah, type: 'vah' },
    { ...ta.levels.current, type: 'current' },
    { ...ta.levels.poc, type: 'poc' },
    { ...ta.levels.val, type: 'val' }
  ];
  if(ta.levels.resistances) {
      allLevels = [...ta.levels.resistances.map(l => ({ ...l, type: 'resistance' })), ...allLevels];
  }
  if(ta.levels.supports) {
      allLevels = [...allLevels, ...ta.levels.supports.map(l => ({ ...l, type: 'support' }))];
  }

  const maxPrice = Math.max(...allLevels.map(l => l.price));
  const minPrice = Math.min(...allLevels.map(l => l.price));
  const range = maxPrice - minPrice;

  document.getElementById('levels-chart').innerHTML = allLevels.map(l => {
    const pct = ((l.price - minPrice) / range) * 100;
    const barClass = l.type === 'resistance' ? 'resistance-bar' :
                     l.type === 'support' ? 'support-bar' :
                     l.type === 'poc' ? 'poc-bar' : 'current-bar';
    return `
      <div class="level-row">
        <span class="level-label ${l.type}">${l.label}</span>
        <span class="level-price">${l.price === 'N/A' || !l.price ? 'N/A' : '$' + l.price.toFixed(2)}</span>
        <div class="level-bar-container">
          <div class="level-bar ${barClass}" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // Entry
  const signalEl = document.getElementById('entry-signal');
  signalEl.textContent = ta.entry.signal;
  signalEl.className = 'entry-signal ' + (ta.entry.signal.toLowerCase().includes('buy') ? 'buy' : 'wait');

  document.getElementById('entry-grid').innerHTML = `
    <div class="entry-item">
      <div class="entry-item-label">Entry Zone</div>
      <div class="entry-item-value entry-zone">${ta.entry.entryZone}</div>
    </div>
    <div class="entry-item">
      <div class="entry-item-label">Stop Loss</div>
      <div class="entry-item-value stop-loss">${ta.entry.stopLoss}</div>
    </div>
    <div class="entry-item">
      <div class="entry-item-label">Take Profit</div>
      <div class="entry-item-value take-profit">${ta.entry.takeProfit1}</div>
    </div>
    <div class="entry-item">
      <div class="entry-item-label">R:R Ratio</div>
      <div class="entry-item-value rr-ratio">${ta.entry.rrRatio}</div>
    </div>
  `;

  // Confluences
  const confluences = ta.confluences || [];
  document.getElementById('entry-confluences').innerHTML = confluences.map(c => `
    <div class="confluence-chip ${c.confirmed ? 'confirmed' : ''}">
      <span class="confluence-dot"></span>
      ${c.name}
    </div>
  `).join('');

  // Risk
  const rsk = ta.risk || {
    positionSize: 'N/A',
    riskPct: 'N/A',
    riskReward: 'N/A',
    trailingStop: 'N/A',
    maxLoss: 'N/A',
    atr14: 'N/A'
  };
  document.getElementById('risk-visual').innerHTML = `
    <div class="risk-item">
      <div class="risk-item-label">Position Size</div>
      <div class="risk-item-value">${rsk.positionSize}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Risk per Trade</div>
      <div class="risk-item-value" style="color:var(--color-bearish)">${rsk.riskPct}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Risk:Reward</div>
      <div class="risk-item-value" style="color:var(--color-bullish)">${rsk.riskReward}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Trailing Stop</div>
      <div class="risk-item-value">${rsk.trailingStop}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Max Loss/Share</div>
      <div class="risk-item-value" style="color:var(--color-bearish)">${rsk.maxLoss}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">ATR (14)</div>
      <div class="risk-item-value">${rsk.atr14}</div>
    </div>
  `;

  // Rationale
  document.getElementById('ta-rationale-content').innerHTML = ta.rationale + (ta.risks || "");
}

function renderFundamental(fund) {
  // Dynamically change financial card titles for Bitcoin / Crypto
  if (activeStock === 'BTC-USD') {
    const incCard = document.querySelector('#income-card .fin-card-title');
    const balCard = document.querySelector('#balance-card .fin-card-title');
    const cfCard = document.querySelector('#cashflow-card .fin-card-title');
    const valCard = document.querySelector('#valuation-card .fin-card-title');
    if (incCard) incCard.innerHTML = '📊 Network Security & Adoption';
    if (balCard) balCard.innerHTML = '📋 Token Supply & Scarcity';
    if (cfCard) cfCard.innerHTML = '💰 Transaction & Settlement';
    if (valCard) valCard.innerHTML = '🎯 On-Chain Valuation';
  } else {
    const incCard = document.querySelector('#income-card .fin-card-title');
    const balCard = document.querySelector('#balance-card .fin-card-title');
    const cfCard = document.querySelector('#cashflow-card .fin-card-title');
    const valCard = document.querySelector('#valuation-card .fin-card-title');
    if (incCard) incCard.innerHTML = '📊 Income Statement';
    if (balCard) balCard.innerHTML = '📋 Balance Sheet';
    if (cfCard) cfCard.innerHTML = '💰 Cash Flow';
    if (valCard) valCard.innerHTML = '🎯 Valuation';
  }

  let incomeRows = fund.incomeStatement;
  let balanceRows = fund.balanceSheet;
  let cashflowRows = fund.cashflow;
  let valuationRows = fund.valuation;

  // Support growth stocks flat dictionaries
  if (fund.ratios || fund.cashFlow) {
    const ratios = fund.ratios || {};
    const cf = fund.cashFlow || fund.cashflow || {};
    const val = fund.valuation || {};

    incomeRows = [
      { metric: 'Operating Margin', value: ratios.operatingMargin || 'N/A', grade: 'A' },
      { metric: 'ROE (Return on Equity)', value: ratios.roe || 'N/A', grade: 'A' },
      { metric: 'PEG Ratio', value: ratios.pegRatio || 'N/A', grade: 'B' }
    ];

    balanceRows = [
      { metric: 'Debt to Equity', value: ratios.debtToEquity || 'N/A', grade: 'A' },
      { metric: 'Current Ratio', value: ratios.currentRatio || 'N/A', grade: 'B' }
    ];

    cashflowRows = [
      { metric: 'Operating Cash Flow', value: cf.operatingCashFlow || 'N/A', grade: 'A' },
      { metric: 'Free Cash Flow', value: cf.freeCashFlow || 'N/A', grade: 'A' },
      { metric: 'Cash Conversion Cycle', value: cf.cashConversionCycle || 'N/A', grade: 'A' }
    ];

    if (typeof val === 'object' && !Array.isArray(val)) {
      valuationRows = [
        { metric: 'Forward P/E', value: val.forwardPE || 'N/A', grade: 'B' },
        { metric: 'Beta', value: val.beta || 'N/A', grade: 'A' },
        { metric: 'Dividend Yield', value: val.dividendYield || 'N/A', grade: 'A' },
        { metric: 'Market Cap', value: val.marketCap || 'N/A', grade: 'A' }
      ];
    }
  }

  // Tables
  renderFinTable('income-table', incomeRows);
  renderFinTable('balance-table', balanceRows);
  renderFinTable('cashflow-table', cashflowRows);
  renderFinTable('valuation-table', valuationRows);

  // Moat
  const moatItems = (fund.moat && fund.moat.items) || [];
  if (moatItems.length === 0) {
    document.getElementById('moat-content').innerHTML = '<p class="placeholder-text" style="text-align:center;padding:20px;color:var(--color-text-muted);">🛡️ การวิเคราะห์คูเมืองเชิงคุณภาพเจาะลึก เปิดให้ใช้งานเฉพาะหุ้นหลัก 10 ตัวแรกเท่านั้นครับ</p>';
  } else {
    document.getElementById('moat-content').innerHTML = moatItems.map(m => `
      <div class="moat-item">
        <div class="moat-badge">${m.icon}</div>
        <div class="moat-item-info">
          <h4>${m.name}</h4>
          <p>${m.description}</p>
          <div class="moat-strength-bar">
            <div class="moat-strength-fill" style="width: ${m.strength}%"></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Grade
  document.getElementById('grade-letter').textContent = fund.overallGrade || 'N/A';
  document.getElementById('grade-description').textContent = (fund.overallGrade && fund.overallGrade.includes('A')) ? 'Exceptional Financial Position' : 'Excellent Financial Health';

  const breakdown = fund.gradeBreakdown || [];
  document.getElementById('grade-breakdown').innerHTML = breakdown.map(g => `
    <div class="grade-row">
      <span class="grade-row-label">${g.label}</span>
      <div class="grade-row-bar">
        <div class="grade-row-fill" style="width: ${g.score}%; background: ${g.color}"></div>
      </div>
      <span class="grade-row-value" style="color: ${g.color}">${g.score}%</span>
    </div>
  `).join('');
}

function renderFinTable(containerId, rows) {
  if(!document.getElementById(containerId)) return;
  if (!rows || !Array.isArray(rows)) {
    document.getElementById(containerId).innerHTML = '<p class="placeholder-text" style="text-align:center;padding:15px;color:var(--color-text-muted);">ไม่มีข้อมูลการเงินในส่วนนี้</p>';
    return;
  }
  document.getElementById(containerId).innerHTML = `
    <table class="fin-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td class="metric-name">${r.metric}</td>
            <td>${r.value}</td>
            <td class="grade-cell grade-${r.grade.toLowerCase()}">${r.grade}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderThesis(thesis) {
  document.getElementById('thesis-statement').textContent = thesis.statement || 'No thesis statement available.';

  // Bull case
  if (thesis.bullCase && thesis.bullCase.length > 0) {
    document.getElementById('bull-content').innerHTML = `<ol>${thesis.bullCase.map(b => `<li>${b}</li>`).join('')}</ol>`;
  } else {
    document.getElementById('bull-content').innerHTML = '<p class="placeholder-text">Awaiting analysis...</p>';
  }

  // Bear case
  if (thesis.bearCase && thesis.bearCase.length > 0) {
    document.getElementById('bear-content').innerHTML = `<ol>${thesis.bearCase.map(b => `<li>${b}</li>`).join('')}</ol>`;
  } else {
    document.getElementById('bear-content').innerHTML = '<p class="placeholder-text">Awaiting analysis...</p>';
  }

  // Recommendation
  const recAction = document.getElementById('rec-action');
  const recCard = document.getElementById('recommendation-card');
  const recDetails = document.getElementById('rec-details');
  if (thesis.recommendation) {
    if (recCard) recCard.style.display = 'block';
    if (recAction) {
      recAction.textContent = thesis.recommendation.action;
      recAction.className = 'rec-action ' + thesis.recommendation.action.toLowerCase().split(' ')[0];
    }

    if (recDetails) {
      recDetails.innerHTML = `
        <div class="rec-detail-item">
          <div class="rec-detail-label">Target Price</div>
          <div class="rec-detail-value">${thesis.recommendation.targetPrice}</div>
        </div>
        <div class="rec-detail-item">
          <div class="rec-detail-label">Time Horizon</div>
          <div class="rec-detail-value">${thesis.recommendation.timeHorizon}</div>
        </div>
        <div class="rec-detail-item">
          <div class="rec-detail-label">Position Size</div>
          <div class="rec-detail-value">${thesis.recommendation.positionSize}</div>
        </div>
        <div class="rec-detail-item">
          <div class="rec-detail-label">Entry Strategy</div>
          <div class="rec-detail-value" style="font-size:12px;font-family:var(--font-sans)">${thesis.recommendation.entryStrategy}</div>
        </div>
      `;
    }
  } else {
    if (recCard) recCard.style.display = 'none';
  }

  // Key Risks
  const risksContent = document.getElementById('risks-content');
  const risksCard = document.getElementById('risks-card');
  if (thesis.keyRisks && thesis.keyRisks.length > 0) {
    if (risksCard) risksCard.style.display = 'block';
    if (risksContent) {
      risksContent.innerHTML = thesis.keyRisks.map(r => `
        <div class="risk-alert">
          <span class="risk-alert-icon">⚠️</span>
          <p>${r}</p>
        </div>
      `).join('');
    }
  } else {
    if (risksCard) risksCard.style.display = 'none';
  }

  // Sources
  const sourcesContent = document.getElementById('sources-content');
  const sourcesCard = document.getElementById('sources-card');
  if (thesis.sources && thesis.sources.length > 0) {
    if (sourcesCard) sourcesCard.style.display = 'block';
    if (sourcesContent) {
      sourcesContent.innerHTML = thesis.sources.map(s => `
        <span class="source-tag">📖 ${s}</span>
      `).join('');
    }
  } else {
    if (sourcesCard) sourcesCard.style.display = 'none';
  }
}

function renderChecklist(data) {
  const step1Box = document.querySelector('#check-step1 .check-box');
  const step1Status = document.getElementById('check-step1-status');
  const step1Desc = document.getElementById('check-step1-desc');
  
  const step2Box = document.getElementById('check-step2-box');
  const step2Status = document.getElementById('check-step2-status');
  const step2Desc = document.getElementById('check-step2-desc');
  
  const step3Box = document.getElementById('check-step3-box');
  const step3Status = document.getElementById('check-step3-status');
  const step3Desc = document.getElementById('check-step3-desc');

  if (!step1Box || !step2Box || !step3Box) return;

  // 1. Check step 1: Fundamental Strength
  const moat = data.overview.moat || "None";
  const viScore = data.overview.viScore || 0;
  if (moat.includes('Wide') || moat.includes('Network') || moat.includes('Narrow') || viScore >= 6) {
    step1Box.className = 'check-box checked';
    step1Box.textContent = '✓';
    step1Status.className = 'check-badge status-pass';
    step1Status.textContent = 'ผ่านเกณฑ์แกร่ง';
    step1Desc.textContent = `พื้นฐานแกร่ง: หุ้นมี Moat (${moat}) และคะแนนสะสม VI Score ${viScore}/10`;
  } else {
    step1Box.className = 'check-box warning';
    step1Box.textContent = '⚠️';
    step1Status.className = 'check-badge status-warning';
    step1Status.textContent = 'เฝ้าระวัง';
    step1Desc.textContent = `พื้นฐานปานกลาง/รอสะสม: Moat (${moat}) และคะแนนสะสม VI Score ${viScore}/10`;
  }

  // 2. Check step 2: Price Filter (Antigravity Zone / EMA 50-200)
  const currentPrice = data.meta.currentPrice;
  const entryZone = data.technical.entry.entryZone || "";
  const matches = entryZone.match(/\d+[\d,.]*/g);
  let isEntryZone = false;
  
  if (matches && matches.length >= 2) {
    const low = parseFloat(matches[0].replace(/,/g, ''));
    const high = parseFloat(matches[1].replace(/,/g, ''));
    if (currentPrice <= high) {
      isEntryZone = true;
    }
  } else if (data.overview.taScore >= 6) {
    isEntryZone = true;
  }

  if (isEntryZone) {
    step2Box.className = 'check-box checked';
    step2Box.textContent = '✓';
    step2Status.className = 'check-badge status-pass';
    step2Status.textContent = 'เข้าโซนสะสม';
    step2Desc.textContent = `ราคาได้เปรียบ: ราคาปัจจุบัน ($${currentPrice === 'N/A' || !currentPrice ? 'N/A' : currentPrice.toFixed(2)}) ต่ำกว่าหรืออยู่ในโซนตั้งรับสะสม (${entryZone})`;
  } else {
    step2Box.className = 'check-box';
    step2Box.textContent = '—';
    step2Status.className = 'check-badge status-wait';
    step2Status.textContent = 'ราคาสูงเกินไป';
    step2Desc.textContent = `รอการย่อตัว: ราคาปัจจุบัน ($${currentPrice === 'N/A' || !currentPrice ? 'N/A' : currentPrice.toFixed(2)}) ยังสูงกว่าโซนตั้งรับสะสม (${entryZone})`;
  }

  // 3. Step 3: Candle Day Trigger (Instruction)
  step3Box.className = 'check-box';
  step3Box.textContent = '⏳';
  step3Status.className = 'check-badge status-wait';
  step3Status.textContent = 'รอสัญญาณ';
  step3Desc.textContent = `รอสัญญาณกดยิงคำสั่งซื้อ: เฝ้าดูแท่งเทียน Day ของวันนี้ หากปิดดึงกลับขึ้นเป็น "แท่งสีเขียว" บริเวณโซนสะสม ให้เริ่มเข้าช้อนไม้แรกได้ทันที!`;
}
