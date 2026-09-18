'use strict';
const english = {
"ecGmv":"PRODUCT GMV GROWTH",
"ecPeriod":"Jan–Jun 2018 vs. Jan–Jun 2017",
"ecVisualNote":"Growth and operations, side by side.",
"ecLabel":"CASE STUDY · SQL & BUSINESS INTELLIGENCE",
"ecTitle":"Sales value grew. Did operations keep up?",
"ecDesc":"An analysis of 99,441 orders from Olist’s public dataset, connecting growth, deliveries and customer reviews to investigate the health of an e-commerce operation.",
"ecMethod1":"Order-level modeling to prevent duplicated metrics.",
"ecMethod2":"A dashboard with period and state filters, SQL queries and an executive report.",
"ecMetricGmv":"Product GMV",
"ecLate17":"Late deliveries · H1 2017",
"ecLate18":"Late deliveries · H1 2018",
"ecNote":"Comparison of January–June 2017 and 2018. GMV is the value of products sold, excluding shipping; it is neither revenue nor profit. Descriptive findings, without causal inference.",

skip:'Skip to content',navProjects:'Projects',navAbout:'About',navJourney:'Journey',navContact:'Contact',heroTitle:'Behind every<br>number, a<br><em>possibility.</em>',intro:"I'm Vinicius Neves. I connect data, context and curiosity to understand problems — from business operations to decisions in sports.",seeProjects:'Explore my projects',student:'Data Science · Mackenzie',artLabel:'DATA + CONTEXT',illustration:'ILLUSTRATIVE VISUAL',projectsLabel:'01 / PROJECTS',projectsTitle:'From questions to analysis.',projectsIntro:'Projects that bring data closer to real decisions.',visualNote:'Exploring potential beyond the box score.',featured:'FEATURED PROJECT · SPORTS ANALYTICS',projectTitle:'Who could take the next leap?',projectDesc:'An NBA scouting project that uses historical data to identify young players with breakout potential and project their scoring in the following season.',method1:'From data collection to an interactive dashboard.',method2:'Time-based validation and an explainable player ranking.',lift:'Top-decile lift',mae:'MAE · points/game',metricNote:'Holdout results reported in the repository. A screening tool that complements human evaluation.',exploreProject:'Explore the project on GitHub',allProjects:'All repositories',aboutLabel:'02 / ABOUT ME',aboutTitle:'Curiosity as a<br>starting point.',aboutLead:'I like understanding what is happening — and, above all, why.',aboutText:'I study Data Science at Mackenzie Presbyterian University and work in Operations at Parafuzo, with data, indicators and process analysis. This experience keeps me close to the practical questions an analysis needs to answer.',aboutSports:'I have a broad knowledge of sports and an interest in different disciplines, their dynamics and strategies. I connect this perspective with data analysis to explore performance, identify patterns and turn statistics into useful insights within the context of each sport.',focusLabel:'AREAS OF INTEREST',journeyLabel:'03 / JOURNEY & TOOLS',journeyTitle:'Learn. Apply. Improve.',current:'CURRENTLY',role:'Operations · Data and processes',workDesc:'Analyzing operational indicators, organizing information and supporting process improvements.',graduation:'EXPECTED GRADUATION · 2028',degree:'Data Science',degreeDesc:'Degree in progress, connecting data studies with hands-on projects.',toolkitLabel:'TOOLS I USE AND STUDY',analysis:'Analysis & preparation',visualization:'Visualization & applications',sheets:'Spreadsheets',models:'Modeling & development',contactLabel:"04 / LET'S CONNECT",contactTitle:'Good questions.<br><em>New connections.</em>',contactText:"Interested in data, professional opportunities or a sports analytics idea? Let's connect.",contactButton:'Send me an email',footer:'São Paulo, Brazil · Made with curiosity.',top:'Back to top ↑'
};
const nodes=[...document.querySelectorAll('[data-i]')];
const portuguese=Object.fromEntries(nodes.map(el=>[el.dataset.i,el.innerHTML]));
function setLanguage(lang){
const en=lang==='en',dictionary=en?english:portuguese;
nodes.forEach(el=>{if(dictionary[el.dataset.i]!==undefined)el.innerHTML=dictionary[el.dataset.i];});
document.documentElement.lang=en?'en':'pt-BR';
document.title=en?'Vinicius Neves — Data & Sports Analytics':'Vinicius Neves — Dados & Sports Analytics';
document.querySelector('meta[name="description"]').content=en?'Vinicius Neves Santana — Data Science student, operational analysis and sports analytics. Explore my projects.':'Vinicius Neves Santana — estudante de Ciência de Dados, análise operacional e sports analytics. Conheça meus projetos.';
document.querySelector('nav').setAttribute('aria-label',en?'Main navigation':'Principal');
document.querySelector('.brand').setAttribute('aria-label',en?'Vinicius Neves — home':'Vinicius Neves — início');
document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
try{localStorage.setItem('vn-language',lang);}catch{}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
let saved;try{saved=localStorage.getItem('vn-language');}catch{}
const requested=new URLSearchParams(location.search).get('lang');
setLanguage((requested||saved)==='en'?'en':'pt');
document.getElementById('year').textContent=new Date().getFullYear();
