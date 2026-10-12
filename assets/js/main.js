/**
 * Dental ISA - Main Application Logic
 * Adheres to landing-page-design skill (Part B Visual System & Fluid Dynamics)
 */

document.addEventListener("DOMContentLoaded", () => {
  initTaglineWordReveal();
  initScrollAnimations();
  initNavbarBehavior();
  initReviewsRenderer();
  initBookingForm();
  initFaqAccordion();
  initLegalModals();
});

/**
 * B11 Tagline Reveal Section
 * Words start at muted opacity (25-35%) and activate individually to 100% on scroll
 */
function initTaglineWordReveal() {
  const taglineEl = document.getElementById("tagline-text");
  if (!taglineEl) return;

  const rawText = taglineEl.getAttribute("data-text") || taglineEl.innerText;
  const words = rawText.trim().split(/\s+/);
  
  // Clean and wrap each word in a span
  taglineEl.innerHTML = words.map(word => {
    const isSpecial = word.toLowerCase().includes("sonrisa") || word.toLowerCase().includes("confianza");
    return `<span class="reveal-word ${isSpecial ? 'highlight' : ''}">${word}</span>`;
  }).join(" ");

  const wordSpans = taglineEl.querySelectorAll(".reveal-word");
  if (!wordSpans.length) return;

  let ticking = false;

  const checkWordsPosition = () => {
    const windowHeight = window.innerHeight;
    const triggerBottom = windowHeight * 0.85;
    const triggerTop = windowHeight * 0.25;

    wordSpans.forEach((span, index) => {
      const rect = span.getBoundingClientRect();
      // Calculate scroll progress across the element
      if (rect.top <= triggerBottom) {
        // Stagger activation slightly based on index
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(checkWordsPosition);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  checkWordsPosition();
}

/**
 * B7 Motion Choreography - Viewport Scroll Reveal via IntersectionObserver
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * B7 Fluid Island Navigation & Mobile Menu Morph
 */
function initNavbarBehavior() {
  const toggleBtn = document.getElementById("nav-toggle");
  const mobileOverlay = document.getElementById("mobile-nav-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (toggleBtn && mobileOverlay) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = toggleBtn.classList.toggle("open");
      mobileOverlay.classList.toggle("open", isOpen);
      toggleBtn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("open");
        mobileOverlay.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Active section indicator using IntersectionObserver
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        desktopLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => navObserver.observe(section));
}

/**
 * Dynamic Reviews Renderer & Carousel Controls
 * Replaces Meet The Dentists with patient reviews
 */
function initReviewsRenderer() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer || typeof dentalData === "undefined") return;

  const reviews = dentalData.reviews || [];
  let currentIndex = 0;
  const isMobile = () => window.innerWidth < 768;

  const renderReviews = () => {
    reviewsContainer.innerHTML = "";
    
    // On desktop, show 3 at a time starting from currentIndex
    // On mobile, show 1 at a time
    const itemsToShow = isMobile() ? 1 : 3;
    
    for (let i = 0; i < itemsToShow; i++) {
      const reviewIndex = (currentIndex + i) % reviews.length;
      const r = reviews[reviewIndex];
      if (!r) continue;

      const starsHtml = Array(r.rating).fill(`
        <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31A16,16,0,0,1,53,212.34l13.49-58.6-45.1-39.36A16,16,0,0,1,30.46,87l59.47-5.13,23.33-55a16,16,0,0,1,29.46,0l23.35,55L225.52,87A16,16,0,0,1,234.5,114.38Z"/>
        </svg>
      `).join("");

      const nameParts = r.author.trim().split(/\s+/);
      const initials = (nameParts.length > 1
        ? nameParts[0][0] + nameParts[nameParts.length - 1][0]
        : nameParts[0].slice(0, 2)).toUpperCase();

      const card = document.createElement("div");
      card.className = "review-card reveal-on-scroll revealed";
      card.innerHTML = `
        <div>
          <div class="review-stars">${starsHtml}</div>
          <p class="review-text">"${r.comment}"</p>
        </div>
        <div class="review-patient-info">
          <div class="patient-avatar">${initials}</div>
          <div>
            <div class="patient-meta-name">${r.author}</div>
            <div class="patient-meta-service">${r.date} • Reseña de Google</div>
          </div>
        </div>
      `;
      reviewsContainer.appendChild(card);
    }
  };

  renderReviews();

  const prevBtn = document.getElementById("reviews-prev");
  const nextBtn = document.getElementById("reviews-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      renderReviews();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % reviews.length;
      renderReviews();
    });
  }

  window.addEventListener("resize", () => {
    renderReviews();
  });
}

