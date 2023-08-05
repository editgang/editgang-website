
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    let isOpen = false;

    header.addEventListener('click', () => { 

        item.classList.toggle("icon")
         
        if (!isOpen) {
            
            content.style.transition = "all 1.2s ease";

            item.classList.toggle("active");


            isOpen = true;
        } else if (isOpen) {
            item.classList.toggle("active");
            content.style.transition = "";
            isOpen = false;
    
        }
        console.log(content.style.transition)

        /*
        if (headerClicked == false) {
            accordionContent.style.display = "block";
            headerClicked = true
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";



           // accordionContent.scrollIntoView({ behavior: "smooth"});
//
           // setTimeout(() => {
           //     item.scrollIntoView({ behavior: "smooth"});
           // }, 200);




            


        } else if (headerClicked == true) {
            headerClicked = 
            accordionContent.style.maxHeight = '0';
            setTimeout(() => {
                accordionContent.style.display = 'none';
            }, 200); // Adjust the delay to match your transition duration in CSS
        }
        */
}); 
} ) 



/* 
const navJoin = document.querySelector('.nav_waitlist');
navJoin.addEventListener('click', () => {
    const input = document.querySelector('.input_waitlist');
    input.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
} )

*/

const navJoin = document.querySelector('.nav_faq');
navJoin.addEventListener('click', () => {
    const faqSection = document.querySelector('.section_faq');
    faqSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}
)


const buttonJoin = document.querySelector('.join_waitlist');

buttonJoin.addEventListener('click', () => {
    let inputMail = document.querySelector('.input_waitlist')
    let email = inputMail.value

    let url = `https://magic.beehiiv.com/v1/86321025-95d2-475e-80c9-0f4147bc53d9?email=${email}&redirect_to=https://www.editgang.com/`;
    window.open(url);

    inputMail.value = ""

    
})