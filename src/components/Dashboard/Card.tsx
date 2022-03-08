import styles from './styles.module.scss';
import Image from 'next/image';
import qrCode from "../../../public/img/img-qr-code.png"

export function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src="/image-qr-code.png"
                    alt="QR Code"
                    width={245}
                    height={230}
                />
            </div>

            <p>Improve your front-end skills by building projects</p>
            <div className={styles.text}>
            Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level 
            </div>
            
            
        </div>
    )
}