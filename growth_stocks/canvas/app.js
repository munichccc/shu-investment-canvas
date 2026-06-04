/* =========================================
   SHU CANVAS — Growth Stocks
   Stocks: META, ASML, MSFT, AAPL, AMZN, TSLA
   ========================================= */

const stocksData = {
  "MSFT": {
    "meta": {
      "symbol": "MSFT",
      "companyName": "Microsoft Corporation",
      "industry": "Software - Infrastructure",
      "sector": "Technology",
      "currentPrice": 428.05,
      "priceChange": 0.71,
      "priceChangePct": 0.17,
      "analysisDate": "2026-06-04"
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
          "price": 428.05
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
      "currentPrice": 311.23,
      "priceChange": 0.97,
      "priceChangePct": 0.31,
      "analysisDate": "2026-06-04"
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
          "price": 311.23
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
      "currentPrice": 253.79,
      "priceChange": 3.77,
      "priceChangePct": 1.51,
      "analysisDate": "2026-06-04"
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
          "price": 253.79
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
      "currentPrice": 627.57,
      "priceChange": 4.59,
      "priceChangePct": 0.74,
      "analysisDate": "2026-06-04"
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
          "price": 627.57
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
      "currentPrice": 418.45,
      "priceChange": -5.25,
      "priceChangePct": -1.24,
      "analysisDate": "2026-06-04"
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
          "price": 418.45
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
      "currentPrice": 1757.47,
      "priceChange": 31.11,
      "priceChangePct": 1.8,
      "analysisDate": "2026-06-04"
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
          "price": 1757.47
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
      "currentPrice": 236.34,
      "priceChange": 6.01,
      "priceChangePct": 2.61,
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
      "condition": "โมเมนตัมรายวัน (ขาขึ้นแข็งแกร่ง)",
      "trend": {
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $188.19"
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
          "price": 236.34
        },
        "poc": {
          "label": "POC",
          "price": 226.89
        },
        "resistances": [
          {
            "label": "R1",
            "price": 248.16
          },
          {
            "label": "R2",
            "price": 264.7
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 188.19
          },
          {
            "label": "S2",
            "price": 204.48
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 243.43
        },
        "val": {
          "label": "VAL",
          "price": 215.07
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$224.52 - $233.98",
        "stopLoss": "$196.30",
        "takeProfit1": "$248.16",
        "takeProfit2": "$264.70",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($188.19) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 68.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.78x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$12.40",
        "maxLoss": "$16.54",
        "atr14": "$8.27"
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
      "statement": "หุ้น Oracle (ORCL) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.3) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$248.16",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($212.71) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($204.48) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 119.36,
      "priceChange": 1.46,
      "priceChangePct": 1.24,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $104.61"
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
          "price": 119.36
        },
        "poc": {
          "label": "POC",
          "price": 114.59
        },
        "resistances": [
          {
            "label": "R1",
            "price": 125.33
          },
          {
            "label": "R2",
            "price": 133.68
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 104.61
          },
          {
            "label": "S2",
            "price": 107.42
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 122.94
        },
        "val": {
          "label": "VAL",
          "price": 108.62
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$113.39 - $118.17",
        "stopLoss": "$103.12",
        "takeProfit1": "$125.33",
        "takeProfit2": "$133.68",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($104.61) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 60.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.4",
        "trailingStop": "$6.27",
        "maxLoss": "$8.36",
        "atr14": "$4.18"
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
        "targetPrice": "$125.33",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($107.42) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($107.42) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 141.7,
      "priceChange": -0.5,
      "priceChangePct": -0.35,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $134.61"
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
          "price": 141.7
        },
        "poc": {
          "label": "POC",
          "price": 136.03
        },
        "resistances": [
          {
            "label": "R1",
            "price": 148.78
          },
          {
            "label": "R2",
            "price": 158.7
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 134.61
          },
          {
            "label": "S2",
            "price": 127.53
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 145.95
        },
        "val": {
          "label": "VAL",
          "price": 128.95
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$134.61 - $140.28",
        "stopLoss": "$122.43",
        "takeProfit1": "$148.78",
        "takeProfit2": "$158.70",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($134.61) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 49.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "trailingStop": "$7.44",
        "maxLoss": "$9.92",
        "atr14": "$4.96"
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
        "targetPrice": "$148.78",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($127.53) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($127.53) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 166.01,
      "priceChange": -8.36,
      "priceChangePct": -4.79,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $152.55"
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
          "price": 166.01
        },
        "poc": {
          "label": "POC",
          "price": 159.37
        },
        "resistances": [
          {
            "label": "R1",
            "price": 174.31
          },
          {
            "label": "R2",
            "price": 185.93
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 152.55
          },
          {
            "label": "S2",
            "price": 139.26
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 170.99
        },
        "val": {
          "label": "VAL",
          "price": 151.07
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$157.71 - $164.35",
        "stopLoss": "$133.69",
        "takeProfit1": "$174.31",
        "takeProfit2": "$185.93",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($152.55) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 57.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.75x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$8.71",
        "maxLoss": "$11.62",
        "atr14": "$5.81"
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
      "statement": "หุ้น Arista Networks (ANET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.3) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (38.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$174.31",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($139.26) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 523.2,
      "priceChange": -19.32,
      "priceChangePct": -3.56,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $384.82"
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
          "price": 523.2
        },
        "poc": {
          "label": "POC",
          "price": 502.27
        },
        "resistances": [
          {
            "label": "R1",
            "price": 549.36
          },
          {
            "label": "R2",
            "price": 585.98
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 384.82
          },
          {
            "label": "S2",
            "price": 262.67
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 538.9
        },
        "val": {
          "label": "VAL",
          "price": 476.11
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$497.04 - $517.97",
        "stopLoss": "$252.16",
        "takeProfit1": "$549.36",
        "takeProfit2": "$585.98",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($384.82) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 70.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.83x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$27.46",
        "maxLoss": "$36.62",
        "atr14": "$18.31"
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
        "targetPrice": "$549.36",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($470.88) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($262.67) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 418.91,
      "priceChange": -60.32,
      "priceChangePct": -12.59,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $405.25"
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
          "price": 418.91
        },
        "poc": {
          "label": "POC",
          "price": 402.15
        },
        "resistances": [
          {
            "label": "R1",
            "price": 439.86
          },
          {
            "label": "R2",
            "price": 469.18
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 405.25
          },
          {
            "label": "S2",
            "price": 355.82
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 431.48
        },
        "val": {
          "label": "VAL",
          "price": 381.21
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$397.96 - $414.72",
        "stopLoss": "$341.59",
        "takeProfit1": "$439.86",
        "takeProfit2": "$469.18",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($405.25) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 48.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 3.09x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$21.99",
        "maxLoss": "$29.32",
        "atr14": "$14.66"
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
      "statement": "หุ้น Broadcom (AVGO) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.3) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (35.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$439.86",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($355.82) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 81.56,
      "priceChange": 0.04,
      "priceChangePct": 0.05,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $77.48"
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
          "price": 81.56
        },
        "poc": {
          "label": "POC",
          "price": 78.3
        },
        "resistances": [
          {
            "label": "R1",
            "price": 85.64
          },
          {
            "label": "R2",
            "price": 91.35
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 77.48
          },
          {
            "label": "S2",
            "price": 73.4
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 84.01
        },
        "val": {
          "label": "VAL",
          "price": 74.22
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$77.48 - $80.74",
        "stopLoss": "$70.46",
        "takeProfit1": "$85.64",
        "takeProfit2": "$91.35",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($77.48) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 27.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.17x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.28",
        "maxLoss": "$5.70",
        "atr14": "$2.85"
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
        "targetPrice": "$85.64",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($73.4) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($73.4) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 164.13,
      "priceChange": 0.91,
      "priceChangePct": 0.56,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $155.92"
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
          "price": 164.13
        },
        "poc": {
          "label": "POC",
          "price": 157.56
        },
        "resistances": [
          {
            "label": "R1",
            "price": 172.34
          },
          {
            "label": "R2",
            "price": 183.83
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 155.92
          },
          {
            "label": "S2",
            "price": 147.72
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 169.05
        },
        "val": {
          "label": "VAL",
          "price": 149.36
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$155.92 - $162.49",
        "stopLoss": "$141.81",
        "takeProfit1": "$172.34",
        "takeProfit2": "$183.83",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($155.92) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 37.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.86x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$8.61",
        "maxLoss": "$11.48",
        "atr14": "$5.74"
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
        "targetPrice": "$172.34",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($147.72) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($147.72) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 719.09,
      "priceChange": -28.52,
      "priceChangePct": -3.81,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $555.79"
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
          "price": 719.09
        },
        "poc": {
          "label": "POC",
          "price": 690.33
        },
        "resistances": [
          {
            "label": "R1",
            "price": 755.04
          },
          {
            "label": "R2",
            "price": 805.38
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 555.79
          },
          {
            "label": "S2",
            "price": 490.14
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 740.66
        },
        "val": {
          "label": "VAL",
          "price": 654.37
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$683.14 - $711.9",
        "stopLoss": "$470.53",
        "takeProfit1": "$755.04",
        "takeProfit2": "$805.38",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($555.79) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 68.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.9x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$37.76",
        "maxLoss": "$50.34",
        "atr14": "$25.17"
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
      "statement": "หุ้น CrowdStrike (CRWD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 5/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (72.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$755.04",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($490.14) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 46.9,
      "priceChange": -0.52,
      "priceChangePct": -1.1,
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
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $33.92"
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
          "price": 46.9
        },
        "poc": {
          "label": "POC",
          "price": 45.02
        },
        "resistances": [
          {
            "label": "R1",
            "price": 49.24
          },
          {
            "label": "R2",
            "price": 52.53
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 33.92
          },
          {
            "label": "S2",
            "price": 36.98
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 48.31
        },
        "val": {
          "label": "VAL",
          "price": 42.68
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$44.55 - $46.43",
        "stopLoss": "$35.50",
        "takeProfit1": "$49.24",
        "takeProfit2": "$52.53",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($33.92) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 72.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.74x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$2.46",
        "maxLoss": "$3.28",
        "atr14": "$1.64"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$49.24",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($42.21) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($36.98) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 27.75,
      "priceChange": -2.26,
      "priceChangePct": -7.53,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $26.36"
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
          "price": 27.75
        },
        "poc": {
          "label": "POC",
          "price": 26.64
        },
        "resistances": [
          {
            "label": "R1",
            "price": 29.14
          },
          {
            "label": "R2",
            "price": 31.08
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 26.36
          },
          {
            "label": "S2",
            "price": 24.98
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 28.58
        },
        "val": {
          "label": "VAL",
          "price": 25.25
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$26.36 - $27.47",
        "stopLoss": "$23.98",
        "takeProfit1": "$29.14",
        "takeProfit2": "$31.08",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($26.36) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 36.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.55x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$1.46",
        "maxLoss": "$1.94",
        "atr14": "$0.97"
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
      "statement": "หุ้น Celsius (CELH) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 1/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Consumer Defensive",
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
        "targetPrice": "$29.14",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($24.98) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($24.98) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 323.92,
      "priceChange": -7.52,
      "priceChangePct": -2.27,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $311.6"
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
          "price": 323.92
        },
        "poc": {
          "label": "POC",
          "price": 310.96
        },
        "resistances": [
          {
            "label": "R1",
            "price": 340.12
          },
          {
            "label": "R2",
            "price": 362.79
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 311.6
          },
          {
            "label": "S2",
            "price": 227.03
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 333.64
        },
        "val": {
          "label": "VAL",
          "price": 294.77
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$307.72 - $320.68",
        "stopLoss": "$217.95",
        "takeProfit1": "$340.12",
        "takeProfit2": "$362.79",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($311.6) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 48.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.05x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$17.01",
        "maxLoss": "$22.68",
        "atr14": "$11.34"
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
        "targetPrice": "$340.12",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($291.53) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($227.03) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 12.12,
      "priceChange": 0.48,
      "priceChangePct": 4.12,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.51"
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
          "price": 12.12
        },
        "poc": {
          "label": "POC",
          "price": 11.64
        },
        "resistances": [
          {
            "label": "R1",
            "price": 12.73
          },
          {
            "label": "R2",
            "price": 13.57
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.51
          },
          {
            "label": "S2",
            "price": 10.91
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 12.48
        },
        "val": {
          "label": "VAL",
          "price": 11.03
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$11.51 - $12.0",
        "stopLoss": "$10.47",
        "takeProfit1": "$12.73",
        "takeProfit2": "$13.57",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.51) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 37.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
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
        "targetPrice": "$12.73",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.91) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.91) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 1634.78,
      "priceChange": -3.76,
      "priceChangePct": -0.23,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $1553.04"
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
          "price": 1634.78
        },
        "poc": {
          "label": "POC",
          "price": 1569.39
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1716.52
          },
          {
            "label": "R2",
            "price": 1830.95
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1553.04
          },
          {
            "label": "S2",
            "price": 1471.3
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1683.82
        },
        "val": {
          "label": "VAL",
          "price": 1487.65
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$1553.04 - $1618.43",
        "stopLoss": "$1412.45",
        "takeProfit1": "$1716.52",
        "takeProfit2": "$1830.95",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($1553.04) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 43.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.4",
        "trailingStop": "$85.83",
        "maxLoss": "$114.44",
        "atr14": "$57.22"
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
        "targetPrice": "$1716.52",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($1471.3) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($1471.3) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 129.37,
      "priceChange": 2.82,
      "priceChangePct": 2.23,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "NEUTRAL",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 2,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $122.9"
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
          "price": 129.37
        },
        "poc": {
          "label": "POC",
          "price": 124.2
        },
        "resistances": [
          {
            "label": "R1",
            "price": 135.84
          },
          {
            "label": "R2",
            "price": 144.89
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 122.9
          },
          {
            "label": "S2",
            "price": 116.43
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 133.25
        },
        "val": {
          "label": "VAL",
          "price": 117.73
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$122.9 - $128.08",
        "stopLoss": "$111.77",
        "takeProfit1": "$135.84",
        "takeProfit2": "$144.89",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($122.9) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 32.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.5x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.79",
        "maxLoss": "$9.06",
        "atr14": "$4.53"
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
      "statement": "หุ้น MicroStrategy (MSTR) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 2/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "targetPrice": "$135.84",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($116.43) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($116.43) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 88.33,
      "priceChange": 5.48,
      "priceChangePct": 6.61,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $80.66"
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
          "price": 88.33
        },
        "poc": {
          "label": "POC",
          "price": 84.8
        },
        "resistances": [
          {
            "label": "R1",
            "price": 92.75
          },
          {
            "label": "R2",
            "price": 98.93
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 80.66
          },
          {
            "label": "S2",
            "price": 79.5
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 90.98
        },
        "val": {
          "label": "VAL",
          "price": 80.38
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$83.91 - $87.45",
        "stopLoss": "$76.32",
        "takeProfit1": "$92.75",
        "takeProfit2": "$98.93",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($80.66) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.2x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.63",
        "maxLoss": "$6.18",
        "atr14": "$3.09"
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
      "statement": "หุ้น Robinhood (HOOD) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Financials",
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
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$92.75",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($79.5) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($79.5) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 33.63,
      "priceChange": -0.2,
      "priceChangePct": -0.59,
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
        "direction": "Uptrend",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "bullish",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $29.92"
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
          "price": 33.63
        },
        "poc": {
          "label": "POC",
          "price": 32.28
        },
        "resistances": [
          {
            "label": "R1",
            "price": 35.31
          },
          {
            "label": "R2",
            "price": 37.67
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 29.92
          },
          {
            "label": "S2",
            "price": 19.44
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 34.64
        },
        "val": {
          "label": "VAL",
          "price": 30.6
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$31.95 - $33.29",
        "stopLoss": "$18.66",
        "takeProfit1": "$35.31",
        "takeProfit2": "$37.67",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($29.92) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 50.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.71x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$1.77",
        "maxLoss": "$2.36",
        "atr14": "$1.18"
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
        "targetPrice": "$35.31",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($30.27) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($19.44) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 242.57,
      "priceChange": -7.44,
      "priceChangePct": -2.98,
      "analysisDate": "2026-05-28"
    },
    "overview": {
      "verdict": "ACCUMULATE",
      "verdictConfidence": "Dynamic Quantitative Model",
      "taScore": 6,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $190.72"
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
          "price": 242.57
        },
        "poc": {
          "label": "POC",
          "price": 232.87
        },
        "resistances": [
          {
            "label": "R1",
            "price": 254.7
          },
          {
            "label": "R2",
            "price": 271.68
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 190.72
          },
          {
            "label": "S2",
            "price": 167.62
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 249.85
        },
        "val": {
          "label": "VAL",
          "price": 220.74
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$230.44 - $240.14",
        "stopLoss": "$160.92",
        "takeProfit1": "$254.70",
        "takeProfit2": "$271.68",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($190.72) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 61.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.51x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": true
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$12.73",
        "maxLoss": "$16.98",
        "atr14": "$8.49"
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
      "statement": "หุ้น Qualcomm (QCOM) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 6/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
      "bullCase": [
        "ราคาผ่านการทะลุกรอบและสร้างฐานเหนือเส้นค่าเฉลี่ยหลักทางเทคนิคอย่างสมบูรณ์",
        "สถิติโมเมนตัมและอินดิเคเตอร์ RSI สะท้อนแรงสะสมของแรงซื้อขนาดใหญ่ที่ทวีความชันขึ้น",
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.1) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (18.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$254.70",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($167.62) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 393.44,
      "priceChange": -18.39,
      "priceChangePct": -4.47,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $241.65"
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
          "price": 393.44
        },
        "poc": {
          "label": "POC",
          "price": 377.7
        },
        "resistances": [
          {
            "label": "R1",
            "price": 413.11
          },
          {
            "label": "R2",
            "price": 440.65
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 241.65
          },
          {
            "label": "S2",
            "price": 174.25
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 405.24
        },
        "val": {
          "label": "VAL",
          "price": 358.03
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$373.77 - $389.51",
        "stopLoss": "$167.28",
        "takeProfit1": "$413.11",
        "takeProfit2": "$440.65",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($241.65) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 74.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.83x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$20.66",
        "maxLoss": "$27.54",
        "atr14": "$13.77"
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
        "targetPrice": "$413.11",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($354.1) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($174.25) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 279.25,
      "priceChange": -1.18,
      "priceChangePct": -0.42,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $217.67"
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
          "price": 279.25
        },
        "poc": {
          "label": "POC",
          "price": 268.08
        },
        "resistances": [
          {
            "label": "R1",
            "price": 293.21
          },
          {
            "label": "R2",
            "price": 312.76
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 217.67
          },
          {
            "label": "S2",
            "price": 196.32
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 287.63
        },
        "val": {
          "label": "VAL",
          "price": 254.12
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$265.29 - $276.46",
        "stopLoss": "$188.47",
        "takeProfit1": "$293.21",
        "takeProfit2": "$312.76",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($217.67) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 68.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.93x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$14.65",
        "maxLoss": "$19.54",
        "atr14": "$9.77"
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
      "statement": "หุ้น Palo Alto (PANW) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$293.21",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($251.33) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($196.32) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 268.64,
      "priceChange": 3.31,
      "priceChangePct": 1.25,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $217.51"
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
          "price": 268.64
        },
        "poc": {
          "label": "POC",
          "price": 257.89
        },
        "resistances": [
          {
            "label": "R1",
            "price": 282.07
          },
          {
            "label": "R2",
            "price": 300.88
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 217.51
          },
          {
            "label": "S2",
            "price": 206.16
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 276.7
        },
        "val": {
          "label": "VAL",
          "price": 244.46
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$255.21 - $265.95",
        "stopLoss": "$197.91",
        "takeProfit1": "$282.07",
        "takeProfit2": "$300.88",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($217.51) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 68.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.2",
        "trailingStop": "$14.10",
        "maxLoss": "$18.80",
        "atr14": "$9.40"
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
      "statement": "หุ้น Cloudflare (NET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$282.07",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($241.78) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($206.16) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 243.6,
      "priceChange": -6.73,
      "priceChangePct": -2.69,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $182.21"
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
          "price": 243.6
        },
        "poc": {
          "label": "POC",
          "price": 233.86
        },
        "resistances": [
          {
            "label": "R1",
            "price": 255.78
          },
          {
            "label": "R2",
            "price": 272.83
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 182.21
          },
          {
            "label": "S2",
            "price": 151.58
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 250.91
        },
        "val": {
          "label": "VAL",
          "price": 221.68
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$231.42 - $241.16",
        "stopLoss": "$145.52",
        "takeProfit1": "$255.78",
        "takeProfit2": "$272.83",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($182.21) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 66.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.91x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$12.79",
        "maxLoss": "$17.06",
        "atr14": "$8.53"
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
      "statement": "หุ้น Datadog (DDOG) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$255.78",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($219.24) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($151.58) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 244.18,
      "priceChange": 2.9,
      "priceChangePct": 1.2,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $179.34"
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
          "price": 244.18
        },
        "poc": {
          "label": "POC",
          "price": 234.41
        },
        "resistances": [
          {
            "label": "R1",
            "price": 256.39
          },
          {
            "label": "R2",
            "price": 273.48
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 179.34
          },
          {
            "label": "S2",
            "price": 196.61
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 251.51
        },
        "val": {
          "label": "VAL",
          "price": 222.2
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$231.97 - $241.74",
        "stopLoss": "$188.75",
        "takeProfit1": "$256.39",
        "takeProfit2": "$273.48",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($179.34) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 68.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.74x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$12.83",
        "maxLoss": "$17.10",
        "atr14": "$8.55"
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
        "targetPrice": "$256.39",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($219.76) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($196.61) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 133.72,
      "priceChange": 0.13,
      "priceChangePct": 0.1,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $127.03"
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
          "price": 133.72
        },
        "poc": {
          "label": "POC",
          "price": 128.37
        },
        "resistances": [
          {
            "label": "R1",
            "price": 140.41
          },
          {
            "label": "R2",
            "price": 149.77
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 127.03
          },
          {
            "label": "S2",
            "price": 131.1
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 137.73
        },
        "val": {
          "label": "VAL",
          "price": 121.69
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$127.03 - $132.38",
        "stopLoss": "$125.86",
        "takeProfit1": "$140.41",
        "takeProfit2": "$149.77",
        "rrRatio": "1:0.9",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($127.03) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 47.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.9",
        "trailingStop": "$7.02",
        "maxLoss": "$9.36",
        "atr14": "$4.68"
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
        "targetPrice": "$140.41",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($120.35) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($131.1) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 72.21,
      "priceChange": 0.52,
      "priceChangePct": 0.73,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $68.6"
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
          "price": 72.21
        },
        "poc": {
          "label": "POC",
          "price": 69.32
        },
        "resistances": [
          {
            "label": "R1",
            "price": 75.82
          },
          {
            "label": "R2",
            "price": 80.88
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 68.6
          },
          {
            "label": "S2",
            "price": 64.99
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 74.38
        },
        "val": {
          "label": "VAL",
          "price": 65.71
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$68.6 - $71.49",
        "stopLoss": "$62.39",
        "takeProfit1": "$75.82",
        "takeProfit2": "$80.88",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($68.6) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 46.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.4",
        "trailingStop": "$3.79",
        "maxLoss": "$5.06",
        "atr14": "$2.53"
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
        "targetPrice": "$75.82",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($64.99) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($64.99) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 11.67,
      "priceChange": -0.0,
      "priceChangePct": -0.0,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.12"
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
          "price": 11.67
        },
        "poc": {
          "label": "POC",
          "price": 11.2
        },
        "resistances": [
          {
            "label": "R1",
            "price": 12.25
          },
          {
            "label": "R2",
            "price": 13.07
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.12
          },
          {
            "label": "S2",
            "price": 10.5
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 12.02
        },
        "val": {
          "label": "VAL",
          "price": 10.62
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$11.09 - $11.55",
        "stopLoss": "$10.08",
        "takeProfit1": "$12.25",
        "takeProfit2": "$13.07",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.12) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 55.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "targetPrice": "$12.25",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.5) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.5) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
    "price": 428.05,
    "change": 0.71,
    "pct": 0.17,
    "pe": 32.4,
    "rsi": 52.9,
    "volSpike": 0.71,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 3,
    "s1": 410.0,
    "s2": 395.0
  },
  {
    "symbol": "BTC-USD",
    "name": "Bitcoin",
    "sector": "Digital Asset",
    "price": 63501.35,
    "change": -513.02,
    "pct": -0.8,
    "pe": 999.0,
    "rsi": 18.0,
    "volSpike": 1.98,
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
    "price": 311.23,
    "change": 0.97,
    "pct": 0.31,
    "pe": 27.5,
    "rsi": 66.5,
    "volSpike": 0.8,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 184.0,
    "s2": 175.0
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA",
    "sector": "Technology",
    "price": 218.66,
    "change": 3.91,
    "pct": 1.82,
    "pe": 58.2,
    "rsi": 54.2,
    "volSpike": 0.96,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 212.0,
    "s2": 200.0
  },
  {
    "symbol": "AMZN",
    "name": "Amazon",
    "sector": "Consumer Cyclical",
    "price": 253.79,
    "change": 3.77,
    "pct": 1.51,
    "pe": 38.2,
    "rsi": 43.5,
    "volSpike": 0.9,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 175.0,
    "s2": 164.0
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet",
    "sector": "Technology",
    "price": 372.19,
    "change": 13.2,
    "pct": 3.68,
    "pe": 24.5,
    "rsi": 48.6,
    "volSpike": 1.4,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 375.0,
    "s2": 365.0
  },
  {
    "symbol": "META",
    "name": "Meta Platforms",
    "sector": "Technology",
    "price": 627.57,
    "change": 4.59,
    "pct": 0.74,
    "pe": 24.5,
    "rsi": 53.1,
    "volSpike": 1.32,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4,
    "s1": 560.0,
    "s2": 530.0
  },
  {
    "symbol": "TSLA",
    "name": "Tesla",
    "sector": "Consumer Cyclical",
    "price": 418.45,
    "change": -5.25,
    "pct": -1.24,
    "pe": 58.5,
    "rsi": 51.0,
    "volSpike": 0.69,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 165.0,
    "s2": 152.0
  },
  {
    "symbol": "MU",
    "name": "Micron",
    "sector": "Technology",
    "price": 996.0,
    "change": -83.57,
    "pct": -7.74,
    "pe": 22.8,
    "rsi": 69.7,
    "volSpike": 0.98,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 740.0,
    "s2": 710.0
  },
  {
    "symbol": "TSM",
    "name": "TSMC",
    "sector": "Technology",
    "price": 444.92,
    "change": 8.23,
    "pct": 1.88,
    "pe": 25.4,
    "rsi": 65.8,
    "volSpike": 0.86,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 395.0,
    "s2": 380.0
  },
  {
    "symbol": "ASML",
    "name": "ASML",
    "sector": "Technology",
    "price": 1757.47,
    "change": 31.11,
    "pct": 1.8,
    "pe": 42.5,
    "rsi": 70.1,
    "volSpike": 1.38,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 1320.0,
    "s2": 1280.0
  },
  {
    "symbol": "ORCL",
    "name": "Oracle",
    "sector": "Technology",
    "price": 236.34,
    "change": 6.01,
    "pct": 2.61,
    "pe": 26.5,
    "rsi": 68.9,
    "volSpike": 0.78,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 188.19,
    "s2": 204.48
  },
  {
    "symbol": "NOW",
    "name": "ServiceNow",
    "sector": "Technology",
    "price": 119.36,
    "change": 1.46,
    "pct": 1.24,
    "pe": 55.0,
    "rsi": 60.4,
    "volSpike": 0.73,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 3,
    "s1": 104.61,
    "s2": 107.42
  },
  {
    "symbol": "PLTR",
    "name": "Palantir",
    "sector": "Technology",
    "price": 141.7,
    "change": -0.5,
    "pct": -0.35,
    "pe": 82.0,
    "rsi": 49.8,
    "volSpike": 0.97,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 134.61,
    "s2": 127.53
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks",
    "sector": "Technology",
    "price": 166.01,
    "change": -8.36,
    "pct": -4.79,
    "pe": 38.5,
    "rsi": 57.8,
    "volSpike": 0.75,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 152.55,
    "s2": 139.26
  },
  {
    "symbol": "AMD",
    "name": "AMD",
    "sector": "Technology",
    "price": 523.2,
    "change": -19.32,
    "pct": -3.56,
    "pe": 48.0,
    "rsi": 70.6,
    "volSpike": 0.83,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 384.82,
    "s2": 262.67
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Technology",
    "price": 418.91,
    "change": -60.32,
    "pct": -12.59,
    "pe": 35.2,
    "rsi": 48.1,
    "volSpike": 3.09,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 405.25,
    "s2": 355.82
  },
  {
    "symbol": "NFLX",
    "name": "Netflix",
    "sector": "Communication",
    "price": 81.56,
    "change": 0.04,
    "pct": 0.05,
    "pe": 36.4,
    "rsi": 27.4,
    "volSpike": 1.17,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 77.48,
    "s2": 73.4
  },
  {
    "symbol": "COIN",
    "name": "Coinbase",
    "sector": "Financials",
    "price": 164.13,
    "change": 0.91,
    "pct": 0.56,
    "pe": 28.5,
    "rsi": 37.5,
    "volSpike": 0.86,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 155.92,
    "s2": 147.72
  },
  {
    "symbol": "CRWD",
    "name": "CrowdStrike",
    "sector": "Technology",
    "price": 719.09,
    "change": -28.52,
    "pct": -3.81,
    "pe": 72.0,
    "rsi": 68.8,
    "volSpike": 1.9,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 555.79,
    "s2": 490.14
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro",
    "sector": "Technology",
    "price": 46.9,
    "change": -0.52,
    "pct": -1.1,
    "pe": 18.5,
    "rsi": 72.2,
    "volSpike": 0.74,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 33.92,
    "s2": 36.98
  },
  {
    "symbol": "CELH",
    "name": "Celsius",
    "sector": "Consumer Defensive",
    "price": 27.75,
    "change": -2.26,
    "pct": -7.53,
    "pe": 45.0,
    "rsi": 36.5,
    "volSpike": 1.55,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 26.36,
    "s2": 24.98
  },
  {
    "symbol": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "price": 323.92,
    "change": -7.52,
    "pct": -2.27,
    "pe": 38.5,
    "rsi": 48.9,
    "volSpike": 1.05,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 311.6,
    "s2": 227.03
  },
  {
    "symbol": "NU",
    "name": "Nu Holdings",
    "sector": "Financials",
    "price": 12.12,
    "change": 0.48,
    "pct": 4.12,
    "pe": 28.4,
    "rsi": 37.2,
    "volSpike": 0.81,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 11.51,
    "s2": 10.91
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre",
    "sector": "Consumer Cyclical",
    "price": 1634.78,
    "change": -3.76,
    "pct": -0.23,
    "pe": 46.5,
    "rsi": 43.7,
    "volSpike": 0.62,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 1553.04,
    "s2": 1471.3
  },
  {
    "symbol": "MSTR",
    "name": "MicroStrategy",
    "sector": "Technology",
    "price": 129.37,
    "change": 2.82,
    "pct": 2.23,
    "pe": 95.0,
    "rsi": 32.8,
    "volSpike": 1.5,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 122.9,
    "s2": 116.43
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood",
    "sector": "Financials",
    "price": 88.33,
    "change": 5.48,
    "pct": 6.61,
    "pe": 24.2,
    "rsi": 58.2,
    "volSpike": 1.2,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4,
    "s1": 80.66,
    "s2": 79.5
  },
  {
    "symbol": "LUNR",
    "name": "Intuitive Machines",
    "sector": "Industrials",
    "price": 33.63,
    "change": -0.2,
    "pct": -0.59,
    "pe": 15.0,
    "rsi": 50.0,
    "volSpike": 0.71,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 29.92,
    "s2": 19.44
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm",
    "sector": "Technology",
    "price": 242.57,
    "change": -7.44,
    "pct": -2.98,
    "pe": 18.2,
    "rsi": 61.6,
    "volSpike": 0.51,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 6,
    "s1": 190.72,
    "s2": 167.62
  },
  {
    "symbol": "ARM",
    "name": "ARM Holdings",
    "sector": "Technology",
    "price": 393.44,
    "change": -18.39,
    "pct": -4.47,
    "pe": 75.0,
    "rsi": 74.7,
    "volSpike": 0.83,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 241.65,
    "s2": 174.25
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto",
    "sector": "Technology",
    "price": 279.25,
    "change": -1.18,
    "pct": -0.42,
    "pe": 48.0,
    "rsi": 68.8,
    "volSpike": 0.93,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 217.67,
    "s2": 196.32
  },
  {
    "symbol": "NET",
    "name": "Cloudflare",
    "sector": "Technology",
    "price": 268.64,
    "change": 3.31,
    "pct": 1.25,
    "pe": 68.0,
    "rsi": 68.4,
    "volSpike": 0.77,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 217.51,
    "s2": 206.16
  },
  {
    "symbol": "DDOG",
    "name": "Datadog",
    "sector": "Technology",
    "price": 243.6,
    "change": -6.73,
    "pct": -2.69,
    "pe": 54.0,
    "rsi": 66.5,
    "volSpike": 0.91,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 182.21,
    "s2": 151.58
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake",
    "sector": "Technology",
    "price": 244.18,
    "change": 2.9,
    "pct": 1.2,
    "pe": 62.0,
    "rsi": 68.7,
    "volSpike": 0.74,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 179.34,
    "s2": 196.61
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb",
    "sector": "Consumer Cyclical",
    "price": 133.72,
    "change": 0.13,
    "pct": 0.1,
    "pe": 26.5,
    "rsi": 47.4,
    "volSpike": 0.87,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 4,
    "s1": 127.03,
    "s2": 131.1
  },
  {
    "symbol": "UBER",
    "name": "Uber",
    "sector": "Industrials",
    "price": 72.21,
    "change": 0.52,
    "pct": 0.73,
    "pe": 31.4,
    "rsi": 46.4,
    "volSpike": 0.87,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 68.6,
    "s2": 64.99
  },
  {
    "symbol": "PATH",
    "name": "UiPath",
    "sector": "Technology",
    "price": 11.67,
    "change": -0.0,
    "pct": -0.0,
    "pe": 22.0,
    "rsi": 55.8,
    "volSpike": 0.97,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 4,
    "s1": 11.12,
    "s2": 10.5
  }
];

let activeStock = "META";
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('stock-selector');
  if(selector) {
    selector.innerHTML = `\n      <option value="META">Meta Platforms (META)</option>\n      <option value="ASML">ASML Holding N.V (ASML)</option>\n      <option value="MSFT">Microsoft Corporation (MSFT)</option>\n      <option value="AAPL">Apple Inc (AAPL)</option>\n      <option value="AMZN">Amazon.com, Inc (AMZN)</option>\n      <option value="TSLA">Tesla, Inc (TSLA)</option>\n    `;
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
