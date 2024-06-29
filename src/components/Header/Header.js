import * as React from 'react';
import * as styles from './Header.module.css';
import Hamburger from './Hamburger';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/logo.svg" alt="Logo" />
                </div>
                <div className={styles.nav}>
                    
                    <a href="/">About</a>
                    <a href="/">Room</a>
                    <a href="/">Dining</a>
                    <a href="/">Experience</a>
                    <a href="/">Creative Space</a>
                    <a href="/">News</a>
                    <a href="/">Access</a>
                    
                </div>
                <div className={styles.toggleMenu}>
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
                <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.close}>
                        <button onClick={toggleMenu}>
                            ×Close
                        </button>
                    </div>
                    <ul>
                    <li><a href='/' onClick={toggleMenu}>ホーム</a></li>
                    <li><a href='/'>MAHORAについて</a></li>
                    <li><a href='/'>お部屋</a></li>
                    <li><a href='/'>お食事</a></li>
                    <li><a href='/'>過ごす</a></li>
                    <li><a href='/'>クリエイティブスペース</a></li>
                    <li><a href='/'>よくあるご質問</a></li>
                    <li><a href='/'>アクセス</a></li>
                    <li><a href='/'>お知らせ</a></li>
                    <li><a href='/'>お問い合わせ</a></li>
                    <li><a href='/'>プライバシーポリシー</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
