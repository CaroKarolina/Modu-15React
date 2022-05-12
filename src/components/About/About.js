import styles from './About.module.scss';

const About = props => {
    
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default About;