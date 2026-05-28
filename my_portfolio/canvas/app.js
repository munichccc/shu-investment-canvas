/* =========================================
   SHU CANVAS — My Portfolio
   Stocks: MU, TSM, NVDA, GOOGL
   ========================================= */

const stocksData = {
  "GOOGL": {
    "meta": {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 390.41,
      "priceChange": 1.67,
      "priceChangePct": 0.43,
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
      "currentPrice": 928.5,
      "priceChange": 32.52,
      "priceChangePct": 3.63,
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
      "priceChange": 9.91,
      "priceChangePct": 2.4,
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
      "priceChange": -2.26,
      "priceChangePct": -1.05,
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
  }
};
const screenerData = [
  {
    "symbol": "MSFT",
    "name": "Microsoft",
    "sector": "Technology",
    "price": 412.67,
    "change": -48.02,
    "pct": -10.42,
    "pe": 32.4,
    "rsi": 49.6,
    "volSpike": 0.85,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "AAPL",
    "name": "Apple",
    "sector": "Technology",
    "price": 310.85,
    "change": 110.64,
    "pct": 55.26,
    "pe": 27.5,
    "rsi": 78.8,
    "volSpike": 1.02,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA",
    "sector": "Technology",
    "price": 212.6,
    "change": 77.1,
    "pct": 56.9,
    "pe": 58.2,
    "rsi": 51.0,
    "volSpike": 1.03,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "AMZN",
    "name": "Amazon",
    "sector": "Consumer Cyclical",
    "price": 271.85,
    "change": 65.83,
    "pct": 31.95,
    "pe": 38.2,
    "rsi": 62.7,
    "volSpike": 0.92,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet",
    "sector": "Technology",
    "price": 388.83,
    "change": 215.93,
    "pct": 124.89,
    "pe": 24.5,
    "rsi": 61.0,
    "volSpike": 0.79,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6
  },
  {
    "symbol": "META",
    "name": "Meta Platforms",
    "sector": "Technology",
    "price": 635.25,
    "change": -7.07,
    "pct": -1.1,
    "pe": 24.5,
    "rsi": 56.9,
    "volSpike": 1.37,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4
  },
  {
    "symbol": "TSLA",
    "name": "Tesla",
    "sector": "Consumer Cyclical",
    "price": 440.36,
    "change": 77.47,
    "pct": 21.35,
    "pe": 58.5,
    "rsi": 63.0,
    "volSpike": 0.83,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "MU",
    "name": "Micron",
    "sector": "Technology",
    "price": 928.41,
    "change": 832.03,
    "pct": 863.28,
    "pe": 22.8,
    "rsi": 76.5,
    "volSpike": 1.33,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6
  },
  {
    "symbol": "TSM",
    "name": "TSMC",
    "sector": "Technology",
    "price": 422.73,
    "change": 225.05,
    "pct": 113.85,
    "pe": 25.4,
    "rsi": 62.8,
    "volSpike": 1.12,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6
  },
  {
    "symbol": "ASML",
    "name": "ASML",
    "sector": "Technology",
    "price": 1597.87,
    "change": 841.08,
    "pct": 111.14,
    "pe": 42.5,
    "rsi": 58.2,
    "volSpike": 0.83,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "PLTR",
    "name": "Palantir",
    "sector": "Technology",
    "price": 132.51,
    "change": 9.12,
    "pct": 7.39,
    "pe": 82.0,
    "rsi": 41.4,
    "volSpike": 0.83,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks",
    "sector": "Technology",
    "price": 154.31,
    "change": 61.82,
    "pct": 66.84,
    "pe": 38.5,
    "rsi": 53.2,
    "volSpike": 0.54,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "AMD",
    "name": "AMD",
    "sector": "Technology",
    "price": 495.54,
    "change": 380.98,
    "pct": 332.56,
    "pe": 48.0,
    "rsi": 74.1,
    "volSpike": 0.67,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Technology",
    "price": 421.86,
    "change": 186.21,
    "pct": 79.02,
    "pe": 35.2,
    "rsi": 56.4,
    "volSpike": 0.95,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "NFLX",
    "name": "Netflix",
    "sector": "Communication",
    "price": 87.35,
    "change": -33.81,
    "pct": -27.91,
    "pe": 36.4,
    "rsi": 40.6,
    "volSpike": 0.69,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0
  },
  {
    "symbol": "COIN",
    "name": "Coinbase",
    "sector": "Financials",
    "price": 173.78,
    "change": -92.62,
    "pct": -34.77,
    "pe": 28.5,
    "rsi": 39.3,
    "volSpike": 0.84,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "CRWD",
    "name": "CrowdStrike",
    "sector": "Technology",
    "price": 645.36,
    "change": 173.14,
    "pct": 36.67,
    "pe": 72.0,
    "rsi": 75.8,
    "volSpike": 1.06,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro",
    "sector": "Technology",
    "price": 38.19,
    "change": -3.38,
    "pct": -8.13,
    "pe": 18.5,
    "rsi": 69.4,
    "volSpike": 0.9,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "CELH",
    "name": "Celsius",
    "sector": "Consumer Defensive",
    "price": 31.65,
    "change": -5.39,
    "pct": -14.55,
    "pe": 45.0,
    "rsi": 49.4,
    "volSpike": 1.07,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "price": 319.78,
    "change": 209.99,
    "pct": 191.27,
    "pe": 38.5,
    "rsi": 46.8,
    "volSpike": 0.94,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3
  },
  {
    "symbol": "NU",
    "name": "Nu Holdings",
    "sector": "Financials",
    "price": 13.03,
    "change": 1.09,
    "pct": 9.13,
    "pe": 28.4,
    "rsi": 42.8,
    "volSpike": 0.91,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre",
    "sector": "Consumer Cyclical",
    "price": 1696.17,
    "change": -859.0,
    "pct": -33.62,
    "pe": 46.5,
    "rsi": 50.0,
    "volSpike": 0.6,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2
  },
  {
    "symbol": "MSTR",
    "name": "MicroStrategy",
    "sector": "Technology",
    "price": 154.2,
    "change": -218.0,
    "pct": -58.57,
    "pe": 95.0,
    "rsi": 41.3,
    "volSpike": 0.8,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood",
    "sector": "Financials",
    "price": 76.23,
    "change": 10.21,
    "pct": 15.47,
    "pe": 24.2,
    "rsi": 48.5,
    "volSpike": 1.01,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1
  },
  {
    "symbol": "LUNR",
    "name": "Intuitive Machines",
    "sector": "Industrials",
    "price": 40.34,
    "change": 27.7,
    "pct": 219.15,
    "pe": 15.0,
    "rsi": 68.1,
    "volSpike": 1.91,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm",
    "sector": "Technology",
    "price": 233.4,
    "change": 84.77,
    "pct": 57.03,
    "pe": 18.2,
    "rsi": 65.6,
    "volSpike": 0.81,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5
  },
  {
    "symbol": "ARM",
    "name": "ARM Holdings",
    "sector": "Technology",
    "price": 302.71,
    "change": 168.75,
    "pct": 125.97,
    "pe": 75.0,
    "rsi": 70.8,
    "volSpike": 0.8,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto",
    "sector": "Technology",
    "price": 248.47,
    "change": 61.01,
    "pct": 32.55,
    "pe": 48.0,
    "rsi": 71.3,
    "volSpike": 1.05,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "NET",
    "name": "Cloudflare",
    "sector": "Technology",
    "price": 209.22,
    "change": 47.46,
    "pct": 29.34,
    "pe": 68.0,
    "rsi": 50.2,
    "volSpike": 0.64,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "DDOG",
    "name": "Datadog",
    "sector": "Technology",
    "price": 221.81,
    "change": 104.21,
    "pct": 88.61,
    "pe": 54.0,
    "rsi": 81.9,
    "volSpike": 0.66,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake",
    "sector": "Technology",
    "price": 175.26,
    "change": -31.09,
    "pct": -15.07,
    "pe": 62.0,
    "rsi": 66.5,
    "volSpike": 2.11,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb",
    "sector": "Consumer Cyclical",
    "price": 132.1,
    "change": 2.7,
    "pct": 2.09,
    "pe": 26.5,
    "rsi": 43.0,
    "volSpike": 0.77,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4
  },
  {
    "symbol": "UBER",
    "name": "Uber",
    "sector": "Industrials",
    "price": 70.73,
    "change": -18.27,
    "pct": -20.53,
    "pe": 31.4,
    "rsi": 38.4,
    "volSpike": 1.25,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0
  },
  {
    "symbol": "PATH",
    "name": "UiPath",
    "sector": "Technology",
    "price": 11.16,
    "change": -1.51,
    "pct": -11.92,
    "pe": 22.0,
    "rsi": 57.6,
    "volSpike": 1.2,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 3
  }
];

let activeStock = "MU";
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('stock-selector');
  if(selector) {
    selector.innerHTML = `\n      <option value="MU">Micron Technology (MU)</option>\n      <option value="TSM">Taiwan Semiconductor Mfg (TSM)</option>\n      <option value="NVDA">NVIDIA Corp (NVDA)</option>\n      <option value="GOOGL">Alphabet Inc (GOOGL)</option>\n    `;
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
  } else {
    alert(`หุ้น ${symbol} อยู่ในกลุ่มหุ้นแนะนำประจำวัน แต่วิถีคูเมืองวิเคราะห์แบบเจาะลึกเปิดให้ใช้งานเฉพาะหุ้นหลัก 10 ตัวแรกในระบบเทรดเท่านั้นครับ คุณสามารถกดวิเคราะห์หุ้นหลัก 10 ตัวผ่านกล่องรายชื่อสีเงินด้านบนได้เลยครับ`);
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

  // Animate in
  requestAnimationFrame(() => {
    document.querySelectorAll('.stat-card, .summary-card, .ta-card, .fin-card, .entry-card, .risk-card, .rationale-card, .moat-card, .grade-card, .thesis-hero, .case-card, .recommendation-card, .risks-card, .sources-card, .screener-card').forEach((el, i) => {
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
