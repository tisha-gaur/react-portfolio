import React, { useState } from 'react';
import contact from "../assets/contact.png";
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://portfolio-backend-rho-rust.vercel.app/api/contact', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
          });
        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            alert('Failed to send message.');
        }
    };

    return (
        <div className="mx-auto pb-0 md:flex md:gap-8 md:w-full md:justify-center md:items-center shadow-md rounded-md">
            <motion.form
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                onSubmit={handleSubmit} className="space-y-4 w-full lg:w-2/5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-transparent border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-transparent border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-transparent border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-transparent border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-black bg-gradient-to-r from-pink-300 via-slate-00 to-purple-500 hover:bg-gradient-to-bl bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:ring-offset-2"
                >
                    Send
                </button>
            </motion.form>
            <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                src={contact} className='hidden lg:block w-1/3' alt="" />
        </div>
    );
};

export default ContactForm;
