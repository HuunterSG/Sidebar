const   toggle = document.getElementById('icono-menu');
const   sidebar = document.getElementById('cont-menu');
    document.onclick = function(e){
        if(e.target.id !== 'cont-menu' && e.target.id !== 'icono-menu')
        {
            toggle.classList.remove('active')
            sidebar.classList.remove('active')
        }
    }
    toggle.onclick = function(){
        toggle.classList.toggle('active');
        sidebar.classList.toggle('active')
    }

