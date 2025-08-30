let ctx = document.getElementById('myPieChart').getContext('2d');

new Chart(ctx,{
    type: 'pie',
    data: {
        labels:['Scripting','Editing','Drafting','Dialogue Writing','Acting','Interviewer'],
        datasets:[{
            data:[9.524,14.2857,19.0476,4.762,28.5714,23.8095],
            backgroundColor:['red','blue','green','purple','orange','brown']
        }]
    },
    responsive: false
})

const ab = document.querySelector('#M');
const Ab=document.getElementById('Ab');
ab.addEventListener("click", ()=> { 
    Ab.style.backgroundColor = "blueviolet";
    Ab.style.fontFamily = "Algerian";
    Ab.style.fontWeight = "bolder";
})

const ob = document.querySelector('#N');
const Ob = document.getElementById('Ob');
ob.addEventListener("click",() =>{
    Ob.style.backgroundColor = "yellowgreen";
    Ob.style.fontWeight = "Bolder";
})




