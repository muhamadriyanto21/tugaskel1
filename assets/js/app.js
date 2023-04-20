// navbar
let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

// filter
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

// const regionFilterBtn = document.querySelector('.region-filter');
// const categoryFilterBtn = document.querySelector('.category-filter');
// const nameFilterBtn = document.querySelector('.name-filter');
const filterBtn = document.querySelector('.filter');

// regionFilterBtn.addEventListener('click', function () {
//     // code to filter by region
// });

// categoryFilterBtn.addEventListener('click', function () {
//     // code to filter by category
// });

// nameFilterBtn.addEventListener('click', function () {
//     // code to filter by name
// });

filterBtn.addEventListener('click', function () {
    // code to apply all filters
});















const filterSearch = computed(() => {
   if (selectedTag.value || searchName.value || selectedRegion.value) {
      filterData.value = destinations.value.filter(destination => {
         let matchTag = true;
         let matchRegion = true;
         let matchName = true;
         if(selectedTag.value) {
            matchTag = destination.destination_tags.some(tag => tag.name === selectedTag.value)
         }
         if(selectedRegion.value) {
            matchRegion = destination.destination_region_id === selectedRegion.value
         }
         if(searchName.value) {
            matchName = destination.name.toLowerCase().includes(searchName.value.toLowerCase())
         }
         return matchTag && matchName && matchRegion
      }) 
      return filterData.value
} else {
      return destinations.value
}
})

