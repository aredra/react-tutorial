function renderRealDOM(vdom) {
  if (vdom === undefined || vdom === null) {
    return;
  }
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }
  const $el = document.createElement(vdom.tagName);
  vdom.children.map(renderRealDOM).forEach((node) => $el.appendChild(node));
  return $el;
}

export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    return tagName.apply(null, [props, ...children]);
  }
  return { tagName, props, children };
}

export function render(vdom, container) {
  container.appendChild(renderRealDOM(vdom));
}
