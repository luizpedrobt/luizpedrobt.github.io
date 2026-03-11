// ===== Translations =====
const translations = {
  pt: {
    // Navbar
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    // Hero
    hero_greeting: "OLÁ, EU SOU",
    hero_name: "Luiz Pedro",
    hero_role: "Engenheiro de Controle e Automação",
    hero_description: "Estudante de Engenharia de Controle e Automação na UFU, com sólida experiência em sistemas embarcados. Desenvolvimento de hardware e firmware para STM32 e ESP32, integração de protocolos como CAN, MAVLink, MQTT e UART.",
    hero_btn_projects: "Ver Projetos",
    hero_btn_contact: "Fale Comigo",

    // About
    about_label: "SOBRE MIM",
    about_title: "Quem sou eu",
    about_text: "Estudante do 10º semestre de Engenharia de Controle e Automação na Universidade Federal de Uberlândia (UFU), com experiência sólida em sistemas embarcados. Ao longo da graduação, desenvolvi forte conhecimento em hardware e firmware, acumulando dois anos de experiência com desenvolvimento em C/C++ para microcontroladores. Conhecimento avançado e prático nas plataformas STM32 e ESP32, além de experiência com Linux e controle de versão com Git.",
    about_h1_num: "3+",
    about_h1_label: "Anos em Embarcados",
    about_h2_num: "UFU",
    about_h2_label: "Eng. Controle e Automação",
    about_h3_num: "3.44",
    about_h3_label: "GPA / 4.0",

    // Experience
    exp_label: "EXPERIÊNCIA",
    exp_title: "Trajetória Profissional",
    exp1_date: "Ago 2025 – Presente",
    exp1_title: "Vantor LTDA",
    exp1_role: "Estagiário de Engenharia",
    exp1_desc: "Responsável pelo hardware e firmware de dispensadores de bioprodutos para VANTs. Implementação de protocolos de comunicação específicos para veículos aéreos não tripulados, baseados em UART e MAVLink.",
    exp2_date: "Set 2024 – Presente",
    exp2_title: "Petrobras / LMEst - UFU",
    exp2_role: "Aluno Pesquisador",
    exp2_desc: "Aluno pesquisador de graduação em projetos de Pesquisa e Desenvolvimento (P&D) no Laboratório de Mecânica Estrutural (LMEst), financiados pela Petrobras. Participação no projeto \"Sistema de Análise e Tratamento de Óleo de Mancais e Monitoramento de Temperatura de Selos\", envolvendo desenvolvimento e validação de sistemas embarcados, aquisição de dados, instrumentação e análise para aplicações industriais.",
    exp3_date: "Set 2024 – Presente",
    exp3_title: "Laboratório de Mecânica Estrutural (LMEst - UFU)",
    exp3_role: "Desenvolvedor de Firmware e Hardware",
    exp3_desc: "Desenvolvimento de firmware e hardware para o Sistema de Análise e Tratamento de Óleo de Mancais e Monitoramento de Temperatura de Selos, em parceria P&D com a Petrobras. Trabalho envolvendo protocolos de comunicação serial (USB, RS-232, RS-485, I²C, SPI) e tecnologias wireless (Zigbee, LoRa), além de aplicações embarcadas baseadas em RTOS.",
    exp4_date: "Dez 2023 – Set 2024",
    exp4_title: "Laboratório de Redes Inteligentes (LRI - UFU)",
    exp4_role: "Desenvolvedor",
    exp4_desc: "Desenvolvedor em projeto P&D financiado pela Petrobras na área de IoT e redes inteligentes, com foco em sistemas embarcados. Desenvolvimento de sistema para aquisição de dados de qualidade de energia elétrica, aprimorando habilidades em hardware, firmware e comunicação de dispositivos IoT em redes industriais.",

    // Skills
    skills_label: "HABILIDADES",
    skills_title: "Tecnologias & Ferramentas",
    skills_subtitle: "Principais tecnologias com as quais trabalho no dia a dia.",

    // Projects
    projects_label: "PROJETOS",
    projects_title: "Trabalhos em Destaque",
    projects_subtitle: "Projetos que desenvolvi e participei da criação em equipe.",
    proj1_tag: "🎓 Trabalho de Conclusão de Curso",
    proj1_title: "BitBox — DataLogger Interativo",
    proj1_desc: "DataLogger interativo baseado em ESP32-S3 que integra depuração e acompanhamento de sistemas remotos. Suporta monitoramento de UART e detecção de bordas em GPIO. Desenvolvido 100% em ESP-IDF, integra MQTT, FreeRTOS, armazenamento de dados em cartão SD e envio para nuvem. Permite envio de comandos ao dispositivo remoto, incluindo mensagens UART para dispositivos conectados e controle de nível lógico em GPIO.",
    proj2_tag: "Estágio — Vantor",
    proj2_title: "Dispenser de Granel",
    proj2_desc: "Hardware proprietário baseado em STM32G4 que controla um dispensador de bioproduto agrícola a granel. Comunicação com controladora de voo Pixhawk via MAVLink, permitindo controle total pelo operador. Integra FreeRTOS, controle de motores, leitura de sensores e lógica de acionamento precisa para garantir o volume correto de produto.",
    proj3_tag: "Estágio — Vantor",
    proj3_title: "Dispenser de Cotésia",
    proj3_desc: "Hardware proprietário baseado em STM32G4 com as mesmas funcionalidades do dispenser de granel, porém aplicado ao controle de dispenser de cotésia. Comunicação com Pixhawk via MAVLink, controle preciso de atuação, leitura de sensores e gerenciamento em tempo real via FreeRTOS.",
    proj4_tag: "P&D Petrobras — LMEst",
    proj4_title: "SATO — Análise e Tratamento de Óleo",
    proj4_desc: "Sistema de Análise e Tratamento de Óleo (SATO), um sistema mecânico complexo para análise de múltiplos parâmetros do óleo. Atuação como desenvolvedor de firmware. Dispositivo ultra low power baseado em STM32U5, com coleta de energia do ambiente por meio de harvesters térmicos. Comunicação via Zigbee com hub baseado em Raspberry Pi. Possui interface de comandos e protocolo de troca de mensagens robusto.",
    proj5_tag: "P&D Petrobras — LMEst",
    proj5_title: "Sensor Full Wireless",
    proj5_desc: "Módulo sensor ultra low power baseado em STM32L4, desenvolvido para amostragem de vibração e áudio para análises estruturais de sistemas mecânicos. Comunicação via Zigbee com hub baseado em Raspberry Pi. Implementa interface de comando robusta e troca estruturada de mensagens.",

    // Publications
    nav_publications: "Publicações",
    pub_label: "PUBLICAÇÕES",
    pub_title: "Produção Acadêmica",
    pub_subtitle: "Artigos publicados em conferências internacionais.",
    pub1_type: "Artigo em Conferência",
    pub1_authors: "Felipe Narimatsu Presti, Lucas Araujo Dantas, Luiz Pedro Bittencourt, Lucas Lofrano, Marcelo Barros de Almeida, Márcio José Da Cunha",
    pub1_date: "Março 2026",

    // Contact
    contact_label: "CONTATO",
    contact_title: "Vamos Conversar?",
    contact_subtitle: "Disponível para projetos, pesquisa e desenvolvimento em sistemas embarcados.",
    contact_note: "Disponível para projetos, pesquisa e desenvolvimento em sistemas embarcados.",

    // Footer
    footer_text: "© 2026 Luiz Pedro Bittencourt. Todos os direitos reservados."
  },

  en: {
    // Navbar
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero
    hero_greeting: "HI, I'M",
    hero_name: "Luiz Pedro",
    hero_role: "Control and Automation Engineer",
    hero_description: "Control and Automation Engineering student at UFU, with solid experience in embedded systems. Hardware and firmware development for STM32 and ESP32, integration of protocols like CAN, MAVLink, MQTT and UART.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",

    // About
    about_label: "ABOUT ME",
    about_title: "Who am I",
    about_text: "Final-year (10th semester) undergraduate student in Control and Automation Engineering at the Federal University of Uberlândia (UFU), with solid experience in embedded systems. Throughout the degree, I developed strong knowledge in hardware and firmware, accumulating two years of experience with C/C++ development for microcontrollers. Advanced and hands-on knowledge of STM32 and ESP32 platforms, as well as experience with Linux and version control using Git.",
    about_h1_num: "3+",
    about_h1_label: "Years in Embedded",
    about_h2_num: "UFU",
    about_h2_label: "Control & Automation Eng.",
    about_h3_num: "3.44",
    about_h3_label: "GPA / 4.0",

    // Experience
    exp_label: "EXPERIENCE",
    exp_title: "Professional Journey",
    exp1_date: "Aug 2025 – Present",
    exp1_title: "Vantor LTDA",
    exp1_role: "Engineering Intern",
    exp1_desc: "Responsible for the hardware and firmware of bioproduct dispensers for UAVs. Implementation of communication protocols specific to unmanned aerial vehicles, primarily based on UART and MAVLink.",
    exp2_date: "Sep 2024 – Present",
    exp2_title: "Petrobras / LMEst - UFU",
    exp2_role: "Undergraduate Research Student",
    exp2_desc: "Undergraduate research student in Research and Development (R&D) projects at the Laboratory of Structural Mechanics (LMEst), funded by Petrobras. Participation in the project \"Bearing Oil Analysis and Treatment System and Seal Temperature Monitoring\", involving the development and validation of embedded systems, data acquisition, instrumentation, and analysis for industrial applications.",
    exp3_date: "Sep 2024 – Present",
    exp3_title: "Structural Mechanics Laboratory (LMEst - UFU)",
    exp3_role: "Firmware and Hardware Developer",
    exp3_desc: "Development of firmware and hardware for the Bearing Oil Analysis and Treatment System and Seal Temperature Monitoring, as part of a Petrobras R&D partnership. Work involving serial communication protocols (USB, RS-232, RS-485, I²C, SPI) and wireless technologies (Zigbee, LoRa), as well as RTOS-based embedded applications.",
    exp4_date: "Dec 2023 – Sep 2024",
    exp4_title: "Smart Grids Laboratory (LRI - UFU)",
    exp4_role: "Developer",
    exp4_desc: "Developer in a Petrobras-funded R&D project in the area of IoT and smart grids, with an initial focus on embedded systems. Development of a system for electric power quality data acquisition, enhancing skills in hardware, firmware, and IoT device communication in industrial networks.",

    // Skills
    skills_label: "SKILLS",
    skills_title: "Technologies & Tools",
    skills_subtitle: "Main technologies I work with on a daily basis.",

    // Projects
    projects_label: "PROJECTS",
    projects_title: "Featured Work",
    projects_subtitle: "Projects I developed and co-created as part of a team.",
    proj1_tag: "🎓 Final Year Thesis",
    proj1_title: "BitBox — Interactive DataLogger",
    proj1_desc: "Interactive DataLogger based on the ESP32-S3 that integrates debugging and remote system monitoring. Supports UART monitoring and GPIO edge detection. Developed 100% in ESP-IDF, integrating MQTT, FreeRTOS, SD card data storage and cloud upload. Allows sending commands to the remote device, including UART messages to connected devices and GPIO logic level control.",
    proj2_tag: "Internship — Vantor",
    proj2_title: "Bulk Dispenser",
    proj2_desc: "Proprietary hardware based on STM32G4 that controls a bulk agricultural bioproduct dispenser. Communication with Pixhawk flight controller via MAVLink, enabling full operator control. Integrates FreeRTOS, motor control, sensor readings and precise actuation logic to ensure the correct product volume.",
    proj3_tag: "Internship — Vantor",
    proj3_title: "Cotésia Dispenser",
    proj3_desc: "Proprietary hardware based on STM32G4 with the same functionalities as the bulk dispenser, but applied to a cotésia dispenser control. Communication with Pixhawk via MAVLink, precise actuation control, sensor readings and real-time management via FreeRTOS.",
    proj4_tag: "Petrobras R&D — LMEst",
    proj4_title: "SATO — Oil Analysis and Treatment System",
    proj4_desc: "Oil Analysis and Treatment System (SATO), a complex mechanical system for multi-parameter oil analysis. Acted as firmware developer. Ultra low power device based on STM32U5, with ambient energy harvesting through thermal harvesters. Zigbee communication with Raspberry Pi-based hub. Features a command interface and robust message exchange protocol.",
    proj5_tag: "Petrobras R&D — LMEst",
    proj5_title: "Full Wireless Sensor",
    proj5_desc: "Ultra low power sensor module based on STM32L4, developed for vibration and audio sampling for structural analysis of mechanical systems. Zigbee communication with Raspberry Pi-based hub. Implements a robust command interface and structured message exchange.",

    // Publications
    nav_publications: "Publications",
    pub_label: "PUBLICATIONS",
    pub_title: "Academic Production",
    pub_subtitle: "Papers published at international conferences.",
    pub1_type: "Conference Paper",
    pub1_authors: "Felipe Narimatsu Presti, Lucas Araujo Dantas, Luiz Pedro Bittencourt, Lucas Lofrano, Marcelo Barros de Almeida, Márcio José Da Cunha",
    pub1_date: "March 2026",

    // Contact
    contact_label: "CONTACT",
    contact_title: "Let's Talk?",
    contact_subtitle: "Available for projects, research and development in embedded systems.",
    contact_note: "Available for projects, research and development in embedded systems.",

    // Footer
    footer_text: "© 2026 Luiz Pedro Bittencourt. All rights reserved."
  }
};

