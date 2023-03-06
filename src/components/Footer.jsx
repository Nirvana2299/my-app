function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer>
            <p>
            © {year} Shoaib, Inc. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;