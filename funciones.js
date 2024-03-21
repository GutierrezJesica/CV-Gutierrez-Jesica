var checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }
    function descargarPDF(){
        window.open("https://drive.google.com/file/d/1R6P9FuYO9BN-3SxGfqpmzgoZeo1gbv2U/view?usp=drive_link")
    }