// ===== DOM Elements =====
const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

// ===== Language =====
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  ptBtn.classList.toggle("active", lang === "pt");
  enBtn.classList.toggle("active", lang === "en");

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  localStorage.setItem("portfolio-lang", lang);
}

// Load saved language or default to PT
const savedLang = localStorage.getItem("portfolio-lang") || "pt";
setLanguage(savedLang);

ptBtn.addEventListener("click", () => setLanguage("pt"));
enBtn.addEventListener("click", () => setLanguage("en"));

// ===== Mobile Menu =====
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  }
);

revealElements.forEach(el => revealObserver.observe(el));

// ===== Project Slideshow on Hover =====
function initSlideshows() {
  document.querySelectorAll('.project-slideshow').forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    if (images.length === 0) return; // No images yet, keep placeholder

    // Hide placeholder when images exist
    const placeholder = slideshow.querySelector('.slideshow-placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // Set first image as active
    images[0].classList.add('active');

    // Create dot indicators
    if (images.length > 1) {
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'slideshow-dots';
      images.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSlide(slideshow, i);
        });
        dotsContainer.appendChild(dot);
      });
      slideshow.appendChild(dotsContainer);
    }

    // Store state
    slideshow._currentIndex = 0;
    slideshow._interval = null;
    const interval = parseInt(slideshow.dataset.interval) || 1500;

    // Find the parent card (project-card or project-featured)
    const card = slideshow.closest('.project-card') || slideshow.closest('.project-featured');
    if (!card) return;

    card.addEventListener('mouseenter', () => {
      if (images.length <= 1) return;
      slideshow._interval = setInterval(() => {
        const next = (slideshow._currentIndex + 1) % images.length;
        goToSlide(slideshow, next);
      }, interval);
    });

    card.addEventListener('mouseleave', () => {
      if (slideshow._interval) {
        clearInterval(slideshow._interval);
        slideshow._interval = null;
      }
    });
  });
}

function goToSlide(slideshow, index) {
  const images = slideshow.querySelectorAll('img');
  const dots = slideshow.querySelectorAll('.slideshow-dot');

  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  images[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
  slideshow._currentIndex = index;
}

initSlideshows();