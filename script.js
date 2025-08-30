// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Sample Carer Data
const carersData = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Care Specialist",
        image: "sarah-johnson.jpg",
        bio: "With over 8 years of experience in caregiving, Sarah specializes in providing compassionate support to women and children. She holds certifications in counselling and nutrition.",
        services: [
            { name: "Transportation", description: "Safe and reliable transport for appointments and outings" },
            { name: "Counselling", description: "Professional emotional support and guidance" },
            { name: "Companionship", description: "Friendly company and social support" },
            { name: "Shopping", description: "Grocery shopping and errand assistance" }
        ],
        availability: {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: false
        },
        rating: 4.9,
        experience: "8 years"
    },
    {
        id: 2,
        name: "Emma Williams",
        title: "Nutrition & Wellness Coach",
        image: "emma-williams.jpg",
        bio: "Emma is a qualified nutritionist and personal trainer with a passion for helping women and children achieve their health and wellness goals through proper nutrition and exercise.",
        services: [
            { name: "Nutrition", description: "Meal planning and nutritional guidance" },
            { name: "Personal Training", description: "Fitness support and exercise guidance" },
            { name: "Cooking", description: "Healthy meal preparation and cooking lessons" },
            { name: "Companionship", description: "Friendly company and social support" }
        ],
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: false,
            saturday: true,
            sunday: true
        },
        rating: 4.8,
        experience: "6 years"
    },
    {
        id: 3,
        name: "Lisa Chen",
        title: "Childcare Specialist",
        image: "lisa-chen.jpg",
        bio: "Lisa has dedicated her career to supporting children and their families. She specializes in developmental support, educational activities, and creating safe, nurturing environments.",
        services: [
            { name: "Childcare", description: "Professional childcare and developmental support" },
            { name: "Transportation", description: "Safe transport for children to activities" },
            { name: "Educational Support", description: "Homework help and learning activities" },
            { name: "Companionship", description: "Engaging activities and social interaction" }
        ],
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false
        },
        rating: 4.9,
        experience: "10 years"
    },
    {
        id: 4,
        name: "Maria Rodriguez",
        title: "Holistic Care Provider",
        image: "maria-rodriguez.jpg",
        bio: "Maria brings a holistic approach to caregiving, combining traditional care methods with modern wellness practices. She speaks multiple languages and understands diverse cultural needs.",
        services: [
            { name: "Counselling", description: "Emotional support and mental health guidance" },
            { name: "Nutrition", description: "Cultural meal planning and dietary support" },
            { name: "Transportation", description: "Reliable transport for all your needs" },
            { name: "Shopping", description: "Grocery shopping with cultural considerations" }
        ],
        availability: {
            monday: false,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true
        },
        rating: 4.7,
        experience: "7 years"
    },
    {
        id: 5,
        name: "Jennifer Taylor",
        title: "Senior Support Specialist",
        image: "jennifer-taylor.jpg",
        bio: "Jennifer specializes in supporting senior women with dignity and respect. She has extensive experience in mobility assistance, medication management, and companionship.",
        services: [
            { name: "Mobility Support", description: "Assistance with movement and daily activities" },
            { name: "Medication Management", description: "Help with medication schedules and reminders" },
            { name: "Companionship", description: "Social interaction and emotional support" },
            { name: "Transportation", description: "Safe transport for medical appointments" }
        ],
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: false,
            friday: true,
            saturday: true,
            sunday: true
        },
        rating: 4.8,
        experience: "12 years"
    },
    {
        id: 6,
        name: "Amanda Foster",
        title: "Family Support Coordinator",
        image: "amanda-foster.jpg",
        bio: "Amanda works with entire families to provide comprehensive support. She coordinates care plans, manages schedules, and ensures all family members receive appropriate care.",
        services: [
            { name: "Family Coordination", description: "Comprehensive family support and planning" },
            { name: "Counselling", description: "Family therapy and relationship support" },
            { name: "Transportation", description: "Family transport and logistics" },
            { name: "Shopping", description: "Family shopping and household management" }
        ],
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false
        },
        rating: 4.9,
        experience: "9 years"
    }
];

// All available services for filtering
const allServices = [
    "Transportation", "Counselling", "Companionship", "Shopping", 
    "Nutrition", "Personal Training", "Cooking", "Childcare", 
    "Educational Support", "Mobility Support", "Medication Management", 
    "Family Coordination"
];

// Carers Page Functionality
function initializeCarersPage() {
    if (!document.querySelector('.carers-grid')) return;

    renderCarers(carersData);
    setupFilters();
    setupCarerCards();
}

