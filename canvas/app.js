/* =========================================
   SHU CANVAS — Shu Canvas
   Stocks: GOOGL, MU, TSM, NVDA, META, LLY, VRT, NU, MELI, AVGO, ASML, ANET, PLTR, ATAT
   ========================================= */

const stocksData = {
  "GOOGL": {
    "meta": {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 388.83,
      "priceChange": 5.86,
      "priceChangePct": 1.53,
      "analysisDate": "2026-05-28"
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
          "price": 387.66
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
      "currentPrice": 928.41,
      "priceChange": 177.41,
      "priceChangePct": 23.62,
      "analysisDate": "2026-05-28"
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
          "price": 762.1
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
      "currentPrice": 422.73,
      "priceChange": 18.21,
      "priceChangePct": 4.5,
      "analysisDate": "2026-05-28"
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
          "price": 407.15
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
      "currentPrice": 212.6,
      "priceChange": -2.73,
      "priceChangePct": -1.27,
      "analysisDate": "2026-05-28"
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
          "price": 219.51
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
  "META": {
    "meta": {
      "symbol": "META",
      "companyName": "Meta Platforms",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 635.25,
      "priceChange": 24.99,
      "priceChangePct": 4.09,
      "analysisDate": "2026-05-28"
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
          "price": 607.38
        },
        "poc": {
          "label": "POC",
          "price": 610.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 620.0
          },
          {
            "label": "R2",
            "price": 645.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 600.0
          },
          {
            "label": "S2",
            "price": 580.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 630.0
        },
        "val": {
          "label": "VAL",
          "price": 580.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$580 – $600",
        "stopLoss": "$560.00",
        "takeProfit1": "$650.00",
        "takeProfit2": "$700.00",
        "rrRatio": "1:2.5",
        "confidence": "Medium"
      },
      "confluences": [
        {
          "name": "แนวรับจิตวิทยาจิตวิทยาที่มั่นคงระดับ $600",
          "confirmed": true
        },
        {
          "name": "RSI เริ่มฟื้นตัวจากสภาวะใกล้เขตขายมากเกินไป (Oversold)",
          "confirmed": true
        },
        {
          "name": "การทดสอบแนวรับบริเวณแนวเส้น VAH ต่ำสุดของปี",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "5%",
        "riskPct": "6.0%",
        "riskReward": "1:2.5",
        "trailingStop": "ATRx2",
        "maxLoss": "$40",
        "atr14": "$18.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> META ฟื้นตัวเล็กน้อยวันนี้ ปิดที่ $607.38 (+0.38%) โดยทรงตัวเหนือแนวรับจิตวิทยาหลักที่ $600 การย่อตัวสะสมฐานช่วงนี้เป็นจังหวะที่ดีสำหรับการสะสมหุ้นใหญ่ชั้นนำด้วยวิธี Buy the Dip ในการดักซื้อหุ้นที่มีโมเมนตัมอุตสาหกรรมโดดเด่นในราคาส่วนลด</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากหลุดแนวรับ $600 คาดว่าราคาอาจยืดการย่อตัวลงไปถึงช่วงแนวรับถัดไปที่บริเวณ VAL $580</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+33.0%",
          "grade": "A"
        },
        {
          "metric": "Adjusted EPS",
          "value": "$7.31",
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
          "value": "35.0%",
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
          "value": "22.0x",
          "grade": "A"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.2",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 90,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial strength",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 92,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🌐",
            "name": "Network Effects & Users Advantage",
            "strength": 95,
            "description": "การเข้าครอบครองผู้ใช้งานกว่า 3.56 พันล้านคนต่อวัน (Daily Active People) ผ่านแพลตฟอร์ม Facebook, Instagram, WhatsApp"
          }
        ]
      }
    },
    "thesis": {
      "statement": "META เป็นผู้นำสูงสุดด้านเมกะเทรนด์ AI ผสานการโฆษณาออนไลน์ งบการเงินเติบโตแกร่งและมีอัตราการเติบโตของกำไรต่อหุ้นเมื่อเทียบกับราคาหุ้นที่ถูกมาก (PEG เพียง 1.2)",
      "bullCase": [
        "การใช้เทคโนโลยี AI เพื่อสร้างสรรค์บริการโฆษณาเป้าหมายที่แม่นยำสูงขึ้น",
        "ศักยภาพการสร้างรายได้มหาศาลจากแอปพลิเคชัน WhatsApp และ Threads"
      ],
      "bearCase": [
        "รายจ่ายเพื่อลงทุนโครงสร้างพื้นฐาน AI (CapEx) มีระดับพุ่งสูงถึง $125B-$145B",
        "ผลขาดทุนสุทธิของธุรกิจ Reality Labs ยังคงเป็นส่วนหักลดทอนมาร์จิ้น"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$750.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "5-8%",
        "entryStrategy": "เริ่มทยอยซื้อสะสมบริเวณแนวรับช่วงราคา $580-$600"
      },
      "keyRisks": [
        "กฎเกณฑ์ภาครัฐในการจำกัดหรือตรวจสอบข้อมูลความปลอดภัยส่วนบุคคล",
        "การเพิ่มส่วนแบ่งความสนใจของผู้ใช้งานไปยังคู่แข่งแพลตฟอร์มรายอื่น"
      ],
      "sources": [
        "Q1 2026 Earnings Report",
        "Meta AI Summit Presentation"
      ]
    }
  },
  "LLY": {
    "meta": {
      "symbol": "LLY",
      "companyName": "Eli Lilly & Co.",
      "industry": "Pharmaceuticals",
      "sector": "Healthcare",
      "currentPrice": 1082.92,
      "priceChange": 17.92,
      "priceChangePct": 1.68,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 9,
      "viScore": 8,
      "moat": "Wide",
      "marginOfSafety": "5%"
    },
    "technical": {
      "condition": "Strong Trend (แนวโน้มขาขึ้นสมบูรณ์แบบ)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Very Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "วิ่งลอยตัวทำจุดสูงสุดใหม่อย่างเด่นชัดเหนือเส้นเฉลี่ยระยะสั้น EMA 20"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เทรนด์ใหญ่ขาขึ้นประคองตัวได้อย่างงดงาม ไร้แรงกดดันทางเทคนิค"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 1041.65
        },
        "poc": {
          "label": "POC",
          "price": 950.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1080.0
          },
          {
            "label": "R2",
            "price": 1150.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1000.0
          },
          {
            "label": "S2",
            "price": 950.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1020.0
        },
        "val": {
          "label": "VAL",
          "price": 900.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$980 – $1020",
        "stopLoss": "$940.00",
        "takeProfit1": "$1150.00",
        "takeProfit2": "$1300.00",
        "rrRatio": "1:2.0",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "แนวโน้มโมเมนตัมขาขึ้นที่แข็งแกร่งอย่างยิ่งยวด",
          "confirmed": true
        },
        {
          "name": "การยืนยันการทะลุผ่านระนาบสำคัญ $1,000",
          "confirmed": true
        },
        {
          "name": "แรงหนุนทางพื้นฐานของอุตสาหกรรมยาดูแลน้ำหนักที่ไร้ผู้เทียบทาน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "3%",
        "riskPct": "11.0%",
        "riskReward": "1:2.0",
        "trailingStop": "ATRx2",
        "maxLoss": "$118",
        "atr14": "$45.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> LLY พุ่งทะยานปิดที่ $1041.65 (+2.23%) ทรงพลังอย่างยิ่งยวดหลังจากยืนเหนือแนวต้านระดับสำคัญ $1,000 โครงสร้างเทคนิคเป็นแบบ Strong Trend แข็งแกร่งมาก แนะนำเกาะกระแสแนวโน้มขาขึ้นด้วยการซื้อสะสมเมื่อราคาย่อตัวในกรอบ $980-$1020</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> ดัชนี RSI เริ่มเข้าสู่เขตซื้อมากเกินไประยะสั้น (Overbought) อาจส่งสัญญาณการแกว่งตัวปรับฐานสร้างฐานก่อนไปต่อ</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+56.0%",
          "grade": "A"
        },
        {
          "metric": "Adjusted EPS",
          "value": "$8.55",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.5",
          "grade": "B"
        },
        {
          "metric": "ROE",
          "value": "45.0%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "Growing",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "55.0x",
          "grade": "C"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.6",
          "grade": "B"
        }
      ],
      "overallGrade": "A-",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 99,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Valuation",
          "score": 55,
          "color": "var(--grade-c)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "💊",
            "name": "Patents & Monopolistic Efficacy",
            "strength": 98,
            "description": "การเป็นเจ้าของสิทธิบัตรยาและประสิทธิภาพสูงสุดของยาลดน้ำหนัก Mounjaro และ Zepbound ที่ถือส่วนแบ่งคู่คี่กับ Novo Nordisk สองรายใหญ่ในตลาดโรคอ้วนโลก"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Eli Lilly (LLY) เติบโตอย่างล้นหลามผ่านเมกะเทรนด์ยาตระกูลลดน้ำหนักและโรคอ้วน (GLP-1) ที่มีความต้องการระดับข้ามปีและยังมีเกราะป้องกันกำไรที่แข็งแกร่งอย่างที่สุด",
      "bullCase": [
        "การอนุมัติขยายข้อบ่งใช้ทางการแพทย์ของยาตระกูล GLP-1 ไปยังโรคที่เกี่ยวข้องเพิ่มเติม",
        "การส่งมอบยาในรูปแบบผลิตภัณฑ์เม็ด (Oral weight-loss drugs) ที่ประสบความสำเร็จดีเยี่ยม"
      ],
      "bearCase": [
        "มูลค่าพื้นฐานหุ้นซื้อขายกันที่พรีเมียมค่อนข้างสูง (P/E ในระดับสูง)",
        "ความเร็วในการเร่งขยายกำลังการผลิตของผู้ให้บริการแบรนด์คู่แข่งสัญชาติยุโรป"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$1,200.00",
        "timeHorizon": "1-3 ปี",
        "positionSize": "5-10%",
        "entryStrategy": "ทยอยสะสมด้วยกลยุทธ์ถัวเฉลี่ยต้นทุนสะสม (DCA) เนื่องจากเป็นหุ้นขาขึ้นรวดเร็ว"
      },
      "keyRisks": [
        "การเข้ามาแทรกแซงหรือปรับลดโครงสร้างราคายาของแผนการควบคุมภาครัฐ",
        "การเปิดเผยผลกระทบจากการใช้งานยาในระยะยาวที่เป็นทางลบต่อการรักษา"
      ],
      "sources": [
        "Eli Lilly Q1 2026 Earnings Presentation",
        "NEJM Obesity Market Studies"
      ]
    }
  },
  "VRT": {
    "meta": {
      "symbol": "VRT",
      "companyName": "Vertiv Holdings",
      "industry": "Electrical Equipment",
      "sector": "Industrials",
      "currentPrice": 319.78,
      "priceChange": -7.68,
      "priceChangePct": -2.35,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 7,
      "viScore": 9,
      "moat": "Narrow",
      "marginOfSafety": "15%"
    },
    "technical": {
      "condition": "Buy the Dip (พักตัวเข้าหาแนวรับเส้นค่าเฉลี่ย)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ปรับฐานพักตัวลงมาที่แนวเส้นเฉลี่ย MA 50 วัน หลังจากแตะจุดสูงสุด ATH เดิม"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "ทิศทางหลักระยะยาวยังคงรักษาแนวโน้มขาขึ้นประคองระดับได้อย่างงดงาม"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 327.7
        },
        "poc": {
          "label": "POC",
          "price": 300.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 376.0
          },
          {
            "label": "R2",
            "price": 400.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 315.0
          },
          {
            "label": "S2",
            "price": 300.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 350.0
        },
        "val": {
          "label": "VAL",
          "price": 280.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$290 – $315",
        "stopLoss": "$270.00",
        "takeProfit1": "$380.00",
        "takeProfit2": "$420.00",
        "rrRatio": "1:2.5",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "การประคองตัวอย่างเหนียวแน่นใกล้เส้นค่าเฉลี่ย MA 50 วัน",
          "confirmed": true
        },
        {
          "name": "ความใกล้เคียงกับแนวรับ Volume Profile POC ระดับ $300",
          "confirmed": true
        },
        {
          "name": "แท่งเทียนกลับตัวส่งสัญญาณซื้อที่เด้งรับใกล้บริเวณแนวรับสำคัญ",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "4%",
        "riskPct": "10.0%",
        "riskReward": "1:2.5",
        "trailingStop": "ATRx2",
        "maxLoss": "$45",
        "atr14": "$16.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> VRT ดีดตัวปิดที่ $327.70 (+3.81%) ดีดตัวกลับขึ้นมาจากเส้นค่าเฉลี่ย MA 50 วันและแนวรับโซน $315 อย่างโดดเด่น การทดสอบฐานนี้แสดงให้เห็นว่ามีแรงซื้อหนาแน่นสอดคล้องกับพฤติกรรมเทคนิค Buy the Dip (ซื้อเมื่อย่อยันอยู่) เพื่อหวังทำกำไรเมื่อวิ่งกลับขึ้นทดสอบระดับ $376 อีกครั้ง</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาเกิดร่วงหลุดต่ำกว่า $300 จะเกิดสัญญาณลบระยะสั้นที่มีโอกาสปรับฐานลงถึง VAL $280</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+30.0%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "20.8%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "1.2",
          "grade": "B"
        },
        {
          "metric": "ROE",
          "value": "55.0%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "$653M (+147%)",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "35.0x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.9",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial health",
          "score": 82,
          "color": "var(--grade-b)"
        },
        {
          "label": "Profitability",
          "score": 90,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Narrow",
        "items": [
          {
            "icon": "❄️",
            "name": "Liquid Cooling Tech Dominance",
            "strength": 85,
            "description": "การเป็นผู้บุกเบิกและเจ้าของโครงสร้างพื้นฐานระบบระบายความร้อนด้วยน้ำขั้นสูง (Liquid Cooling) ที่สำคัญอย่างยิ่งต่อการออกแบบ AI Data Center ด้วยชิปกำลังความร้อนสูงรุ่น Blackwell"
          }
        ]
      }
    },
    "thesis": {
      "statement": "VRT เป็นหนึ่งในหุ้นประเภท Pick-and-Shovel (ผู้ขายพลั่ว) ที่เติบโตอย่างร้อนแรงตามการขยายตัวของเทคโนโลยี AI และ Data Center ทั่วโลก โดยมีผลประกอบการกระแสเงินสดและมาร์จิ้นสูงและราคาถูกมากเมื่อเทียบกับความร้อนแรง (PEG เพียง 0.9)",
      "bullCase": [
        "ความต้องการขยายระบบ Liquid Cooling สำหรับสถาปัตยกรรมเซิร์ฟเวอร์ AI ล่าสุดของโลก",
        "ขยายความกว้างขวางของการรับรู้รายได้จากกลุ่มลูกค้ากลุ่มบริการระบบสาธารณูปโภคขนาดใหญ่"
      ],
      "bearCase": [
        "ความตึงเครียดด้านห่วงโซ่อุปทานวัสดุอุปกรณ์วิศวกรรมไฟฟ้าและความร้อนของโลก",
        "การเพิ่มขึ้นของการแข่งขันจากค่ายฮาร์ดแวร์ปรับอากาศระบบเดิมที่หันมาร่วมแย่งชิงตลาด"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$400.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "5-8%",
        "entryStrategy": "รอช้อนจังหวะการย่อฐานในโซนแนวรับ $290 - $315"
      },
      "keyRisks": [
        "การลดความเร็วหรือความหนาแน่นของการตั้งงบสร้างศูนย์ข้อมูลแห่งใหม่ของผู้ให้บริการคลาวด์",
        "การแกว่งตัวปรับเกรดอัตรากำไรหากราคาต้นทุนทองแดงหรือเหล็กขยับตัวขึ้นแรง"
      ],
      "sources": [
        "Vertiv Q1 2026 Financial Results",
        "Data Center Frontier Research Reports"
      ]
    }
  },
  "NU": {
    "meta": {
      "symbol": "NU",
      "companyName": "Nu Holdings (Nubank)",
      "industry": "Diversified Banks",
      "sector": "Financials",
      "currentPrice": 13.03,
      "priceChange": 0.3,
      "priceChangePct": 2.36,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY THE DIP",
      "verdictConfidence": "High Confidence",
      "taScore": 5,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "20%"
    },
    "technical": {
      "condition": "Reversal Setup (กลับตัวสร้างฐานจุดซื้อต้นเทรนด์)",
      "trend": {
        "direction": "Reversal Setup",
        "strength": "Weak",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bearish",
            "note": "ย่อตัวปรับฐานลงมาหลังจากงบการเงิน แต่อยู่ระหว่างฟื้นตัวกลับหลังจากการทดสอบแนวรับจิตวิทยาจิตวิทยาสำคัญ"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เทรนด์ภาพระดับหลายเดือนยังมีฐานราคาที่ยกตัวสูงกว่าช่วงครึ่งปีแรกอย่างเด่นชัด"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 13.16
        },
        "poc": {
          "label": "POC",
          "price": 12.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 14.5
          },
          {
            "label": "R2",
            "price": 16.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 12.5
          },
          {
            "label": "S2",
            "price": 12.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 13.5
        },
        "val": {
          "label": "VAL",
          "price": 11.5
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$12.00 – $13.00",
        "stopLoss": "$11.20",
        "takeProfit1": "$15.00",
        "takeProfit2": "$18.00",
        "rrRatio": "1:2.5",
        "confidence": "Medium-High"
      },
      "confluences": [
        {
          "name": "แรงรับซื้อคืนหนาแน่นเหนือแนวรับสำคัญที่ $12.50",
          "confirmed": true
        },
        {
          "name": "การเด้งตัวจากระนาบ Oversold อย่างเฉียบพลันเกิดสัญญาณดีดตัวขึ้น",
          "confirmed": true
        },
        {
          "name": "เกิดสัญญาณ Bullish Divergence อ่อนๆ ในช่วงกราฟระยะรายวัน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "5%",
        "riskPct": "15.0%",
        "riskReward": "1:2.5",
        "trailingStop": "ATRx2",
        "maxLoss": "$2",
        "atr14": "$0.80"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> NU ปิดตัวปรับขึ้นโดดเด่นในวันนี้ที่ $13.16 (+3.54%) เกิดการดีดตัวกลับอย่างรวดเร็ว (Reversal Setup) เหนือแนวรับจุดต่ำสุดเดิมบริเวณ $12.50 ด้วยแรงส่งและโมเมนตัมบวก เป็นโอกาสเข้าลงทุนระดับราคาต้นทางเพื่อสอดคล้องกับพฤติกรรมเทคนิค Reversal ต้นรอบ แนะนำสะสมในราคาช่วงต่ำกว่า $13.00</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> กราฟระยะสั้นยังต้องระวังการยื้อฐานออกข้าง หากมีการย่อตัวหลุด $12.00 จะถือเป็นการทำลายภาพการกลับตัวรอบนี้</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue",
          "value": ">$5.0B",
          "grade": "A"
        },
        {
          "metric": "Net Income Growth",
          "value": "+41.0%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Capital Ratio",
          "value": "Strong",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "29.0%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Deposits Growth",
          "value": "High",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "25.0x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.8",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 92,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 90,
          "color": "var(--grade-a)"
        },
        {
          "label": "Asset quality",
          "score": 88,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🏦",
            "name": "Digital Banking Monopolistic Leader",
            "strength": 90,
            "description": "การครองฐานลูกค้ารวมกว่า 135 ล้านรายในแถบละตินอเมริกา (บราซิล เม็กซิโก และโคลอมเบีย) ด้วยระบบดิจิทัลแบบร้อยเปอร์เซ็นต์และต้นทุนดำเนินงานที่ถูกกว่าธนาคารแบบเดิมอย่างมหาศาล"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Nubank (NU) เป็นสุดยอดฟินเทคแห่งยุคในละตินอเมริกาที่มีประสิทธิภาพการทำกำไรและความภักดีของลูกค้าระดับเหนือสามัญ มีอัตราการเติบโตของธุรกิจในระดับ 40%+ และมีค่า PEG ถูกอย่างเหลือเชื่อเพียง 0.8",
      "bullCase": [
        "การทำกำไรเชิงพาณิชย์และการเติบโตอย่างก้าวกระโดดในประเทศเม็กซิโกและโคลอมเบีย",
        "ความสามารถการขายผลิตภัณฑ์เสริมมูลค่าเพิ่มเติม (Cross-selling) เช่น ประกันและกองทุนรวม"
      ],
      "bearCase": [
        "ความเสี่ยงอัตราดอกเบี้ยและอัตราแลกเปลี่ยนผันผวนในกลุ่มประเทศกำลังพัฒนา",
        "การเพิ่มงบกันสำรองหนี้เสีย (Credit loss provisions) ตามระดับการปล่อยสินเชื่อที่เพิ่มขึ้น"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$18.50",
        "timeHorizon": "1-3 ปี",
        "positionSize": "5-10%",
        "entryStrategy": "รับซื้อสะสมอย่างสบายใจในทุกช่วงราคาระหว่าง $12.00 - $13.00"
      },
      "keyRisks": [
        "การขยับเพิ่มของสัดส่วนหนี้ที่ไม่ก่อให้เกิดรายได้ (NPLs) ในตลาดหลักบราซิล",
        "ความผันผวนทางสังคมหรือการเมืองที่กระทบขีดความสามารถการใช้หนี้รายบุคคล"
      ],
      "sources": [
        "Nubank Q1 2026 Earnings Release",
        "LatAm Fintech Market Reports"
      ]
    }
  },
  "MELI": {
    "meta": {
      "symbol": "MELI",
      "companyName": "MercadoLibre Inc.",
      "industry": "Internet Retail",
      "sector": "Consumer Cyclical",
      "currentPrice": 1696.17,
      "priceChange": 31.75,
      "priceChangePct": 1.91,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "Strong Trend (แนวโน้มขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคายืนเหนือ EMA 20 และ EMA 50 วันได้อย่างมั่นคง"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "กรอบทิศทางระยะยาวรักษาฐานขาขึ้นอย่างเด่นชัด"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 1677.9
        },
        "poc": {
          "label": "POC",
          "price": 1600.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1720.0
          },
          {
            "label": "R2",
            "price": 1800.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1620.0
          },
          {
            "label": "S2",
            "price": 1550.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1700.0
        },
        "val": {
          "label": "VAL",
          "price": 1500.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$1,620 – $1,650",
        "stopLoss": "$1,550.00",
        "takeProfit1": "$1,800.00",
        "takeProfit2": "$1,950.00",
        "rrRatio": "1:2.4",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "ยืนเหนือแนวรับเส้น EMA 50 วัน",
          "confirmed": true
        },
        {
          "name": "แรงซื้อกลับอย่างหนาแน่นแถวระนาบจิตวิทยา $1,600",
          "confirmed": true
        },
        {
          "name": "RSI ในระดับ 58 บ่งบอกโมเมนตัมยังมีแรงส่งต่อ",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "4%",
        "riskPct": "6.0%",
        "riskReward": "1:2.4",
        "trailingStop": "ATRx2",
        "maxLoss": "$100",
        "atr14": "$48.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> MELI ประคองทิศทางแนวโน้มขาขึ้นได้อย่างแข็งแกร่ง ปิดตัวพุ่งขึ้นทดสอบ $1,677.90 (+1.62%) โดยราคายกตัวอยู่เหนือเส้นค่าเฉลี่ย EMA 20 และ EMA 50 วันอย่างสม่ำเสมอ แนะนำรอจังหวะย่อตัวสะสมในโซนแนวรับ $1,620-$1,650 เพื่อเกาะแนวโน้มขาขึ้นไปทดสอบต้าน R1 ที่ $1,720 และ R2 ที่ $1,800</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย่อลึกหลุดแนวรับ POC และจิตวิทยาสำคัญที่ $1,600 อาจเกิดการเสียทรงระยะสั้นและลงไปทดสอบระนาบ VAL ที่ $1,500</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+36.0%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "15.4%",
          "grade": "B"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.35",
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
          "value": "Strong Growth",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "38.0x",
          "grade": "C"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.1",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 95,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 85,
          "color": "var(--grade-b)"
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
            "icon": "🌐",
            "name": "MercadoPago Ecosystem Network Effect",
            "strength": 92,
            "description": "การครองฐานลูกค้ารวมกว่า 140 ล้านคนในแถบละตินอเมริกาและระบบชำระเงินดิจิทัลที่มีเครือข่ายร้านค้าและผู้ใช้งานผูกขาดอย่างเหนียวแน่น"
          }
        ]
      }
    },
    "thesis": {
      "statement": "MercadoLibre (MELI) คือผู้นำด้านอีคอมเมิร์ซและระบบชำระเงินดิจิทัลในภูมิภาคละตินอเมริกาที่มีอัตราการขยายตัวและการทำกำไรที่ยอดเยี่ยม งบการเงินแสดงประสิทธิภาพการทำกำไร (ROE) และอัตราการเติบโตของกำไรต่อหุ้นที่เหนือชั้นด้วยระดับค่า PEG ต่ำเพียง 1.1",
      "bullCase": [
        "การเติบโตอย่างก้าวกระโดดของรายได้โฆษณา (Mercado Clics) บนแพลตฟอร์ม",
        "การขยายตัวของส่วนต่างกำไรจากการใช้เทคโนโลยีอัตโนมัติในการขนส่งสินค้า"
      ],
      "bearCase": [
        "ความผันผวนของอัตราแลกเปลี่ยนและดอกเบี้ยนโยบายในอาร์เจนตินาและบราซิล",
        "การแข่งขันจากแพลตฟอร์มอีคอมเมิร์ซราคาประหยัดจากจีน"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$2,000.00",
        "timeHorizon": "12-24 เดือน",
        "positionSize": "5-8%",
        "entryStrategy": "ทยอยสะสมแบบกลยุทธ์ซื้อเมื่อราคาปรับฐาน (Buy on dip) ในช่วงราคา $1,620 - $1,650"
      },
      "keyRisks": [
        "สภาวะเงินเฟ้อรุนแรงและนโยบายเศรษฐกิจในแถบอเมริกาใต้",
        "ความเสี่ยงหนี้สูญจากการขยายพอร์ตสินเชื่อผ่าน Mercado Credito"
      ],
      "sources": [
        "MercadoLibre Q1 2026 Earnings Report",
        "LatAm Digital Commerce Monitor"
      ]
    }
  },
  "AVGO": {
    "meta": {
      "symbol": "AVGO",
      "companyName": "Broadcom Inc.",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 421.86,
      "priceChange": 7.72,
      "priceChangePct": 1.86,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 7,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "12%"
    },
    "technical": {
      "condition": "Buy the Dip (พักย่อตัวทดสอบฐานแนวรับ)",
      "trend": {
        "direction": "Uptrend (Short-term pullback)",
        "strength": "Neutral",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ปรับฐานย่อตัวระยะสั้นลงมาทดสอบแนวรับเส้นค่าเฉลี่ย EMA 50 วัน"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "กรอบทิศทางภาพใหญ่ระยะกลางยังเป็นทิศทางขาขึ้นอย่างสมบูรณ์"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 414.57
        },
        "poc": {
          "label": "POC",
          "price": 400.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 440.0
          },
          {
            "label": "R2",
            "price": 465.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 405.0
          },
          {
            "label": "S2",
            "price": 385.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 435.0
        },
        "val": {
          "label": "VAL",
          "price": 380.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$400 – $415",
        "stopLoss": "$385.00",
        "takeProfit1": "$460.00",
        "takeProfit2": "$490.00",
        "rrRatio": "1:2.3",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "การประคองตัวยืนยันความแข็งแกร่งบริเวณเส้นเฉลี่ย EMA 50 วัน",
          "confirmed": true
        },
        {
          "name": "แนวรับปริมาณหนาแน่นจาก Volume Profile POC ที่ $400",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI ผ่อนคลายความร้อนแรงลงมาแตะเขตกลาง 45-50",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "4%",
        "riskPct": "7.2%",
        "riskReward": "1:2.3",
        "trailingStop": "ATRx2",
        "maxLoss": "$30",
        "atr14": "$16.50"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> AVGO ปรับย่อตัวลงมาปิดที่ $414.57 (-0.76%) โดยลดความตึงตัวจากจุดสูงสุดเดิมและลงมาจ่อทดสอบโซนแนวรับที่น่าดึงดูดใจมาก การย่อตัวครั้งนี้สอดคล้องกับจังหวะ Buy the Dip บริเวณฐานแนวรับเส้นค่าเฉลี่ย EMA 50 วันและ POC แนะนำพิจารณาทยอยรับสะสมในระดับราคา $400-$415 เพื่อรอรอบฟื้นตัวกลับ</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย่อยืดเยื้อหลุดต้าน $400 ทรงกราฟขาขึ้นระยะสั้นจะชะลอตัว และอาจทดสอบแนวรับถัดไปที่ VAL $380</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+24.0%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "46.2%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.85",
          "grade": "B"
        },
        {
          "metric": "ROE",
          "value": "26.5%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "FCF Margin",
          "value": "45.0%",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "29.0x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.2",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Profitability",
          "score": 96,
          "color": "var(--grade-a)"
        },
        {
          "label": "Growth",
          "score": 88,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 85,
          "color": "var(--grade-b)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🛰️",
            "name": "AI Networking Patents Monopoly",
            "strength": 96,
            "description": "การผูกขาดในส่วนประกอบชิปการเชื่อมต่อสื่อสารข้อมูลสำหรับ AI คลัสเตอร์ รวมทั้งลิขสิทธิ์ซอฟต์แวร์ระบบคลาวด์จาก VMware"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Broadcom (AVGO) เป็นฟันเฟืองระดับคีย์หลักของโครงสร้างพื้นฐาน AI โลก มีการเติบโตอย่างร้อนแรงจากทั้งความต้องการชิปสั่งทำพิเศษ (Custom ASIC) และสวิตช์เครือข่าย AI แพลตฟอร์มการทำกำไรอยู่ในระดับยอดเยี่ยมและมีค่า PEG สมเหตุสมผลที่ระดับ 1.2",
      "bullCase": [
        "การผสานรวมธุรกิจ VMware ที่ช่วยเพิ่มระดับอัตรากำไรขั้นต้นและรายได้ต่อเนื่อง (Recurring Revenue)",
        "การขยายตัวอย่างร้อนแรงของความต้องการ Blackwell AI คลัสเตอร์ที่ต้องพึ่งชิปสวิตชิ่งความเร็วสูง"
      ],
      "bearCase": [
        "ความผันผวนจากการที่บริษัทยักษ์ใหญ่ปรับเปลี่ยนการออกแบบ Custom ASIC ไปพึ่งตนเองมากขึ้น",
        "ภาระหนี้สินระดับสูงที่ได้มาจากกระบวนการเข้าซื้อกิจการระดับบิ๊กดีล"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$500.00",
        "timeHorizon": "12-18 เดือน",
        "positionSize": "6-10%",
        "entryStrategy": "ทยอยตั้งรับในจังหวะการย่อฐาน (Buy the dip) ระหว่างระดับราคา $400 - $415"
      },
      "keyRisks": [
        "ความเร่งรีบในการขยายพอร์ตชิปและซอฟต์แวร์ใหม่ที่อาจเผชิญการชะลอตัวเชิงพาณิชย์",
        "การสูญเสียส่วนแบ่งการตลาดในชิปเชื่อมต่อให้เทคโนโลยีคู่แข่งในระยะยาว"
      ],
      "sources": [
        "Broadcom Q1 Fiscal 2026 Earnings",
        "AI Hardware Connectivity Survey"
      ]
    }
  },
  "ASML": {
    "meta": {
      "symbol": "ASML",
      "companyName": "ASML Holding N.V.",
      "industry": "Semiconductors",
      "sector": "Technology",
      "currentPrice": 1597.87,
      "priceChange": -35.03,
      "priceChangePct": -2.15,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 10,
      "moat": "Wide",
      "marginOfSafety": "15%"
    },
    "technical": {
      "condition": "Reversal Setup (กลับตัวสร้างฐานจากจุดต่ำสุด)",
      "trend": {
        "direction": "Reversal Setup",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคากลับตัวทะลุต้านแนวเฉลี่ยระยะสั้น EMA 20 และ EMA 50 วันขึ้นมาอย่างเด็ดขาด"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เกิดการดีดกลับหลังจากแตะแนวรับจิตวิทยาเส้นล่างสุดของรอบปี"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 1592.0
        },
        "poc": {
          "label": "POC",
          "price": 1500.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1640.0
          },
          {
            "label": "R2",
            "price": 1750.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1530.0
          },
          {
            "label": "S2",
            "price": 1450.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1680.0
        },
        "val": {
          "label": "VAL",
          "price": 1400.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$1,520 – $1,570",
        "stopLoss": "$1,450.00",
        "takeProfit1": "$1,750.00",
        "takeProfit2": "$1,900.00",
        "rrRatio": "1:2.6",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "รูปแบบการกลับตัว Double Bottom แถวระนาบราคา $1,450",
          "confirmed": true
        },
        {
          "name": "เกิดสัญญาณ Bullish Divergence ในดัชนี RSI ระยะรายวัน",
          "confirmed": true
        },
        {
          "name": "ราคาผ่านการเบรคเอาท์ต้านแนวระนาบราคาเส้น EMA 50 วัน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "4%",
        "riskPct": "8.8%",
        "riskReward": "1:2.6",
        "trailingStop": "ATRx2",
        "maxLoss": "$90",
        "atr14": "$45.00"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> ASML ดีดตัวอย่างร้อนแรงปิดตลาดที่ $1,592.00 (+2.70%) ถือเป็นรูปแบบการกลับตัว (Reversal Setup) ที่ชัดเจนมากหลังผ่านพ้นจุดต่ำสุดระยะสั้นด้วยการสร้างฐานแนว Double Bottom ราคาดีดตัวขึ้นเหนือเส้น EMA 50 ได้อย่างแข็งแกร่ง แนะนำจังหวะย่อสะสมที่ $1,520-$1,570 เพื่อคว้าโอกาสราคาที่เพิ่งกลับทิศเป็นขาขึ้นรอบใหม่</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย่อตัวอย่างเฉียบพลันหลุดแนวรับจิตวิทยาที่ $1,450 จะเป็นการทำลายโครงสร้างการกลับตัว และนำไปสู่การทดสอบระดับ VAL แถว $1,400</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+18.0%",
          "grade": "B"
        },
        {
          "metric": "Gross Margin",
          "value": "51.3%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.15",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "29.5%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "FCF Conversion",
          "value": "Excellent",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "34.0x",
          "grade": "B"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.3",
          "grade": "A"
        }
      ],
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Moat Strength",
          "score": 100,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 96,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 94,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🔬",
            "name": "EUV Photolithography Monopoly",
            "strength": 99,
            "description": "การผูกขาดหนึ่งเดียวของโลกในเทคโนโลยีการพิมพ์ชิป EUV/High-NA EUV ซึ่งประเมินค่าไม่ได้สำหรับอุตสาหกรรมชิประดับโลก"
          }
        ]
      }
    },
    "thesis": {
      "statement": "ASML ถือครอง Wide Moat ที่ไร้ผู้เทียบเคียงในระดับอุตสาหกรรมชิประดับล่างสุดของโลก โครงสร้างงบการเงินดีเยี่ยม แข็งแกร่ง อัตรากำไรขั้นต้นยอดเยี่ยม และมีโอกาสเติบโตตามคลื่นการลงทุนผลิตชิปขั้นสูงใหม่ๆ ทั่วโลก โดยระดับค่า PEG 1.3 เป็นโอกาสในการลงทุนที่สมเหตุสมผลมาก",
      "bullCase": [
        "การขยายตัวของสัญญาสั่งซื้อเครื่องพิมพ์ High-NA EUV เจนเนอเรชันถัดไปอย่างเร่งรีบ",
        "การขยายตัวของกำลังการจัดตั้งโรงหล่อชิปนอกสหรัฐฯ และยุโรปเพื่อลดความตึงเครียดทางภูมิรัฐศาสตร์"
      ],
      "bearCase": [
        "มาตรการจำกัดการค้าระหว่างประเทศจากภาครัฐที่ส่งผลลดระดับการนำเข้าเครื่องจักรเข้าสู่ประเทศจีน",
        "ระยะเวลาการผลิตและประกอบรวมติดตั้งเครื่องพิมพ์ EUV เครื่องใหญ่ที่ค่อนข้างยาวนาน"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$1,900.00",
        "timeHorizon": "1-3 ปี",
        "positionSize": "8-12%",
        "entryStrategy": "ทยอยสะสมเมื่อราคาย่อตัวในจังหวะสอดคล้องกับกรอบ Reversal ช่วงระดับ $1,520 - $1,570"
      },
      "keyRisks": [
        "ข้อจำกัดด้านนโยบายการจัดหาและการส่งออกระดับนานาชาติ",
        "การขยายตัวล่าช้าในการเปิดดำเนินการของโรงหล่อชิปหลักของผู้ซื้อรายใหญ่"
      ],
      "sources": [
        "ASML Q1 2026 Annual Report",
        "ASML Investor Day Presentation"
      ]
    }
  },
  "ANET": {
    "meta": {
      "symbol": "ANET",
      "companyName": "Arista Networks",
      "industry": "Cloud Networking",
      "sector": "Technology",
      "currentPrice": 154.31,
      "priceChange": 0.28,
      "priceChangePct": 0.18,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 9,
      "viScore": 9,
      "moat": "Wide",
      "marginOfSafety": "10%"
    },
    "technical": {
      "condition": "Strong Trend (แนวโน้มขาขึ้นประคองตัวแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ประคองตัวบนแนวโน้มขาขึ้นอย่างสวยงามตามกลุ่มนำตลาด AI"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "เทรนด์ระยะยาวมีพลังสูง ยืนเหนือเส้นเฉลี่ย EMA 20 ได้อย่างสม่ำเสมอ"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 153.82
        },
        "poc": {
          "label": "POC",
          "price": 142.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 165.0
          },
          {
            "label": "R2",
            "price": 180.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 148.0
          },
          {
            "label": "S2",
            "price": 142.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 158.0
        },
        "val": {
          "label": "VAL",
          "price": 138.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$145 – $152",
        "stopLoss": "$137.00",
        "takeProfit1": "$170.00",
        "takeProfit2": "$195.00",
        "rrRatio": "1:2.4",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "แรงพยุงจากเส้นค่าเฉลี่ย EMA 50 วัน และ Volume Profile POC บริเวณ $142",
          "confirmed": true
        },
        {
          "name": "RSI ระดับ 58 ชี้ว่าระดับราคายังมีเพดานวิ่งต่อได้สูงโดยไม่อิ่มตัว",
          "confirmed": true
        },
        {
          "name": "ความได้เปรียบทางโมเมนตัมเครือข่าย AI ที่มีความต้องการสูงมาก",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "4%",
        "riskPct": "7.8%",
        "riskReward": "1:2.4",
        "trailingStop": "ATRx2",
        "maxLoss": "$12.00",
        "atr14": "$5.80"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> ANET แข็งแกร่งมากโดยปิดตลาดปรับตัวขึ้นแรงปิดที่ $153.82 (+3.5%) ราคาทำฐานในกรอบพักตัวและเบรคเอาท์ขึ้นมาอย่างทรงพลัง แนะนำจังหวะย่อซื้อสะสมในโซน $145-$152 เพื่อรับกับคลื่นเทรนดิ้งที่เป็นขาขึ้นรอบใหญ่ตามอุตสาหกรรมชิปและเน็ตเวิร์ก AI</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย่อตัวอย่างรวดเร็วและหลุดแนวรับ POC ที่ $142 อาจส่งสัญญาณปรับฐานระยะกลางลงไปลึกแถว VAL ที่ $138</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+35.1%",
          "grade": "A"
        },
        {
          "metric": "Gross Margin",
          "value": "64.2%",
          "grade": "A"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.02",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "31.5%",
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
          "value": "52.5x",
          "grade": "C"
        },
        {
          "metric": "PEG Ratio",
          "value": "1.1",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 92,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 98,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 94,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🔌",
            "name": "AI Fabric & Cloud Networking Dominance",
            "strength": 92,
            "description": "การครองความเป็นผู้นำร่วมในส่วนแบ่งตลาด Cloud Switches ระดับความเร็วสูงด้วยความเสถียรของซอฟต์แวร์ EOS"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Arista Networks เป็นหัวใจสำคัญในการเชื่อมต่อเซิร์ฟเวอร์ AI ทั่วโลก งบการเงินแทบไร้หนี้สิน มีกระแสเงินสดแข็งแกร่ง และได้ประโยชน์สูงสุดจาก CapEx โครงสร้างพื้นฐาน AI ของ Hyperscalers",
      "bullCase": [
        "การขยายตัวของตลาดยอดขาย AI Fabric จาก $2.5B เป็น $3.5B ภายในสิ้นปี 2026",
        "การทดแทนสวิตช์ InfiniBand ด้วยเทคโนโลยี Ultra Ethernet Consortium (UEC)"
      ],
      "bearCase": [
        "ความเสี่ยงจากการพึ่งพิงลูกค้ารายใหญ่ (Meta/Microsoft) มากกว่า 30% ของรายได้",
        "การแข่งขันที่ทวีความรุนแรงมากขึ้นจาก Cisco และ Broadcom"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$195.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "5-8%",
        "entryStrategy": "ทยอยซื้อสะสมบริเวณแนวรับช่วงราคา $145 - $152"
      },
      "keyRisks": [
        "การชะลอการลงทุน CapEx ของลูกค้ารายใหญ่",
        "ข้อจำกัดของห่วงโซ่อุปทานชิปเน็ตเวิร์กขั้นสูง"
      ],
      "sources": [
        "ANET Q1 2026 Earnings Transcript",
        "Ethernet Consortium Technical Papers"
      ]
    }
  },
  "PLTR": {
    "meta": {
      "symbol": "PLTR",
      "companyName": "Palantir Technologies",
      "industry": "Enterprise Software",
      "sector": "Technology",
      "currentPrice": 132.51,
      "priceChange": -4.37,
      "priceChangePct": -3.19,
      "analysisDate": "2026-05-28"
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
        "direction": "Consolidation",
        "strength": "Neutral",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ย่อตัวพักฐานสะสมกำลังหลังแตะจุดสูงสุดบริเวณ $145"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "แนวโน้มระยะยาวมั่นคงและแข็งแกร่งมากตามฐานรายได้ระบบ AIP"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 136.56
        },
        "poc": {
          "label": "POC",
          "price": 128.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 145.0
          },
          {
            "label": "R2",
            "price": 160.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 130.0
          },
          {
            "label": "S2",
            "price": 122.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 140.0
        },
        "val": {
          "label": "VAL",
          "price": 120.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$128 – $135",
        "stopLoss": "$120.00",
        "takeProfit1": "$155.00",
        "takeProfit2": "$175.00",
        "rrRatio": "1:2.8",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "แนวพยุงสำคัญที่ทับซ้อนกันระหว่างระดับราคา VAH ล่างสุดกับเส้น EMA 50 วัน",
          "confirmed": true
        },
        {
          "name": "โมเมนตัม RSI ลดความตึงเครียดกลับมาอยู่ที่ 52 ซึ่งเหมาะสมกับการสะสม",
          "confirmed": true
        },
        {
          "name": "อุปสงค์ความต้องการแพลตฟอร์ม AI ในสหรัฐฯ ขยายตัวก้าวกระโดด",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "5%",
        "riskPct": "12.0%",
        "riskReward": "1:2.8",
        "trailingStop": "ATRx2",
        "maxLoss": "$16.00",
        "atr14": "$8.10"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> PLTR เคลื่อนไหวในทิศทางย่อตัวปรับฐานชั่วคราว ปิดที่ $136.56 (-0.63%) การยืดตัวพักรอบนี้เป็นจังหวะสะสมที่ดีเลิศแบบ Buy the Dip ในโซนแนวรับ POC ที่หนาแน่นบริเวณ $128-$135 เพื่อรองรับการพุ่งทะยานสู่เป้าหมายระยะยาวถัดไป</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาเกิดแรงขายรุนแรงและหลุดจุด Stop Loss ที่ $120 อาจนำไปสู่การทดสอบระดับ VAL แถว $110</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+85.0%",
          "grade": "A"
        },
        {
          "metric": "Operating Margin",
          "value": "38.5%",
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
          "value": "35.2%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "Exceptional",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "78.0x",
          "grade": "D"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.51",
          "grade": "A"
        }
      ],
      "overallGrade": "A",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 98,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 96,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 92,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Wide",
        "items": [
          {
            "icon": "🛰️",
            "name": "Ontology & AI Operating System",
            "strength": 96,
            "description": "การผูกขาดแพลตฟอร์มจัดการข้อมูลระดับความมั่นคงและ AIP ที่ช่วยเปลี่ยนผ่านสู่ AI แบบเบ็ดเสร็จในองค์กร"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Palantir มีศักยภาพในการเป็นแกนหลักด้านซอฟต์แวร์ AI ทั่วโลก การเติบโตด้านพาณิชย์ในสหรัฐฯ โตในระดับ 133% งบการเงินมั่นคงและมีกระแสเงินสดล้นเหลือ (PEG ต่ำเพียง 0.51)",
      "bullCase": [
        "การขยายสัญญากับหน่วยงานความมั่นคงสหรัฐฯ และพันธมิตรยุโรปอย่างต่อเนื่อง",
        "การปรับใช้แพลตฟอร์ม AIP เชิงพาณิชย์ที่เป็นแบบปากต่อปาก (Bootcamp Model) ที่เพิ่มยอดขายรวดเร็ว"
      ],
      "bearCase": [
        "ระดับมูลค่า P/E ที่ค่อนข้างสูงมากหากการเติบโตสะดุดตัวลงระยะสั้น",
        "การขึ้นอยู่กับความเชี่ยวชาญด้านบุคลากรในเทคโนโลยีที่ซับซ้อนในการตั้งค่าใช้งานระยะแรก"
      ],
      "recommendation": {
        "action": "BUY THE DIP",
        "targetPrice": "$175.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "6-10%",
        "entryStrategy": "สะสมหุ้นในกรอบราคาย่อยช่วง $128 - $135"
      },
      "keyRisks": [
        "ความล่าช้าในการทำสัญญารัฐบาลขนาดใหญ่",
        "ภาวะสมองไหลของนักพัฒนาซอฟต์แวร์ระดับท็อป"
      ],
      "sources": [
        "PLTR Q1 2026 Financial Results",
        "Palantir AIP Bootcamp Statistics"
      ]
    }
  },
  "ATAT": {
    "meta": {
      "symbol": "ATAT",
      "companyName": "Atour Lifestyle Holdings",
      "industry": "Hospitality & Retail",
      "sector": "Consumer Cyclical",
      "currentPrice": 33.85,
      "priceChange": 0.01,
      "priceChangePct": 0.03,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "BUY",
      "verdictConfidence": "High Confidence",
      "taScore": 8,
      "viScore": 10,
      "moat": "Narrow",
      "marginOfSafety": "20%"
    },
    "technical": {
      "condition": "Reversal Setup (กลับตัวสร้างฐานจากจุดย่อตัว)",
      "trend": {
        "direction": "Reversal",
        "strength": "Strong",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคากลับตัวฟื้นจากแนวรับจิตวิทยา $32 ทะลุเส้น EMA 20 อย่างมั่นใจ"
          },
          {
            "tf": "Weekly",
            "bias": "bullish",
            "note": "แนวโน้มระยะกลางถึงยาวยังสะท้อนภาพการเติบโตแบบยกโลว์ยกระดับฐานราคา"
          }
        ]
      },
      "levels": {
        "current": {
          "label": "Current",
          "price": 35.79
        },
        "poc": {
          "label": "POC",
          "price": 32.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 38.0
          },
          {
            "label": "R2",
            "price": 42.0
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 33.0
          },
          {
            "label": "S2",
            "price": 31.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 37.0
        },
        "val": {
          "label": "VAL",
          "price": 30.0
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$32.50 – $34.50",
        "stopLoss": "$30.00",
        "takeProfit1": "$42.00",
        "takeProfit2": "$50.00",
        "rrRatio": "1:2.6",
        "confidence": "High"
      },
      "confluences": [
        {
          "name": "รูปแบบการกลับตัวจากฐานบริเวณ POC แข็งแกร่งที่ $32",
          "confirmed": true
        },
        {
          "name": "การฟื้นตัวของดัชนีชี้วัดโมเมนตัม MACD ตัดขึ้นในระดับรายวัน",
          "confirmed": true
        },
        {
          "name": "ความเชื่อมั่นในผลประกอบการท่องเที่ยวที่เติบโตต่อเนื่องในเอเชีย",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "3%",
        "riskPct": "10.0%",
        "riskReward": "1:2.6",
        "trailingStop": "ATRx2",
        "maxLoss": "$3.50",
        "atr14": "$1.80"
      },
      "rationale": "<p><strong>วิเคราะห์ทางเทคนิค:</strong> ATAT ดีดตัวได้อย่างร้อนแรง ปิดที่ $35.79 (+2.43%) บ่งชี้ถึงภาพการกลับตัวเชิงเทคนิค (Reversal Setup) ที่ค่อนข้างสมบูรณ์แบบหลังย่อลงไปทดสอบฐานรับ POC $32 แนะนำหาจังหวะซื้อสะสมเมื่อราคาย่อตัวในกรอบ $32.50-$34.50 เพื่อคว้าเป้าหมายระยะยาวสู่ $42 และ $50</p>",
      "risks": "<p><strong>ความเสี่ยงเทคนิค:</strong> หากราคาย้อนกลับลงมาแรงและหลุดฐานแนวรับสำคัญที่ $30 จะเป็นการทำลายทิศทางการฟื้นตัวระยะกลาง</p>"
    },
    "fundamental": {
      "incomeStatement": [
        {
          "metric": "Revenue Growth",
          "value": "+47.5%",
          "grade": "A"
        },
        {
          "metric": "Gross Margin",
          "value": "45.0%",
          "grade": "B"
        }
      ],
      "balanceSheet": [
        {
          "metric": "Debt/Equity",
          "value": "0.18",
          "grade": "A"
        },
        {
          "metric": "ROE",
          "value": "51.2%",
          "grade": "A"
        }
      ],
      "cashflow": [
        {
          "metric": "Free Cash Flow",
          "value": "Excellent",
          "grade": "A"
        }
      ],
      "valuation": [
        {
          "metric": "P/E Ratio",
          "value": "18.5x",
          "grade": "A"
        },
        {
          "metric": "PEG Ratio",
          "value": "0.26",
          "grade": "A"
        }
      ],
      "overallGrade": "A+",
      "gradeBreakdown": [
        {
          "label": "Growth",
          "score": 96,
          "color": "var(--grade-a)"
        },
        {
          "label": "Financial Health",
          "score": 94,
          "color": "var(--grade-a)"
        },
        {
          "label": "Profitability",
          "score": 99,
          "color": "var(--grade-a)"
        }
      ],
      "moat": {
        "overall": "Narrow",
        "items": [
          {
            "icon": "👑",
            "name": "Lifestyle Hospitality Brand Power",
            "strength": 85,
            "description": "การเป็นเจ้าตลาดกลุ่มท่องเที่ยวโรงแรมพรีเมียมพร้อมการต่อยอดขายสินค้าเครื่องนอนไลฟ์สไตล์ที่มีสัดส่วนกำไรสูง"
          }
        ]
      }
    },
    "thesis": {
      "statement": "Atour Lifestyle เป็นม้ามืดเติบโตสูงที่มีการผสานเทคโนโลยีการบริการและการขายปลีกอย่างเป็นเลิศ ยอดเติบโตระดับ 47% ขณะที่ระดับมูลค่า PEG ต่ำมากเพียง 0.26 และ ROE ทะลุ 50% สะท้อนความยอดเยี่ยมในการบริหาร",
      "bullCase": [
        "การขยายอัตราการเติบโตของแฟรนไชส์โรงแรมและการเพิ่มขึ้นของยอดขายปลีกเครื่องนอนพรีเมียม",
        "ฐานสมาชิกเกือบ 80 ล้านคนซึ่งรับประกันอัตราการเข้าพักที่ต่อเนื่องสูงกว่าคู่แข่ง"
      ],
      "bearCase": [
        "ความเสี่ยงจากการผันผวนของการบริโภคและการเดินทางท่องเที่ยวเชิงเศรษฐกิจภายในภูมิภาค",
        "ความท้าทายในการควบคุมมาตรฐานการบริการของสาขาแฟรนไชส์ที่ขยายตัวอย่างรวดเร็ว"
      ],
      "recommendation": {
        "action": "BUY",
        "targetPrice": "$50.00",
        "timeHorizon": "1-2 ปี",
        "positionSize": "4-6%",
        "entryStrategy": "ทยอยรับสะสมแถวแนวรับช่วงราคา $32.50 - $34.50"
      },
      "keyRisks": [
        "การเปลี่ยนแปลงนโยบายหรือพฤติกรรมผู้บริโภคเชิงการเดินทางในเอเชีย",
        "ภาวะเงินเฟ้อที่เพิ่มภาระต้นทุนด้านแรงงานและบริหาร"
      ],
      "sources": [
        "ATAT Q1 2026 Operational Results",
        "Lifestyle Retail Growth Report"
      ]
    }
  }
};

