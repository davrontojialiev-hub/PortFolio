import { FC, useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next'; 
import { LuMail, LuPhone, LuMapPin, LuGithub, LuSend, LuInstagram } from 'react-icons/lu';
import { useScrollAnimation } from '../useScrollAnimation';

const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: "https://github.com/davrontojialiev-hub",
        icon: <LuGithub />
    },
    {
        name: "Telegram",
        url: "https://t.me/Davrik_15",
        icon: <LuSend style={{ transform: 'rotate(-20deg)' }} />
    },
    {
        name: "Instagram",
        url: "https://instagram.com/davrik.t",
        icon: <LuInstagram />
    }
];

const Contact: FC = () => {
    const containerRef = useScrollAnimation();
    const { t } = useTranslation(); 

    const CONTACT_INFO = {
        email: "davrontojialiev@gmail.com",
        phone: "+998 97 744 36 56",
        location: t('contact.info.locationValue'),
        workTimeWeekday: "9:00 - 23:00",
        workTimeWeekend: t('contact.info.workTimeWeekendValue')
    };

    const FAQ_DATA = [
        {
            question: t('contact.faq.q1.question'),
            answer: t('contact.faq.q1.answer')
        },
        {
            question: t('contact.faq.q2.question'),
            answer: t('contact.faq.q2.answer')
        },
        {
            question: t('contact.faq.q3.question'),
            answer: t('contact.faq.q3.answer')
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const TELEGRAM_BOT_TOKEN = '8267093019:AAHel80MnrFkW5hC2Jkw1KmArFsc5q0vjjU';
        const TELEGRAM_CHAT_ID = '456929750'; 

        const messageText = `
📬 <b>${t('contact.telegram.newRequest')}</b>

👤 <b>${t('contact.form.nameLabel')}:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📝 <b>${t('contact.form.subjectLabel')}:</b> ${formData.subject}
💬 <b>${t('contact.form.messageLabel')}:</b>
${formData.message}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: messageText,
                    parse_mode: 'HTML' 
                }),
            });

            if (response.ok) {
                alert(t('contact.messages.success'));
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert(t('contact.messages.error'));
            }
        } catch (error) {
            console.error(error);
            alert(t('contact.messages.networkError'));
        }
    };

    return (
        <section className="contact-page" ref={containerRef}>
            <div className="container">

                <div className="contact-page__header fade-in-element">
                    <h1 className="contact-page__title">
                        {t('contact.titlePage')} <span>{t('contact.titlePageAccent')}</span>
                    </h1>
                    <p className="contact-page__subtitle">
                        {t('contact.subtitlePage')}
                    </p>
                </div>

                <div className="contact-grid">

                    <div className="contact-column">
                        <div className="contact-card fade-in-element">
                            <h2 className="contact-card__title">{t('contact.info.title')}</h2>

                            <div className="contact-info-list">
                                <a href={`mailto:${CONTACT_INFO.email}`} className="contact-info-item">
                                    <div className="contact-info-item__icon">
                                        <LuMail />
                                    </div>
                                    <div className="contact-info-item__content">
                                        <span className="contact-info-item__label">Email</span>
                                        <span className="contact-info-item__value">{CONTACT_INFO.email}</span>
                                    </div>
                                </a>

                                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="contact-info-item">
                                    <div className="contact-info-item__icon">
                                        <LuPhone />
                                    </div>
                                    <div className="contact-info-item__content">
                                        <span className="contact-info-item__label">{t('contact.info.phoneLabel')}</span>
                                        <span className="contact-info-item__value">{CONTACT_INFO.phone}</span>
                                    </div>
                                </a>

                                <div className="contact-info-item">
                                    <div className="contact-info-item__icon">
                                        <LuMapPin />
                                    </div>
                                    <div className="contact-info-item__content">
                                        <span className="contact-info-item__label">{t('contact.info.locationLabel')}</span>
                                        <span className="contact-info-item__value">{CONTACT_INFO.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card fade-in-element">
                            <h2 className="contact-card__title">{t('contact.socialsTitle')}</h2>
                            <div className="social-links-grid">
                                {SOCIAL_LINKS.map((link, idx) => (
                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-button">
                                        <span className="social-button__icon">{link.icon}</span>
                                        <span className="social-button__name">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="contact-card fade-in-element">
                            <h2 className="contact-card__title">{t('contact.info.workTimeTitle')}</h2>
                            <div className="work-time">
                                <div className="work-time__row">
                                    <span>{t('contact.info.workTimeWeekdays')}</span>
                                    <strong>{CONTACT_INFO.workTimeWeekday}</strong>
                                </div>
                                <div className="work-time__row">
                                    <span>{t('contact.info.workTimeWeekends')}</span>
                                    <strong>{CONTACT_INFO.workTimeWeekend}</strong>
                                </div>
                                <div className="work-time__status">
                                    <span className="status-dot"></span> {t('contact.info.statusAvailable')}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="contact-column">
                        <form onSubmit={handleSubmit} className="contact-form-card fade-in-element">
                            <h2 className="contact-form-card__title">{t('contact.form.title')}</h2>

                            <div className="contact-form-group-row">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.form.nameLabel')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">{t('contact.form.subjectLabel')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact.form.messageLabel')}</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-form-submit">
                                <LuSend className="submit-icon" /> {t('contact.form.submitBtn')}
                            </button>
                        </form>

                        <div className="faq-card fade-in-element">
                            <h2 className="faq-card__title">{t('contact.faq.title')}</h2>
                            <div className="faq-list">
                                {FAQ_DATA.map((faq, idx) => (
                                    <div key={idx} className="faq-item">
                                        <h3 className="faq-item__question">{faq.question}</h3>
                                        <p className="faq-item__answer">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;