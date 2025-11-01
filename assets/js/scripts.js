// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Language data (ES default)
    const translations = {
      es: {
        nav_inicio: "Inicio",
        nav_nosotros: "Quiénes Somos",
        nav_servicios: "Servicios",
        nav_proyectos: "Proyectos",
        nav_contacto: "Contacto",
        hero_title: "Gestión y acompañamiento de proyectos en Québec",
        hero_sub: "Formación, apoyo tecnológico y reciclaje electrónico para emprendedores y comunidades.",
        cta_contact: "Contáctanos",
        nos_titulo: "Quiénes Somos",
        nos_text: "Somos una organización sin fines de lucro dedicada a la gestión de proyectos sociales, tecnológicos y educativos. Promovemos el desarrollo sostenible mediante formación, acompañamiento técnico y programas de reciclaje electrónico.",
        mision_t: "Misión",
        mision: "Promover el desarrollo sostenible y la innovación en Québec mediante la gestión integral de proyectos y la formación.",
        vision_t: "Visión",
        vision: "Ser reconocidos en Québec por nuestro acompañamiento a emprendedores y proyectos de impacto social.",
        valores_t: "Valores",
        valores: "Confianza · Excelencia · Respeto · Transparencia · Integridad · Sostenibilidad",
        serv_titulo: "Nuestros Servicios",
        serv1_t: "Cursos y certificaciones",
        serv1: "PMP, PM, Cisco y formación en idiomas para fortalecer competencias.",
        serv2_t: "Sitios web y apoyo digital",
        serv2: "Desarrollo web para startups y soporte técnico para emprendedores.",
        serv3_t: "Reciclaje electrónico",
        serv3: "Recolección, reparación y redistribución de equipos a bajo costo para quienes lo necesiten.",
        proj_t: "Proyectos",
        proj_text: "Colaboramos con comunidades, empresas e instituciones en iniciativas educativas, tecnológicas y ambientales.",
        contact_t: "Contáctanos",
        contact_name: "Nombre / Nom",
        contact_email: "Correo / Courriel",
        contact_message: "Mensaje / Message",
        contact_send: "Enviar"
      },
      fr: {
        nav_inicio: "Accueil",
        nav_nosotros: "À propos",
        nav_servicios: "Services",
        nav_proyectos: "Projets",
        nav_contacto: "Contact",
        hero_title: "Gestion et accompagnement de projets au Québec",
        hero_sub: "Formation, soutien technologique et recyclage électronique pour entrepreneurs et communautés.",
        cta_contact: "Nous contacter",
        nos_titulo: "Qui sommes-nous",
        nos_text: "Nous sommes une organisation à but non lucratif dédiée à la gestion de projets sociaux, technologiques et éducatifs. Nous promouvons le développement durable par la formation, l'accompagnement technique et des programmes de recyclage électronique.",
        mision_t: "Mission",
        mision: "Promouvoir le développement durable et l'innovation au Québec grâce à la gestion intégrale de projets et à la formation.",
        vision_t: "Vision",
        vision: "Être reconnus au Québec pour notre accompagnement des entrepreneurs et des projets à impact social.",
        valores_t: "Valeurs",
        valores: "Confiance · Excellence · Respect · Transparence · Intégrité · Durabilité",
        serv_titulo: "Nos Services",
        serv1_t: "Formations et certifications",
        serv1: "PMP, PM, Cisco et formation en langues pour renforcer les compétences.",
        serv2_t: "Sites web et soutien digital",
        serv2: "Développement web pour startups et assistance technique pour entrepreneurs.",
        serv3_t: "Recyclage électronique",
        serv3: "Collecte, réparation et redistribution d'équipements à bas coût pour ceux qui en ont besoin.",
        proj_t: "Projets",
        proj_text: "Nous collaborons avec des communautés, entreprises et institutions sur des initiatives éducatives, technologiques et environnementales.",
        contact_t: "Contactez-nous",
        contact_name: "Nombre / Nom",
        contact_email: "Courriel",
        contact_message: "Message",
        contact_send: "Envoyer"
      }
    };
  
    // Utility to apply selected language
    function applyLang(lang) {
      const nodes = document.querySelectorAll('[data-lang-key]');
      nodes.forEach(n => {
        const key = n.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) n.textContent = translations[lang][key];
      });
  
      // placeholders
      const phNodes = document.querySelectorAll('[data-lang-key-placeholder]');
      phNodes.forEach(n => {
        const key = n.getAttribute('data-lang-key-placeholder');
        if (translations[lang] && translations[lang][key]) n.placeholder = translations[lang][key];
      });
  
      // Update active button styles
      document.getElementById('lang-es').classList.toggle('active', lang === 'es');
      document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
      document.getElementById('off-lang-es') && document.getElementById('off-lang-es').classList.toggle('active', lang === 'es');
      document.getElementById('off-lang-fr') && document.getElementById('off-lang-fr').classList.toggle('active', lang === 'fr');
    }
  
    // Default Spanish
    applyLang('es');
  
    // Language buttons
    document.getElementById('lang-es').addEventListener('click', () => applyLang('es'));
    document.getElementById('lang-fr').addEventListener('click', () => applyLang('fr'));
    document.getElementById('off-lang-es') && document.getElementById('off-lang-es').addEventListener('click', () => applyLang('es'));
    document.getElementById('off-lang-fr') && document.getElementById('off-lang-fr').addEventListener('click', () => applyLang('fr'));
  
    // Smooth scroll for links with .scroll-to
    document.querySelectorAll('a[href^="#"].scroll-to, .nav-link').forEach(link => {
      link.addEventListener('click', function(e){
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        e.preventDefault();
        const t = document.querySelector(targetId);
        if (!t) return;
        const rectTop = t.getBoundingClientRect().top + window.pageYOffset - 80; // offset for sticky nav
        window.scrollTo({ top: rectTop, behavior: 'smooth' });
        // close offcanvas if open (mobile)
        const off = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasMenu'));
        if (off) off.hide();
      });
    });
  
    // Contact button (visual)
    document.getElementById('sendBtn').addEventListener('click', () => {
      alert('Formulario visual — sin envío real por ahora.');
    });
  
  });
  