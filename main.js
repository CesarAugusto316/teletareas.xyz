
// RANDOM QOUTE MACHINE GENERATOR //
const Celebrities = {
    'quotes': [
        [['Un libro debe ser como un hacha para el mar helado que tenemos dentro de nosotros'], ['(Franz Kafka)']],
        [['Tener conocimientos no es suficiente, debemos aplicarlos. Desear no es suficiente, debemos actuar'], ['(Johann Wolfgang von Goethe)']],
        [['Desconfíen siempre vuestras mercedes, de quien es lector de un solo libro'], ['(Arturo Pérez-Reverte)']],
        [['No hables a menos que puedas mejorar el silencio.'], ['(Jorge Luis Borges)']],
        [['Recordar es fácil para quien tiene memoria. Olvidar es difícil para el que tiene corazón.'], ['(Gabriel García Márquez)']],
        [['Nada está perdido si se tiene la valentía de decir que todo está perdido y hay que comenzar de nuevo.'], ['(Julio Cortázar)']],
        [['Los lenguajes no son más que una pobre traducción.'], ['(Franz Kafka)']],
        [['No hay necesidad de apurarse. No hay necesidad de brillar. No hay necesidad de ser nadie más que nosotros.'], ['(Virginia Woolf)']],
        [['Errar en el camino propio es mejor que acertar en el camino de alguien más.'], ['(Fiódor Dostoyevsky)']],
        [['Una mentira puede llegar a viajar por medio mundo, mientras la verdad se está poniendo el calzado.'], ['(Mark Twain)']],
        [['Los monos son demasiado buenos para que el hombre pueda descender de ellos.'], ['(Friedrich Nietzsche)']],
        [['Si buscas la perfección, nunca estarás contento.'], ['(León Tolstói)']],
        [['Los verdaderos amigos te apuñalan por delante.'], ['(Oscar Wilde)']],
        [['En tiempos de engaños, decir la verdad es un acto revolucionario.'], ['(George Orwell)']],
        [['Como no me he preocupado de nacer, no me preocupo de morir.'], ['(Federico García Lorca)']],
        [['Un hombre ingenioso no se equivoca. Sus errores son volitivos y son portales del descubrimiento.'], ['(James Joyce)']],
        [['Nunca cierres tus labios a aquellos a quienes ya le has abierto tu corazón.'], ['(Charles Dickens)']],
        [['El genio artístico o literario, no es en ningún caso garantía de lucidez política.'], ['(Mario Vargas Llosa)']],
        [['Desleal es aquel que se despide cuando el camino se oscurece.'], ['(J.R.R. Tolkien)']],
        [['Si quieres saber cómo es una persona, observa bien cómo trata a sus inferiores, no a sus colegas.'], ['(J.K. Rowling)']],
        [['Años de amor se han olvidado, en el odio de un minuto.'], ['(Edgar Allan Poe)']],
    ],
   
    'giveQuote': function randomQuote() {
        let j = Math.floor(Math.random()*this.quotes.length)
        return [this.quotes[j][0], this.quotes[j][1]]
    }
}

let [quote, celebrity] = Celebrities.giveQuote()
// console.log(a, b)
// console.log(typeof(Celebrities.giveQuote()))


const QUOTE = document.querySelector('#quote');
const CELEBRITY = document.querySelector('#celebrity');

QUOTE.textContent = `"${quote}"`;
CELEBRITY.textContent = celebrity;
// RANDOM QOUTE MACHINE GENERATOR //


// SERVICES

let i=2;

	
$(document).ready(function(){
    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
radius = width/2.5;

     var height = container.height();
    var angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
    
    
    $('.itemDot').click(function(){
        
        var dataTab= $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+ dataTab).addClass('active');
        i=dataTab;
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-1)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-1)*36)+"deg)",
            "transition":"1s"
        });
        
        
    });
    
    setInterval(function(){
        var dataTab= $('.itemDot.active').data("tab");
        if(dataTab>6||i>6){
        dataTab=1;
        i=1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="'+i+'"]').addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+i).addClass('active');
        i++;
        
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-2)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-2)*36)+"deg)",
            "transition":"1s"
        });
        
        }, 5000);
    
});


// SERVICES