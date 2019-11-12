function RunNav() {
    SetNav();
    OffsetNavHeight();
    NavActive();
}

function SetNav() {
    const NavHTML = `
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm fixed-top" id="nav">
            <div class="container">
                <a class="navbar-brand" href="index.html">Jordan Prechac</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav">
                        <a class="nav-link" id="resume-link" href="resume.html">Resume</a>
                        <a class="nav-link" id="linkedin-link" href="https://www.linkedin.com/in/jordanprechac/" title="LinkedIn"
                            target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('nav-import').innerHTML = NavHTML;
};

function OffsetNavHeight() {
    let navHeight = document.getElementById("nav").offsetHeight * 1.1;
    navheight = Math.ceil(navHeight).toString();
    document.body.style.marginTop = navHeight + "px";
};

function NavActive() {
    if (document.title == "Jordan Prechac Resume") {
        document.getElementById("resume-link").classList.add("active");
    };
};