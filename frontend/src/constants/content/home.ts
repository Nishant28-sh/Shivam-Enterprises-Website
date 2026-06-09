import type { Language } from "@/types";

export interface HomeCopy {
  badge: string;
  h1a: string;
  h1b: string;
  sub: string;
  cta1: string;
  cta2: string;
  s1: string;
  s1l: string;
  s2: string;
  s2l: string;
  s3: string;
  s3l: string;
  farmingTag: string;
  whatTitle: string;
  whatBody: string;
  droneTitle: string;
  droneTitle2: string;
  p1: string;
  p1l: string;
  p2: string;
  p2l: string;
  p3: string;
  p3l: string;
  droneBody: string;
  perf1: string;
  perf1s: string;
  perf2: string;
  perf2s: string;
  perf3: string;
  perf3s: string;
  whoTitle: string;
  w1: string;
  w1s: string;
  w2: string;
  w2s: string;
  w3: string;
  w3s: string;
  howTitle: string;
  step1: string;
  step2: string;
  step3: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSub: string;
  ctaServiceArea: string;
  ctaAddress: string;
  phone1: string;
  phone2: string;
}

export const homeCopy: Record<Language, HomeCopy> = {
  en: {
    badge: "Book | Spray | Pay",
    h1a: "Smart Drone Spraying for",
    h1b: "Faster, Safer Farming",
    sub: "Schedule aerial crop spraying with verified pilots. Get better coverage, lower chemical waste, and faster field turnaround.",
    cta1: "Get A Callback",
    cta2: "View Services",
    s1: "20,000+",
    s1l: "Acres Sprayed",
    s2: "100+",
    s2l: "Drone Partners",
    s3: "1,100+",
    s3l: "Satisfied Farmers",
    farmingTag: "Farming Made Easy",
    whatTitle: "What is Shivam Enterprises?",
    whatBody:
      "Shivam Enterprises is a comprehensive platform for drone spraying in Indian agriculture, making advanced technology accessible to farmers. It empowers rural drone pilots, ensuring efficient, cost-effective, and sustainable farming solutions.",
    droneTitle: "Drone Spraying:",
    droneTitle2: "A Modern Solution for Farmers",
    p1: "90%",
    p1l: "Water Saving",
    p2: "40%",
    p2l: "Input Saving",
    p3: "20%",
    p3l: "Cost Saving",
    droneBody: "Advanced sensors and GPS technology ensures Precise targeting & Equidistribution",
    perf1: "Sprays 50 Acres/Day",
    perf1s: "8x Productivity",
    perf2: "5 Mins",
    perf2s: "For an acre only",
    perf3: "No Human Exposure",
    perf3s: "Safest Spraying Mechanism",
    whoTitle: "Who is it for?",
    w1: "Farmer",
    w1s: "Instant Service, Reduced Cost",
    w2: "Drone Partner",
    w2s: "Start earning more with Shivam Enterprises",
    w3: "Business",
    w3s: "Explore strategic collaborations",
    howTitle: "Drone spraying in three simple steps:",
    step1: "Book via call",
    step2: "Pilot sprays your crops",
    step3: "Pay after completion",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What is the Range of Agriculture Drone Services?",
        a: "Shivam Enterprises supports pesticide spray, nano urea, fungicide spraying across all crop types — paddy, cotton, maize, pulses, mango orchards and more.",
      },
      {
        q: "Whom should I contact to access agricultural drone for crop spraying?",
        a: "Call us on 8502858582 or fill the contact form. Our field coordinator will connect with you to schedule a pilot.",
      },
      {
        q: "How do agricultural drones help me save money?",
        a: "Precision application reduces chemical overlap, lowers water usage by 90%, and completes spraying 8× faster — cutting cost by up to 20%.",
      },
      {
        q: "Are agricultural drones hard to use?",
        a: "No. Shivam Enterprises flights are executed by trained pilots. Farmers only need to share field details and preferred schedule.",
      },
      {
        q: "Which crops can I use agricultural drones on?",
        a: "Maize, bajra, mango orchards, paddy, cotton, wheat, pulses and all horticulture crops.",
      },
      {
        q: "How much does a farming drone service cost?",
        a: "Pricing depends on acreage and crop type. Contact us for a transparent quote before booking.",
      },
    ],
    ctaTitle: "Ready to transform your farm?",
    ctaSub: "Join 1,100+ farmers who already trust Shivam Enterprises",
    ctaServiceArea: "Providing drone spraying services across all of India",
    ctaAddress:
      "SHIVAM ENTERPRISES — Ground Floor, CS-03, 235, Anantraj Assarya, Neemrana, Alwar, Rajasthan – 301705",
    phone1: "8502858582",
    phone2: "8168564013",
  },
  hi: {
    badge: "बुक | स्प्रे | पेमेंट",
    h1a: "स्मार्ट ड्रोन स्प्रे सेवा",
    h1b: "आधुनिक खेती, स्मार्ट किसान!",
    sub: "सत्यापित पायलटों द्वारा एरियल स्प्रे सेवा बुक करें। बेहतर कवरेज, कम रसायन बर्बादी और तेज़ खेत कार्य।",
    cta1: "कॉल बैक लें",
    cta2: "सेवाएं देखें",
    s1: "20,000+",
    s1l: "एकड़ स्प्रे",
    s2: "100+",
    s2l: "ड्रोन पार्टनर",
    s3: "1,100+",
    s3l: "संतुष्ट किसान",
    farmingTag: "खेती हुई आसान",
    whatTitle: "Shivam Enterprises क्या है?",
    whatBody:
      "Shivam Enterprises भारतीय कृषि में ड्रोन स्प्रे के लिए एक संपूर्ण प्लेटफ़ॉर्म है जो उन्नत तकनीक को किसानों के लिए सुलभ बनाता है। यह ग्रामीण ड्रोन पायलटों को सशक्त करता है — कुशल, किफायती और टिकाऊ खेती के लिए।",
    droneTitle: "ड्रोन स्प्रेइंग:",
    droneTitle2: "किसानों के लिए आधुनिक समाधान",
    p1: "90%",
    p1l: "पानी की बचत",
    p2: "40%",
    p2l: "इनपुट बचत",
    p3: "20%",
    p3l: "लागत बचत",
    droneBody: "एडवांस सेंसर और GPS तकनीक से सटीक लक्ष्यीकरण और समान वितरण सुनिश्चित होता है",
    perf1: "50 एकड़/दिन स्प्रे",
    perf1s: "8x उत्पादकता",
    perf2: "5 मिनट",
    perf2s: "प्रति एकड़",
    perf3: "मानव संपर्क नहीं",
    perf3s: "सबसे सुरक्षित स्प्रे प्रणाली",
    whoTitle: "यह किसके लिए है?",
    w1: "किसान",
    w1s: "त्वरित सेवा, कम लागत",
    w2: "ड्रोन पार्टनर",
    w2s: "Shivam Enterprises से अधिक कमाई शुरू करें",
    w3: "व्यवसाय",
    w3s: "रणनीतिक सहयोग का पता लगाएं",
    howTitle: "तीन सरल चरणों में ड्रोन स्प्रे:",
    step1: "कॉल से बुक करें",
    step2: "पायलट आपकी फसल स्प्रे करे",
    step3: "काम पूरा, भुगतान करें",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      {
        q: "कृषि ड्रोन सेवाओं का दायरा क्या है?",
        a: "Shivam Enterprises कीटनाशक, नेनो यूरिया और फफूदनाशक स्प्रे सेवाएं सभी फसलों पर देता है।",
      },
      {
        q: "बुकिंग के लिए किससे संपर्क करें?",
        a: "8502858582 पर कॉल करें या संपर्क फॉर्म भरें।",
      },
      {
        q: "ड्रोन स्प्रे से पैसे कैसे बचते हैं?",
        a: "90% पानी की बचत, दवाई का कम उपयोग और 8 गुना तेज़ काम — कुल लागत 20% तक घट जाती है।",
      },
      {
        q: "क्या ड्रोन उपयोग करना मुश्किल है?",
        a: "नहीं। प्रशिक्षित पायलट उड़ान भरते हैं, किसानों को केवल खेत की जानकारी देनी होती है।",
      },
      {
        q: "किन फसलों पर ड्रोन स्प्रे होता है?",
        a: "मक्का, बाजरा, आम के बगीचे, धान, कपास, गेहूं, दालें और सभी बागवानी फसलें।",
      },
      {
        q: "ड्रोन स्प्रे की लागत क्या है?",
        a: "लागत एकड़ और फसल प्रकार पर निर्भर है। बुकिंग से पहले कोटेशन दिया जाएगा।",
      },
    ],
    ctaTitle: "क्या आप अपने खेत को बदलने के लिए तैयार हैं?",
    ctaSub: "1,100+ किसानों के साथ जुड़ें जो Shivam Enterprises पर भरोसा करते हैं",
    ctaServiceArea: "पूरे भारत में ड्रोन स्प्रे सेवाएं उपलब्ध",
    ctaAddress:
      "SHIVAM ENTERPRISES — ग्राउंड फ्लोर, CS-03, 235, अनंतराज अस्सरया, नीमराना, अलवर, राजस्थान – 301705",
    phone1: "8502858582",
    phone2: "8168564013",
  },
};
