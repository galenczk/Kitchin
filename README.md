# Kitchin - The Helpful Chef's App

Kitchin helps users use the ingredients in their kitchen more efficiently.  

Kitchin allows users to maintain a list of ingredients they have on hand, and Kitchin will search for recipes using these ingredients.  Users can also optionally refine searches by diet-type.  Kitchin helps users find great food in the pescatarian, vegetaraian, paleo, and vegan diets.

Please visit Kitchin at vercel.com/galenczk/kitchin
Click on the "Tutotial Page" button on the welcome page to see a demonstration of Kitchin's functionality.

This is a project that I completed for my Software Engineering I class at Oregon State University.

## Build

I built Kitchin using the Next.js framework and hosted it on Vercel at: vercel.com/galenczk/kitchin

Kitchin uses MongoDB for persistent storage of the ingredient list and search results. 

I used TailwindCSS to style Kitchin.

Kitchin relies on the Spoonacular API for its recipe searches.  Since this is a freemium API, with a limit on monthly calls and results, I may have my API subscription turned off.  If this is the case when you are viewing the hosted project, please refer to the included tutorial pages for an example of Kitchin's functionality. 

## Things Learned 

Building Kitchin was a very informative process and, to date, has been my most complicated project so far.  I have previously only built projects using vanilla React, and had never worked with Next.js.  

I used two other libraries that were new to me on this project: TailwindCSS and Formik.  TailwindCSS is a kind of re-work of the traditional CSS approach, and, in my opinion, makes working with CSS much easier.  Formik changes the way that forms are interacted with in React and introduces several streamlining workflows.  I found both of these libraries extremely useful and will absolutely be using them on future projects. 

During production, I faced the issue of having a user's ingredients list persist through page reloads.  I really didn't want a user to have to enter a long list of ingredients each time they returned to the search page.  My solution to this was to use MongoDB to store the list.  This may not have been the most efficient solution, as it added extra network traffic to each ingredient CRUD operation.  Switching to using cookies to store this list may offer some speed increases.

Similarly, I needed a way to pass the results of the search function to the results page for display.  Again, I used MongoDB for this purpose as well.  When the array of results is received from the API, these are stored in a Mongo document, which is accessed when the results page loads.  This is likely an inefficient way to do this, as it adds network traffic to each search operation.  The benefit of this approach is that the results page can be loaded without additional API calls.    

## Ideas for improvement

The main thing I would like to improve on this project is the speed of page transitions and searches.  I think the main obstacle to this is the use of MongoDB to store states for the ingredients list and search results.  Mongo is thus queried on the page loads for the two main pages (search and results), causing slowdowns.  

I also envisioned handling the Spoonacular API calls in the background whenever a new ingredient is added to the list.  This would mean increased calls to the API, but if these calls were able to complete in the background as the user was thinking or otherwise pausing between navigations, then the presentation of the results could be almost instantaneous.    

## Thank you 

Thank you for taking the time to checkout my project!  
