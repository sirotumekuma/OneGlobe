const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

document.getElementById('year').textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

primaryNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach((faq) => {
      faq.classList.remove('active');
      faq.querySelector('button').setAttribute('aria-expanded', 'false');
    });
    if (!wasActive) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const translations = {
  en: {
    pageTitle: "OneGlobe | One World. One Community.",
    metaDescription: "OneGlobe is an international Discord community where people connect across languages and cultures.",
    ogTitle: "OneGlobe - One World. One Community.",
    ogDescription: "Connecting people, cultures, and worlds through meaningful conversation.",
    navHome: "Home", navAbout: "About", navCommunity: "Community", navGuidelines: "Guidelines", navFaq: "FAQ", navJoin: "Join Discord",
    heroEyebrow: "International community",
    heroTitle: "One World.<br><em>One Community.</em>",
    heroLead: "Connecting People, Connecting Worlds.",
    heroDescription: "Meet people across cultures, exchange languages, and share the moments that make our world feel closer.",
    joinDiscord: "Join our Discord", explore: "Explore OneGlobe",
    globalCommunity: "A global community", openToAll: "Open to every background",
    aboutTitle: "A place where every voice<br>belongs.",
    aboutIntro: "OneGlobe is an international community built for curiosity, kindness, and real connection.",
    aboutBody: "We bring people together from different countries and cultures to learn from one another through everyday conversation.",
    value1Title: "Connect globally", value1Body: "Meet people and discover perspectives from around the world.",
    value2Title: "Learn together", value2Body: "Practice languages and grow in a supportive, beginner-friendly space.",
    value3Title: "Understand cultures", value3Body: "Share traditions, stories, food, and the things that shape you.",
    communityTitle: "Find what brings you together.", communityLead: "One community, many ways to connect.",
    card1Title: "Language Exchange", card1Body: "Practice a new language, improve together, and help someone else learn yours.",
    card2Title: "Culture & Stories", card2Body: "Share the food, traditions, places, and stories that make your world unique.",
    card3Title: "Events & Activities", card3Body: "Join casual calls, games, watch parties, and events that keep our community active.",
    card4Title: "Global Community", card4Body: "Connect with welcoming members across every timezone and from every background.",
    guidelinesTitle: "Built on respect.<br>Made for everyone.",
    guidelinesLead: "Our community works because we protect a welcoming space for all.",
    guidelinesLink: "Full rules are available in Discord",
    rule1: "Respect every member.", rule2: "No harassment, discrimination, or bullying.",
    rule3: "Never share personal information publicly.", rule4: "No spam, scams, or harmful links.",
    rule5: "Keep conversations in the right channels.", rule6: "Follow Discord's Terms of Service.",
    faqTitle: "Questions?<br>We've got you.",
    faq1Question: "Can I join if I don't speak English well?", faq1Answer: "Absolutely. OneGlobe welcomes beginners and speakers of every language. Our community is about learning and improving together.",
    faq2Question: "Can I select multiple language roles?", faq2Answer: "Yes. Choose the roles that match the languages you speak and the languages you want to practice.",
    faq3Question: "Is a country or region role required?", faq3Answer: "No. Country and region roles are optional, and you can choose not to select one if you prefer.",
    faq4Question: "How do I join OneGlobe?", faq4Answer: "Choose “Join Discord” anywhere on this page, accept the invitation, and follow the welcome steps inside the server.",
    joinKicker: "The world is closer than you think", joinTitle: "Your next connection<br>starts here.",
    joinDescription: "Bring your language, your culture, and your curiosity.<br>There is a place for you in OneGlobe.",
    joinButton: "Join OneGlobe on Discord", footerTagline: "One World. One Community.",
    rights: "All rights reserved.", contact: "Contact: Discord DM"
  },
  ja: {
    pageTitle: "OneGlobe | One World. One Community.",
    metaDescription: "OneGlobeは、言語や文化を超えて交流できる国際Discordコミュニティです。",
    ogTitle: "OneGlobe - One World. One Community.",
    ogDescription: "会話を通して、人・文化・世界をつなぐコミュニティです。",
    navHome: "ホーム", navAbout: "概要", navCommunity: "コミュニティ", navGuidelines: "ガイドライン", navFaq: "よくある質問", navJoin: "Discordに参加",
    heroEyebrow: "国際コミュニティ",
    heroTitle: "One World.<br><em>One Community.</em>",
    heroLead: "Connecting People, Connecting Worlds.",
    heroDescription: "文化や言語を越えて出会い、世界をより身近に感じる時間を共有しましょう。",
    joinDiscord: "Discordに参加", explore: "OneGlobeを見る",
    globalCommunity: "世界中のコミュニティ", openToAll: "あらゆる背景の人を歓迎",
    aboutTitle: "すべての声が<br>属する場所。",
    aboutIntro: "OneGlobeは、好奇心と優しさ、本当のつながりを大切にする国際コミュニティです。",
    aboutBody: "さまざまな国や文化の人々が、日々の会話を通して互いに学び合える場です。",
    value1Title: "世界とつながる", value1Body: "世界中の人々と出会い、新しい価値観に触れることができます。",
    value2Title: "一緒に学ぶ", value2Body: "初心者にもやさしい環境で、さまざまな言語を練習できます。",
    value3Title: "文化を理解する", value3Body: "伝統、物語、食文化など、それぞれの背景を共有できます。",
    communityTitle: "共通点からつながる場所。", communityLead: "ひとつのコミュニティ、さまざまな交流。",
    card1Title: "言語交換", card1Body: "新しい言語を練習し、互いに学びながら語学力を高めましょう。",
    card2Title: "文化と物語", card2Body: "食文化、伝統、地域、あなたの世界を形づくる物語を共有できます。",
    card3Title: "イベントと活動", card3Body: "通話、ゲーム、視聴会など、コミュニティを盛り上げるイベントに参加できます。",
    card4Title: "グローバルコミュニティ", card4Body: "どのタイムゾーンからでも、あらゆる背景を持つ仲間と交流できます。",
    guidelinesTitle: "尊重を基盤に。<br>すべての人へ。",
    guidelinesLead: "すべての人が安心して参加できる場を守ることが、コミュニティを支えます。",
    guidelinesLink: "正式なルールはDiscordで確認できます",
    rule1: "すべてのメンバーを尊重する。", rule2: "誹謗中傷、差別、嫌がらせを禁止する。",
    rule3: "個人情報を公開しない。", rule4: "スパム、詐欺、悪質なリンクを禁止する。",
    rule5: "チャンネルの用途を守る。", rule6: "Discordの利用規約を遵守する。",
    faqTitle: "ご質問はありますか？<br>お答えします。",
    faq1Question: "英語が得意でなくても参加できますか？", faq1Answer: "もちろん参加できます。初心者やあらゆる言語の話者を歓迎しています。一緒に学び、成長するコミュニティです。",
    faq2Question: "複数の言語ロールを選択できますか？", faq2Answer: "はい。話せる言語や練習したい言語に合わせて、複数選択できます。",
    faq3Question: "国・地域ロールは必須ですか？", faq3Answer: "いいえ。国・地域ロールは任意です。選択したくない場合は選ばなくても構いません。",
    faq4Question: "OneGlobeへの参加方法は？", faq4Answer: "このページの「Discordに参加」を選び、招待を承認してサーバー内の案内に従ってください。",
    joinKicker: "世界は思っているより近い", joinTitle: "次のつながりは、<br>ここから。",
    joinDescription: "言葉や文化、好奇心を持って参加してください。<br>あなたの居場所があります。",
    joinButton: "DiscordでOneGlobeに参加", footerTagline: "One World. One Community.",
    rights: "All rights reserved.", contact: "お問い合わせ：Discord DM"
  }
};

const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageButtons = document.querySelectorAll('[data-language]');

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });
  document.querySelectorAll('[data-i18n-meta]').forEach((element) => {
    const key = element.dataset.i18nMeta;
    if (dictionary[key]) element.setAttribute('content', dictionary[key]);
  });
  document.querySelector('.language-current').textContent = language === 'ja' ? 'JP' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'ja' ? '言語を変更' : 'Change language');
  languageMenu.setAttribute('aria-label', language === 'ja' ? '言語' : 'Language');
  localStorage.setItem('oneglobe-language', language);
}

languageToggle.addEventListener('click', () => {
  const open = languageMenu.classList.toggle('open');
  languageToggle.setAttribute('aria-expanded', String(open));
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
    languageMenu.classList.remove('open');
    languageToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-toggle') && !event.target.closest('.language-menu')) {
    languageMenu.classList.remove('open');
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});

const savedLanguage = localStorage.getItem('oneglobe-language');
const browserLanguage = navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en';
applyLanguage(savedLanguage || browserLanguage);
