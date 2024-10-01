import styles from "../styles/Contact.module.css";
import ContactForm from "../components/Contact-form/Contact-form";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <div>
      <main className={styles.contactBody}>
        <section className={styles.formContainer}>
          <ContactForm className={styles.mainForm} showButton={true} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
