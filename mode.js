let Title = {
    setColor: function(color) {
        document.querySelector('a').style.color = color;
    }
}

let Body = {
    body: document.querySelector('body'),
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

let Href = {
    setColor: function(color) {
        let section = document.querySelectorAll('a'); 
        let i = 0; 

        for (i = 1; i < section.length; i++) {
            section[i].style.color = color;
        }
    }
}

function mode(self) {

    if (self.value === 'Night') {
        self.value = 'Day';
        Title.setColor('white');
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Href.setColor('orange');
    }
    else {
        self.value = 'Night';
        Title.setColor('black');
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Href.setColor('blue');
    }
}