import '../app-bar/main.css';


class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
        this.innerHTML = `    
          <header class="app-bar">
            <div class="app-bar__brand">
              <h1>Pariwisata Yogyakarta</h1>
            </div>
            <div class="app-bar__menu">
              <button id="hamburgerButton" aria-label="toggle navigation">☰</button>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Admin Login</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>    
          </header>
          `;
      }
    }
    
    customElements.define('app-bar', AppBar);
    export default AppBar;
    