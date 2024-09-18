import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
                <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
         Mexican Bold - Orgullosamente Chingón  
        </a>
	  <p>
          Estilo de rock star para tí y para mí.
        </p>

      </header>
    </div>
  );
}

export default App;
