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
      "currentPrice": 390.34,
      "priceChange": -7.02,
      "priceChangePct": -1.77,
      "analysisDate": "2026-06-11"
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
          "price": 390.34
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
      "currentPrice": 295.63,
      "priceChange": 4.05,
      "priceChangePct": 1.39,
      "analysisDate": "2026-06-11"
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
          "price": 295.63
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
      "currentPrice": 241.51,
      "priceChange": 3.51,
      "priceChangePct": 1.47,
      "analysisDate": "2026-06-11"
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
          "price": 241.51
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
      "currentPrice": 568.43,
      "priceChange": -2.55,
      "priceChangePct": -0.45,
      "analysisDate": "2026-06-11"
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
          "price": 568.43
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
      "currentPrice": 399.15,
      "priceChange": 17.56,
      "priceChangePct": 4.6,
      "analysisDate": "2026-06-11"
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
          "price": 399.15
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
      "currentPrice": 1899.48,
      "priceChange": 165.29,
      "priceChangePct": 9.53,
      "analysisDate": "2026-06-11"
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
          "price": 1899.48
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
      "currentPrice": 184.1,
      "priceChange": -17.16,
      "priceChangePct": -8.53,
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
        "direction": "Sideways",
        "strength": "Moderate",
        "timeframes": [
          {
            "tf": "Daily",
            "bias": "neutral",
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $174.89"
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
          "price": 184.1
        },
        "poc": {
          "label": "POC",
          "price": 176.74
        },
        "resistances": [
          {
            "label": "R1",
            "price": 193.31
          },
          {
            "label": "R2",
            "price": 206.19
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 174.89
          },
          {
            "label": "S2",
            "price": 165.69
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 189.62
        },
        "val": {
          "label": "VAL",
          "price": 167.53
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$174.89 - $182.26",
        "stopLoss": "$159.06",
        "takeProfit1": "$193.31",
        "takeProfit2": "$206.19",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($174.89) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 2.48x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$9.66",
        "maxLoss": "$12.88",
        "atr14": "$6.44"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (26.5x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$193.31",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($165.69) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($165.69) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 103.08,
      "priceChange": -2.98,
      "priceChangePct": -2.81,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $97.93"
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
          "price": 103.08
        },
        "poc": {
          "label": "POC",
          "price": 98.96
        },
        "resistances": [
          {
            "label": "R1",
            "price": 108.23
          },
          {
            "label": "R2",
            "price": 115.45
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 97.93
          },
          {
            "label": "S2",
            "price": 92.77
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 106.17
        },
        "val": {
          "label": "VAL",
          "price": 93.8
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$97.93 - $102.05",
        "stopLoss": "$89.06",
        "takeProfit1": "$108.23",
        "takeProfit2": "$115.45",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($97.93) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 47.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.68x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$5.42",
        "maxLoss": "$7.22",
        "atr14": "$3.61"
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
        "targetPrice": "$108.23",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($92.77) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($92.77) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 131.08,
      "priceChange": 0.87,
      "priceChangePct": 0.67,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $124.53"
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
          "price": 131.08
        },
        "poc": {
          "label": "POC",
          "price": 125.84
        },
        "resistances": [
          {
            "label": "R1",
            "price": 137.63
          },
          {
            "label": "R2",
            "price": 146.81
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 124.53
          },
          {
            "label": "S2",
            "price": 117.97
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 135.01
        },
        "val": {
          "label": "VAL",
          "price": 119.28
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$124.53 - $129.77",
        "stopLoss": "$113.25",
        "takeProfit1": "$137.63",
        "takeProfit2": "$146.81",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($124.53) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 41.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
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
        "trailingStop": "$6.88",
        "maxLoss": "$9.18",
        "atr14": "$4.59"
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
        "targetPrice": "$137.63",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($117.97) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($117.97) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 156.4,
      "priceChange": 4.64,
      "priceChangePct": 3.06,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $152.85"
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
          "price": 156.4
        },
        "poc": {
          "label": "POC",
          "price": 150.14
        },
        "resistances": [
          {
            "label": "R1",
            "price": 164.22
          },
          {
            "label": "R2",
            "price": 175.17
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 152.85
          },
          {
            "label": "S2",
            "price": 140.59
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 161.09
        },
        "val": {
          "label": "VAL",
          "price": 142.32
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$148.58 - $154.84",
        "stopLoss": "$134.97",
        "takeProfit1": "$164.22",
        "takeProfit2": "$175.17",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($152.85) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 50.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "trailingStop": "$8.21",
        "maxLoss": "$10.94",
        "atr14": "$5.47"
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
      "statement": "หุ้น Arista Networks (ANET) ผ่านเกณฑ์คัดกรองโมเมนตัมทางเทคนิคประจำวันด้วยคะแนนสแกน 4/10 มีโครงสร้างราคาที่ได้เปรียบเชิงสถิติระยะสั้นและหนุนด้วยปัจจัยพื้นฐานอุตสาหกรรม Technology",
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
        "targetPrice": "$164.22",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($140.76) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($140.59) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 488.45,
      "priceChange": 36.05,
      "priceChangePct": 7.97,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $401.11"
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
          "price": 488.45
        },
        "poc": {
          "label": "POC",
          "price": 468.91
        },
        "resistances": [
          {
            "label": "R1",
            "price": 512.87
          },
          {
            "label": "R2",
            "price": 547.06
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 401.11
          },
          {
            "label": "S2",
            "price": 273.94
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 503.1
        },
        "val": {
          "label": "VAL",
          "price": 444.49
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$464.03 - $483.57",
        "stopLoss": "$262.98",
        "takeProfit1": "$512.87",
        "takeProfit2": "$547.06",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($401.11) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 56.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.92x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$25.65",
        "maxLoss": "$34.20",
        "atr14": "$17.10"
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
        "targetPrice": "$512.87",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($273.94) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 385.57,
      "priceChange": 13.47,
      "priceChangePct": 3.62,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $366.29"
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
          "price": 385.57
        },
        "poc": {
          "label": "POC",
          "price": 370.15
        },
        "resistances": [
          {
            "label": "R1",
            "price": 404.85
          },
          {
            "label": "R2",
            "price": 431.84
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 366.29
          },
          {
            "label": "S2",
            "price": 358.7
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 397.14
        },
        "val": {
          "label": "VAL",
          "price": 350.87
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$366.29 - $381.71",
        "stopLoss": "$344.35",
        "takeProfit1": "$404.85",
        "takeProfit2": "$431.84",
        "rrRatio": "1:0.5",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($366.29) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.09x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.5",
        "trailingStop": "$20.23",
        "maxLoss": "$26.98",
        "atr14": "$13.49"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.5) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (35.2x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$404.85",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($347.01) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($358.7) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 81.27,
      "priceChange": -0.73,
      "priceChangePct": -0.89,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $77.21"
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
          "price": 81.27
        },
        "poc": {
          "label": "POC",
          "price": 78.02
        },
        "resistances": [
          {
            "label": "R1",
            "price": 85.33
          },
          {
            "label": "R2",
            "price": 91.02
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 77.21
          },
          {
            "label": "S2",
            "price": 73.14
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 83.71
        },
        "val": {
          "label": "VAL",
          "price": 73.96
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$77.21 - $80.46",
        "stopLoss": "$70.21",
        "takeProfit1": "$85.33",
        "takeProfit2": "$91.02",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($77.21) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 31.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 1.0x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.26",
        "maxLoss": "$5.68",
        "atr14": "$2.84"
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
        "targetPrice": "$85.33",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($73.14) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($73.14) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 160.43,
      "priceChange": 6.46,
      "priceChangePct": 4.2,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $152.41"
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
          "price": 160.43
        },
        "poc": {
          "label": "POC",
          "price": 154.01
        },
        "resistances": [
          {
            "label": "R1",
            "price": 168.45
          },
          {
            "label": "R2",
            "price": 179.68
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 152.41
          },
          {
            "label": "S2",
            "price": 144.39
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 165.24
        },
        "val": {
          "label": "VAL",
          "price": 145.99
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$152.41 - $158.83",
        "stopLoss": "$138.61",
        "takeProfit1": "$168.45",
        "takeProfit2": "$179.68",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($152.41) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "trailingStop": "$8.43",
        "maxLoss": "$11.24",
        "atr14": "$5.62"
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
        "targetPrice": "$168.45",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($144.39) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($144.39) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 691.53,
      "priceChange": 43.79,
      "priceChangePct": 6.76,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $575.24"
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
          "price": 691.53
        },
        "poc": {
          "label": "POC",
          "price": 663.87
        },
        "resistances": [
          {
            "label": "R1",
            "price": 726.11
          },
          {
            "label": "R2",
            "price": 774.51
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 575.24
          },
          {
            "label": "S2",
            "price": 499.74
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 712.28
        },
        "val": {
          "label": "VAL",
          "price": 629.29
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$656.95 - $684.61",
        "stopLoss": "$479.75",
        "takeProfit1": "$726.11",
        "takeProfit2": "$774.51",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($575.24) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 60.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.89x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$36.30",
        "maxLoss": "$48.40",
        "atr14": "$24.20"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.2) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (72.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ทยอยสะสม (Accumulate)",
        "targetPrice": "$726.11",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($499.74) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 31.97,
      "priceChange": 2.7,
      "priceChangePct": 9.22,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $30.37"
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
          "price": 31.97
        },
        "poc": {
          "label": "POC",
          "price": 30.69
        },
        "resistances": [
          {
            "label": "R1",
            "price": 33.57
          },
          {
            "label": "R2",
            "price": 35.81
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 30.37
          },
          {
            "label": "S2",
            "price": 28.77
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 32.93
        },
        "val": {
          "label": "VAL",
          "price": 29.09
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$30.37 - $31.65",
        "stopLoss": "$27.62",
        "takeProfit1": "$33.57",
        "takeProfit2": "$35.81",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($30.37) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.9 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 3.99x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$1.68",
        "maxLoss": "$2.24",
        "atr14": "$1.12"
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
        "targetPrice": "$33.57",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($28.77) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($28.77) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 28.4,
      "priceChange": 0.03,
      "priceChangePct": 0.11,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $26.98"
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
          "price": 28.4
        },
        "poc": {
          "label": "POC",
          "price": 27.26
        },
        "resistances": [
          {
            "label": "R1",
            "price": 29.82
          },
          {
            "label": "R2",
            "price": 31.81
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 26.98
          },
          {
            "label": "S2",
            "price": 25.56
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 29.25
        },
        "val": {
          "label": "VAL",
          "price": 25.84
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$26.98 - $28.12",
        "stopLoss": "$24.54",
        "takeProfit1": "$29.82",
        "takeProfit2": "$31.81",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($26.98) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.76x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
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
        "targetPrice": "$29.82",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($25.56) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($25.56) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 297.88,
      "priceChange": 16.9,
      "priceChangePct": 6.01,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $282.99"
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
          "price": 297.88
        },
        "poc": {
          "label": "POC",
          "price": 285.96
        },
        "resistances": [
          {
            "label": "R1",
            "price": 312.77
          },
          {
            "label": "R2",
            "price": 333.63
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 282.99
          },
          {
            "label": "S2",
            "price": 229.88
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 306.82
        },
        "val": {
          "label": "VAL",
          "price": 271.07
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$282.99 - $294.9",
        "stopLoss": "$220.68",
        "takeProfit1": "$312.77",
        "takeProfit2": "$333.63",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($282.99) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.82x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$15.64",
        "maxLoss": "$20.86",
        "atr14": "$10.43"
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
        "targetPrice": "$312.77",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($268.09) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($229.88) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 12.09,
      "priceChange": 0.47,
      "priceChangePct": 4.04,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $11.49"
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
          "price": 12.09
        },
        "poc": {
          "label": "POC",
          "price": 11.61
        },
        "resistances": [
          {
            "label": "R1",
            "price": 12.69
          },
          {
            "label": "R2",
            "price": 13.54
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 11.49
          },
          {
            "label": "S2",
            "price": 10.88
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 12.45
        },
        "val": {
          "label": "VAL",
          "price": 11.0
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$11.49 - $11.97",
        "stopLoss": "$10.44",
        "takeProfit1": "$12.69",
        "takeProfit2": "$13.54",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($11.49) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 42.0 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "targetPrice": "$12.69",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($10.88) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($10.88) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 1610.0,
      "priceChange": 21.71,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $1529.5"
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
          "price": 1610.0
        },
        "poc": {
          "label": "POC",
          "price": 1545.6
        },
        "resistances": [
          {
            "label": "R1",
            "price": 1690.5
          },
          {
            "label": "R2",
            "price": 1803.2
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 1529.5
          },
          {
            "label": "S2",
            "price": 1449.0
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 1658.3
        },
        "val": {
          "label": "VAL",
          "price": 1465.1
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$1529.5 - $1593.9",
        "stopLoss": "$1391.04",
        "takeProfit1": "$1690.50",
        "takeProfit2": "$1803.20",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($1529.5) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 43.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
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
        "trailingStop": "$84.53",
        "maxLoss": "$112.70",
        "atr14": "$56.35"
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
        "targetPrice": "$1690.50",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($1449.0) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($1449.0) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 120.15,
      "priceChange": 4.8,
      "priceChangePct": 4.16,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $114.14"
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
          "price": 120.15
        },
        "poc": {
          "label": "POC",
          "price": 115.34
        },
        "resistances": [
          {
            "label": "R1",
            "price": 126.16
          },
          {
            "label": "R2",
            "price": 134.57
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 114.14
          },
          {
            "label": "S2",
            "price": 108.14
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 123.75
        },
        "val": {
          "label": "VAL",
          "price": 109.34
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$114.14 - $118.95",
        "stopLoss": "$103.81",
        "takeProfit1": "$126.16",
        "takeProfit2": "$134.57",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($114.14) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 34.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.94x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.31",
        "maxLoss": "$8.42",
        "atr14": "$4.21"
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
        "targetPrice": "$126.16",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($108.14) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($108.14) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 92.23,
      "priceChange": 5.87,
      "priceChangePct": 6.8,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $81.65"
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
          "price": 92.23
        },
        "poc": {
          "label": "POC",
          "price": 88.54
        },
        "resistances": [
          {
            "label": "R1",
            "price": 96.84
          },
          {
            "label": "R2",
            "price": 103.3
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 81.65
          },
          {
            "label": "S2",
            "price": 83.01
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 95.0
        },
        "val": {
          "label": "VAL",
          "price": 83.93
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$87.62 - $91.31",
        "stopLoss": "$79.69",
        "takeProfit1": "$96.84",
        "takeProfit2": "$103.30",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($81.65) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 60.5 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.31x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$4.84",
        "maxLoss": "$6.46",
        "atr14": "$3.23"
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
        "targetPrice": "$96.84",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($83.01) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 30.64,
      "priceChange": 4.11,
      "priceChangePct": 15.49,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $29.71"
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
          "price": 30.64
        },
        "poc": {
          "label": "POC",
          "price": 29.41
        },
        "resistances": [
          {
            "label": "R1",
            "price": 32.17
          },
          {
            "label": "R2",
            "price": 34.32
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 29.71
          },
          {
            "label": "S2",
            "price": 19.84
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 31.56
        },
        "val": {
          "label": "VAL",
          "price": 27.88
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$29.11 - $30.33",
        "stopLoss": "$19.05",
        "takeProfit1": "$32.17",
        "takeProfit2": "$34.32",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($29.71) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 47.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 1.25x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.1",
        "trailingStop": "$1.60",
        "maxLoss": "$2.14",
        "atr14": "$1.07"
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
        "targetPrice": "$32.17",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($27.58) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($19.84) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 202.96,
      "priceChange": 11.76,
      "priceChangePct": 6.15,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $193.53"
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
          "price": 202.96
        },
        "poc": {
          "label": "POC",
          "price": 194.84
        },
        "resistances": [
          {
            "label": "R1",
            "price": 213.11
          },
          {
            "label": "R2",
            "price": 227.32
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 193.53
          },
          {
            "label": "S2",
            "price": 170.04
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 209.05
        },
        "val": {
          "label": "VAL",
          "price": 184.69
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$192.81 - $200.93",
        "stopLoss": "$163.24",
        "takeProfit1": "$213.11",
        "takeProfit2": "$227.32",
        "rrRatio": "1:0.3",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($193.53) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 47.6 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.82x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.3",
        "trailingStop": "$10.65",
        "maxLoss": "$14.20",
        "atr14": "$7.10"
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
        "targetPrice": "$213.11",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($182.66) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($170.04) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 342.23,
      "priceChange": 34.8,
      "priceChangePct": 11.32,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $258.11"
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
          "price": 342.23
        },
        "poc": {
          "label": "POC",
          "price": 328.54
        },
        "resistances": [
          {
            "label": "R1",
            "price": 359.34
          },
          {
            "label": "R2",
            "price": 383.3
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 258.11
          },
          {
            "label": "S2",
            "price": 181.9
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 352.5
        },
        "val": {
          "label": "VAL",
          "price": 311.43
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$325.12 - $338.81",
        "stopLoss": "$174.62",
        "takeProfit1": "$359.34",
        "takeProfit2": "$383.30",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($258.11) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 58.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.1",
        "trailingStop": "$17.97",
        "maxLoss": "$23.96",
        "atr14": "$11.98"
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
        "targetPrice": "$359.34",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($181.9) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 279.53,
      "priceChange": 16.31,
      "priceChangePct": 6.2,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $226.88"
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
          "price": 279.53
        },
        "poc": {
          "label": "POC",
          "price": 268.35
        },
        "resistances": [
          {
            "label": "R1",
            "price": 293.51
          },
          {
            "label": "R2",
            "price": 313.07
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 226.88
          },
          {
            "label": "S2",
            "price": 200.23
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 287.92
        },
        "val": {
          "label": "VAL",
          "price": 254.37
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$265.55 - $276.73",
        "stopLoss": "$192.22",
        "takeProfit1": "$293.51",
        "takeProfit2": "$313.07",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($226.88) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 64.8 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.2",
        "trailingStop": "$14.67",
        "maxLoss": "$19.56",
        "atr14": "$9.78"
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
        "targetPrice": "$293.51",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($200.23) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 227.44,
      "priceChange": 7.77,
      "priceChangePct": 3.54,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $220.8"
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
          "price": 227.44
        },
        "poc": {
          "label": "POC",
          "price": 218.34
        },
        "resistances": [
          {
            "label": "R1",
            "price": 238.81
          },
          {
            "label": "R2",
            "price": 254.73
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 220.8
          },
          {
            "label": "S2",
            "price": 207.85
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 234.26
        },
        "val": {
          "label": "VAL",
          "price": 206.97
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$216.07 - $225.17",
        "stopLoss": "$199.54",
        "takeProfit1": "$238.81",
        "takeProfit2": "$254.73",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($220.8) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 49.1 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.76x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$11.94",
        "maxLoss": "$15.92",
        "atr14": "$7.96"
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
        "จุดซื้อขายทางเทคนิคมีแต้มต่อเชิงความเสี่ยงและอัตราผลตอบแทน Risk:Reward Ratio (1:0.4) ที่ได้เปรียบสูง"
      ],
      "bearCase": [
        "ความเสี่ยงความผันผวนทางอ้อมจากดัชนีภาพรวมตลาดสหรัฐฯ หรืออัตราเงินเฟ้อประกาศรายสัปดาห์",
        "สัญญานทางเทคนิคระยะสั้นในกราฟรายวันอาจมีการดึงตัวกลับเข้าหาเส้น EMA เพื่อลดระดับความร้อนแรง",
        "ระดับอัตราส่วนราคาต่อกำไร PE (68.0x) สะท้อนความต้องการและการเก็งกำไรโมเมนตัมที่สูงในตลาดเชิงเปรียบเทียบ"
      ],
      "recommendation": {
        "action": "ถือครอง / รอจังหวะ (Hold/Wait)",
        "targetPrice": "$238.81",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($204.7) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($207.85) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 234.24,
      "priceChange": 6.61,
      "priceChangePct": 2.9,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $191.05"
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
          "price": 234.24
        },
        "poc": {
          "label": "POC",
          "price": 224.87
        },
        "resistances": [
          {
            "label": "R1",
            "price": 245.95
          },
          {
            "label": "R2",
            "price": 262.35
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 191.05
          },
          {
            "label": "S2",
            "price": 156.01
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 241.27
        },
        "val": {
          "label": "VAL",
          "price": 213.16
        }
      },
      "entry": {
        "signal": "BUY",
        "entryZone": "$222.53 - $231.9",
        "stopLoss": "$149.77",
        "takeProfit1": "$245.95",
        "takeProfit2": "$262.35",
        "rrRatio": "1:0.1",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($191.05) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 60.3 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "riskReward": "1:0.1",
        "trailingStop": "$12.30",
        "maxLoss": "$16.40",
        "atr14": "$8.20"
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
        "targetPrice": "$245.95",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "เน้นการแบ่งไม้สะสมทีละส่วน (DCA) บริเวณแนวรับสำคัญ ไม่ควรซื้อไล่ราคาเมื่อราคาวิ่งเข้าใกล้แนวต้าน R1"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($156.01) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 240.39,
      "priceChange": 0.49,
      "priceChangePct": 0.2,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $190.29"
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
          "price": 240.39
        },
        "poc": {
          "label": "POC",
          "price": 230.77
        },
        "resistances": [
          {
            "label": "R1",
            "price": 252.41
          },
          {
            "label": "R2",
            "price": 269.24
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 190.29
          },
          {
            "label": "S2",
            "price": 199.66
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 247.6
        },
        "val": {
          "label": "VAL",
          "price": 218.75
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$228.37 - $237.99",
        "stopLoss": "$191.67",
        "takeProfit1": "$252.41",
        "takeProfit2": "$269.24",
        "rrRatio": "1:0.2",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($190.29) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": true
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 66.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.68x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.2",
        "trailingStop": "$12.62",
        "maxLoss": "$16.82",
        "atr14": "$8.41"
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
        "targetPrice": "$252.41",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($216.35) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($199.66) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 130.87,
      "priceChange": 1.77,
      "priceChangePct": 1.37,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $124.33"
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
          "price": 130.87
        },
        "poc": {
          "label": "POC",
          "price": 125.64
        },
        "resistances": [
          {
            "label": "R1",
            "price": 137.41
          },
          {
            "label": "R2",
            "price": 146.57
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 124.33
          },
          {
            "label": "S2",
            "price": 117.78
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 134.8
        },
        "val": {
          "label": "VAL",
          "price": 119.09
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$124.33 - $129.56",
        "stopLoss": "$113.07",
        "takeProfit1": "$137.41",
        "takeProfit2": "$146.57",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($124.33) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 43.4 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": false
        },
        {
          "name": "สถิติ Institution Vol Spike 0.95x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$6.87",
        "maxLoss": "$9.16",
        "atr14": "$4.58"
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
        "targetPrice": "$137.41",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($117.78) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($117.78) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 69.55,
      "priceChange": 0.94,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $66.07"
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
          "price": 69.55
        },
        "poc": {
          "label": "POC",
          "price": 66.77
        },
        "resistances": [
          {
            "label": "R1",
            "price": 73.03
          },
          {
            "label": "R2",
            "price": 77.9
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 66.07
          },
          {
            "label": "S2",
            "price": 62.59
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 71.64
        },
        "val": {
          "label": "VAL",
          "price": 63.29
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$66.07 - $68.85",
        "stopLoss": "$60.09",
        "takeProfit1": "$73.03",
        "takeProfit2": "$77.90",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($66.07) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 40.7 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
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
        "trailingStop": "$3.65",
        "maxLoss": "$4.86",
        "atr14": "$2.43"
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
        "targetPrice": "$73.03",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($62.59) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($62.59) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
      "currentPrice": 10.65,
      "priceChange": -0.1,
      "priceChangePct": -0.93,
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
            "note": "ราคาประคองตัวในทิศทางได้เปรียบ มีแนวรับสำคัญที่ระดับ $10.12"
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
          "price": 10.65
        },
        "poc": {
          "label": "POC",
          "price": 10.22
        },
        "resistances": [
          {
            "label": "R1",
            "price": 11.18
          },
          {
            "label": "R2",
            "price": 11.93
          }
        ],
        "supports": [
          {
            "label": "S1",
            "price": 10.12
          },
          {
            "label": "S2",
            "price": 9.59
          }
        ],
        "vah": {
          "label": "VAH",
          "price": 10.97
        },
        "val": {
          "label": "VAL",
          "price": 9.69
        }
      },
      "entry": {
        "signal": "WAIT",
        "entryZone": "$10.12 - $10.54",
        "stopLoss": "$9.21",
        "takeProfit1": "$11.18",
        "takeProfit2": "$11.93",
        "rrRatio": "1:0.4",
        "confidence": "Medium-High (Algo generated)"
      },
      "confluences": [
        {
          "name": "ราคายืนเหนือเส้นค่าเฉลี่ย EMA 50 ($10.12) สะท้อนภาพขาขึ้นระยะกลาง",
          "confirmed": false
        },
        {
          "name": "ดัชนี RSI อยู่ที่ระดับ 45.2 บ่งชี้กำลังซื้อมีความแข็งแกร่งเชิงโมเมนตัม",
          "confirmed": true
        },
        {
          "name": "สถิติ Institution Vol Spike 0.98x มีแรงวอลุ่มสถาบันสนับสนุนการทะลุฐาน",
          "confirmed": false
        }
      ],
      "risk": {
        "positionSize": "2-3%",
        "riskPct": "6-8%",
        "riskReward": "1:0.4",
        "trailingStop": "$0.55",
        "maxLoss": "$0.74",
        "atr14": "$0.37"
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
        "targetPrice": "$11.18",
        "timeHorizon": "3-6 เดือน (เก็งกำไรตามรอบสัญญาน)",
        "positionSize": "2-3%",
        "entryStrategy": "แนะนำรอสัญญาณทางเทคนิคฟื้นตัวชัดเจน หรือรอให้ราคายืนเหนือแนวรับระดับสำคัญ S2 ($9.59) อย่างมั่นคง"
      },
      "keyRisks": [
        "การร่วงลงหลุดแนวรับสำคัญ S2 ($9.59) จะถือเป็นสัญญาณตัดขาดทุน (Stop Loss) เพื่อรักษาทุนอย่างเคร่งครัด",
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
    "price": 390.34,
    "change": -7.02,
    "pct": -1.77,
    "pe": 32.4,
    "rsi": 36.8,
    "volSpike": 1.23,
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
    "price": 63363.0,
    "change": 1913.71,
    "pct": 3.11,
    "pe": 999.0,
    "rsi": 32.1,
    "volSpike": 0.79,
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
    "price": 295.63,
    "change": 4.05,
    "pct": 1.39,
    "pe": 27.5,
    "rsi": 48.1,
    "volSpike": 0.84,
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
    "price": 204.87,
    "change": 4.45,
    "pct": 2.22,
    "pe": 58.2,
    "rsi": 45.0,
    "volSpike": 0.86,
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
    "price": 241.51,
    "change": 3.51,
    "pct": 1.47,
    "pe": 38.2,
    "rsi": 36.8,
    "volSpike": 0.99,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 175.0,
    "s2": 164.0
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet",
    "sector": "Technology",
    "price": 357.77,
    "change": 1.39,
    "pct": 0.39,
    "pe": 24.5,
    "rsi": 40.7,
    "volSpike": 1.09,
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
    "price": 568.43,
    "change": -2.55,
    "pct": -0.45,
    "pe": 24.5,
    "rsi": 35.0,
    "volSpike": 0.94,
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
    "price": 399.15,
    "change": 17.56,
    "pct": 4.6,
    "pe": 58.5,
    "rsi": 46.3,
    "volSpike": 0.95,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 165.0,
    "s2": 152.0
  },
  {
    "symbol": "MU",
    "name": "Micron",
    "sector": "Technology",
    "price": 995.87,
    "change": 103.99,
    "pct": 11.66,
    "pe": 22.8,
    "rsi": 62.1,
    "volSpike": 1.02,
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
    "price": 421.07,
    "change": 12.32,
    "pct": 3.01,
    "pe": 25.4,
    "rsi": 52.8,
    "volSpike": 1.07,
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
    "price": 1899.48,
    "change": 165.29,
    "pct": 9.53,
    "pe": 42.5,
    "rsi": 69.3,
    "volSpike": 1.62,
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
    "price": 184.1,
    "change": -17.16,
    "pct": -8.53,
    "pe": 26.5,
    "rsi": 42.1,
    "volSpike": 2.48,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 4,
    "s1": 174.89,
    "s2": 165.69
  },
  {
    "symbol": "NOW",
    "name": "ServiceNow",
    "sector": "Technology",
    "price": 103.08,
    "change": -2.98,
    "pct": -2.81,
    "pe": 55.0,
    "rsi": 47.0,
    "volSpike": 0.68,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 97.93,
    "s2": 92.77
  },
  {
    "symbol": "PLTR",
    "name": "Palantir",
    "sector": "Technology",
    "price": 131.08,
    "change": 0.87,
    "pct": 0.67,
    "pe": 82.0,
    "rsi": 41.8,
    "volSpike": 0.69,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 124.53,
    "s2": 117.97
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks",
    "sector": "Technology",
    "price": 156.4,
    "change": 4.64,
    "pct": 3.06,
    "pe": 38.5,
    "rsi": 50.4,
    "volSpike": 0.56,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 152.85,
    "s2": 140.59
  },
  {
    "symbol": "AMD",
    "name": "AMD",
    "sector": "Technology",
    "price": 488.45,
    "change": 36.05,
    "pct": 7.97,
    "pe": 48.0,
    "rsi": 56.9,
    "volSpike": 0.92,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 401.11,
    "s2": 273.94
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Technology",
    "price": 385.57,
    "change": 13.47,
    "pct": 3.62,
    "pe": 35.2,
    "rsi": 42.2,
    "volSpike": 1.09,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 366.29,
    "s2": 358.7
  },
  {
    "symbol": "NFLX",
    "name": "Netflix",
    "sector": "Communication",
    "price": 81.27,
    "change": -0.73,
    "pct": -0.89,
    "pe": 36.4,
    "rsi": 31.2,
    "volSpike": 1.0,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 77.21,
    "s2": 73.14
  },
  {
    "symbol": "COIN",
    "name": "Coinbase",
    "sector": "Financials",
    "price": 160.43,
    "change": 6.46,
    "pct": 4.2,
    "pe": 28.5,
    "rsi": 40.6,
    "volSpike": 0.73,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 152.41,
    "s2": 144.39
  },
  {
    "symbol": "CRWD",
    "name": "CrowdStrike",
    "sector": "Technology",
    "price": 691.53,
    "change": 43.79,
    "pct": 6.76,
    "pe": 72.0,
    "rsi": 60.5,
    "volSpike": 0.89,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 575.24,
    "s2": 499.74
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro",
    "sector": "Technology",
    "price": 31.97,
    "change": 2.7,
    "pct": 9.22,
    "pe": 18.5,
    "rsi": 42.9,
    "volSpike": 3.99,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 4,
    "s1": 30.37,
    "s2": 28.77
  },
  {
    "symbol": "CELH",
    "name": "Celsius",
    "sector": "Consumer Defensive",
    "price": 28.4,
    "change": 0.03,
    "pct": 0.11,
    "pe": 45.0,
    "rsi": 40.0,
    "volSpike": 0.76,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 26.98,
    "s2": 25.56
  },
  {
    "symbol": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "price": 297.88,
    "change": 16.9,
    "pct": 6.01,
    "pe": 38.5,
    "rsi": 42.4,
    "volSpike": 0.82,
    "aboveEma50": false,
    "aboveEma200": true,
    "score": 3,
    "s1": 282.99,
    "s2": 229.88
  },
  {
    "symbol": "NU",
    "name": "Nu Holdings",
    "sector": "Financials",
    "price": 12.09,
    "change": 0.47,
    "pct": 4.04,
    "pe": 28.4,
    "rsi": 42.0,
    "volSpike": 0.7,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 11.49,
    "s2": 10.88
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre",
    "sector": "Consumer Cyclical",
    "price": 1610.0,
    "change": 21.71,
    "pct": 1.37,
    "pe": 46.5,
    "rsi": 43.2,
    "volSpike": 1.2,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 1529.5,
    "s2": 1449.0
  },
  {
    "symbol": "MSTR",
    "name": "MicroStrategy",
    "sector": "Technology",
    "price": 120.15,
    "change": 4.8,
    "pct": 4.16,
    "pe": 95.0,
    "rsi": 34.3,
    "volSpike": 0.94,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 1,
    "s1": 114.14,
    "s2": 108.14
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood",
    "sector": "Financials",
    "price": 92.23,
    "change": 5.87,
    "pct": 6.8,
    "pe": 24.2,
    "rsi": 60.5,
    "volSpike": 1.31,
    "aboveEma50": true,
    "aboveEma200": false,
    "score": 5,
    "s1": 81.65,
    "s2": 83.01
  },
  {
    "symbol": "LUNR",
    "name": "Intuitive Machines",
    "sector": "Industrials",
    "price": 30.64,
    "change": 4.11,
    "pct": 15.49,
    "pe": 15.0,
    "rsi": 47.6,
    "volSpike": 1.25,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 29.71,
    "s2": 19.84
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm",
    "sector": "Technology",
    "price": 202.96,
    "change": 11.76,
    "pct": 6.15,
    "pe": 18.2,
    "rsi": 47.6,
    "volSpike": 0.82,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 4,
    "s1": 193.53,
    "s2": 170.04
  },
  {
    "symbol": "ARM",
    "name": "ARM Holdings",
    "sector": "Technology",
    "price": 342.23,
    "change": 34.8,
    "pct": 11.32,
    "pe": 75.0,
    "rsi": 58.2,
    "volSpike": 0.69,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 258.11,
    "s2": 181.9
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto",
    "sector": "Technology",
    "price": 279.53,
    "change": 16.31,
    "pct": 6.2,
    "pe": 48.0,
    "rsi": 64.8,
    "volSpike": 0.97,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 226.88,
    "s2": 200.23
  },
  {
    "symbol": "NET",
    "name": "Cloudflare",
    "sector": "Technology",
    "price": 227.44,
    "change": 7.77,
    "pct": 3.54,
    "pe": 68.0,
    "rsi": 49.1,
    "volSpike": 0.76,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 220.8,
    "s2": 207.85
  },
  {
    "symbol": "DDOG",
    "name": "Datadog",
    "sector": "Technology",
    "price": 234.24,
    "change": 6.61,
    "pct": 2.9,
    "pe": 54.0,
    "rsi": 60.3,
    "volSpike": 0.79,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 5,
    "s1": 191.05,
    "s2": 156.01
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake",
    "sector": "Technology",
    "price": 240.39,
    "change": 0.49,
    "pct": 0.2,
    "pe": 62.0,
    "rsi": 66.2,
    "volSpike": 0.68,
    "aboveEma50": true,
    "aboveEma200": true,
    "score": 3,
    "s1": 190.29,
    "s2": 199.66
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb",
    "sector": "Consumer Cyclical",
    "price": 130.87,
    "change": 1.77,
    "pct": 1.37,
    "pe": 26.5,
    "rsi": 43.4,
    "volSpike": 0.95,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 124.33,
    "s2": 117.78
  },
  {
    "symbol": "UBER",
    "name": "Uber",
    "sector": "Industrials",
    "price": 69.55,
    "change": 0.94,
    "pct": 1.37,
    "pe": 31.4,
    "rsi": 40.7,
    "volSpike": 1.03,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 0,
    "s1": 66.07,
    "s2": 62.59
  },
  {
    "symbol": "PATH",
    "name": "UiPath",
    "sector": "Technology",
    "price": 10.65,
    "change": -0.1,
    "pct": -0.93,
    "pe": 22.0,
    "rsi": 45.2,
    "volSpike": 0.98,
    "aboveEma50": false,
    "aboveEma200": false,
    "score": 2,
    "s1": 10.12,
    "s2": 9.59
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
