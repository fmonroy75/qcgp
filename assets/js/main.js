document.addEventListener('DOMContentLoaded', () => {
    // footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // Navbar scroll behavior
    const navbar = document.getElementById('mainNavbar');
    const brandLogo = document.getElementById('brandLogo');
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  
    // Smooth scroll for links
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
  
        // hide mobile menu if open
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).hide();
        }
      });
    });
  
    // Typewriter (runs once)
    const typeEl = document.getElementById('typewriter');
    const typeText = "Gestión de proyectos con propósito y sostenibilidad.";
    if (typeEl) {
      let i = 0;
      function typeOnce() {
        if (i < typeText.length) {
          typeEl.textContent += typeText.charAt(i);
          i++;
          setTimeout(typeOnce, 45);
        } else {
          setTimeout(()=> typeEl.style.borderRight = 'none', 400);
        }
      }
      typeOnce();
    }
  
    // Language translations (ES default)
    const translations = {
      es: {
        nav_home: "Inicio", nav_about: "Quiénes Somos", nav_services: "Servicios", nav_mission: "Misión", nav_vision: "Visión", nav_contact: "Contacto",
        hero_sub: "Apoyamos la innovación, el desarrollo y la colaboración sostenible en Québec y más allá.",
        cta_about: "Conócenos",
        about_title: "Quiénes Somos",
        about_text: "Québec Gestion des Projets (QGP) es una organización sin fines de lucro que impulsa proyectos con propósito y sostenibilidad. Ofrecemos formación, acompañamiento técnico, consultorías y programas de reciclaje electrónico para apoyar a emprendedores y comunidades.",
        about_cta: "Ver servicios",
        services_title: "Servicios",
        srv_courses: "Cursos y certificaciones", srv_courses_txt: "PMP, PM, Cisco y formación en idiomas para emprendedores y equipos.",
        srv_web: "Sitios web y acompañamiento", srv_web_txt: "Desarrollo para startups y soporte técnico.",
        srv_trans: "Traducción e interpretación", srv_trans_txt: "Servicios lingüísticos profesionales en ES/FR/EN.",
        srv_recycle: "Reciclaje electrónico", srv_recycle_txt: "Recolección y reacondicionamiento de equipos.",
        mission_title: "Misión", mission_text: "Promover el desarrollo sostenible y la innovación en Quebec mediante la gestión integral de proyectos sociales, tecnológicos y educativos.\nOfrecemos formación profesional, asesoría técnica y soluciones accesibles —desde cursos de certificación hasta reciclaje electrónico— con el fin de apoyar a emprendedores, comunidades y organizaciones a alcanzar sus metas con eficiencia, ética y responsabilidad social.",
        vision_title: "Visión", vision_text: "Ser una organización líder en Quebec en la gestión y acompañamiento de proyectos que impulsen la transformación social, tecnológica y ambiental, reconocida por su compromiso con la excelencia, la inclusión y el desarrollo de una economía circular y solidaria.",
        contact_title: "Contacto", ph_name: "Nombre", ph_email: "Correo", ph_message: "Mensaje", contact_send: "Enviar"
      },
      fr: {
        nav_home: "Accueil", nav_about: "Qui sommes-nous", nav_services: "Services", nav_mission: "Mission", nav_vision: "Vision", nav_contact: "Contact",
        hero_sub: "Nous soutenons l'innovation, le développement et la collaboration durable au Québec et au-delà.",
        cta_about: "Nous connaître",
        about_title: "Qui sommes-nous",
        about_text: "Québec Gestion des Projets (QGP) est une organisation à but non lucratif qui soutient des projets à vocation durable. Nous offrons formation, accompagnement technique, conseils et programmes de recyclage électronique pour aider entrepreneurs et communautés.",
        about_cta: "Voir les services",
        services_title: "Services",
        srv_courses: "Formations et certifications", srv_courses_txt: "PMP, PM, Cisco et formation en langues pour entrepreneurs et équipes.",
        srv_web: "Sites web et accompagnement", srv_web_txt: "Développement pour startups et support technique.",
        srv_trans: "Traduction et interprétation", srv_trans_txt: "Services linguistiques professionnels en FR/EN/ES.",
        srv_recycle: "Recyclage électronique", srv_recycle_txt: "Collecte et remise en état d'équipements.",
        mission_title: "Mission", mission_text: "Promouvoir le développement durable et l'innovation au Québec grâce à la gestion intégrée de projets sociaux, technologiques et éducatifs.\nNous offrons formation professionnelle, conseil technique et solutions accessibles —des cours de certification au recyclage électronique— afin de soutenir entrepreneurs, communautés et organisations à atteindre leurs objectifs avec efficacité, éthique et responsabilité sociale.",
        vision_title: "Vision", vision_text: "Être une organisation leader au Québec en gestion et accompagnement de projets qui stimulent la transformation sociale, technologique et environnementale, reconnue pour son engagement envers l'excellence, l'inclusion et le développement d'une économie circulaire et solidaire.",
        contact_title: "Contact", ph_name: "Nom", ph_email: "Courriel", ph_message: "Message", contact_send: "Envoyer"
      }
    };
  
    function applyLang(lang) {
      // text nodes keyed by data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          const text = translations[lang][key];
          // For mission_text and vision_text, use innerHTML to preserve line breaks
          if (key === 'mission_text' || key === 'vision_text') {
            el.innerHTML = text.replace(/\n/g, '<br>');
          } else {
            el.textContent = text;
          }
        }
      });
      // placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
      });
      // nav links: also update via attribute (in case some nav items lack data-i18n)
      document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-i18n');
        if (key && translations[lang][key]) link.textContent = translations[lang][key];
      });
      // update active label
      const label = document.getElementById('activeLangLabel');
      if (label) label.textContent = lang.toUpperCase();
    }
  
    // default Spanish
    applyLang('es');
  
    // language controls
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        applyLang(lang);
        // close dropdown (Bootstrap)
        const dropdownEl = document.getElementById('langDropdown');
        const dropdownInstance = bootstrap.Dropdown.getInstance(dropdownEl);
        if (dropdownInstance) dropdownInstance.hide();
      });
    });
  
    // contact button visual
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) sendBtn.addEventListener('click', () => {
      alert('Formulario visual — sin envío por ahora.');
    });
  });
  