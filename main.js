
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
        [['En tiempos de engaños, decir la verdad es un acto revolucionario.'], ['(George Orwell)']],
        [['Como no me he preocupado de nacer, no me preocupo de morir.'], ['(Federico García Lorca)']],
        [['Un hombre ingenioso no se equivoca. Sus errores son volitivos y son portales del descubrimiento.'], ['(James Joyce)']],
        [['Nunca cierres tus labios a aquellos a quienes ya le has abierto tu corazón.'], ['(Charles Dickens)']],
        [['Desleal es aquel que se despide cuando el camino se oscurece.'], ['(J.R.R. Tolkien)']],
        [['Si quieres saber cómo es una persona, observa bien cómo trata a sus inferiores, no a sus colegas.'], ['(J.K. Rowling)']],
        [['Años de amor se han olvidado, en el odio de un minuto.'], ['(Edgar Allan Poe)']],
        [['El fracaso es el condimento que le da sabor al éxito.'], ['(Truman Capote)']],
        [['La felicidad es beneficiosa para el cuerpo, pero es el dolor el que desarrolla el poder de la mente.'], [ '(Marcel Proust)']],
        [['La forma de hacer que las personas sean confiables es confiando en ellas.'], ['(Ernest Hemingway)']],
        [['La verdadera generosidad hacia el futuro radica en entregar todo al presente.'], ['(Albert Camus)']],
        [['El miedo es inevitable, debo aceptarlo, pero no puedo dejar que me paralice.'], ['(Isabel Allende)']],
        [['Soy incapaz de concebir lo infinito, pero tampoco acepto lo finito. Deseo que esta aventura que es el contexto de mi vida continúe sin fin.'], ['(Simone de Beauvoir)']],
        [['Podemos desafiar las leyes humanas, pero no podemos resistirnos a las leyes de la naturaleza.'], ['(Julio Verne)']],
        [['No puedes nadar hacia nuevos horizontes hasta que tengas el coraje de perder de vista la costa.'], ['(William Faulkner)']],
        [['Es mejor fallar siendo originales, que triunfar imitando a alguien.'], ['(Herman Melville)']],
        [['Es necesario haber deseado morir para conocer cuán bueno es vivir.'], ['(Alexandre Dumas)']],
        [['Si escondes tu ignorancia, nadie te golpeará y nunca aprenderás.'], ['(Ray Bradbury)']],
        [['Es una gran cosa empezar la vida con una pequeña cantidad de libros muy buenos.'], ['(Arthur Conan Doyle)']],
        [['Nunca permití que mis enseñanzas interfirieran con mi educación.'], ['(Mark Twain)']],
        [['Si la libertad tiene un significado, es el de poder decirle a la gente lo que no desean oír.'], ['(George Orwell)']],
        [['Daría todo lo que sé, por la mitad de lo que ignoro.'], ['(René Descartes)']],
        [['Se viaja no para buscar el destino, sino para huir de donde se parte.'], ['(Miguel de Unamuno)']],
        [['No es lo que decimos o pensamos lo que nos define, es lo que hacemos.'], [' (Jane Austen)']],
        [['De las cosas que tienes, escoge las mejores y después medita cuán afanosamente las hubieras buscado si no las tuvieras.'], ['(Marco Aurelio)']],
        [['La corrección hace mucho, pero el estímulo hace más.'], ['(Johann Wolfgang von Goethe)']],
        [['No existen obstáculos imposibles; solamente hay voluntades más o menos fuertes.'], ['(Julio Verne)']],
        [['La imaginación es la única arma en la guerra contra la realidad.'], ['(Lewis Carroll)']],
        [['Una gota de tinta puede hacer pensar a millones.'], ['(Lord Byron)']],
        [['Primero saltas del precipicio y luego construyes tus alas en la caída.'], ['(Ray Bradbury)']],
        [['El primer paso de la ignorancia es presumir de saber.'], ['(Baltasar Gracián)']],
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
        
        }, 6000);
    
});


// SERVICES