/* =========================================================
   Jose Carvajal — main.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- AOS (animación al scroll) ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80, disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches });
  }

  /* ---------- GLightbox (galería interactiva) ---------- */
  if (window.GLightbox) {
    GLightbox({ selector: '.glightbox', touchNavigation: true, closeButton: true });
  }

  /* ---------- Navbar: fondo al hacer scroll ---------- */
  const nav = document.getElementById('mainNav');
  const onScrollNav = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav);

  /* ---------- Botón ScrollTop ---------- */
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Cerrar menú móvil al hacer clic en un enlace ---------- */
  const navCollapse = document.getElementById('navItems');
  document.querySelectorAll('#navItems .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });

  /* =========================================================
     CAMBIO DE IDIOMA ESPAÑOL <-> INGLÉS
     ========================================================= */
  const translations = {
    es: {
      nav_home: 'Inicio', nav_about: 'Sobre mí', nav_skills: 'Tecnologías', nav_projects: 'Proyectos', nav_contact: 'Contacto',
      hero_eyebrow: '// Backend Developer',
      hero_lead: 'Construyo la lógica y la arquitectura que sostienen las aplicaciones: APIs, bases de datos y sistemas que funcionan bajo presión.',
      hero_cta1: 'Ver proyectos', hero_cta2: 'Descargar CV',
      about_eyebrow: '// Sobre mí',
      about_title: 'Desarrollador backend en formación, con mentalidad de sistema',
      about_p1: 'Soy estudiante de Ingeniería del Software en la Universidad Cenfotec y desarrollador backend. Me enfoco en el diseño de la lógica de negocio, la estructura de datos y la arquitectura que hay detrás de cada aplicación: lo que el usuario no ve pero es lo que sostiene todo.',
      about_p2: 'Trabajo principalmente con Java y Spring Boot, además de .NET, diseñando y consumiendo APIs REST sobre bases de datos relacionales. Más allá de lo técnico, me caracterizo por la responsabilidad, la organización y el aprendizaje constante, y disfruto trabajar en equipo para construir soluciones que resuelvan un problema real.',
      about_stat1: 'Proyectos', about_stat2: 'Idiomas', about_stat3: 'APIs', about_stat4: 'Costa Rica',
      skills_eyebrow: '// Stack técnico', skills_title: 'Tecnologías y habilidades',
      skills_backend: 'Backend', skills_db: 'Bases de datos', skills_front: 'Frontend & Tools', skills_soft: 'Habilidades blandas',
      skills_soft1: 'Pensamiento analítico', skills_soft2: 'Responsabilidad', skills_soft3: 'Trabajo en equipo', skills_soft4: 'Aprendizaje constante',
      projects_eyebrow: '// Galería', projects_title: 'Proyectos destacados',
      projects_sub: 'Trabajos desarrollados durante mi formación. Hacé clic en cada uno para ver el detalle.',
      p1_title: 'API REST de Gestión de Tareas',
      p1_desc: 'API REST construida con arquitectura por capas para la gestión de tareas: operaciones CRUD completas, validaciones, manejo de excepciones y endpoints documentados. Persistencia sobre PostgreSQL mediante JPA/Hibernate.',
      p2_title: 'Sistema de Gestión de Inventario',
      p2_desc: 'Aplicación para el control de inventario desarrollada con .NET y SQL Server: control de stock, registro de movimientos de entrada y salida, y generación de reportes básicos para la toma de decisiones.',
      p3_title: 'Portafolio Web Personal',
      p3_desc: 'Portafolio web responsivo desarrollado desde cero con identidad visual propia, favicon, animaciones sutiles y galería interactiva. Publicado en GitHub Pages como carta de presentación profesional.',
      contact_eyebrow: '// Contacto', contact_title: '¿Hablamos?',
      contact_sub: '¿Buscás un desarrollador backend para tu equipo? Escribime y con gusto conversamos.',
      form_name: 'Nombre', form_email: 'Correo', form_subject: 'Asunto', form_message: 'Mensaje', form_send: 'Enviar mensaje',
      footer_rights: 'Todos los derechos reservados'
    },
    en: {
      nav_home: 'Home', nav_about: 'About', nav_skills: 'Tech', nav_projects: 'Projects', nav_contact: 'Contact',
      hero_eyebrow: '// Backend Developer',
      hero_lead: 'I build the logic and architecture that hold applications together: APIs, databases and systems that perform under pressure.',
      hero_cta1: 'View projects', hero_cta2: 'Download CV',
      about_eyebrow: '// About me',
      about_title: 'Backend developer in training, with a systems mindset',
      about_p1: 'I am a Software Engineering student at Universidad Cenfotec and a backend developer. I focus on business logic design, data structure and the architecture behind every application: what the user does not see, but what holds everything together.',
      about_p2: 'I work mainly with Java and Spring Boot, along with .NET, designing and consuming REST APIs over relational databases. Beyond the technical side, I stand out for responsibility, organization and constant learning, and I enjoy working in a team to build solutions that solve a real problem.',
      about_stat1: 'Projects', about_stat2: 'Languages', about_stat3: 'APIs', about_stat4: 'Costa Rica',
      skills_eyebrow: '// Tech stack', skills_title: 'Technologies & skills',
      skills_backend: 'Backend', skills_db: 'Databases', skills_front: 'Frontend & Tools', skills_soft: 'Soft skills',
      skills_soft1: 'Analytical thinking', skills_soft2: 'Responsibility', skills_soft3: 'Teamwork', skills_soft4: 'Constant learning',
      projects_eyebrow: '// Gallery', projects_title: 'Featured projects',
      projects_sub: 'Projects developed during my training. Click on each one to see the details.',
      p1_title: 'Task Management REST API',
      p1_desc: 'REST API built with a layered architecture for task management: full CRUD operations, validations, exception handling and documented endpoints. Persistence on PostgreSQL through JPA/Hibernate.',
      p2_title: 'Inventory Management System',
      p2_desc: 'Inventory control application developed with .NET and SQL Server: stock control, entry and exit movement logging, and generation of basic reports for decision making.',
      p3_title: 'Personal Web Portfolio',
      p3_desc: 'Responsive web portfolio built from scratch with its own visual identity, favicon, subtle animations and an interactive gallery. Published on GitHub Pages as a professional showcase.',
      contact_eyebrow: '// Contact', contact_title: "Let's talk",
      contact_sub: 'Looking for a backend developer for your team? Send me a message and let us talk.',
      form_name: 'Name', form_email: 'Email', form_subject: 'Subject', form_message: 'Message', form_send: 'Send message',
      footer_rights: 'All rights reserved'
    }
  };

  let currentLang = 'es';
  const langToggle = document.getElementById('langToggle');

  function applyLanguage(lang) {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    // El botón de CV baja el idioma correspondiente
    const cvBtn = document.getElementById('cvDownload');
    if (cvBtn) cvBtn.setAttribute('href', lang === 'es' ? 'assets/cv_es.pdf' : 'assets/cv_en.pdf');
    // Actualizar el indicador del botón
    langToggle.innerHTML = lang === 'es'
      ? '<span class="mono">ES</span> / <span class="mono lang-off">EN</span>'
      : '<span class="mono lang-off">ES</span> / <span class="mono">EN</span>';
    currentLang = lang;
  }

  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  /* =========================================================
     FORMULARIO DE CONTACTO — validación programada en JS
     ========================================================= */
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');

  const messages = {
    es: { required: 'Este campo es obligatorio.', email: 'Ingresá un correo válido.', ok: '¡Gracias! Tu mensaje fue validado correctamente. Te responderé pronto.', err: 'Revisá los campos marcados en rojo.' },
    en: { required: 'This field is required.', email: 'Enter a valid email.', ok: 'Thanks! Your message was validated successfully. I will reply soon.', err: 'Please check the fields marked in red.' }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldState(field, valid, msg) {
    const feedback = form.querySelector(`.form-feedback[data-for="${field.id}"]`);
    field.classList.remove('is-valid', 'is-invalid');
    field.classList.add(valid ? 'is-valid' : 'is-invalid');
    if (feedback) feedback.textContent = valid ? '' : msg;
  }

  function validateForm() {
    const m = messages[currentLang];
    let ok = true;
    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {
      const value = field.value.trim();
      if (!value) {
        setFieldState(field, false, m.required);
        ok = false;
      } else if (field.type === 'email' && !emailRegex.test(value)) {
        setFieldState(field, false, m.email);
        ok = false;
      } else {
        setFieldState(field, true, '');
      }
    });
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const m = messages[currentLang];
    if (validateForm()) {
      result.className = 'form-result ok';
      result.textContent = m.ok;
      form.reset();
      form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      // Nota: para enviar el correo de verdad, conectar un servicio como Formspree o EmailJS aquí.
    } else {
      result.className = 'form-result err';
      result.textContent = m.err;
    }
  });

  // Validación en vivo al salir de cada campo
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      const m = messages[currentLang];
      const value = field.value.trim();
      if (!value) setFieldState(field, false, m.required);
      else if (field.type === 'email' && !emailRegex.test(value)) setFieldState(field, false, m.email);
      else setFieldState(field, true, '');
    });
  });

});
