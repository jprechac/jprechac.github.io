function RunFooter() {
    SetFooter();
    FooterYear();
};

function SetFooter() {
    const FooterHTML = `
        <div class="container text-muted">
            &copy; Jordan Prechac, <span id="year"></span>
            <br>
            <a href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn" target="_blank">LinkedIn</a>
            <br>
            <a href="https://github.com/jprechac" title="GitHub" target="_blank">GitHub</a>
            <br>
            <a href="mailto:jprechac@gmail.com" title="jprechac@gmail.com">Email</a>
        </div> 
    `;
    document.getElementById("footer").innerHTML = FooterHTML;
};
function FooterYear() {
    var y = new Date().getFullYear();
    document.getElementById("year").innerText = y;
};