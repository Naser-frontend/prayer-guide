// Prayer App - Simple Version Without Audio
class PrayerApp {
    constructor() {
        // App state
        this.state = {
            currentStep: 0,
            completedSteps: new Set(),
            theme: localStorage.getItem('theme') || 'light',
            quizScore: 0
        };

        // Prayer steps with complete texts
        this.steps = [
            { 
                id: 1, 
                title: 'نیت و تکبیر', 
                img: 'pohotos/نیت 1.jpg',
                desc: 'نیت: در دل بگویید " مثال:نیت کردم بخوانم دو رکعت نماز فرض صبع روی آوردم به قبله". سپس دست‌ها را بالا ببرید و الله اکبر بگویید.', 
                prayer: 'اَللهُ اَکْبَر',
                translation: 'خدا بزرگتر است',
                instruction: 'در دل نیت کنید، سپس دست‌ها را بالا ببرید و الله اکبر بگویید'
            },
            { 
                id: 2, 
                title: 'سوره حمد', 
                img: 'pohotos/تکبیر 2.jpg',
                desc: 'سوره حمد را با آرامش و تمرکز بخوانید. دست‌ها را روی هم قرار دهید.', 
                prayer: `بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِیمِ
اَلْحَمْدُ لِلّهِ رَبِّ الْعالَمینَ
اَلرَّحْمٰنِ الرَّحیمِ
مالِکِ یَوْمِ الدّینِ
إِیّاکَ نَعْبُدُ وَ إِیّاکَ نَسْتَعینُ
اِهْدِنَا الصِّراطَ الْمُسْتَقیمَ
صِراطَ الَّذینَ أَنْعَمْتَ عَلَیْهِمْ
غَیْرِ الْمَغْضُوبِ عَلَیْهِمْ وَ لاَ الضّالّینَ`,
                translation: `به نام خداوند بخشنده مهربان
ستایش مخصوص خداوند پروردگار جهانیان است
بخشنده مهربان
مالک روز جزا
تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم
ما را به راه راست هدایت کن
راه کسانی که بر آنان نعمت دادی
نه راه خشم گرفتگان و نه گمراهان`,
                instruction: 'دست راست روی دست چپ قرار دهید'
            },
            { 
                id: 3, 
                title: 'سوره اخلاص', 
                img: 'pohotos/قیام 3.jpg',
                desc: 'یک سوره کوتاه از قرآن بخوانید. سوره اخلاص (توحید) را میخوانیم.', 
                prayer: `بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِیمِ
قُلْ هُوَ اللهُ اَحَدٌ
اَللهُ الصَّمَدُ
لَمْ یَلِدْ وَ لَمْ یُولَدْ
وَ لَمْ یَکُنْ لَهُ کُفُواً اَحَدٌ`,
                translation: `به نام خداوند بخشنده مهربان
بگو او خداوند یکتا است
خداوند بی‌نیاز است
نه زاده شده و نه زاییده است
و هیچ کس همتای او نیست`,
                instruction: 'با صدای آرام سوره بخوانید'
            },
            { 
                id: 4, 
                title: 'رکوع', 
                img: 'pohotos/رکوع 4.jpg',
                desc: 'با گفتن "الله اکبر" به رکوع بروید. کمر را خم کنید و دست‌ها را روی زانوها قرار دهید.', 
                prayer: `سُبْحانَ رَبِّیَ الْعَظیمِ (3x)`,
                translation: `پاک و منزه است پروردگار بزرگ من (3 بار)`,
                instruction: 'کمر را 90 درجه خم کنید'
            },
            { 
                id: 5, 
                title: 'قیام بعد از رکوع', 
                img: 'pohotos/قومه 5.jpg',
                desc: 'از رکوع برخیزید و به حالت ایستاده برگردید. ابتدا "سمع الله لمن حمده" و سپس "ربنا ولک الحمد" را بگویید.', 
                prayer: `سَمِعَ اللهُ لِمَنْ حَمِدَهُ
رَبَّنا وَلَکَ الْحَمْدُ`,
                translation: `خداوند سخن کسی را که او را ستایش کند می‌شنود
پروردگارا ستایش از آن توست`,
                instruction: 'آرام برخیزید و راست بایستید'
            },
            { 
                id: 6, 
                title: 'سجده اول', 
                img: 'pohotos/سجده 6.jpg',
                desc: 'با گفتن "الله اکبر" به سجده بروید. پیشانی، دست‌ها، زانوها و انگشتان پا را بر زمین بگذارید.', 
                prayer: `سُبْحانَ رَبِّیَ الاَعْلی وَ بِحَمْدِهِ (3x)`,
                translation: `پاک و منزه است پروردگار برتر من و ستایش او را می‌کنم (3 بار)`,
                instruction: 'هفت عضو بدن روی زمین باشد'
            },
            { 
                id: 7, 
                title: 'جلسه بین دو سجده', 
                img: 'pohotos/جلسه 7.jpg',
                desc: 'از سجده برخیزید و به حالت نشسته قرار بگیرید. در این حالت دعایی خوانده نمی‌شود.', 
                prayer: ``,
                translation: ``,
                instruction: 'روی پاشنه‌ها بنشینید و آرام باشید'
            },
            { 
                id: 8, 
                title: 'سجده دوم', 
                img: 'pohotos/سجده دوم 8.jpg',
                desc: 'دوباره با گفتن "الله اکبر" به سجده بروید و ذکر سجده را بگویید.', 
                prayer: `سُبْحانَ رَبِّیَ الاَعْلی وَ بِحَمْدِهِ (3x)`,
                translation: `پاک و منزه است پروردگار برتر من و ستایش او را می‌کنم (3 بار)`,
                instruction: 'مانند سجده اول عمل کنید'
            },
            { 
                id: 9, 
                title: 'رکعت دوم', 
                img: 'pohotos/قیام 9.jpg',
                desc: 'رکعت دوم را مانند رکعت اول انجام دهید: قیام (سوره حمد + یک سوره)، رکوع، دو سجده و جلسه بین آنها.', 
                prayer: `بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِیمِ
اَلْحَمْدُ لِلّهِ رَبِّ الْعالَمینَ
اَلرَّحْمٰنِ الرَّحیمِ
مالِکِ یَوْمِ الدّینِ
إِیّاکَ نَعْبُدُ وَ إِیّاکَ نَسْتَعینُ
اِهْدِنَا الصِّراطَ الْمُسْتَقیمَ
صِراطَ الَّذینَ أَنْعَمْتَ عَلَیْهِمْ
غَیْرِ الْمَغْضُوبِ عَلَیْهِمْ وَ لاَ الضّالّینَ

بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِیمِ
قُلْ هُوَ اللهُ اَحَدٌ
اَللهُ الصَّمَدُ
لَمْ یَلِدْ وَ لَمْ یُولَدْ
وَ لَمْ یَکُنْ لَهُ کُفُواً اَحَدٌ`,
                translation: `به نام خداوند بخشنده مهربان
ستایش مخصوص خداوند پروردگار جهانیان است
بخشنده مهربان
مالک روز جزا
تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم
ما را به راه راست هدایت کن
راه کسانی که بر آنان نعمت دادی
نه راه خشم گرفتگان و نه گمراهان

به نام خداوند بخشنده مهربان
بگو او خداوند یکتا است
خداوند بی‌نیاز است
نه زاده شده و نه زاییده است
و هیچ کس همتای او نیست`,
                instruction: 'رکعت دوم را مثل رکعت اول انجام دهید'
            },
            { 
                id: 10, 
                title: 'تشهد و درود', 
                img: 'pohotos/تشهد 15.jpg',
                desc: 'بعد از سجده دوم رکعت دوم، به حالت نشسته التحیات، درود ابراهیمی و دعا را بخوانید.', 
                prayer: `اَلتَّحِیّاتُ لِلّهِ وَالصَّلَواتُ وَالطَّیِّباتُ
اَلسَّلامُ عَلَیْکَ اَیُّهَا النَّبِیُّ وَرَحْمَةُ اللهِ وَبَرَکاتُهُ
اَلسَّلامُ عَلَیْنا وَعَلی عِبادِ اللهِ الصّالِحینَ
اَشْهَدُ اَنْ لا اِلهَ اِلاَّ اللهُ وَاَشْهَدُ اَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ

اَللّهُمَّ صَلِّ عَلی مُحَمَّدٍ وَعَلی آلِ مُحَمَّدٍ
کَما صَلَّیْتَ عَلی إِبْراهیمَ وَعَلی آلِ إِبْراهیمَ إِنَّکَ حَمیدٌ مَجیدٌ

اَللّهُمَّ بارِکْ عَلی مُحَمَّدٍ وَعَلی آلِ مُحَمَّدٍ
کَما بارَکْتَ عَلی إِبْراهیمَ وَعَلی آلِ إِبْراهیمَ إِنَّکَ حَمیدٌ مَجیدٌ

رَبَّنا آتِنا فِی الدُّنْیا حَسَنَةً وَفِی الآخِرَةِ حَسَنَةً وَقِنا عَذابَ النّارِ`,
                translation: `درودها و نمازها و پاکیزه‌ها برای خداست
سلام بر تو ای پیامبر و رحمت و برکات خدا بر تو
سلام بر ما و بر بندگان شایسته خدا
گواهی می‌دهم که معبودی جز الله نیست و گواهی می‌دهم که محمد بنده و فرستاده اوست

خدایا بر محمد و خاندان محمد درود فرست
همان‌گونه که بر ابراهیم و خاندان ابراهیم درود فرستادی، تو ستوده و بزرگواری

خدایا بر محمد و خاندان محمد برکت ده
همان‌گونه که بر ابراهیم و خاندان ابراهیم برکت دادی، تو ستوده و بزرگواری

پروردگارا به ما در دنیا نیکی ده و در آخرت نیکی ده و ما را از عذاب آتش نگه دار`,
                instruction: 'در حالت نشسته این اذکار را بخوانید'
            },
            { 
                id: 11, 
                title: 'سلام', 
                img: 'pohotos/سلام 16.jpg',
                desc: 'نماز را با گفتن سلام به پایان برسانید.', 
                prayer: `اَلسَّلامُ عَلَیْکُمْ وَرَحْمَةُ اللهِ`,
                translation: `سلام بر شما و رحمت خدا`,
                instruction: 'ابتدا به راست سپس به چپ سلام دهید'
            }
        ];

        // Quiz questions
        this.quizQuestions = [
            { q: 'اولین رکن نماز چیست؟', opts: ['نیت و تکبیر', 'رکوع', 'سجده', 'قرائت'], ans: 0 },
            { q: 'در رکوع چه می‌گوییم؟', opts: ['الله اکبر', 'سبحان ربی العظیم', 'سبحان ربی الاعلی', 'استغفرالله'], ans: 1 },
            { q: 'نماز صبح چند رکعت است؟', opts: ['2 رکعت', '3 رکعت', '4 رکعت', '5 رکعت'], ans: 0 },
            { q: 'در سجده چه می‌گوییم؟', opts: ['سبحان ربی العظیم', 'سبحان ربی الاعلی', 'الله اکبر', 'استغفرالله'], ans: 1 },
            { q: 'تشهد در کدام رکعت خوانده می‌شود؟', opts: ['رکعت اول', 'رکعت دوم', 'هر دو رکعت', 'هیچ کدام'], ans: 1 }
        ];

        this.init();
    }