let activeStock = "GOOGL";
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('stock-selector');
  if(selector) {
    selector.innerHTML = `\n      <option value="GOOGL">Alphabet Inc (GOOGL)</option>\n      <option value="MU">Micron Technology (MU)</option>\n      <option value="TSM">Taiwan Semiconductor Mfg (TSM)</option>\n      <option value="NVDA">NVIDIA Corp (NVDA)</option>\n      <option value="META">Meta Platforms (META)</option>\n      <option value="LLY">Eli Lilly & Co (LLY)</option>\n      <option value="VRT">Vertiv Holdings (VRT)</option>\n      <option value="NU">Nu Holdings (Nubank) (NU)</option>\n      <option value="MELI">MercadoLibre Inc (MELI)</option>\n      <option value="AVGO">Broadcom Inc (AVGO)</option>\n      <option value="ASML">ASML Holding N.V (ASML)</option>\n      <option value="ANET">Arista Networks (ANET)</option>\n      <option value="PLTR">Palantir Technologies (PLTR)</option>\n      <option value="ATAT">Atour Lifestyle Holdings (ATAT)</option>\n    `;
    selector.value = activeStock;
  }
  
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderAll(stocksData[activeStock]);
  }, 1000);

  initTabs();
  initSelector();
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

function renderAll(data) {
  renderMeta(data.meta);
  renderOverview(data.meta, data.overview);
  renderTechnical(data.technical);
  renderFundamental(data.fundamental);
  renderThesis(data.thesis);

  // Animate in
  requestAnimationFrame(() => {
    document.querySelectorAll('.stat-card, .summary-card, .ta-card, .fin-card, .entry-card, .risk-card, .rationale-card, .moat-card, .grade-card, .thesis-hero, .case-card, .recommendation-card, .risks-card, .sources-card').forEach((el, i) => {
      el.classList.remove('animate-in');
      void el.offsetWidth; // Trigger reflow for animation restart
      el.classList.add('animate-in', `stagger-${Math.min(i + 1, 6)}`);
    });
  });
}

function renderMeta(meta) {
  document.getElementById('stock-symbol').textContent = meta.symbol;
  document.getElementById('stock-price').textContent = `$${meta.currentPrice.toFixed(2)}`;

  const changeEl = document.getElementById('stock-change');
  const sign = meta.priceChange >= 0 ? '+' : '';
  changeEl.textContent = `${sign}${meta.priceChangePct.toFixed(2)}%`;
  changeEl.className = `stock-change ${meta.priceChange >= 0 ? 'positive' : 'negative'}`;
}

function renderOverview(meta, ov) {
  // Hero
  document.getElementById('company-initial').textContent = meta.symbol[0];
  document.getElementById('company-name').textContent = `${meta.companyName} (${meta.symbol})`;
  document.getElementById('company-industry').textContent = `${meta.sector} • ${meta.industry}`;
  document.getElementById('hero-price').textContent = `$${meta.currentPrice.toFixed(2)}`;

  const heroChange = document.getElementById('hero-change');
  const sign = meta.priceChange >= 0 ? '+' : '';
  heroChange.textContent = `${sign}$${meta.priceChange.toFixed(2)} (${sign}${meta.priceChangePct.toFixed(2)}%)`;
  heroChange.className = `hero-change ${meta.priceChange >= 0 ? 'positive' : 'negative'}`;

  // Verdict
  const verdictEl = document.getElementById('verdict-value');
  verdictEl.textContent = ov.verdict;
  verdictEl.className = `verdict-value ${ov.verdict.toLowerCase().split(' ')[0]}`;
  document.getElementById('verdict-confidence').textContent = ov.verdictConfidence;

  // Scores
  document.getElementById('ta-score-val').textContent = `${ov.taScore}/10`;
  document.getElementById('vi-score-val').textContent = `${ov.viScore}/10`;
  document.getElementById('moat-val').textContent = ov.moat;
  document.getElementById('safety-val').textContent = ov.marginOfSafety;

  // Score rings
  setTimeout(() => {
    document.querySelector('.ta-fill').style.strokeDasharray = `${ov.taScore * 10}, 100`;
    document.querySelector('.vi-fill').style.strokeDasharray = `${ov.viScore * 10}, 100`;
  }, 300);

  // TA Summary
  const taBadge = document.getElementById('ta-signal-badge');
  const signalText = stocksData[activeStock].technical.entry.signal || "";
  taBadge.textContent = signalText.toLowerCase().includes('buy') ? 'BULLISH' : 'WAIT';
  taBadge.className = `card-badge ${signalText.toLowerCase().includes('buy') ? 'bullish' : 'neutral'}`;
  
  document.getElementById('ta-summary-content').innerHTML = `
    <p><strong>TA Condition:</strong> <span style="color: var(--color-bullish); font-weight: 700;">${stocksData[activeStock].technical.condition}</span></p>
    <p><strong>Trend:</strong> ${stocksData[activeStock].technical.trend.direction} (${stocksData[activeStock].technical.trend.strength})</p>
    <p><strong>Entry Zone:</strong> ${stocksData[activeStock].technical.entry.entryZone}</p>
    <p><strong>Stop Loss:</strong> ${stocksData[activeStock].technical.entry.stopLoss} | <strong>TP:</strong> ${stocksData[activeStock].technical.entry.takeProfit1}</p>
    <p><strong>R:R Ratio:</strong> ${stocksData[activeStock].technical.entry.rrRatio} | <strong>Confidence:</strong> ${stocksData[activeStock].technical.entry.confidence}</p>
    <p style="color:var(--text-muted);font-size:12px;margin-top:8px;">Confluences: ${stocksData[activeStock].technical.confluences.filter(c => c.confirmed).length}/${stocksData[activeStock].technical.confluences.length} confirmed</p>
  `;

  // VI Summary
  const viBadge = document.getElementById('vi-signal-badge');
  viBadge.textContent = 'STRONG';
  viBadge.className = 'card-badge bullish';
  
  document.getElementById('vi-summary-content').innerHTML = `
    <p><strong>Financial Grade:</strong> ${stocksData[activeStock].fundamental.overallGrade}</p>
    <p><strong>Moat:</strong> ${stocksData[activeStock].fundamental.moat.overall}</p>
    <p><strong>Valuation:</strong> P/E ${stocksData[activeStock].fundamental.valuation[0].value}</p>
    <p><strong>Margin of Safety:</strong> ${ov.marginOfSafety} at entry zone</p>
  `;
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
        <span class="level-price">$${l.price.toFixed(2)}</span>
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
  document.getElementById('entry-confluences').innerHTML = ta.confluences.map(c => `
    <div class="confluence-chip ${c.confirmed ? 'confirmed' : ''}">
      <span class="confluence-dot"></span>
      ${c.name}
    </div>
  `).join('');

  // Risk
  document.getElementById('risk-visual').innerHTML = `
    <div class="risk-item">
      <div class="risk-item-label">Position Size</div>
      <div class="risk-item-value">${ta.risk.positionSize}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Risk per Trade</div>
      <div class="risk-item-value" style="color:var(--color-bearish)">${ta.risk.riskPct}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Risk:Reward</div>
      <div class="risk-item-value" style="color:var(--color-bullish)">${ta.risk.riskReward}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Trailing Stop</div>
      <div class="risk-item-value">${ta.risk.trailingStop}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">Max Loss/Share</div>
      <div class="risk-item-value" style="color:var(--color-bearish)">${ta.risk.maxLoss}</div>
    </div>
    <div class="risk-item">
      <div class="risk-item-label">ATR (14)</div>
      <div class="risk-item-value">${ta.risk.atr14}</div>
    </div>
  `;

  // Rationale
  document.getElementById('ta-rationale-content').innerHTML = ta.rationale + (ta.risks || "");
}

