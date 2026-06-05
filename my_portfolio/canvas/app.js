/* =========================================
   SHU CANVAS — My Portfolio
   Stocks: MU, TSM, NVDA, GOOGL, BTC-USD
   ========================================= */

const stocksData = {
  "GOOGL": {
    "meta": {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "industry": "Interactive Media",
      "sector": "Technology",
      "currentPrice": 368.53,
      "priceChange": -3.66,
      "priceChangePct": -0.98,
      "analysisDate": "2026-06-05"
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
          "price": 368.53
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
      "currentPrice": 864.01,
      "priceChange": -131.99,
      "priceChangePct": -13.25,
      "analysisDate": "2026-06-05"
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
          "price": 864.01
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
      "currentPrice": 415.17,
      "priceChange": -29.75,
      "priceChangePct": -6.69,
      "analysisDate": "2026-06-05"
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
          "price": 415.17
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
      "currentPrice": 205.1,
      "priceChange": -13.56,
      "priceChangePct": -6.2,
      "analysisDate": "2026-06-05"
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
          "price": 205.1
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
      "currentPrice": 61684.0,
      "priceChange": -2117.57,
      "priceChangePct": -3.32,
      "analysisDate": "2026-06-05"
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
          "price": 61684.0
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
  "ORCL": {
    "meta": {
      "symbol": "ORCL",
      "companyName": "Oracle",
      "industry": "Software & Tech Growth",
      "sector": "Technology",
      "currentPrice": 213.68,
      "priceChange": -22.66,
      "priceChangePct": -9.59,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 6,
      "viScore": 7,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $189.19"
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
          "price": 213.68
        },
        "poc": {
          "label": "POC",
          "price": 205.13
        },
        "resistances": [
          {
            "label": "R1",
            "price": 224.36
          },
          {
            "label": "R2",
            "price": 239.32
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 189.19
          },
          {
            "label": "S2",
            "price": 204.94
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 220.09
        },
        "val": {
          "label": "VAL",
          "price": 194.45
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$203.0 - $211.54",
        "stopLoss": "$196.74",
        "takeProfit1": "$224.36",
        "takeProfit2": "$239.32",
        "rrRatio": "1:0.6",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($189.19) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 55.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.33x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.6",
        "trailingStop": "$11.22",
        "maxLoss": "$14.96",
        "atr14": "$7.48"
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
          "score": 60,
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
      "statement": "หุ้น Oracle (ORCL) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 6/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.6) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$224.36",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($204.94) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 112.45,
      "priceChange": -6.91,
      "priceChangePct": -5.79,
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
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $104.92"
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
          "price": 112.45
        },
        "poc": {
          "label": "POC",
          "price": 107.95
        },
        "resistances": [
          {
            "label": "R1",
            "price": 118.07
          },
          {
            "label": "R2",
            "price": 125.94
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 104.92
          },
          {
            "label": "S2",
            "price": 101.2
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 115.82
        },
        "val": {
          "label": "VAL",
          "price": 102.33
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$106.83 - $111.33",
        "stopLoss": "$97.15",
        "takeProfit1": "$118.07",
        "takeProfit2": "$125.94",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($104.92) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 54.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.81x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$5.91",
        "maxLoss": "$7.88",
        "atr14": "$3.94"
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
      "statement": "หุ้น ServiceNow (NOW) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "targetPrice": "$118.07",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($101.2) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($101.2) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 135.53,
      "priceChange": -6.17,
      "priceChangePct": -4.35,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $128.75"
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
          "price": 135.53
        },
        "poc": {
          "label": "POC",
          "price": 130.11
        },
        "resistances": [
          {
            "label": "R1",
            "price": 142.31
          },
          {
            "label": "R2",
            "price": 151.79
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 128.75
          },
          {
            "label": "S2",
            "price": 121.98
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 139.6
        },
        "val": {
          "label": "VAL",
          "price": 123.33
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$128.75 - $134.17",
        "stopLoss": "$117.10",
        "takeProfit1": "$142.31",
        "takeProfit2": "$151.79",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($128.75) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 44.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.92x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$7.11",
        "maxLoss": "$9.48",
        "atr14": "$4.74"
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
        "targetPrice": "$142.31",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($121.98) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($121.98) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 154.27,
      "priceChange": -11.74,
      "priceChangePct": -7.07,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $152.62"
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
          "price": 154.27
        },
        "poc": {
          "label": "POC",
          "price": 148.1
        },
        "resistances": [
          {
            "label": "R1",
            "price": 161.98
          },
          {
            "label": "R2",
            "price": 172.78
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 152.62
          },
          {
            "label": "S2",
            "price": 139.51
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 158.9
        },
        "val": {
          "label": "VAL",
          "price": 140.39
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$146.56 - $152.73",
        "stopLoss": "$133.93",
        "takeProfit1": "$161.98",
        "takeProfit2": "$172.78",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($152.62) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 48.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.79x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$8.10",
        "maxLoss": "$10.80",
        "atr14": "$5.40"
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
        "targetPrice": "$161.98",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($138.84) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($139.51) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 466.38,
      "priceChange": -56.82,
      "priceChangePct": -10.86,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $388.02"
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
          "price": 466.38
        },
        "poc": {
          "label": "POC",
          "price": 447.72
        },
        "resistances": [
          {
            "label": "R1",
            "price": 489.7
          },
          {
            "label": "R2",
            "price": 522.35
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 388.02
          },
          {
            "label": "S2",
            "price": 264.89
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 480.37
        },
        "val": {
          "label": "VAL",
          "price": 424.41
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$443.06 - $461.72",
        "stopLoss": "$254.29",
        "takeProfit1": "$489.70",
        "takeProfit2": "$522.35",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($388.02) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 54.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.34x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$24.48",
        "maxLoss": "$32.64",
        "atr14": "$16.32"
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
      "statement": "หุ้น AMD (AMD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$489.70",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($264.89) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 385.73,
      "priceChange": -33.18,
      "priceChangePct": -7.92,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $366.44"
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
          "price": 385.73
        },
        "poc": {
          "label": "POC",
          "price": 370.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 405.02
          },
          {
            "label": "R2",
            "price": 432.02
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 366.44
          },
          {
            "label": "S2",
            "price": 356.33
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 397.3
        },
        "val": {
          "label": "VAL",
          "price": 351.01
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$366.44 - $381.87",
        "stopLoss": "$342.08",
        "takeProfit1": "$405.02",
        "takeProfit2": "$432.02",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($366.44) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 39.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.81x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$20.25",
        "maxLoss": "$27.00",
        "atr14": "$13.50"
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
      "statement": "หุ้น Broadcom (AVGO) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (35.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$405.02",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($347.16) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($356.33) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 82.18,
      "priceChange": 0.62,
      "priceChangePct": 0.76,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $78.07"
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
          "price": 82.18
        },
        "poc": {
          "label": "POC",
          "price": 78.89
        },
        "resistances": [
          {
            "label": "R1",
            "price": 86.29
          },
          {
            "label": "R2",
            "price": 92.04
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 78.07
          },
          {
            "label": "S2",
            "price": 73.96
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 84.65
        },
        "val": {
          "label": "VAL",
          "price": 74.78
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$78.07 - $81.36",
        "stopLoss": "$71.00",
        "takeProfit1": "$86.29",
        "takeProfit2": "$92.04",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($78.07) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 30.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.28x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.32",
        "maxLoss": "$5.76",
        "atr14": "$2.88"
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
        "targetPrice": "$86.29",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($73.96) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($73.96) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 152.4,
      "priceChange": -11.73,
      "priceChangePct": -7.15,
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
      "condition": "โมเมนตัมรายวัน (สะสมพลังสร้างฐาน)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $144.78"
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
          "price": 152.4
        },
        "poc": {
          "label": "POC",
          "price": 146.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 160.02
          },
          {
            "label": "R2",
            "price": 170.69
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 144.78
          },
          {
            "label": "S2",
            "price": 137.16
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 156.97
        },
        "val": {
          "label": "VAL",
          "price": 138.68
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$144.78 - $150.88",
        "stopLoss": "$131.67",
        "takeProfit1": "$160.02",
        "takeProfit2": "$170.69",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($144.78) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 33.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.62x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$8.00",
        "maxLoss": "$10.66",
        "atr14": "$5.33"
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
      "statement": "หุ้น Coinbase (COIN) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
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
        "targetPrice": "$160.02",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($137.16) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($137.16) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 671.02,
      "priceChange": -48.07,
      "priceChangePct": -6.68,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 6,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $560.31"
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
          "price": 671.02
        },
        "poc": {
          "label": "POC",
          "price": 644.18
        },
        "resistances": [
          {
            "label": "R1",
            "price": 704.57
          },
          {
            "label": "R2",
            "price": 751.54
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 560.31
          },
          {
            "label": "S2",
            "price": 492.17
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 691.15
        },
        "val": {
          "label": "VAL",
          "price": 610.63
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$637.47 - $664.31",
        "stopLoss": "$472.48",
        "takeProfit1": "$704.57",
        "takeProfit2": "$751.54",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($560.31) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.33x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$35.23",
        "maxLoss": "$46.98",
        "atr14": "$23.49"
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
          "score": 60,
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
      "statement": "หุ้น CrowdStrike (CRWD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 6/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$704.57",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($492.17) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 41.64,
      "priceChange": -5.26,
      "priceChangePct": -11.22,
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
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $34.23"
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
          "price": 41.64
        },
        "poc": {
          "label": "POC",
          "price": 39.97
        },
        "resistances": [
          {
            "label": "R1",
            "price": 43.72
          },
          {
            "label": "R2",
            "price": 46.64
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 34.23
          },
          {
            "label": "S2",
            "price": 37.08
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 42.89
        },
        "val": {
          "label": "VAL",
          "price": 37.89
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$39.56 - $41.22",
        "stopLoss": "$35.60",
        "takeProfit1": "$43.72",
        "takeProfit2": "$46.64",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($34.23) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.1x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$2.19",
        "maxLoss": "$2.92",
        "atr14": "$1.46"
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
      "statement": "หุ้น Super Micro (SMCI) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.3) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$43.72",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($37.08) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 28.13,
      "priceChange": 0.38,
      "priceChangePct": 1.37,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $26.72"
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
          "price": 28.13
        },
        "poc": {
          "label": "POC",
          "price": 27.0
        },
        "resistances": [
          {
            "label": "R1",
            "price": 29.54
          },
          {
            "label": "R2",
            "price": 31.51
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 26.72
          },
          {
            "label": "S2",
            "price": 25.32
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 28.97
        },
        "val": {
          "label": "VAL",
          "price": 25.6
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$26.72 - $27.85",
        "stopLoss": "$24.31",
        "takeProfit1": "$29.54",
        "takeProfit2": "$31.51",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($26.72) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 38.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.07x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$1.47",
        "maxLoss": "$1.96",
        "atr14": "$0.98"
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
        "targetPrice": "$29.54",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($25.32) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($25.32) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 300.51,
      "priceChange": -23.41,
      "priceChangePct": -7.23,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $285.48"
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
          "price": 300.51
        },
        "poc": {
          "label": "POC",
          "price": 288.49
        },
        "resistances": [
          {
            "label": "R1",
            "price": 315.54
          },
          {
            "label": "R2",
            "price": 336.57
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 285.48
          },
          {
            "label": "S2",
            "price": 227.62
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 309.53
        },
        "val": {
          "label": "VAL",
          "price": 273.46
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$285.48 - $297.5",
        "stopLoss": "$218.52",
        "takeProfit1": "$315.54",
        "takeProfit2": "$336.57",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($285.48) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 39.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.25x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$15.78",
        "maxLoss": "$21.04",
        "atr14": "$10.52"
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
      "statement": "หุ้น Vertiv (VRT) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Industrials",
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
        "targetPrice": "$315.54",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($270.46) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($227.62) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 11.97,
      "priceChange": -0.15,
      "priceChangePct": -1.24,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.37"
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
          "price": 11.97
        },
        "poc": {
          "label": "POC",
          "price": 11.49
        },
        "resistances": [
          {
            "label": "R1",
            "price": 12.57
          },
          {
            "label": "R2",
            "price": 13.41
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.37
          },
          {
            "label": "S2",
            "price": 10.77
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 12.33
        },
        "val": {
          "label": "VAL",
          "price": 10.89
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$11.37 - $11.85",
        "stopLoss": "$10.34",
        "takeProfit1": "$12.57",
        "takeProfit2": "$13.41",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.37) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 35.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.6x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$0.63",
        "maxLoss": "$0.84",
        "atr14": "$0.42"
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
      "statement": "หุ้น Nu Holdings (NU) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
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
        "targetPrice": "$12.57",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.77) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.77) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 1607.8,
      "priceChange": -26.98,
      "priceChangePct": -1.65,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $1527.41"
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
          "price": 1607.8
        },
        "poc": {
          "label": "POC",
          "price": 1543.49
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1688.19
          },
          {
            "label": "R2",
            "price": 1800.74
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1527.41
          },
          {
            "label": "S2",
            "price": 1447.02
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1656.03
        },
        "val": {
          "label": "VAL",
          "price": 1463.1
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$1527.41 - $1591.72",
        "stopLoss": "$1389.14",
        "takeProfit1": "$1688.19",
        "takeProfit2": "$1800.74",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($1527.41) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 41.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "trailingStop": "$84.41",
        "maxLoss": "$112.54",
        "atr14": "$56.27"
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
        "targetPrice": "$1688.19",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($1447.02) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($1447.02) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 120.44,
      "priceChange": -8.93,
      "priceChangePct": -6.9,
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
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $114.42"
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
          "price": 120.44
        },
        "poc": {
          "label": "POC",
          "price": 115.62
        },
        "resistances": [
          {
            "label": "R1",
            "price": 126.46
          },
          {
            "label": "R2",
            "price": 134.89
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 114.42
          },
          {
            "label": "S2",
            "price": 108.4
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 124.05
        },
        "val": {
          "label": "VAL",
          "price": 109.6
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$114.42 - $119.24",
        "stopLoss": "$104.06",
        "takeProfit1": "$126.46",
        "takeProfit2": "$134.89",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($114.42) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 29.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 2.35x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.33",
        "maxLoss": "$8.44",
        "atr14": "$4.22"
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
      "statement": "หุ้น MicroStrategy (MSTR) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 3/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "targetPrice": "$126.46",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($108.4) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($108.4) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 82.47,
      "priceChange": -5.86,
      "priceChangePct": -6.63,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $80.73"
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
          "price": 82.47
        },
        "poc": {
          "label": "POC",
          "price": 79.17
        },
        "resistances": [
          {
            "label": "R1",
            "price": 86.59
          },
          {
            "label": "R2",
            "price": 92.37
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 80.73
          },
          {
            "label": "S2",
            "price": 74.22
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 84.94
        },
        "val": {
          "label": "VAL",
          "price": 75.05
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$78.35 - $81.65",
        "stopLoss": "$71.25",
        "takeProfit1": "$86.59",
        "takeProfit2": "$92.37",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($80.73) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 51.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.32x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.33",
        "maxLoss": "$5.78",
        "atr14": "$2.89"
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
        "targetPrice": "$86.59",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($74.22) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 29.36,
      "priceChange": -4.27,
      "priceChangePct": -12.7,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $27.89"
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
          "price": 29.36
        },
        "poc": {
          "label": "POC",
          "price": 28.19
        },
        "resistances": [
          {
            "label": "R1",
            "price": 30.83
          },
          {
            "label": "R2",
            "price": 32.88
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 27.89
          },
          {
            "label": "S2",
            "price": 19.53
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 30.24
        },
        "val": {
          "label": "VAL",
          "price": 26.72
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$27.89 - $29.07",
        "stopLoss": "$18.75",
        "takeProfit1": "$30.83",
        "takeProfit2": "$32.88",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($27.89) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 44.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.77x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$1.54",
        "maxLoss": "$2.06",
        "atr14": "$1.03"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (15.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$30.83",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($26.42) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($19.53) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 215.94,
      "priceChange": -26.63,
      "priceChangePct": -10.98,
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
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $191.71"
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
          "price": 215.94
        },
        "poc": {
          "label": "POC",
          "price": 207.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 226.74
          },
          {
            "label": "R2",
            "price": 241.85
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 191.71
          },
          {
            "label": "S2",
            "price": 168.23
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 222.42
        },
        "val": {
          "label": "VAL",
          "price": 196.51
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$205.14 - $213.78",
        "stopLoss": "$161.50",
        "takeProfit1": "$226.74",
        "takeProfit2": "$241.85",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($191.71) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 51.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.91x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$11.34",
        "maxLoss": "$15.12",
        "atr14": "$7.56"
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
      "statement": "หุ้น Qualcomm (QCOM) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$226.74",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($168.23) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 342.93,
      "priceChange": -50.51,
      "priceChangePct": -12.84,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $245.62"
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
          "price": 342.93
        },
        "poc": {
          "label": "POC",
          "price": 329.21
        },
        "resistances": [
          {
            "label": "R1",
            "price": 360.08
          },
          {
            "label": "R2",
            "price": 384.08
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 245.62
          },
          {
            "label": "S2",
            "price": 175.96
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 353.22
        },
        "val": {
          "label": "VAL",
          "price": 312.07
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$325.78 - $339.5",
        "stopLoss": "$168.92",
        "takeProfit1": "$360.08",
        "takeProfit2": "$384.08",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($245.62) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 60.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.17x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$18.00",
        "maxLoss": "$24.00",
        "atr14": "$12.00"
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
      "statement": "หุ้น ARM Holdings (ARM) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$360.08",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($175.96) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 272.05,
      "priceChange": -7.2,
      "priceChangePct": -2.58,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $219.81"
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
          "price": 272.05
        },
        "poc": {
          "label": "POC",
          "price": 261.17
        },
        "resistances": [
          {
            "label": "R1",
            "price": 285.65
          },
          {
            "label": "R2",
            "price": 304.7
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 219.81
          },
          {
            "label": "S2",
            "price": 197.14
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 280.21
        },
        "val": {
          "label": "VAL",
          "price": 247.57
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$258.45 - $269.33",
        "stopLoss": "$189.25",
        "takeProfit1": "$285.65",
        "takeProfit2": "$304.70",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($219.81) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 64.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.73x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$14.28",
        "maxLoss": "$19.04",
        "atr14": "$9.52"
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
        "targetPrice": "$285.65",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($197.14) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 250.11,
      "priceChange": -18.53,
      "priceChangePct": -6.9,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $218.79"
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
          "price": 250.11
        },
        "poc": {
          "label": "POC",
          "price": 240.11
        },
        "resistances": [
          {
            "label": "R1",
            "price": 262.62
          },
          {
            "label": "R2",
            "price": 280.12
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 218.79
          },
          {
            "label": "S2",
            "price": 206.64
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 257.61
        },
        "val": {
          "label": "VAL",
          "price": 227.6
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$237.6 - $247.61",
        "stopLoss": "$198.37",
        "takeProfit1": "$262.62",
        "takeProfit2": "$280.12",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($218.79) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.88x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$13.12",
        "maxLoss": "$17.50",
        "atr14": "$8.75"
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
      "statement": "หุ้น Cloudflare (NET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (68.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$262.62",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($206.64) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 234.11,
      "priceChange": -9.49,
      "priceChangePct": -3.9,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $184.25"
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
          "price": 234.11
        },
        "poc": {
          "label": "POC",
          "price": 224.75
        },
        "resistances": [
          {
            "label": "R1",
            "price": 245.82
          },
          {
            "label": "R2",
            "price": 262.2
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 184.25
          },
          {
            "label": "S2",
            "price": 152.51
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 241.13
        },
        "val": {
          "label": "VAL",
          "price": 213.04
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$222.4 - $231.77",
        "stopLoss": "$146.41",
        "takeProfit1": "$245.82",
        "takeProfit2": "$262.20",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($184.25) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 61.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.01x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$12.29",
        "maxLoss": "$16.38",
        "atr14": "$8.19"
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
        "targetPrice": "$245.82",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($152.51) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 238.26,
      "priceChange": -5.92,
      "priceChangePct": -2.42,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $181.65"
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
          "price": 238.26
        },
        "poc": {
          "label": "POC",
          "price": 228.73
        },
        "resistances": [
          {
            "label": "R1",
            "price": 250.17
          },
          {
            "label": "R2",
            "price": 266.85
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 181.65
          },
          {
            "label": "S2",
            "price": 197.21
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 245.41
        },
        "val": {
          "label": "VAL",
          "price": 216.82
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$226.35 - $235.88",
        "stopLoss": "$189.32",
        "takeProfit1": "$250.17",
        "takeProfit2": "$266.85",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($181.65) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 65.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.62x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$12.51",
        "maxLoss": "$16.68",
        "atr14": "$8.34"
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
        "targetPrice": "$250.17",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($214.43) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($197.21) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 133.54,
      "priceChange": -0.18,
      "priceChangePct": -0.13,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 4,
      "viScore": 7,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $126.86"
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
          "price": 133.54
        },
        "poc": {
          "label": "POC",
          "price": 128.2
        },
        "resistances": [
          {
            "label": "R1",
            "price": 140.22
          },
          {
            "label": "R2",
            "price": 149.56
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 126.86
          },
          {
            "label": "S2",
            "price": 131.09
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 137.55
        },
        "val": {
          "label": "VAL",
          "price": 121.52
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$126.86 - $132.2",
        "stopLoss": "$125.85",
        "takeProfit1": "$140.22",
        "takeProfit2": "$149.56",
        "rrRatio": "1:0.9",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($126.86) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 47.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.99x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.9",
        "trailingStop": "$7.00",
        "maxLoss": "$9.34",
        "atr14": "$4.67"
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
      "statement": "หุ้น Airbnb (ABNB) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Consumer Cyclical",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.9) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$140.22",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($120.19) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($131.09) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 70.71,
      "priceChange": -1.5,
      "priceChangePct": -2.08,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $67.17"
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
          "price": 70.71
        },
        "poc": {
          "label": "POC",
          "price": 67.88
        },
        "resistances": [
          {
            "label": "R1",
            "price": 74.25
          },
          {
            "label": "R2",
            "price": 79.2
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 67.17
          },
          {
            "label": "S2",
            "price": 63.64
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 72.83
        },
        "val": {
          "label": "VAL",
          "price": 64.35
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$67.17 - $70.0",
        "stopLoss": "$61.09",
        "takeProfit1": "$74.25",
        "takeProfit2": "$79.20",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($67.17) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.84x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$3.71",
        "maxLoss": "$4.94",
        "atr14": "$2.47"
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
        "targetPrice": "$74.25",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($63.64) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($63.64) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 11.24,
      "priceChange": -0.43,
      "priceChangePct": -3.68,
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
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.13"
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
          "price": 11.24
        },
        "poc": {
          "label": "POC",
          "price": 10.79
        },
        "resistances": [
          {
            "label": "R1",
            "price": 11.8
          },
          {
            "label": "R2",
            "price": 12.59
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.13
          },
          {
            "label": "S2",
            "price": 10.12
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 11.58
        },
        "val": {
          "label": "VAL",
          "price": 10.23
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$10.68 - $11.13",
        "stopLoss": "$9.72",
        "takeProfit1": "$11.80",
        "takeProfit2": "$12.59",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.13) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 51.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.79x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$0.58",
        "maxLoss": "$0.78",
        "atr14": "$0.39"
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
      "statement": "หุ้น UiPath (PATH) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "targetPrice": "$11.80",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.12) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.12) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
    "price": 416.67,
    "change": -11.38,
    "pct": -2.66,
    "pe": 32.4,
    "rsi": 47.5,
    "volSpike": 0.93,
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
    "price": 61684.0,
    "change": -2117.57,
    "pct": -3.32,
    "pe": 999.0,
    "rsi": 16.1,
    "volSpike": 2.0,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 64000.0,
    "s2": 60000.0
  },
  {
    "symbol": "AAPL",
    "name": "Apple",
    "sector": "Technology",
    "price": 307.34,
    "change": -3.89,
    "pct": -1.25,
    "pe": 27.5,
    "rsi": 60.7,
    "volSpike": 1.36,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 7,
    "s1": 184.0,
    "s2": 175.0
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA",
    "sector": "Technology",
    "price": 205.1,
    "change": -13.56,
    "pct": -6.2,
    "pe": 58.2,
    "rsi": 43.8,
    "volSpike": 1.21,
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
    "price": 246.03,
    "change": -7.76,
    "pct": -3.06,
    "pe": 38.2,
    "rsi": 37.8,
    "volSpike": 1.35,
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
    "price": 368.53,
    "change": -3.66,
    "pct": -0.98,
    "pe": 24.5,
    "rsi": 46.4,
    "volSpike": 1.17,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 375.0,
    "s2": 365.0
  },
  {
    "symbol": "META",
    "name": "Meta Platforms",
    "sector": "Technology",
    "price": 593.0,
    "change": -34.57,
    "pct": -5.51,
    "pe": 24.5,
    "rsi": 41.6,
    "volSpike": 1.76,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 560.0,
    "s2": 530.0
  },
  {
    "symbol": "TSLA",
    "name": "Tesla",
    "sector": "Consumer Cyclical",
    "price": 391.0,
    "change": -27.45,
    "pct": -6.56,
    "pe": 58.5,
    "rsi": 40.4,
    "volSpike": 1.22,
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
    "price": 864.01,
    "change": -131.99,
    "pct": -13.25,
    "pe": 22.8,
    "rsi": 55.2,
    "volSpike": 1.34,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 7,
    "s1": 740.0,
    "s2": 710.0
  },
  {
    "symbol": "TSM",
    "name": "TSMC",
    "sector": "Technology",
    "price": 415.17,
    "change": -29.75,
    "pct": -6.69,
    "pe": 25.4,
    "rsi": 51.5,
    "volSpike": 1.46,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 395.0,
    "s2": 380.0
  },
  {
    "symbol": "ASML",
    "name": "ASML",
    "sector": "Technology",
    "price": 1641.74,
    "change": -115.73,
    "pct": -6.59,
    "pe": 42.5,
    "rsi": 55.9,
    "volSpike": 1.6,
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
    "price": 213.68,
    "change": -22.66,
    "pct": -9.59,
    "pe": 26.5,
    "rsi": 55.6,
    "volSpike": 1.33,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 189.19,
    "s2": 204.94
  },
  {
    "symbol": "NOW",
    "name": "ServiceNow",
    "sector": "Technology",
    "price": 112.45,
    "change": -6.91,
    "pct": -5.79,
    "pe": 55.0,
    "rsi": 54.5,
    "volSpike": 0.81,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 3,
    "s1": 104.92,
    "s2": 101.2
  },
  {
    "symbol": "PLTR",
    "name": "Palantir",
    "sector": "Technology",
    "price": 135.53,
    "change": -6.17,
    "pct": -4.35,
    "pe": 82.0,
    "rsi": 44.8,
    "volSpike": 0.92,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 128.75,
    "s2": 121.98
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks",
    "sector": "Technology",
    "price": 154.27,
    "change": -11.74,
    "pct": -7.07,
    "pe": 38.5,
    "rsi": 48.3,
    "volSpike": 0.79,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 152.62,
    "s2": 139.51
  },
  {
    "symbol": "AMD",
    "name": "AMD",
    "sector": "Technology",
    "price": 466.38,
    "change": -56.82,
    "pct": -10.86,
    "pe": 48.0,
    "rsi": 54.5,
    "volSpike": 1.34,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 388.02,
    "s2": 264.89
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Technology",
    "price": 385.73,
    "change": -33.18,
    "pct": -7.92,
    "pe": 35.2,
    "rsi": 39.9,
    "volSpike": 1.81,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 366.44,
    "s2": 356.33
  },
  {
    "symbol": "NFLX",
    "name": "Netflix",
    "sector": "Communication",
    "price": 82.18,
    "change": 0.62,
    "pct": 0.76,
    "pe": 36.4,
    "rsi": 30.5,
    "volSpike": 1.28,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 78.07,
    "s2": 73.96
  },
  {
    "symbol": "COIN",
    "name": "Coinbase",
    "sector": "Financials",
    "price": 152.4,
    "change": -11.73,
    "pct": -7.15,
    "pe": 28.5,
    "rsi": 33.1,
    "volSpike": 1.62,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 3,
    "s1": 144.78,
    "s2": 137.16
  },
  {
    "symbol": "CRWD",
    "name": "CrowdStrike",
    "sector": "Technology",
    "price": 671.02,
    "change": -48.07,
    "pct": -6.68,
    "pe": 72.0,
    "rsi": 58.3,
    "volSpike": 1.33,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 560.31,
    "s2": 492.17
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro",
    "sector": "Technology",
    "price": 41.64,
    "change": -5.26,
    "pct": -11.22,
    "pe": 18.5,
    "rsi": 58.3,
    "volSpike": 1.1,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 34.23,
    "s2": 37.08
  },
  {
    "symbol": "CELH",
    "name": "Celsius",
    "sector": "Consumer Defensive",
    "price": 28.13,
    "change": 0.38,
    "pct": 1.37,
    "pe": 45.0,
    "rsi": 38.3,
    "volSpike": 1.07,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 26.72,
    "s2": 25.32
  },
  {
    "symbol": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "price": 300.51,
    "change": -23.41,
    "pct": -7.23,
    "pe": 38.5,
    "rsi": 39.8,
    "volSpike": 1.25,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 285.48,
    "s2": 227.62
  },
  {
    "symbol": "NU",
    "name": "Nu Holdings",
    "sector": "Financials",
    "price": 11.97,
    "change": -0.15,
    "pct": -1.24,
    "pe": 28.4,
    "rsi": 35.8,
    "volSpike": 0.6,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 11.37,
    "s2": 10.77
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre",
    "sector": "Consumer Cyclical",
    "price": 1607.8,
    "change": -26.98,
    "pct": -1.65,
    "pe": 46.5,
    "rsi": 41.1,
    "volSpike": 0.56,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 1527.41,
    "s2": 1447.02
  },
  {
    "symbol": "MSTR",
    "name": "MicroStrategy",
    "sector": "Technology",
    "price": 120.44,
    "change": -8.93,
    "pct": -6.9,
    "pe": 95.0,
    "rsi": 29.5,
    "volSpike": 2.35,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 3,
    "s1": 114.42,
    "s2": 108.4
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood",
    "sector": "Financials",
    "price": 82.47,
    "change": -5.86,
    "pct": -6.63,
    "pe": 24.2,
    "rsi": 51.4,
    "volSpike": 1.32,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 5,
    "s1": 80.73,
    "s2": 74.22
  },
  {
    "symbol": "LUNR",
    "name": "Intuitive Machines",
    "sector": "Industrials",
    "price": 29.36,
    "change": -4.27,
    "pct": -12.7,
    "pe": 15.0,
    "rsi": 44.1,
    "volSpike": 0.77,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 27.89,
    "s2": 19.53
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm",
    "sector": "Technology",
    "price": 215.94,
    "change": -26.63,
    "pct": -10.98,
    "pe": 18.2,
    "rsi": 51.3,
    "volSpike": 0.91,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 191.71,
    "s2": 168.23
  },
  {
    "symbol": "ARM",
    "name": "ARM Holdings",
    "sector": "Technology",
    "price": 342.93,
    "change": -50.51,
    "pct": -12.84,
    "pe": 75.0,
    "rsi": 60.5,
    "volSpike": 1.17,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 245.62,
    "s2": 175.96
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto",
    "sector": "Technology",
    "price": 272.05,
    "change": -7.2,
    "pct": -2.58,
    "pe": 48.0,
    "rsi": 64.3,
    "volSpike": 0.73,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 219.81,
    "s2": 197.14
  },
  {
    "symbol": "NET",
    "name": "Cloudflare",
    "sector": "Technology",
    "price": 250.11,
    "change": -18.53,
    "pct": -6.9,
    "pe": 68.0,
    "rsi": 58.7,
    "volSpike": 0.88,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 218.79,
    "s2": 206.64
  },
  {
    "symbol": "DDOG",
    "name": "Datadog",
    "sector": "Technology",
    "price": 234.11,
    "change": -9.49,
    "pct": -3.9,
    "pe": 54.0,
    "rsi": 61.1,
    "volSpike": 1.01,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 184.25,
    "s2": 152.51
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake",
    "sector": "Technology",
    "price": 238.26,
    "change": -5.92,
    "pct": -2.42,
    "pe": 62.0,
    "rsi": 65.9,
    "volSpike": 0.62,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 181.65,
    "s2": 197.21
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb",
    "sector": "Consumer Cyclical",
    "price": 133.54,
    "change": -0.18,
    "pct": -0.13,
    "pe": 26.5,
    "rsi": 47.0,
    "volSpike": 0.99,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 126.86,
    "s2": 131.09
  },
  {
    "symbol": "UBER",
    "name": "Uber",
    "sector": "Industrials",
    "price": 70.71,
    "change": -1.5,
    "pct": -2.08,
    "pe": 31.4,
    "rsi": 42.0,
    "volSpike": 0.84,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 67.17,
    "s2": 63.64
  },
  {
    "symbol": "PATH",
    "name": "UiPath",
    "sector": "Technology",
    "price": 11.24,
    "change": -0.43,
    "pct": -3.68,
    "pe": 22.0,
    "rsi": 51.2,
    "volSpike": 0.79,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4,
    "s1": 11.13,
    "s2": 10.12
  }
];

let activeStock = "MU";
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('stock-selector');
  if(selector) {
    selector.innerHTML = `\n      <option value="MU">Micron Technology (MU)</option>\n      <option value="TSM">Taiwan Semiconductor Mfg (TSM)</option>\n      <option value="NVDA">NVIDIA Corp (NVDA)</option>\n      <option value="GOOGL">Alphabet Inc (GOOGL)</option>\n      <option value="BTC-USD">Bitcoin (BTC-USD)</option>\n    `;
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
