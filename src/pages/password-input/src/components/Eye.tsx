function Eye({ open, color }: { open: boolean; color: string }) {
  return (
    <svg
      width="110"
      height="107"
      viewBox="0 0 110 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="eye"
    >
      <path
        className={open ? "bottomeyelid" : "bottomeyelid closed"}
        d="M105 71C105 71 82.6142 102 55 102C27.3858 102 5 71 5 71"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <path
        className={open ? "bottomeyelid" : "bottomeyelid closed"}
        d="M70 70C70 78.2843 63.2843 85 55 85C46.7157 85 40 78.2843 40 70C40 61.7157 46.7157 55 55 55C63.2843 55 70 61.7157 70 70Z"
        fill={color}
      />
      <path
        className={open ? "topeyelid" : "topeyelid closed"}
        d="M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
      />
      <path
        className={open ? "topeyelid" : "topeyelid closed"}
        d="M54.9999 22.5V5.5"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={open ? "topeyelid" : "topeyelid closed"}
        d="M91 34.9707L100.686 21"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={open ? "topeyelid" : "topeyelid closed"}
        d="M9.00049 20.9996L18.6856 34.971"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Eye
