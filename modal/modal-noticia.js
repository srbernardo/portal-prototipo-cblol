const template = document.createElement("template");
template.innerHTML = `

<div class="titulo">
<h1>Notícias</h1>
<div class="search">
  <img src="../../assets/Vector.png" alt="">
</div>
</div>
<article class="noticia">
<h2>
  Pain
  <span>20/06/2022</span>
</h2>
<div class="descricao">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula.
    Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque temPor neque nibh, pellentesque rutrum
    orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus
    euismod et. Aenean a eros id diam consequat sodales.
  </p>
  <p>
    Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a
    eros
    id diam consequat sodales.
    __
  </p>
</div>
<span>
  Por <strong>GE</strong>
</span>
</article>
<article class="noticia">
<h2>
  KaBuM!
  <span>20/06/2022</span>
</h2>
<div class="descricao">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula.
    Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque temPor neque nibh, pellentesque rutrum
    orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus
    euismod et. Aenean a eros id diam consequat sodales.
  </p>
  <p>
    Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a
    eros
    id diam consequat sodales.
    __
  </p>
</div>
<span>
  Por <strong>Mais Esportes</strong>
</span>
</article>
<article class="noticia">
<h2>
  FURIA
  <span>20/06/2022</span>
</h2>
<div class="descricao">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula.
    Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque temPor neque nibh, pellentesque rutrum
    orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus
    euismod et. Aenean a eros id diam consequat sodales.
  </p>
  <p>
    Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a
    eros
    id diam consequat sodales.
    __
  </p>
</div>
<span>
  Por <strong>GE</strong>
</span>
</article>

`;


class Noticias extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    console.log("esta vivo");
    this.attachShadow({ mode: "open" });

    const css = document.createElement("link");
    css.setAttribute("type", "text/css");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "../../modal/modal-noticia.css");

    this.shadowRoot.appendChild(css);

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("noticias-tag", Noticias);
