"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Lang = "en" | "te" | "hi";
type Page = "home" | "solutions" | "about" | "guidance" | "contact";
const WA_NUMBER = "918919647668";

const words = {
 en: {
  home:"Home",solutions:"Solutions",about:"About",guidance:"Guidance",contact:"Contact",cta:"Talk to an advisor",
  eyebrow:"Thoughtful guidance. Meaningful protection.",headline:"Plan for life. Protect what matters.",
  intro:"Clear, personal assistance for life and health insurance — helping you understand your options and take your next step with confidence.",
  explore:"Explore insurance solutions",learn:"Understand before you decide",
  solutionsTitle:"Insurance solutions",solutionsIntro:"Personal assistance for insurance enquiries, subject to applicable agent appointments and authorisations.",
  life:"LIC Life Insurance",lifeText:"Understand life insurance options, policy features, terms and eligibility.",
  term:"LIC Term Insurance",termText:"Discuss protection cover, sum assured, policy term and eligibility.",
  star:"Star Health Insurance",starText:"Understand health cover, waiting periods, exclusions and policy terms.",
  care:"Care Health Insurance",careText:"Enquire about Care Health products, policy information and eligibility.",
  motor:"Motor & General Insurance",motorText:"Ask about vehicle, two-wheeler and selected general insurance needs.",
  aboutTitle:"Personal guidance, built around people.",aboutText:"Balaji Financial & Insurance Services helps individuals and families understand insurance enquiries with clear, personal assistance. Our aim is to understand your needs, explain relevant information and help you identify the next step.",
  aboutNote:"Agent appointments, authorisations and product availability must be confirmed for each applicable service. No unverified credentials or experience claims are made here.",
  guidanceTitle:"From your question to a clearer next step.",guidanceIntro:"A simple conversation can help identify the information you need before making an insurance decision.",
  step1:"Share your needs",step1Text:"Tell us which type of protection you are considering and your general requirements.",
  step2:"Understand the details",step2Text:"Review product information, features, exclusions, eligibility and important terms.",
  step3:"Choose your next step",step3Text:"If you wish to proceed, follow the insurer’s official application or servicing process.",
  contactTitle:"Let’s understand what you need.",contactIntro:"Share a few details. You can continue through WhatsApp or call directly.",
  name:"Your name",phone:"Phone number",service:"Service of interest",message:"Short message (optional)",send:"Continue on WhatsApp",choose:"Choose a service",
  privacy:"Do not submit Aadhaar, PAN, passwords, bank details or complete policy documents through this form.",
  legal:"Balaji Financial & Insurance Services is an insurance assistance business, not an insurer. Products are provided and underwritten by the respective insurers. Availability, premiums, eligibility, policy issuance, coverage and claims are subject to insurer terms and decisions. Read official policy documents before deciding.",
  footer:"Personal assistance for life, health and selected general insurance enquiries."
 },
 te: {
  home:"హోమ్",solutions:"సేవలు",about:"మా గురించి",guidance:"మార్గదర్శకం",contact:"సంప్రదించండి",cta:"సలహాదారునితో మాట్లాడండి",
  eyebrow:"ఆలోచనాత్మక మార్గదర్శకం. అవసరమైన రక్షణ.",headline:"జీవితానికి ప్రణాళిక. ముఖ్యమైన వాటికి రక్షణ.",
  intro:"లైఫ్ మరియు హెల్త్ ఇన్సూరెన్స్ ఎంపికలను అర్థం చేసుకుని సరైన తదుపరి అడుగు వేయడానికి వ్యక్తిగత సహాయం.",
  explore:"ఇన్సూరెన్స్ సేవలను చూడండి",learn:"నిర్ణయం ముందు వివరాలు తెలుసుకోండి",
  solutionsTitle:"ఇన్సూరెన్స్ సేవలు",solutionsIntro:"వర్తించే ఏజెంట్ నియామకాలు మరియు అనుమతులకు లోబడి ఇన్సూరెన్స్ విచారణలకు వ్యక్తిగత సహాయం.",
  life:"LIC లైఫ్ ఇన్సూరెన్స్",lifeText:"లైఫ్ ఇన్సూరెన్స్ ఎంపికలు, పాలసీ లక్షణాలు, నిబంధనలు మరియు అర్హత తెలుసుకోండి.",
  term:"LIC టర్మ్ ఇన్సూరెన్స్",termText:"రక్షణ కవరేజ్, బీమా మొత్తం, పాలసీ కాలం మరియు అర్హత గురించి చర్చించండి.",
  star:"Star Health Insurance",starText:"హెల్త్ కవర్, వెయిటింగ్ పీరియడ్స్, మినహాయింపులు మరియు పాలసీ నిబంధనలు తెలుసుకోండి.",
  care:"Care Health Insurance",careText:"Care Health ఉత్పత్తులు, పాలసీ సమాచారం మరియు అర్హత గురించి విచారించండి.",
  motor:"మోటార్ & జనరల్ ఇన్సూరెన్స్",motorText:"వాహన, ద్విచక్ర వాహన మరియు ఎంపిక చేసిన జనరల్ ఇన్సూరెన్స్ అవసరాల గురించి అడగండి.",
  aboutTitle:"వ్యక్తుల అవసరాలకు అనుగుణంగా వ్యక్తిగత మార్గదర్శకం.",aboutText:"Balaji Financial & Insurance Services వ్యక్తులు మరియు కుటుంబాలకు ఇన్సూరెన్స్ విషయాలను స్పష్టంగా అర్థం చేసుకునేలా వ్యక్తిగత సహాయం అందిస్తుంది. మీ అవసరాన్ని తెలుసుకుని సంబంధిత సమాచారాన్ని వివరించడం మా లక్ష్యం.",
  aboutNote:"సంబంధిత సేవలకు ఏజెంట్ నియామకాలు, అనుమతులు మరియు ఉత్పత్తుల లభ్యత నిర్ధారించాలి. ధృవీకరించని అర్హతలు లేదా అనుభవ వివరాలు ఇక్కడ పేర్కొనలేదు.",
  guidanceTitle:"మీ ప్రశ్న నుంచి స్పష్టమైన తదుపరి అడుగు వరకు.",guidanceIntro:"ఇన్సూరెన్స్ నిర్ణయం ముందు మీకు అవసరమైన సమాచారాన్ని ఒక చిన్న సంభాషణ ద్వారా తెలుసుకోవచ్చు.",
  step1:"మీ అవసరాన్ని చెప్పండి",step1Text:"మీరు పరిశీలిస్తున్న రక్షణ రకం మరియు సాధారణ అవసరాలను పంచుకోండి.",
  step2:"వివరాలను అర్థం చేసుకోండి",step2Text:"ఉత్పత్తి సమాచారం, లక్షణాలు, మినహాయింపులు, అర్హత మరియు ముఖ్యమైన నిబంధనలను పరిశీలించండి.",
  step3:"తదుపరి అడుగు ఎంచుకోండి",step3Text:"కొనసాగించాలనుకుంటే బీమా సంస్థ అధికారిక దరఖాస్తు లేదా సేవా ప్రక్రియను అనుసరించండి.",
  contactTitle:"మీ అవసరాన్ని అర్థం చేసుకుందాం.",contactIntro:"కొన్ని వివరాలు ఇవ్వండి. WhatsApp ద్వారా కొనసాగించవచ్చు లేదా నేరుగా కాల్ చేయవచ్చు.",
  name:"మీ పేరు",phone:"ఫోన్ నంబర్",service:"ఆసక్తి ఉన్న సేవ",message:"చిన్న సందేశం (ఐచ్ఛికం)",send:"WhatsAppలో కొనసాగించండి",choose:"సేవను ఎంచుకోండి",
  privacy:"ఈ ఫారమ్‌లో ఆధార్, PAN, పాస్‌వర్డ్‌లు, బ్యాంక్ వివరాలు లేదా పూర్తి పాలసీ పత్రాలను పంపవద్దు.",
  legal:"Balaji Financial & Insurance Services ఒక ఇన్సూరెన్స్ సహాయ వ్యాపారం మాత్రమే; బీమా సంస్థ కాదు. ఉత్పత్తులు సంబంధిత బీమా సంస్థల ద్వారా అందించబడతాయి. లభ్యత, ప్రీమియం, అర్హత, పాలసీ జారీ, కవరేజ్ మరియు క్లెయిమ్‌లు బీమా సంస్థ నిబంధనలకు లోబడి ఉంటాయి.",
  footer:"లైఫ్, హెల్త్ మరియు ఎంపిక చేసిన జనరల్ ఇన్సూరెన్స్ విచారణలకు వ్యక్తిగత సహాయం."
 },
 hi: {
  home:"होम",solutions:"सेवाएँ",about:"हमारे बारे में",guidance:"मार्गदर्शन",contact:"संपर्क",cta:"सलाहकार से बात करें",
  eyebrow:"सोच-समझकर मार्गदर्शन। सार्थक सुरक्षा।",headline:"जीवन की योजना बनाएं। महत्वपूर्ण चीज़ों की रक्षा करें।",
  intro:"जीवन और स्वास्थ्य बीमा विकल्पों को समझने और अगला कदम चुनने में व्यक्तिगत सहायता।",
  explore:"बीमा सेवाएँ देखें",learn:"निर्णय से पहले समझें",
  solutionsTitle:"बीमा सेवाएँ",solutionsIntro:"लागू एजेंट नियुक्तियों और प्राधिकरणों के अधीन बीमा संबंधी पूछताछ में व्यक्तिगत सहायता।",
  life:"LIC जीवन बीमा",lifeText:"जीवन बीमा विकल्पों, पॉलिसी सुविधाओं, शर्तों और पात्रता को समझें.",
  term:"LIC टर्म इंश्योरेंस",termText:"सुरक्षा कवर, बीमित राशि, पॉलिसी अवधि और पात्रता पर चर्चा करें.",
  star:"Star Health Insurance",starText:"स्वास्थ्य कवर, प्रतीक्षा अवधि, अपवाद और पॉलिसी शर्तें समझें.",
  care:"Care Health Insurance",careText:"Care Health उत्पादों, पॉलिसी जानकारी और पात्रता के बारे में पूछें.",
  motor:"मोटर और सामान्य बीमा",motorText:"वाहन, दोपहिया और चुनिंदा सामान्य बीमा जरूरतों के बारे में पूछें.",
  aboutTitle:"लोगों की जरूरतों के अनुसार व्यक्तिगत मार्गदर्शन.",aboutText:"Balaji Financial & Insurance Services व्यक्तियों और परिवारों को बीमा संबंधी जानकारी स्पष्ट रूप से समझने में व्यक्तिगत सहायता देता है। हमारा उद्देश्य आपकी जरूरत समझना और संबंधित जानकारी बताना है.",
  aboutNote:"प्रत्येक सेवा के लिए लागू एजेंट नियुक्तियों, प्राधिकरण और उत्पाद उपलब्धता की पुष्टि आवश्यक है। यहां अप्रमाणित योग्यता या अनुभव का दावा नहीं किया गया है.",
  guidanceTitle:"आपके सवाल से अगले सही कदम तक.",guidanceIntro:"बीमा निर्णय से पहले जरूरी जानकारी समझने में एक सरल बातचीत मदद कर सकती है.",
  step1:"अपनी जरूरत बताएं",step1Text:"जिस सुरक्षा पर विचार कर रहे हैं और अपनी सामान्य जरूरतें साझा करें.",
  step2:"विवरण समझें",step2Text:"उपलब्ध जानकारी, सुविधाएँ, अपवाद, पात्रता और महत्वपूर्ण शर्तें देखें.",
  step3:"अगला कदम चुनें",step3Text:"आगे बढ़ना चाहें तो बीमाकर्ता की आधिकारिक आवेदन या सेवा प्रक्रिया अपनाएँ.",
  contactTitle:"आइए आपकी जरूरत समझें.",contactIntro:"कुछ विवरण साझा करें। WhatsApp से आगे बढ़ें या सीधे कॉल करें.",
  name:"आपका नाम",phone:"फोन नंबर",service:"सेवा में रुचि",message:"छोटा संदेश (वैकल्पिक)",send:"WhatsApp पर आगे बढ़ें",choose:"सेवा चुनें",
  privacy:"इस फॉर्म में आधार, PAN, पासवर्ड, बैंक विवरण या पूरी पॉलिसी के दस्तावेज़ न भेजें.",
  legal:"Balaji Financial & Insurance Services एक बीमा सहायता व्यवसाय है, बीमा कंपनी नहीं। उत्पाद संबंधित बीमाकर्ताओं द्वारा प्रदान किए जाते हैं। उपलब्धता, प्रीमियम, पात्रता, पॉलिसी जारी करना, कवरेज और क्लेम बीमाकर्ता की शर्तों के अधीन हैं.",
  footer:"जीवन, स्वास्थ्य और चुनिंदा सामान्य बीमा पूछताछ के लिए व्यक्तिगत सहायता."
 }
};