/**
 * Client Side Form Validation & Appointment Booking with WhatsApp Redirection
 */
function initBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const nameInput = document.getElementById("patient-name");
  const phoneInput = document.getElementById("patient-phone");
  const serviceInput = document.getElementById("patient-service");
  const dateInput = document.getElementById("patient-date");
  const timeInput = document.getElementById("patient-time");
  const successBox = document.getElementById("booking-success");

  // Restrict date input to today or future
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // Force phone input to digits only, max 10 characters
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    // Reset error states
    document.querySelectorAll(".form-feedback").forEach(el => el.classList.remove("visible"));

    if (!nameInput.value.trim()) {
      showError("error-name", "Por favor ingresa tu nombre completo.");
      hasError = true;
    }

    const phoneVal = phoneInput.value.trim().replace(/\D/g, "");
    if (!/^\d{10}$/.test(phoneVal)) {
      showError("error-phone", "Ingresa un número de 10 dígitos, sin espacios.");
      hasError = true;
    }

    if (!serviceInput.value) {
      showError("error-service", "Selecciona un servicio de tu interés.");
      hasError = true;
    }

    if (!dateInput.value) {
      showError("error-date", "Selecciona una fecha para tu consulta.");
      hasError = true;
    }

    if (!timeInput.value) {
      showError("error-time", "Selecciona un horario aproximado.");
      hasError = true;
    }

    if (hasError) return;

    // Reserva por WhatsApp: el sitio es estático, la confirmación se hace
    // directamente con la clínica abriendo una conversación prellenada.
    const clinicPhone = dentalData?.clinic?.phoneRaw || "+526648098071";
    const patientName = encodeURIComponent(nameInput.value.trim());
    const serviceName = encodeURIComponent(serviceInput.options[serviceInput.selectedIndex].text);
    const dateVal = encodeURIComponent(dateInput.value);
    const timeVal = encodeURIComponent(timeInput.value);

    const message = `Hola Dental ISA, me gustaría agendar una cita.%0A- Paciente: ${patientName}%0A- Servicio: ${serviceName}%0A- Fecha: ${dateVal}%0A- Horario: ${timeVal}%0A- Contacto: ${encodeURIComponent(phoneVal)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${clinicPhone}&text=${message}`;

    window.open(whatsappUrl, "_blank");

    if (successBox) {
      successBox.style.display = "block";
      successBox.innerHTML = `
        <strong>Te redirigimos a WhatsApp.</strong>
        <p style="margin-top: 6px;">Se abrió una conversación con Dental ISA para confirmar tu cita del <strong>${dateInput.value}</strong> a las <strong>${timeInput.value}</strong>. Si no se abrió, usa el botón de abajo.</p>
        <div style="margin-top: 12px;">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent">
            Abrir WhatsApp para confirmar
          </a>
        </div>
      `;
    }
  });

  function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("visible");
    }
  }
}

/**
 * FAQ Accordion Interaction
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      
      // Close other open accordions
      faqItems.forEach(other => {
        other.classList.remove("open");
        const btn = other.querySelector(".faq-question");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Accessible Legal Modals (Privacy & Terms)
 */
function initLegalModals() {
  const privacyModal = document.getElementById("modal-privacy");
  const termsModal = document.getElementById("modal-terms");

  const openPrivacyBtn = document.getElementById("open-privacy");
  const openTermsBtn = document.getElementById("open-terms");

  const closeBtns = document.querySelectorAll(".modal-close");
  const overlays = document.querySelectorAll(".modal-overlay");

  if (openPrivacyBtn && privacyModal) {
    openPrivacyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      privacyModal.classList.add("open");
    });
  }

  if (openTermsBtn && termsModal) {
    openTermsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      termsModal.classList.add("open");
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      overlays.forEach(m => m.classList.remove("open"));
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlays.forEach(m => m.classList.remove("open"));
    }
  });
}
