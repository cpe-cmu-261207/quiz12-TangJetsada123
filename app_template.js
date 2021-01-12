document.addEventListener('DOMContentLoaded', function() {
    function update(){
        const Name = document.querySelector('#input-number').value
       const div = document.createElement("div")
        const body = document.body
        div.innerHTML = "Create by Jetsada Jinaka 620612144"
        
    document.querySelector('p').innerHTML = 62061214 + Name 
       
    }
    body.append(div)
    document.querySelector('#input-number').onkeyup = update
    
})
