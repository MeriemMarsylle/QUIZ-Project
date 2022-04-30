export default class Header extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
    this.innerHTML = `
            <header>

                <nav>
                    <ul class =" flex justify-center  justify-items-center   gap-6">
                        <li><a style="color: ${
                          current === 'home' ? 'green' : 'red'
                        }" href="./">Accueil</a></li>
                        <li><a style="color: ${
                          current === 'history' ? 'green' : 'red'
                        }" href="./history.html">Historique</a></li>
                    </ul>
                </nav>
            </header>
        `;
  }
}
