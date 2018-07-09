const { createElement } = React  // import REACT
const { render } = reactDOM  // import render

const title = createElement(  // create an element called title
    'h1',  // this is the html element
    { id: 'title', className: 'header' },  // attributes as an object
    'Hello World'  // child elements, in this case a text node
);

render(
    title,  // element
    document.getElementById('react-container') // parent to attach to
);