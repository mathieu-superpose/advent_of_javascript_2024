function OuterRing({ percentage }: { percentage: number }) {
  return (
    <div
      className="outer-ring"
      style={{
        transform: `rotate(${45 + percentage * 3.6}deg)`,
        background: `conic-gradient(from 0.25turn, hsl(${
          percentage - 100
        }, 87.5%, 93.73%), hsl(${percentage - 120}, 84.42%, 84.9%))`,
      }}
    />
  )
}

export default OuterRing