function renderFundamental(fund) {
  // Tables
  renderFinTable('income-table', fund.incomeStatement);
  renderFinTable('balance-table', fund.balanceSheet);
  renderFinTable('cashflow-table', fund.cashflow);
  renderFinTable('valuation-table', fund.valuation);

  // Moat
  document.getElementById('moat-content').innerHTML = fund.moat.items.map(m => `
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

  // Grade
  document.getElementById('grade-letter').textContent = fund.overallGrade;
  document.getElementById('grade-description').textContent = fund.overallGrade.includes('A') ? 'Exceptional Financial Position' : 'Excellent Financial Health';

  document.getElementById('grade-breakdown').innerHTML = fund.gradeBreakdown.map(g => `
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
  document.getElementById('thesis-statement').textContent = thesis.statement;

  // Bull case
  document.getElementById('bull-content').innerHTML = `<ol>${thesis.bullCase.map(b => `<li>${b}</li>`).join('')}</ol>`;

  // Bear case
  document.getElementById('bear-content').innerHTML = `<ol>${thesis.bearCase.map(b => `<li>${b}</li>`).join('')}</ol>`;

  // Recommendation
  const recAction = document.getElementById('rec-action');
  recAction.textContent = thesis.recommendation.action;
  recAction.className = 'rec-action ' + thesis.recommendation.action.toLowerCase().split(' ')[0];

  document.getElementById('rec-details').innerHTML = `
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

  // Key Risks
  document.getElementById('risks-content').innerHTML = thesis.keyRisks.map(r => `
    <div class="risk-alert">
      <span class="risk-alert-icon">⚠️</span>
      <p>${r}</p>
    </div>
  `).join('');

  // Sources
  if (thesis.sources) {
    document.getElementById('sources-content').innerHTML = thesis.sources.map(s => `
      <span class="source-tag">📖 ${s}</span>
    `).join('');
  }
}