    // Initialize application
    async init() {
        this.applyTheme();
        await this.loadProgress();
        this.setupEventListeners();
        this.renderSteps();
        this.renderPractice();
        this.renderGuide();
        this.renderQuiz();
        this.updateProgress();
        this.setupIntersectionObserver();
    }

    // Setup event listeners
    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.addEventListener('click', () => this.toggleTheme());

        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        const modal = document.getElementById('stepModal');
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.step-detail-btn')) {
                const card = e.target.closest('.step-card');
                const stepId = parseInt(card.dataset.stepId);
                this.openModal(stepId);
            }
        });
    }

    // Theme management
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.className = this.state.theme === 'dark' 
                ? 'fas fa-sun text-white text-xl' 
                : 'fas fa-moon text-white text-xl';
        }
    }

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.state.theme);
        this.applyTheme();
        this.showNotification('🌓 حالت نمایش تغییر کرد');
    }

    // Keyboard shortcuts
    handleKeyboard(e) {
        const modal = document.getElementById('stepModal');
        const isModalActive = modal?.classList.contains('active');
        if (!isModalActive) return;

        const keyActions = {
            'ArrowRight': () => this.nextStep(),
            'ArrowLeft': () => this.prevStep(),
            'Escape': () => this.closeModal(),
            ' ': () => { e.preventDefault(); this.markComplete(); }
        };

        const action = keyActions[e.key];
        if (action) { e.preventDefault(); action(); }
    }

    // Render steps
    renderSteps() {
        const container = document.getElementById('stepsContainer');
        if (!container) return;
        container.innerHTML = this.steps.map((step, index) => this.createStepCard(step, index)).join('');
    }

    createStepCard(step, index) {
        const isCompleted = this.state.completedSteps.has(index);
        const fallbackImg = `https://via.placeholder.com/500x400/10b981/ffffff?text=${encodeURIComponent(step.title)}`;
        return `
            <article class="step-card glass-effect rounded-2xl shadow-lg overflow-hidden modern-card ${isCompleted ? 'completed' : ''}" 
                     data-step-id="${index}">
                <div class="relative">
                    <img src="${step.img}" 
                         data-fallback="${fallbackImg}"
                         class="w-full h-48 object-contain bg-gray-100 step-image" 
                         alt="${step.title}" 
                         loading="lazy"
                         onerror="this.src=this.dataset.fallback">
                    <div class="absolute top-4 right-4 step-number">${step.id}</div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                    <p class="text-gray-600 text-sm mb-3 flex-grow">${step.desc}</p>
                    <div class="bg-blue-50 p-3 rounded-lg mb-4">
                        <p class="text-xs text-blue-800 font-medium">${step.instruction}</p>
                    </div>
                    <button class="step-detail-btn w-full gradient-bg text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all group mt-auto">
                        <i class="fas fa-eye ml-2 group-hover:translate-x-1 transition-transform"></i>
                        مشاهده جزئیات
                    </button>
                </div>
            </article>
        `;
    }

    // Modal management
    openModal(index) {
        this.state.currentStep = index;
        const step = this.steps[index];
        const modal = document.getElementById('stepModal');
        if (!modal) return;

        this.updateModalContent(step);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    updateModalContent(step) {
        const elements = {
            title: document.getElementById('modalTitle'),
            image: document.getElementById('modalImage'),
            description: document.getElementById('modalDescription'),
            prayer: document.getElementById('modalPrayer')?.querySelector('p'),
            instruction: document.getElementById('modalInstruction')
        };

        Object.entries(elements).forEach(([key, element]) => {
            if (element) {
                switch(key) {
                    case 'title':
                        element.textContent = step.title;
                        break;
                    case 'image':
                        element.src = step.img;
                        element.alt = step.title;
                        break;
                    case 'description':
                        element.textContent = step.desc;
                        break;
                    case 'prayer':
                        // Split by newlines and create grid layout with translations
                        const prayerLines = step.prayer.split('\n').filter(line => line.trim());
                        const translationLines = step.translation ? step.translation.split('\n').filter(line => line.trim()) : [];
                        const isSingleLine = prayerLines.length === 1;
                        const isTwoLines = prayerLines.length === 2;
                        
                        element.innerHTML = `
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; direction: rtl; ${(isSingleLine || isTwoLines) ? 'grid-column: 1 / -1; max-width: 600px; margin: 0 auto;' : ''}">
                                ${prayerLines.map((line, index) => {
                                    const translation = translationLines[index] || '';
                                    // Check if line contains (3x) or similar repetition marker, or is a single/two line
                                    const hasRepeat = line.includes('(3x)') || line.includes('(۳x)');
                                    const textAlign = (hasRepeat || isSingleLine || isTwoLines) ? 'center' : 'right';
                                    
                                    return `
                                        <div style="padding: 0.75rem 1rem; border-bottom: 2px solid #3b82f6; min-height: 4rem; display: flex; flex-direction: column; gap: 0.5rem; justify-content: center; ${(isSingleLine || isTwoLines) ? 'grid-column: 1 / -1;' : ''}">
                                            <div style="font-size: 1.5rem; font-weight: bold; color: #065f46; text-align: ${textAlign};">${line}</div>
                                            ${translation ? `<div style="font-size: 1rem; color: #059669; font-style: italic; text-align: ${textAlign};">${translation}</div>` : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        `;
                        element.style.lineHeight = '1.8';
                        element.style.textAlign = 'right';
                        break;
                    case 'instruction':
                        element.innerHTML = `
                            <div class="bg-blue-50 p-4 rounded-2xl">
                                <h4 class="text-lg font-bold text-blue-800 mb-2">راهنمای عملی:</h4>
                                <p class="text-blue-700">${step.instruction}</p>
                            </div>
                        `;
                        break;
                }
            }
        });
    }

    closeModal() {
        const modal = document.getElementById('stepModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    nextStep() {
        if (this.state.currentStep < this.steps.length - 1) {
            this.openModal(this.state.currentStep + 1);
        }
    }

    prevStep() {
        if (this.state.currentStep > 0) {
            this.openModal(this.state.currentStep - 1);
        }
    }

    // Progress management
    markComplete() {
        if (!this.state.completedSteps.has(this.state.currentStep)) {
            this.state.completedSteps.add(this.state.currentStep);
            this.saveProgress();
            this.renderSteps();
            this.updateProgress();
            this.showNotification('✓ مرحله تکمیل شد!');
            
            setTimeout(() => {
                if (this.state.currentStep < this.steps.length - 1) {
                    this.nextStep();
                } else {
                    this.closeModal();
                    this.showNotification('🎉 تبریک! تمام مراحل را تکمیل کردید');
                }
            }, 1000);
        }
    }

    updateProgress() {
        const percentage = (this.state.completedSteps.size / this.steps.length) * 100;
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        
        if (progressBar) progressBar.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${Math.round(percentage)}%`;
    }

    // Notification system
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Practice section
    renderPractice() {
        const container = document.getElementById('practiceContent');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center">
                <div class="text-6xl mb-6 animate-bounce">🕌</div>
                <h4 class="text-xl font-bold mb-4">تمرین نماز</h4>
                <p class="text-gray-700 mb-6">با تمرین مداوم، نماز را به خوبی یاد بگیرید</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    ${this.steps.slice(0, 8).map((step, index) => `
                        <button class="practice-step bg-green-50 p-4 rounded-xl text-center hover:scale-105 transition-all hover:shadow-lg" 
                                onclick="prayerApp.openModal(${index})">
                            <div class="text-sm font-bold">${step.title}</div>
                        </button>
                    `).join('')}
                </div>
                <button onclick="prayerApp.startPractice()" class="gradient-bg text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    <i class="fas fa-play ml-2"></i>شروع تمرین
                </button>
            </div>
        `;
    }

    startPractice() {
        this.openModal(0);
    }

    // Guide section
    renderGuide() {
        const container = document.getElementById('guideContent');
        if (!container) return;

        const guideSections = [
            {
                icon: '📖',
                title: 'شرایط نماز',
                items: ['طهارت (وضو یا غسل)', 'پاکی لباس و مکان', 'رو به قبله بودن', 'وقت نماز'],
                color: 'green'
            },
            {
                icon: '🕌',
                title: 'اوقات نماز',
                items: [
                    'نماز صبح: از اذان صبح تا طلوع آفتاب',
                    'نماز ظهر: از زوال تا غروب',
                    'نماز عصر: بعد از ظهر تا غروب',
                    'نماز مغرب: بعد از غروب',
                    'نماز عشا: بعد از مغرب تا نیمه شب'
                ],
                color: 'blue'
            },
            {
                icon: '🎯',
                title: 'نکات مهم',
                items: [
                    'نماز را با آرامش و حضور قلب بخوانید',
                    'معنای آیات و اذکار را بدانید',
                    'در طول نماز متمرکز باشید',
                    'از عجله کردن پرهیز کنید'
                ],
                color: 'purple'
            }
        ];

        container.innerHTML = `
            <div class="space-y-6">
                ${guideSections.map(section => `
                    <div class="bg-${section.color}-50 p-6 rounded-2xl glass-effect hover:scale-102 transition-transform">
                        <h4 class="text-xl font-bold mb-3">${section.icon} ${section.title}</h4>
                        <ul class="list-disc list-inside space-y-2">
                            ${section.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Quiz section
    renderQuiz() {
        const container = document.getElementById('quizContent');
        if (!container) return;

        this.state.quizAnswered = new Set();
        this.state.quizScore = 0;

        container.innerHTML = `
            <div class="space-y-6">
                ${this.quizQuestions.map((question, qIndex) => `
                    <div class="quiz-question" data-question="${qIndex}">
                        <h4 class="text-lg font-bold mb-4">${qIndex + 1}. ${question.q}</h4>
                        <div class="space-y-3">
                            ${question.opts.map((option, oIndex) => `
                                <button class="quiz-option w-full text-right border-2 border-gray-200 p-4 rounded-xl transition-all hover:scale-102 hover:shadow-md" 
                                        data-question="${qIndex}" 
                                        data-option="${oIndex}"
                                        onclick="prayerApp.checkAnswer(${qIndex}, ${oIndex}, ${question.ans}, this)">
                                    ${option}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
                <div id="quizResult" class="hidden">
                    <div class="p-6 rounded-2xl bg-green-50 text-green-800 text-center">
                        <h3 class="text-2xl font-bold mb-2">نتیجه آزمون</h3>
                        <p class="text-lg" id="quizScoreText">امتیاز شما: 0 از ${this.quizQuestions.length}</p>
                        <p class="text-3xl font-bold mt-2" id="quizPercentage">0%</p>
                    </div>
                </div>
                <div class="text-center mt-6">
                    <button onclick="prayerApp.resetQuiz()" class="gradient-bg text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                        <i class="fas fa-redo ml-2"></i>شروع مجدد آزمون
                    </button>
                </div>
            </div>
        `;
    }

    checkAnswer(qIndex, selected, correct, element) {
        if (this.state.quizAnswered.has(qIndex)) return;

        this.state.quizAnswered.add(qIndex);
        const questionDiv = document.querySelector(`[data-question="${qIndex}"]`);
        const options = questionDiv.querySelectorAll('.quiz-option');

        options.forEach((opt, index) => {
            opt.disabled = true;
            if (index === correct) {
                opt.classList.add('correct');
            } else if (index === selected && selected !== correct) {
                opt.classList.add('wrong');
            }
        });

        if (selected === correct) {
            this.state.quizScore++;
            this.showNotification('✓ پاسخ صحیح!', 'success');
        } else {
            this.showNotification('✗ پاسخ اشتباه', 'error');
        }

        if (this.state.quizAnswered.size === this.quizQuestions.length) {
            this.showQuizResult();
        }
    }

    showQuizResult() {
        const resultDiv = document.getElementById('quizResult');
        const scoreText = document.getElementById('quizScoreText');
        const percentage = document.getElementById('quizPercentage');
        
        if (resultDiv) {
            resultDiv.classList.remove('hidden');
            const scorePercentage = (this.state.quizScore / this.quizQuestions.length) * 100;
            
            if (scoreText) scoreText.textContent = `امتیاز شما: ${this.state.quizScore} از ${this.quizQuestions.length}`;
            if (percentage) percentage.textContent = `${Math.round(scorePercentage)}%`;
        }
    }

    resetQuiz() {
        this.state.quizAnswered.clear();
        this.state.quizScore = 0;
        this.renderQuiz();
    }

    // Tab management
    showTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        const targetTab = document.getElementById(`${tabName}Tab`);
        if (targetTab) targetTab.classList.remove('hidden');
        
        event.target.closest('.tab-btn')?.classList.add('active');
    }

    // Progress persistence
    async loadProgress() {
        try {
            const saved = localStorage.getItem('prayerProgress');
            if (saved) {
                const data = JSON.parse(saved);
                this.state.completedSteps = new Set(data.completedSteps || []);
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    }

    saveProgress() {
        try {
            const data = {
                completedSteps: Array.from(this.state.completedSteps),
                lastUpdated: new Date().toISOString()
            };
            localStorage.setItem('prayerProgress', JSON.stringify(data));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.step-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    }
}

// Global functions
function startLearning() {
    document.getElementById('stepsTab')?.classList.remove('hidden');
    document.querySelectorAll('.tab-content').forEach(tab => {
        if (tab.id !== 'stepsTab') tab.classList.add('hidden');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn')?.classList.add('active');
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function showVideoGuide() {
    // This function is no longer needed as the button is now a direct link
    // Keeping it for backward compatibility
    window.open('https://www.youtube.com/results?search_query=آموزش+نماز', '_blank');
}

function showTab(tabName) {
    prayerApp?.showTab(tabName);
}

function prevStep() {
    prayerApp?.prevStep();
}

function nextStep() {
    prayerApp?.nextStep();
}

function markComplete() {
    prayerApp?.markComplete();
}

function closeModal() {
    prayerApp?.closeModal();
}

// Initialize app
let prayerApp;
document.addEventListener('DOMContentLoaded', () => {
    prayerApp = new PrayerApp();
    window.prayerApp = prayerApp;
    window.startLearning = startLearning;
    window.showVideoGuide = showVideoGuide;
    window.showTab = showTab;
    window.prevStep = prevStep;
    window.nextStep = nextStep;
    window.markComplete = markComplete;
    window.closeModal = closeModal;
});
