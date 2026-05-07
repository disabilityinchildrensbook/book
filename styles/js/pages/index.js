/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* Prompts
  ===================================================================== */
  let prompts = await charadex.initialize.page(null, charadex.page.index.prompts, (arr) => {

      // Splice the silly little array
      let sliceAmount = charadex.page.index.prompts.amount || 6;
      arr.splice(sliceAmount, arr.length);

    }, (data) => {

      // Add the silly little prompt stuff here too
      $('.cd-prompt-background').each(function(i) {
        const element = $(this);
        const image = data.array[i]?.image;
        element.attr('style', `background-image: url(${image})`);
      });
      
    }
    
  );


  /* Staff
  ===================================================================== */
  let staff = await charadex.initialize.page(null, charadex.page.index.staff, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.staff.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Designs
  ===================================================================== */
let designs = await charadex.initialize.page(
  null,
  charadex.page.index.designs,

  // STEP 1 — filter BEFORE sorting + gallery build
  (arr) => {
    console.log("Available keys:", Object.keys(arr[0])); // debug once!

    let featuredOnly = charadex.manageData.filterArray(arr, {
      featured: ["yes"]
    });

    // Replace the data BEFORE Charadex continues
    arr.length = 0;
    arr.push(...featuredOnly);
  },

  // STEP 2 — slice AFTER sorting
  ({ array }) => {
    let sliceAmount = charadex.page.index.designs.amount || 10;
    array.splice(sliceAmount);
  }
);
  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});