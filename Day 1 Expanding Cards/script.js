// We need to change the active class to a different panel classes.

// We need to bring all the panels into JavaScript.
    // Since we have multiple panel classes we need to gram all of them.
const panels = document.querySelectorAll('.panel');
    // This puts all panel elements in a node list.
    // console.log(panels);

// We need to loop through each node to change the active class

panels.forEach((panel) =>{
    // When a panel is clicked, change the active class
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach( panel =>{
        panel.classList.remove('active')
    } )
}