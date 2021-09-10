function convertToHtml(virtualNode) {
  console.log(virtualNode);

  if(typeof virtualNode === 'string' || typeof virtualNode === 'number') {
    return document.createTextNode(`${virtualNode}`);
  }

  const $domElement = document.createElement(virtualNode.tagName);

  virtualNode.props.children.forEach((virtualChild) => {
    $domElement.appendChild(convertToHtml(virtualChild));
  })

  return $domElement;
}

function render(initialVirtualTree, $domRoot) {
  // console.log(JSON.stringify(initialVirtualTree, null, 4));

  const $appHTML = convertToHtml(initialVirtualTree);
  console.log('$appHTML',$appHTML);
  $domRoot.appendChild($appHTML);
}

function createElement(elementType, props, ...children) {
  const virtualElementProps = {
    ...props,
    children
  }

  if(typeof elementType === "function") {
    return elementType(virtualElementProps);
  }

  return {
    tagName: elementType,
    props: virtualElementProps
  };
}

const React = {
  createElement,
};
