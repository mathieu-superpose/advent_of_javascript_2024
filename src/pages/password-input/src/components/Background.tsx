function Background({ open }: { open: boolean }) {
  return <div className={open ? "background" : "background open"} />
}

export default Background
