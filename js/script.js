// Tab Navigation JavaScript
        function showTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Remove active class from all tab buttons
            const tabButtons = document.querySelectorAll('.nav-tab');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // Skills Array and Dynamic Loading
        const skills = [
            "Adobe Illustrator",
            "Photoshop", 
            "Premiere Pro",
            "WordPress",
            "Microsoft Office",
            "POS System",
            "Copywriting",
            "Event Management",
            "Public Speaking",
            "Bahasa Inggris"
        ];

        // Function to load skills dynamically
        function loadSkills() {
            const skillsGrid = document.getElementById('skillsGrid');
            
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    const skillTag = document.createElement('div');
                    skillTag.className = 'skill-tag';
                    skillTag.textContent = skill;
                    skillTag.style.opacity = '0';
                    skillTag.style.transform = 'translateY(20px)';
                    
                    skillsGrid.appendChild(skillTag);
                    
                    // Animate skill tag appearance
                    setTimeout(() => {
                        skillTag.style.transition = 'all 0.5s ease';
                        skillTag.style.opacity = '1';
                        skillTag.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 150);
            });
        }

        // Interactive Skill Tags
        function addSkillInteractions() {
            setTimeout(() => {
                const skillTags = document.querySelectorAll('.skill-tag');
                skillTags.forEach(tag => {
                    tag.addEventListener('click', function() {
                        this.style.transform = 'scale(1.1)';
                        this.style.background = 'linear-gradient(135deg, #ff7675 0%, #fd79a8 100%)';
                        
                        setTimeout(() => {
                            this.style.transform = 'scale(1)';
                            this.style.background = 'linear-gradient(135deg, #00cec9 0%, #55a3ff 100%)';
                        }, 200);
                    });
                });
            }, 2000);
        }

        // Experience Cards Animation
        function animateExperienceCards() {
            const cards = document.querySelectorAll('.experience-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateX(-50px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }

        // Activity Items Animation
        function animateActivityItems() {
            const items = document.querySelectorAll('.activity-item');
            items.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Profile Image Click Effect
        function addProfileImageEffect() {
            const profileImage = document.querySelector('.profile-image');
            profileImage.addEventListener('click', function() {
                this.style.transform = 'rotate(360deg) scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'rotate(0deg) scale(1)';
                }, 500);
            });
        }

        // Contact Items Hover Counter
        function addContactInteractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        // Event saat kursor masuk
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #00cec9, #55a3ff)';
            this.style.color = 'white';
            this.style.transform = 'translateX(10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        // Event saat kursor keluar
        item.addEventListener('mouseleave', function() {
            this.style.background = '#e9ecef';
            this.style.color = 'inherit';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
    });
        }

        // Initialize all JavaScript functions when page loads
        window.addEventListener('DOMContentLoaded', function() {
            loadSkills();
            addSkillInteractions();
            addProfileImageEffect();
            addContactInteractions();
            
            // Add tab change listeners for animations
            const tabButtons = document.querySelectorAll('.nav-tab');
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabName = this.textContent.toLowerCase();
                    
                    setTimeout(() => {
                        if (tabName.includes('pengalaman')) {
                            animateExperienceCards();
                        } else if (tabName.includes('kegiatan')) {
                            animateActivityItems();
                        }
                    }, 100);
                });
            });
        });

        // Smooth scrolling for better UX
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-tab')) {
                document.querySelector('main').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });