export const spaceBoards = [
  {
    "title": "Locate points in space and measure distance from the origin",
    "lines": [
      "P=(2,−3,6) has OP=√49=7",
      "Three perpendicular axes use one length scale",
      "One zero coordinate ⇒ on a coordinate plane",
      "Off coordinate planes, signs identify the octant"
    ]
  },
  {
    "title": "Find distances and orthogonal coordinate projections",
    "lines": [
      "A=(1,2,3), B=(3,−1,9)",
      "B−A=(2,−3,6); AB=7",
      "Projection of B on xy plane=(3,−1,0)",
      "Distance of B from xy plane=|9|=9"
    ]
  },
  {
    "title": "Apply internal and external section formulas in three dimensions",
    "lines": [
      "A=(0,0,0), B=(6,3,9), ratio 2:1",
      "Internal P=(4,2,6)",
      "Midpoint=(3,3/2,9/2)",
      "External 2:1 point=(12,6,18)"
    ]
  },
  {
    "title": "Use direction ratios and distinguish orientation from a line",
    "lines": [
      "From A to B: ratios=(Δx,Δy,Δz)",
      "(2,−3,6) and (4,−6,12) give one direction",
      "(−2,3,−6) reverses orientation",
      "(0,0,0) cannot define a line direction"
    ]
  },
  {
    "title": "Normalize direction ratios to direction cosines",
    "lines": [
      "For (2,−3,6), length=7",
      "Direction cosines=(2/7,−3/7,6/7)",
      "l²+m²+n²=1",
      "A negative cosine means an obtuse axis angle"
    ]
  },
  {
    "title": "Calculate the smaller angle between intersecting lines",
    "lines": [
      "d₁=(1,0,0), d₂=(1,1,0)",
      "Dot product=1, lengths=1 and √2",
      "Smaller angle θ=π/4",
      "Perpendicular directions have dot product zero"
    ]
  },
  {
    "title": "Write vector and parametric equations of a line",
    "lines": [
      "A=(1,2,3), d=(2,−1,4)",
      "x=1+2t, y=2−t, z=3+4t",
      "At t=2, point=(5,0,11)",
      "One shared parameter describes the whole line"
    ]
  },
  {
    "title": "Use symmetric equations without dividing by zero",
    "lines": [
      "Through (1,2,3), ratios (2,−1,4)",
      "(x−1)/2=(y−2)/(−1)=(z−3)/4",
      "For direction (0,2,−1), keep x=1",
      "Then (y−2)/2=(z−3)/(−1)"
    ]
  },
  {
    "title": "Construct a line through two distinct space points",
    "lines": [
      "A=(1,0,2), B=(3,4,0)",
      "Direction B−A=(2,4,−2)",
      "x=1+2t, y=4t, z=2−2t",
      "At t=1/2, midpoint=(2,2,1)"
    ]
  },
  {
    "title": "Distinguish intersecting, parallel, coincident and skew lines",
    "lines": [
      "Nonparallel lines may intersect or be skew",
      "L₁=(t,0,0), L₂=(s,2,s+1) are skew",
      "Their y coordinates can never match",
      "Parallel directions: test coincidence separately"
    ]
  },
  {
    "title": "Find the perpendicular foot from a point to a line",
    "lines": [
      "P=(2,3,4), line r=(t,0,0)",
      "Perpendicular foot H=(2,0,0)",
      "P−H=(0,3,4), perpendicular to (1,0,0)",
      "Point to line distance=5"
    ]
  },
  {
    "title": "Evaluate the shortest distance between nonparallel skew lines",
    "lines": [
      "L₁=(t,0,0); L₂=(s,2,s+1)",
      "d₁=(1,0,0), d₂=(1,0,1)",
      "d₁×d₂=(0,−1,0); B−A=(0,2,1)",
      "D=|−2|/1=2"
    ]
  },
  {
    "title": "Find the common perpendicular equation and closest points",
    "lines": [
      "P=(t,0,0), Q=(s,2,s+1)",
      "Perpendicularity gives s−t=0 and 2s−t+1=0",
      "Thus t=s=−1: P=(−1,0,0), Q=(−1,2,0)",
      "Common perpendicular: r=(−1,u,0)"
    ]
  },
  {
    "title": "Handle parallel lines with a separate distance formula",
    "lines": [
      "L₁=(t,0,0), L₂=(s,3,4)",
      "Connecting perpendicular displacement=(0,3,4)",
      "Shortest distance=5",
      "Coincident lines have distance 0"
    ]
  }
] as const;
