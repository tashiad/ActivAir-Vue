# ActivAir
###### Find fresh air for your outdoor activities.
---
## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [Features](#Features)
* [Learning Process](#Learning-Process)
* [Authors](#Authors)

## Introduction
Last summer, as wildfires were raging across the western United States, residents who live and recreate nearby were often faced with the decision of whether to be active outdoors in the first place, and if so, where to go. Hikers, runners, cyclists, dog walkers, and more could have used an app that brings in up-to-date weather and air quality information by location to help make that decision.

[ActivAir](https://github.com/alia-peterson/ActivAir) solves this problem by tapping into data from the [IQAir AirVisual API](https://www.iqair.com/us/). Users can view data for their current location, add and remove other locations, get advice on whether it's safe to recreate outdoors given the AQI for that area, and click to view trail recommendations for each location on [AllTrails](https://www.alltrails.com/). The project specifications can be found [here](https://frontend.turing.io/projects/module-3/stretch.html).

### Motivation & Goals
* Learn a new "stretch" technology independently. After learning React last month, we chose to dive into Vue.js to deepen our understanding of frameworks. We had 9 days to self-teach Vue.js and create our app.
* Create an MVP that solves a problem for users
* Gain more experience using external APIs

---

## Technologies
JavaScript, Vue, RESTful APIs, Cypress, Local Storage, HTML, CSS

---

## Deployment
TO DO [Deployment Link]()

**To run locally:**
1. Clone down this repo
2. `npm install`
3. `npm run start`

---

## Features
* [Display Current Location](#Display-Current-Location)
* [Display Other Locations](#Display-Other-Locations)
* [Activity Recommendations](#Activity-Recommendations)
* [View Trails](#View-Trails)


#### Display Current Location
When the site loads, the you'll see a form with options to get info for you current location or to choose a location from a dropdown list of available cities and states. If you click "Nearest Location," a card will show up and persist on refresh with the latest data so you can stay up to date with the AQI and weather for where you are.
<p align = "center">
<img width="1440" alt="homepage" src="">
</p>
    <details>
      <summary>Under the Hood</summary>
      The current location card data comes from our <code>fetch</code> to the AirVisual API IP geolocation endpoint. Conditional rendering in Vue.js allowed us to include "Current Location" copy at the top of the card without the delete button. We used <code>unshift</code> to ensure that the current location card always shows up first in the render even as other location cards are added. Once a current location card has been added from the form, it is also added to <code>localStorage</code> and will show up on refresh with data from the latest timestamp.
    </details>

#### Display Other Locations
To see what the AQI and weather looks like in other areas, you can choose supported cities and states from the dropdown menus in the form. Once a new location has been added, it's automatically saved so that you can come back to it later on. You can also delete a location if you no longer want to view it. Each card can be individually refreshed to view the latest weather and AQI data.
<p align = "center">
<img width="1440" alt="search" src="">
</p>
    <details>
      <summary>Under the Hood</summary>
      On load, the state form dropdown menu is populated with a <code>fetch</code> to AirVisual's "List supported states in a country" endpoint. Once a state has been selected, the cities dropdown is populated with a <code>fetch</code> to AirVisual's "List supported cities in a state" endpoint for the selected state. On submit, another <code>fetch</code> to their "Get specified city data" endpoint interpolating both state and city dropdown values provides the data needed to render a new card for that location. Error handling was used to disable the cities dropdown and submit button until the form has met certain conditions, and to display a server error message to the UI when the calls/minute limit has been reached. Locations are saved to <code>localStorage</code> and can also be deleted.
    </details>

#### Activity Recommendations
To make the app directly relevant to our active/outdoorsy target audience, messages are displayed with specific recommendations for outdoor activity based on a location's given AQI and what [AirNow.gov](https://www.airnow.gov/) suggests is safe.
<p align = "center">
<img width="1440" alt="rating" src="">
</p>
    <details>
      <summary>Under the Hood</summary>
      Conditional rendering in Vue.js allowed us to render colors, recommendation messages, and more based on where a location's AQI falls within a range of numbers on the scale.
    </details>

#### View Trails
Taking the activity recommendations a step further, we added a button to each location card that sends users to the trails page for that location on AllTrails.
<p align = "center">
<img width="1440" alt="rating" src="">
</p>
    <details>
      <summary>Under the Hood</summary>
      By formatting the city and state inputs from the form to match the AllTrails URL format, we were able to interpolate the link for each individual card so that the user lands on that particular location page.
    </details>

### Accessibility
This app was built with all users in mind. We used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as we could. Of course, as we are committed to including all users, we are ready to make future edits to address any areas that we may have missed.

### Future Improvements
TO DO
- Limitations with API calls (would like everything to refresh, not have calls/minute limit, etc)
- Login using firebase?
- Router

---

## Learning Process
TO DO

---

## Authors
<table>
    <tr>
        <td> Alia Peterson <a href="https://github.com/alia-peterson">GH</td>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
        <td> Allison Dietz <a href="https://github.com/dietza">GH</td>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/70297733?s=460&u=f7e7c3682b498a90f005565b56b38a8ac985b053&v=4" alt="Ms. Peterson"
 width="150" height="auto" /></td>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Ms. Davis"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/64617223?s=460&u=8f5b1a393d777e490de0367a2ddb5f236bbdef75&v=4" alt="Ms. Dietz"
 width="150" height="auto" /></td>
</table>
