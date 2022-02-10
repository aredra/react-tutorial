const hooks = [];
let currentComponent = 0;
export class Component {}
export function useState(initValue) {
  const position = currentComponent;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  return [hooks[position], nextValue => {
    hooks[position] = nextValue;
  }];
}

function renderRealDOM(vdom) {
  if (vdom === undefined || vdom === null) {
    return;
  }

  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  const $el = document.createElement(vdom.tagName);
  vdom.children.map(renderRealDOM).forEach(node => $el.appendChild(node));
  return $el;
}

export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    if (tagName.prototype instanceof Component) {
      // 클래스 컴포넌트는 인스턴스를 생성하므로 상태를 가질 수 있다.
      const instance = new tagName({ ...props,
        children
      });
      return instance.render();
    }

    currentComponent++;
    return tagName.apply(null, [props, ...children]);
  }

  return {
    tagName,
    props,
    children
  };
}
export const render = function () {
  let prevVdom = null;
  return (nextVdom, container) => {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    } // diff algorithm


    container.appendChild(renderRealDOM(nextVdom));
  };
}();