function renderCarers(carers) {
    const carersGrid = document.querySelector('.carers-grid-layout');
    if (!carersGrid) return;

    carersGrid.innerHTML = '';

    carers.forEach(carer => {
        const carerCard = createCarerCard(carer);
        carersGrid.appendChild(carerCard);
    });
}

function createCarerCard(carer) {
    const card = document.createElement('div');
    card.className = 'carer-card';
    card.setAttribute('data-carer-id', carer.id);

    const servicesList = carer.services.map(service => service.name).join(', ');

    card.innerHTML = `
        <div class="carer-image">
            <i class="fas fa-user" aria-hidden="true"></i>
        </div>
        <div class="carer-info">
            <h3 class="carer-name">${carer.name}</h3>
            <p class="carer-title">${carer.title}</p>
            <div class="carer-services">
                <h4>Services:</h4>
                <div class="service-tags">
                    ${carer.services.map(service => 
                        `<span class="service-tag">${service.name}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="carer-actions">
                <button class="btn btn-primary btn-small view-profile" data-carer-id="${carer.id}">
                    View Profile
                </button>
                <button class="btn btn-secondary btn-small book-now" data-carer-id="${carer.id}">
                    Book Now
                </button>
            </div>
        </div>
    `;

    return card;
}

function setupFilters() {
    const filtersContainer = document.querySelector('.filter-buttons');
    if (!filtersContainer) return;

    // Add "All" filter
    const allFilter = document.createElement('button');
    allFilter.className = 'filter-btn active';
    allFilter.textContent = 'All Services';
    allFilter.setAttribute('data-filter', 'all');
    filtersContainer.appendChild(allFilter);

    // Add service filters
    allServices.forEach(service => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn';
        filterBtn.textContent = service;
        filterBtn.setAttribute('data-filter', service);
        filtersContainer.appendChild(filterBtn);
    });

    // Add event listeners
    filtersContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Filter carers
            const filter = e.target.getAttribute('data-filter');
            filterCarers(filter);
        }
    });
}

function filterCarers(filter) {
    let filteredCarers = carersData;

    if (filter !== 'all') {
        filteredCarers = carersData.filter(carer => 
            carer.services.some(service => service.name === filter)
        );
    }

    renderCarers(filteredCarers);
    setupCarerCards();
}

function setupCarerCards() {
    // View Profile buttons
    document.querySelectorAll('.view-profile').forEach(btn => {
        btn.addEventListener('click', function() {
            const carerId = parseInt(this.getAttribute('data-carer-id'));
            const carer = carersData.find(c => c.id === carerId);
            if (carer) {
                showCarerProfile(carer);
            }
        });
    });

    // Book Now buttons
    document.querySelectorAll('.book-now').forEach(btn => {
        btn.addEventListener('click', function() {
            const carerId = parseInt(this.getAttribute('data-carer-id'));
            const carer = carersData.find(c => c.id === carerId);
            if (carer) {
                showBookingModal(carer);
            }
        });
    });
}

function showCarerProfile(carer) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title">${carer.name} - Profile</h2>
                <button class="close" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="carer-profile">
                    <div class="carer-profile-image">
                        <i class="fas fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="carer-profile-info">
                        <h3>${carer.name}</h3>
                        <p class="carer-title">${carer.title}</p>
                        <p class="carer-bio">${carer.bio}</p>
                        <div class="carer-stats">
                            <p><strong>Experience:</strong> ${carer.experience}</p>
                            <p><strong>Rating:</strong> ${carer.rating}/5.0</p>
                        </div>
                    </div>
                </div>
                
                <div class="carer-services-detail">
                    <h4>Services Offered</h4>
                    <div class="services-list">
                        ${carer.services.map(service => `
                            <div class="service-item">
                                <h5>${service.name}</h5>
                                <p>${service.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="booking-section">
                    <h4>Book ${carer.name}</h4>
                    <p>Ready to book ${carer.name}? Click the button below to check availability and make a booking.</p>
                    <button class="btn btn-primary" onclick="showBookingModal(${JSON.stringify(carer).replace(/"/g, '&quot;')})">
                        Check Availability & Book
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Focus management for accessibility
    closeBtn.focus();
}

