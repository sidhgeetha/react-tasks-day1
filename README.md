# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Reacy day1 tasks- Develop UI using React.js application with JSX(dynamic manner) ##

* File name: CardNew.jsx 
* File name:App.jsx 
* css file: CardNew.css 


1. Created folder for card name as "CardNew.jsx" .
2. In App.jsx file ,Stored all card data in variable name called "dataObj".
3. In CardNew file opened arrow function , passed parameter as item and index and returned structure of card in HTML(used bootstrap) code.And stored this arrow function inside veriable called "renderCard"
   1. div "col"
   2. div "card"
   3. <p>Title</p>
   4. <h5>Title2</h5>
   5. div "card-body"
   6. Opend unorderedlist inside card body.
   7. inside card-body kept list-items.
   8. Inside each list items usded span class "fa-li" and incon class ""fas fa-check"/fa fa-times to combine icon with text in same line.
   9. Div class "d-grid" and placed button link inside <a> tag. Applied condition if index is 2 than button class to be "btn btn-primary" else "btn btn-primary disabled".(index 0 & 1)
   10. Opened cardNew component and passed {data} as parameter suing arrow function . In return function, map the each (item and index) from data.
   11. renderCard function is used to renders teh data in card format.
   12. "renderCard" function is being called whenver we tried the the arrow function named "CardNew" and iterate the each items and index from data and renders the data in card.
   13. Finally exported the "CardNew".
   14. Applied necessary style in cardNew.css file

4. Imported   <CardNew data={dataObj} /> component in App.JSX file.

      
 


