import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-secondary dark:text-base-content text-white p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Amitav Roy Chowdhury.</p>
            </aside>
        </footer>
    )
}

export default Footer