function showBookingModal(carer) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'booking-title');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="booking-title">Book ${carer.name}</h2>
                <button class="close" aria-label="Close modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="booking-form">
                    <div class="availability-calendar">
                        <h4>Select Available Date</h4>
                        <div class="calendar-grid">
                            <div class="calendar-day-header">Mon</div>
                            <div class="calendar-day-header">Tue</div>
                            <div class="calendar-day-header">Wed</div>
                            <div class="calendar-day-header">Thu</div>
                            <div class="calendar-day-header">Fri</div>
                            <div class="calendar-day-header">Sat</div>
                            <div class="calendar-day-header">Sun</div>
                            ${Object.entries(carer.availability).map(([day, available], index) => `
                                <div class="calendar-day ${available ? 'available' : ''}" 
                                     data-day="${day}" 
                                     ${available ? 'tabindex="0" role="button"' : ''}>
                                    ${day.charAt(0).toUpperCase() + day.slice(1)}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <form class="booking-form" id="bookingForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="clientName">Your Name *</label>
                                <input type="text" id="clientName" name="clientName" required>
                            </div>
                            <div class="form-group">
                                <label for="clientEmail">Email *</label>
                                <input type="email" id="clientEmail" name="clientEmail" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="clientPhone">Phone Number *</label>
                                <input type="tel" id="clientPhone" name="clientPhone" required>
                            </div>
                            <div class="form-group">
                                <label for="serviceType">Service Needed *</label>
                                <select id="serviceType" name="serviceType" required>
                                    <option value="">Select a service</option>
                                    ${carer.services.map(service => 
                                        `<option value="${service.name}">${service.name}</option>`
                                    ).join('')}
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="preferredTime">Preferred Time</label>
                            <select id="preferredTime" name="preferredTime">
                                <option value="">Select preferred time</option>
                                <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                                <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                                <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="duration">Duration</label>
                            <select id="duration" name="duration">
                                <option value="">Select duration</option>
                                <option value="1">1 hour</option>
                                <option value="2">2 hours</option>
                                <option value="4">4 hours</option>
                                <option value="8">Full day (8 hours)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="specialRequests">Special Requests or Notes</label>
                            <textarea id="specialRequests" name="specialRequests" 
                                      placeholder="Any specific requirements or additional information..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-large">
                            Submit Booking Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Calendar functionality
    setupCalendar(modal, carer);

    // Form submission
    const form = modal.querySelector('#bookingForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleBookingSubmission(carer, form);
    });

    // Close modal functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Focus management for accessibility
    closeBtn.focus();
}

function setupCalendar(modal, carer) {
    const calendarDays = modal.querySelectorAll('.calendar-day.available');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remove previous selection
            modal.querySelectorAll('.calendar-day.selected').forEach(selected => {
                selected.classList.remove('selected');
            });
            
            // Add selection to clicked day
            this.classList.add('selected');
            
            // Update form with selected day
            const selectedDay = this.getAttribute('data-day');
            const form = modal.querySelector('#bookingForm');
            if (!form.querySelector('input[name="selectedDay"]')) {
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'selectedDay';
                form.appendChild(hiddenInput);
            }
            form.querySelector('input[name="selectedDay"]').value = selectedDay;
        });

        // Keyboard support
        day.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function handleBookingSubmission(carer, form) {
    const formData = new FormData(form);
    const bookingData = {
        carer: carer.name,
        carerId: carer.id,
        clientName: formData.get('clientName'),
        clientEmail: formData.get('clientEmail'),
        clientPhone: formData.get('clientPhone'),
        serviceType: formData.get('serviceType'),
        preferredTime: formData.get('preferredTime'),
        duration: formData.get('duration'),
        selectedDay: formData.get('selectedDay'),
        specialRequests: formData.get('specialRequests'),
        timestamp: new Date().toISOString()
    };

    // Validate required fields
    if (!bookingData.selectedDay) {
        alert('Please select an available date from the calendar.');
        return;
    }

    // Simulate booking submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Simulate successful booking
        alert(`Booking request submitted successfully!\n\nWe'll contact you within 24 hours to confirm your booking with ${carer.name}.`);
        
        // Close modal
        const modal = form.closest('.modal');
        document.body.removeChild(modal);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // In a real application, you would send this data to your server
        console.log('Booking submitted:', bookingData);
    }, 1500);
}

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.querySelector('#contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // In a real application, you would send this data to your server
            console.log('Contact form submitted:', contactData);
        }, 1500);
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Common functionality
    setupSmoothScrolling();
    initializeContactForm();
    
    // Page-specific functionality
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'carers.html' || currentPage === '') {
        initializeCarersPage();
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal');
        if (openModal) {
            document.body.removeChild(openModal);
        }
    }
});

// Add loading states and error handling
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    }

    // Email validation
    if (field.type === 'email' && value && !validateEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    }

    // Phone validation
    if (field.type === 'tel' && value && !validatePhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number.';
    }

    // Show/hide error
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#e74c3c';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}
