

const teamMembers = [

    {
        nome: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        profilePicture: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela',
        surname: 'Caroll',
        role: 'Chef Editor',
        profilePicture: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        profilePicture: 'walter-gordon-office-manager.jpg'
    },

    {
        nome:'Angela',
        surname: 'Lopez',
        role: 'Social Media',
        profilePicture: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott',
        surname:'Estrada',
        role:'Developer',
        profilePicture: 'scott-estrada-developer.jpg'
    },

    {
        nome:'Barbara',
        surname:'Ramos',
        role:'Graphic Designer',
        profilePicture: 'barbara-ramos-graphic-designer.jpg'
    }
]


/*function tableCreate(row, col){
    let body = document.body;
    let tbl  = document.createElement('table');
    tbl.style.width  = '500px';

/* for(let i = 0; i < teamMembers.length; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${i},${j}` ));
            }     
    }
    body.appendChild(tbl);
}

tableCreate(6,3);*/

for(let i = 0; i < teamMembers.length; i++ ){
    const member = teamMembers [i];
    console.log(member);

    for(let chiave in member){
        console.log(chiave, ':', member [chiave]);
    }

    console.log('---')


    document.getElementById('my-team').innerHTML += teamMembers [i].nome + " " +   teamMembers [i].surname +  " " +  teamMembers [i].role +  " "  + teamMembers [i].profilePicture + "<br>";

}


