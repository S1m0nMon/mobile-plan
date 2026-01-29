import './style.css'
import { plans, translations } from './plans.js'

let currentLang = 'en';
let currentFilter = 'all';
let selectedPlanId = null;

const elements = {
  productGrid: document.getElementById('product-grid'),
  langBtns: document.querySelectorAll('.lang-btn'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  semesterBanner: document.getElementById('semester-banner'),
  lpBadge: document.getElementById('lp-badge'),
  lpReason: document.getElementById('lp-reason'),
  infoBannerTitle: document.getElementById('info-banner-title'),
  infoBannerDesc: document.getElementById('info-banner-desc'),

  // Modal Elements
  modal: document.getElementById('modal'),
  modalClose: document.getElementById('modal-close'),
  modalHeaderTitle: document.getElementById('modal-header-title'),
  modalSubtitle: document.getElementById('modal-subtitle'),
  modalOriginalPrice: document.getElementById('modal-original-price'),
  modalCurrentPrice: document.getElementById('modal-current-price'),
  modalGuarantee: document.getElementById('modal-guarantee'),
  modalSummaryData: document.getElementById('modal-summary-data'),
  labelSummary: document.getElementById('label-summary'),
  labelSpam: document.getElementById('label-spam'),
  labelApplied: document.getElementById('label-applied'),

  // Tabs
  tabBenefits: document.getElementById('tab-label-benefits'),
  tabDetails: document.getElementById('tab-label-details'),
  tabContentBenefits: document.getElementById('tab-benefits'),
  tabContentDetails: document.getElementById('tab-details'),

  // Benefit Features
  f1Title: document.getElementById('f1-title'),
  f1Desc: document.getElementById('f1-desc'),
  f2Title: document.getElementById('f2-title'),
  f2Desc: document.getElementById('f2-desc'),
  f3Title: document.getElementById('f3-title'),
  f3Desc: document.getElementById('f3-desc'),

  // Detail Specs
  fieldBase: document.getElementById('field-base'),
  fieldQos: document.getElementById('field-qos'),
  fieldTether: document.getElementById('field-tether'),
  fieldCalls: document.getElementById('field-calls'),
  fieldVideo: document.getElementById('field-video'),
  fieldSms: document.getElementById('field-sms'),
  specData: document.getElementById('spec-data'),
  specQos: document.getElementById('spec-qos'),
  specTethering: document.getElementById('spec-tethering'),
  specCalls: document.getElementById('spec-calls'),
  specExtra: document.getElementById('spec-extra'),
  specSms: document.getElementById('spec-sms'),

  // Apply Form
  modalApplyBtn: document.getElementById('modal-apply-btn'),
  applyForm: document.getElementById('apply-form'),
  userEmail: document.getElementById('user-email'),
  applySuccess: document.getElementById('apply-success')
};

function init() {
  updateContent();
  renderProducts();
  setupEventListeners();
}

function updateContent() {
  const t = translations[currentLang];
  elements.semesterBanner.textContent = t.semesterBanner;
  elements.lpBadge.textContent = t.lowestPriceBadge;
  elements.lpReason.textContent = t.lowestPriceReason;
  elements.infoBannerTitle.textContent = t.airportPickup;
  elements.infoBannerDesc.textContent = t.arrivalGuide;

  elements.modalHeaderTitle.textContent = t.modalHeader;
  elements.modalSubtitle.textContent = t.modalSubtitle;
  elements.labelSummary.textContent = `${t.data} / ${t.calls} / SMS`;
  elements.labelSpam.textContent = t.spamProtection;
  elements.labelApplied.textContent = t.applied;

  elements.tabBenefits.textContent = t.tabs.benefits;
  elements.tabDetails.textContent = t.tabs.details;

  elements.f1Title.textContent = t.features.f1Title;
  elements.f1Desc.textContent = t.features.f1Desc;
  elements.f2Title.textContent = t.features.f2Title;
  elements.f2Desc.textContent = t.features.f2Desc;
  elements.f3Title.textContent = t.features.f3Title;
  elements.f3Desc.textContent = t.features.f3Desc;

  elements.fieldBase.textContent = t.fields.baseData;
  elements.fieldQos.textContent = t.fields.qos;
  elements.fieldTether.textContent = t.fields.tethering;
  elements.fieldCalls.textContent = t.fields.calls;
  elements.fieldVideo.textContent = t.fields.video;
  elements.fieldSms.textContent = t.fields.sms;

  elements.modalApplyBtn.textContent = t.applyNow;
  elements.userEmail.placeholder = t.comingSoonDesc;
  elements.applySuccess.textContent = t.successMsg;

  if (elements.filterBtns[0]) elements.filterBtns[0].textContent = currentLang === 'ko' ? '전체' : 'All';
  if (elements.filterBtns[1]) elements.filterBtns[1].textContent = t.youthBadge;
}

function renderProducts() {
  const t = translations[currentLang];
  const filteredPlans = plans.filter(p => {
    if (currentFilter === 'youth') return p.youth === true;
    return true;
  });

  elements.productGrid.innerHTML = filteredPlans.map(p => {
    const discountRate = Math.round((1 - p.price / p.originalPrice) * 100);

    return `
      <div class="product-card ${p.isBest ? 'is-best' : ''}" data-id="${p.id}">
        <div class="product-image-container">
          <div class="rank-badge">${p.rank}</div>
          <div class="data-headline">${p.data === 'Unlimited' ? t.unlimited : p.data}</div>
        </div>
        
        <div class="product-info">
          <div class="product-title">${p.name[currentLang]}</div>
          
          <div class="price-row">
            <span class="price-discount">${discountRate}%</span>
            <span class="price-current">${p.price.toLocaleString()}₩</span>
          </div>
          <div class="price-original-striked">${p.originalPrice.toLocaleString()}₩</div>
          <span class="guarantee-badge">✓ ${t.guarantee}</span>

          <div class="tags-row">
             ${p.isBest ? `<span class="tag-btn best">${t.best}</span>` : ''}
             <span class="tag-btn semester">${t.sale}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      showDetail(card.dataset.id);
    });
  });
}

function showDetail(id) {
  selectedPlanId = id;
  const plan = plans.find(p => p.id === id);
  const t = translations[currentLang];

  elements.modalOriginalPrice.textContent = `${plan.originalPrice.toLocaleString()}₩`;
  elements.modalCurrentPrice.textContent = `${plan.price.toLocaleString()}₩`;
  elements.modalGuarantee.textContent = `✓ ${t.guarantee}`;
  elements.modalSummaryData.textContent = plan.data === 'Unlimited' ? t.unlimited : plan.data;

  elements.specData.textContent = plan.data === 'Unlimited' ? t.unlimited : plan.data;
  elements.specQos.textContent = plan.qos;
  elements.specTethering.textContent = plan.tethering;
  elements.specCalls.textContent = t.unlimited;
  elements.specExtra.textContent = plan.extraCalls;
  elements.specSms.textContent = t.unlimited;

  // Reset form state
  elements.modalApplyBtn.style.display = 'block';
  elements.applyForm.style.display = 'none';
  elements.applySuccess.style.display = 'none';
  elements.userEmail.value = '';

  elements.modal.classList.add('active');
  switchTab('benefits');
}

function switchTab(target) {
  if (target === 'benefits') {
    elements.tabBenefits.classList.add('active');
    elements.tabDetails.classList.remove('active');
    elements.tabContentBenefits.classList.add('active');
    elements.tabContentDetails.classList.remove('active');
  } else {
    elements.tabBenefits.classList.remove('active');
    elements.tabDetails.classList.add('active');
    elements.tabContentBenefits.classList.remove('active');
    elements.tabContentDetails.classList.add('active');
  }
}

function setupEventListeners() {
  elements.langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.dataset.lang;
      updateContent();
      renderProducts();
    });
  });

  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  elements.modalClose.addEventListener('click', () => elements.modal.classList.remove('active'));

  elements.tabBenefits.addEventListener('click', () => switchTab('benefits'));
  elements.tabDetails.addEventListener('click', () => switchTab('details'));

  elements.modalApplyBtn.addEventListener('click', () => {
    elements.modalApplyBtn.style.display = 'none';
    elements.applyForm.style.display = 'flex';
    elements.userEmail.focus();
  });
  elements.applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = elements.userEmail.value;
    const plan = plans.find(p => p.id === selectedPlanId);

    const submitBtn = elements.applyForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'ko' ? '전송 중...' : 'Sending...';
    submitBtn.disabled = true;

    // 📊 Google Analytics 커스텀 이벤트 전송
    if (typeof gtag === 'function') {
      gtag('event', 'notification_request', {
        'plan_id': plan.id,
        'plan_name': plan.name.en,
        'user_email': email,
        'method': 'email_form'
      });
      console.log("GA Event Sent: notification_request");
    }

    // 성공 피드백
    setTimeout(() => {
      elements.applyForm.style.display = 'none';
      elements.applySuccess.style.display = 'block';
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }, 800);
  });

  elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) elements.modal.classList.remove('active');
  });
}

init();
