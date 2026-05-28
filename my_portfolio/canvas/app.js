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
  }
};

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
