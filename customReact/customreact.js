const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        tagret: '_blank'
    },
    children: 'Click here to visit google'
}

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type) 
    domElement.innerHTML = reactElement.children

    // here we have written every prop one by one
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.tagret)

    for(const prop in reactElement.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)