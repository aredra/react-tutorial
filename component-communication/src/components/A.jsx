import { useState } from "react";

// export default function A() {
//   const [value, setValue] = useState("Init Text");

//   const click = () => {
//     setValue("Chaged Text");
//   };

//   return (
//     <div>
//       <B value={value} />
//       <button onClick={click}>Change E value</button>
//     </div>
//   );
// }

// function B({ value }) {
//   return (
//     <div>
//       <p>This B</p>
//       <C value={value} />
//     </div>
//   );
// }

// function C({ value }) {
//   return (
//     <div>
//       <p>This C</p>
//       <D value={value} />
//     </div>
//   );
// }

// function D({ value }) {
//   return (
//     <div>
//       <p>This D</p>
//       <E value={value} />
//     </div>
//   );
// }

// function E({ value }) {
//   return (
//     <div>
//       <p>This E</p>
//       <h2>{value}</h2>
//     </div>
//   );
// }

export default function A() {
  const [value, setValue] = useState("Not changed");

  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>This B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>This C</p>
      <D setValue={setValue} />
    </div>
  );
}
function D({ setValue }) {
  return (
    <div>
      <p>This D</p>
      <E setValue={setValue} />
    </div>
  );
}
function E({ setValue }) {
  return (
    <div>
      <p>This E</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function click() {
    setValue("Chagned Text");
  }
}
