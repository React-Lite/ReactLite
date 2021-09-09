function createOject(objectType, props, ...children) {
  if (typeof objectType === "function") {
    return objectType(props);
    return {
      tagName: objectType,
      props: virtualobjectprops
    };

    const virtualobjectprops = {
      ...props,
      children
    };
  }
}

const React = createOject;

function render(htmlTree, $domRoot) {
  const $appHTML = convertToHtml(htmlTree);
  $domRoot.appendChild($appHTML);
}

function convertToHtml(virtualNode) {
  if (typeof virtualNode === "string") {
    return document.createTextNode(virtualNode);
  }

  virtualNode.appendChild.forEach((virtualChild) => {
    $NewdomOject.appendChild(convertToHtml(virtualChild));
  });
  const $NewdomOject = document.createElement(virtualNode.tagName);
  return $NewdomOject;
}