const navItems: { key: keyof typeof words.en; href: string; page: Page }[] = [
 {key:"home",href:"/",page:"home"},{key:"solutions",href:"/solutions",page:"solutions"},
 {key:"about",href:"/about",page:"about"},{key:"guidance",href:"/guidance",page:"guidance"},
 {key:"contact",href:"/contact",page:"contact"}
];

export function SitePage({page}:{page:Page}) {
 const [lang,setLang]=useState<Lang>("en");
 const [menuOpen,setMenuOpen]=useState(false);
 const [notice,setNotice]=useState("");
 const [form,setForm]=useState({name:"",phone:"",service:"",message:""});
 const t=words[lang];
 useEffect(()=>{const saved=window.localStorage.getItem("balaji-site-language") as Lang|null;if(saved&&["en","te","hi"].includes(saved)){setLang(saved);document.documentElement.lang=saved;}},[]);
 function changeLanguage(value:Lang){setLang(value);window.localStorage.setItem("balaji-site-language",value);document.documentElement.lang=value;}
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  if(!form.name.trim()||!form.phone.trim()||!form.service)return;
  const hello={en:"Hello Balaji Financial & Insurance Services. I would like assistance with an insurance enquiry.",te:"నమస్కారం Balaji Financial & Insurance Services. నాకు ఇన్సూరెన్స్ గురించి సహాయం కావాలి.",hi:"नमस्ते Balaji Financial & Insurance Services. मुझे बीमा संबंधी जानकारी चाहिए।"}[lang];
  const msg=hello+"\nName: "+form.name+"\nPhone: "+form.phone+"\nService: "+form.service+"\nMessage: "+(form.message||"-");
  setNotice(lang==="te"?"WhatsAppలో సందేశాన్ని పరిశీలించి పంపండి.":lang==="hi"?"WhatsApp में संदेश की समीक्षा करके भेजें।":"Review your message in WhatsApp before sending.");
  window.open("https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg),"_blank","noopener,noreferrer");
 }
 const services=[["life","lifeText"],["term","termText"],["star","starText"],["care","careText"],["motor","motorText"]] as const;
 return <div className="site">
  <div className="topline"><div className="container topline-inner"><span>Personalised insurance assistance, with clarity and care.</span><span>LIC · Star Health · Care Health</span></div></div>
  <header className="header"><div className="container nav">
   <Link className="brand" href="/"><span className="brand-mark">B</span><span><b>BALAJI</b><small>FINANCIAL &amp; INSURANCE SERVICES</small></span></Link>
   <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen?"✕":"☰"}</button>
   <nav className={menuOpen?"nav-links open":"nav-links"} aria-label="Main navigation">{navItems.map(item=><Link key={item.page} href={item.href} onClick={()=>setMenuOpen(false)} aria-current={page===item.page?"page":undefined}>{t[item.key]}</Link>)}</nav>
   <div className="nav-actions"><select aria-label="Choose language" value={lang} onChange={e=>changeLanguage(e.target.value as Lang)}><option value="en">EN</option><option value="te">తెలుగు</option><option value="hi">हिन्दी</option></select><Link className="button button-dark" href="/contact">{t.cta} ↗</Link></div>
  </div></header>
  <main>
   {page==="home"&&<><section className="hero"><div className="container hero-grid"><div><span className="eyebrow">{t.eyebrow}</span><h1>{t.headline}</h1><p>{t.intro}</p><div className="actions"><Link className="button button-gold" href="/solutions">{t.explore} ↗</Link><Link className="button button-outline" href="/guidance">{t.learn}</Link></div><small className="hero-disclosure">Insurance assistance through applicable agent appointments and product authorisations.</small></div><div className="hero-art"><div className="orbit"><div className="monogram"><b>B.</b><small>PROTECTION · PLANNING</small></div></div><span className="float-card float-one">Life &amp; family<br/><b>Protection planning</b></span><span className="float-card float-two">Health &amp; wellbeing<br/><b>Cover guidance</b></span></div></div></section><section className="section"><div className="container"><div className="section-heading"><span className="kicker">OUR APPROACH</span><h2>{t.solutionsTitle}</h2><p>{t.solutionsIntro}</p></div><div className="feature-grid">{services.slice(0,3).map(([name,desc],i)=><article key={name}><span>0{i+1}</span><h3>{t[name]}</h3><p>{t[desc]}</p></article>)}</div></div></section></>}
   {page==="solutions"&&<section className="section page-section"><div className="container"><div className="section-heading"><span className="kicker">INSURANCE SOLUTIONS</span><h1>{t.solutionsTitle}</h1><p>{t.solutionsIntro}</p></div><div className="service-grid">{services.map(([name,desc],i)=><article className="service-card" key={name}><span className="service-index">0{i+1} / INSURANCE</span><h2>{t[name]}</h2><p>{t[desc]}</p><Link href="/contact">Discuss your needs ↗</Link></article>)}</div></div></section>}
   {page==="about"&&<section className="section page-section"><div className="container narrow"><span className="kicker">ABOUT THE BUSINESS</span><h1>{t.aboutTitle}</h1><p className="lead">{t.aboutText}</p><div className="notice">{t.aboutNote}</div><Link className="button button-dark" href="/contact">{t.cta} ↗</Link></div></section>}
   {page==="guidance"&&<section className="section page-section"><div className="container"><div className="section-heading"><span className="kicker">A CLEAR PROCESS</span><h1>{t.guidanceTitle}</h1><p>{t.guidanceIntro}</p></div><div className="steps">{[1,2,3].map(i=><article key={i}><span>0{i}</span><h2>{t[("step"+i) as "step1"|"step2"|"step3"]}</h2><p>{t[("step"+i+"Text") as "step1Text"|"step2Text"|"step3Text"]}</p></article>)}</div></div></section>}
   {page==="contact"&&<section className="section page-section"><div className="container contact-grid"><div><span className="kicker">START A CONVERSATION</span><h1>{t.contactTitle}</h1><p className="lead">{t.contactIntro}</p><a className="contact-link" href={"https://wa.me/"+WA_NUMBER} target="_blank" rel="noreferrer">WhatsApp ↗</a><a className="contact-link" href={"tel:+"+WA_NUMBER}>Call the advisor ↗</a></div><form className="form-card" onSubmit={submit}><h2>Website enquiry</h2><label>{t.name}<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} autoComplete="name"/></label><label>{t.phone}<input required type="tel" inputMode="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} autoComplete="tel"/></label><label>{t.service}<select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">{t.choose}</option><option>LIC Life Insurance</option><option>LIC Term Insurance</option><option>Star Health Insurance</option><option>Care Health Insurance</option><option>Motor / General Insurance</option></select></label><label>{t.message}<textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="button button-gold" type="submit">{t.send} ↗</button><p className="fineprint">{t.privacy}</p>{notice&&<p className="toast" role="status">{notice}</p>}</form></div></section>}
  </main>
  <footer className="footer"><div className="container footer-grid"><div><Link className="brand brand-footer" href="/"><span className="brand-mark">B</span><span><b>BALAJI</b><small>FINANCIAL &amp; INSURANCE SERVICES</small></span></Link><p>{t.footer}</p></div><div><b>EXPLORE</b>{navItems.slice(1).map(item=><Link key={item.page} href={item.href}>{t[item.key]}</Link>)}</div><div><b>IMPORTANT INFORMATION</b><p>{t.legal}</p></div></div><div className="container copyright">© {new Date().getFullYear()} Balaji Financial &amp; Insurance Services. All rights reserved.</div></footer>
  <div className="floating-actions"><a href={"https://wa.me/"+WA_NUMBER} target="_blank" rel="noreferrer" aria-label="WhatsApp">W</a><a href={"tel:+"+WA_NUMBER} aria-label="Call">☎</a></div>
 </div>;
}