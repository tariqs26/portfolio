export default function DarkIcon(props) {
  return (
    <svg {...props} className={"nav-icon clr-scheme" + props.addition} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
      <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
    </svg>
  );
}
