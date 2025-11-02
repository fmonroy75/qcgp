/* main.js
   - typewriter (runs once)
   - navbar color change on scroll
   - smooth scroll for .scroll-link
   - language toggle (ES/FR) updating text via data map
   - contact button (visual)
*/

document.addEventListener('DOMContentLoaded', () => {
  // ---------- year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Navbar behavior ----------
  const navbar = document.getElementById('mainNavbar');
  const adjustNavbar = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  adjustNavbar();
  window.addEventListener('scroll', adjustNavbar);

  // ---------- Smooth scroll for nav links ----------
  document.querySelectorAll('.scroll-link, .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const offset = navbar.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // close collapsed menu on mobile
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapse).hide();
      }
    });
  });

  // ---------- Typewriter effect (once) ----------
  const typeEl = document.getElementById('typewriter');
  const typeText = "Gestión de proyectos con propósito y sostenibilidad.";
  if (typeEl) {
    let i = 0;
    function typeOnce() {
      if (i < typeText.length) {
        typeEl.textContent += typeText.charAt(i);
        i++;
        setTimeout(typeOnce, 50);
      } else {
        // stop cursor after short delay
        setTimeout(()=> typeEl.style.borderRight = 'none', 400);
      }
    }
    typeOnce();
  }

  // ---------- Language toggle (ES/FR) ----------
  const translations = {
    es: {
      nav_home: "Inicio", nav_about: "Quiénes Somos", nav_services: "Servicios", nav_mission: "Misión", nav_vision: "Visión", nav_contact: "Contacto",
      hero_sub: "Apoyamos la innovación, el desarrollo y la colaboración sostenible en Québec y más allá.",
      cta_about: "Conócenos",
      about_title: "Quiénes Somos",
      about_text: "Québec Gestion des Projets (QGP) es una organización sin fines de lucro que impulsa proyectos con propósito y sostenibilidad. Ofrecemos formación, acompañamiento técnico, consultorías y programas de reciclaje electrónico para apoyar a emprendedores y comunidades.",
      services_title: "Servicios",
      srv_courses: "Cursos y certificaciones", srv_courses_txt: "PMP, PM, Cisco y formación en idiomas para emprendedores y equipos.",
      srv_web: "Sitios web y acompañamiento", srv_web_txt: "Desarrollo para startups y soporte técnico.",
      srv_trans: "Traducción e interpretación", srv_trans_txt: "Servicios lingüísticos profesionales en ES/FR/EN.",
      srv_recycle: "Reciclaje electrónico", srv_recycle_txt: "Recolección y reacondicionamiento de equipos.",
      mission_title: "Misión", mission_text: "Promover el desarrollo sostenible y la innovación en Québec mediante la gestión integral de proyectos, la formación y el acompañamiento a emprendedores.",
      vision_title: "Visión", vision_text: "Ser referentes en Québec en gestión y acompañamiento de emprendedores con impacto social y ambiental.",
      contact_title: "Contacto", ph_name: "Nombre", ph_email: "Correo", ph_message: "Mensaje", contact_send: "Enviar"
    },
    fr: {
      nav_home: "Accueil", nav_about: "Qui sommes-nous", nav_services: "Services", nav_mission: "Mission", nav_vision: "Vision", nav_contact: "Contact",
      hero_sub: "Nous soutenons l'innovation, le développement et la collaboration durable au Québec et au-delà.",
      cta_about: "Nous connaître",
      about_title: "Qui sommes-nous",
      about_text: "Québec Gestion des Projets (QGP) est une organisation à but non lucratif qui soutient des projets à vocation durable. Nous offrons formation, accompagnement technique, conseils et programmes de recyclage électronique pour aider entrepreneurs et communautés.",
      services_title: "Services",
      srv_courses: "Formations et certifications", srv_courses_txt: "PMP, PM, Cisco et formation en langues pour entrepreneurs et équipes.",
      srv_web: "Sites web et accompagnement", srv_web_txt: "Développement pour startups et support technique.",
      srv_trans: "Traduction et interprétation", srv_trans_txt: "Services linguistiques professionnels en FR/EN/ES.",
      srv_recycle: "Recyclage électronique", srv_recycle_txt: "Collecte et remise en état d'équipements.",
      mission_title: "Mission", mission_text: "Promouvoir le développement durable et l'innovation au Québec grâce à la gestion intégrée de projets, la formation et l'accompagnement des entrepreneurs.",
      vision_title: "Vision", vision_text: "Être une référence au Québec en gestion et accompagnement d'entrepreneurs à impact social et environnemental.",
      contact_title: "Contact", ph_name: "Nom", ph_email: "Courriel", ph_message: "Message", contact_send: "Envoyer"
    }
  };

  // function to apply language
  function applyLang(lang) {
    // text nodes keyed by data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
    });
    // update active label
    const label = document.getElementById('activeLangLabel');
    if (label) label.textContent = lang.toUpperCase();
  }

  // default Spanish
  applyLang('es');

  // language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      applyLang(lang);
    });
  });

  // contact button (visual)
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.addEventListener('click', () => {
    alert('Formulario visual — sin envío real por ahora.');
  });
});
