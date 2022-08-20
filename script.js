console.log("script running")
document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout (() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        
    }
})
// code for blog 1 kedarkantha buttons
document.querySelector('.less1').style.display ='none'
document.querySelector('.moreblog1').style.display ='none'
document.querySelector('.read1').addEventListener("click", ()=>{
    document.querySelector('.moreblog1').style.display='inline'
    if(document.querySelector('.moreblog1').style.display='inline'){
        document.querySelector('.read1').style.display='none'
        document.querySelector('.less1').style.display='inline'
    }
})
document.querySelector('.less1').addEventListener("click", ()=>{
    document.querySelector('.moreblog1').style.display='none'
    document.querySelector('.less1').style.display='none'
    document.querySelector('.read1').style.display='inline'
})

// code for blog 2 valley of flower buttons
document.querySelector('.less2').style.display ='none'
document.querySelector('.moreblog2').style.display ='none'
document.querySelector('.read2').addEventListener("click", ()=>{
    document.querySelector('.moreblog2').style.display='inline'
    if(document.querySelector('.moreblog2').style.display='inline'){
        document.querySelector('.read2').style.display='none'
        document.querySelector('.less2').style.display='inline'
    }
})
document.querySelector('.less2').addEventListener("click", ()=>{
    document.querySelector('.moreblog2').style.display='none'
    document.querySelector('.less2').style.display='none'
    document.querySelector('.read2').style.display='inline'
})
