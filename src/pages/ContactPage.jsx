import { useEffect, useState } from 'react'
import { content } from '../content'
import './ContactPage.css'

function ContactPage() {
    const { contact } = content
    const [openIndex, setOpenIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="contact-page">
            <main className="container contact-container">
                <h1 className="contact-title">{contact.title}</h1>

                <div className="faq-list">
                    {contact.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact-direct">
                    <p>{contact.emailPrompt}</p>
                    <a href={`mailto:${contact.emailAddress}`} className="email-link">{contact.emailAddress}</a>
                </div>
            </main>
        </div>
    )
}

export default ContactPage
