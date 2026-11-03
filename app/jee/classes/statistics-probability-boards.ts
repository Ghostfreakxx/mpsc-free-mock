export const statisticsBoards = [
  {
    "title": "Find mean, median and mode of ungrouped data",
    "lines": [
      "Data: 1,2,2,5",
      "Mean=10/4=5/2; median=2",
      "Mode=2, the most frequent value",
      "An even count uses the two central observations"
    ]
  },
  {
    "title": "Use frequency weights and grouped class marks",
    "lines": [
      "Values 1,2,3 with frequencies 1,2,1",
      "N=4; mean=(1+4+3)/4=2",
      "For class 10–20, class mark=15",
      "Grouped estimates use class midpoints"
    ]
  },
  {
    "title": "Estimate grouped median and mode with class boundaries",
    "lines": [
      "Classes 0–10,10–20,20–30; f=2,5,3",
      "Median class: 10–20; L=10,F=2,f=5,h=10",
      "Median estimate=10+(5−2)·10/5=16",
      "Modal estimate=10+(5−2)·10/(10−2−3)=16"
    ]
  },
  {
    "title": "Calculate mean deviation using absolute distances",
    "lines": [
      "Data 1,2,3,4,5 have mean 3",
      "Absolute deviations: 2,1,0,1,2",
      "MD about mean=6/5",
      "For 1,2,9, MD about median 2 is 8/3"
    ]
  },
  {
    "title": "Find descriptive variance and standard deviation",
    "lines": [
      "Data 2,4,6 have mean 4",
      "Squared deviations: 4,0,4",
      "Variance=8/3; standard deviation=√(8/3)",
      "This descriptive formula uses divisor N"
    ]
  },
  {
    "title": "Use frequency and grouped variance shortcuts",
    "lines": [
      "Values 1,2,3; frequencies 1,2,1",
      "Mean=2; weighted second moment=9/2",
      "Variance=9/2−4=1/2",
      "Grouped table f=2,5,3 at marks 5,15,25: σ²=49"
    ]
  },
  {
    "title": "Track how shifts and scales change dispersion",
    "lines": [
      "X data 2,4,6; mean=4, variance=8/3",
      "Y=−2X+5 gives values 1,−3,−7",
      "Mean(Y)=−3; variance(Y)=32/3",
      "Standard deviation scales by |a|, not a"
    ]
  },
  {
    "title": "Specify sample spaces and equally likely outcomes",
    "lines": [
      "Fair independent tosses: HH,HT,TH,TT",
      "There are 4 equally likely ordered outcomes",
      "Exactly one head: {HT,TH}, probability=1/2",
      "Define the random experiment before counting"
    ]
  },
  {
    "title": "Use probability axioms and complements",
    "lines": [
      "The impossible event has probability 0",
      "If P(A)=3/10, P(Aᶜ)=7/10",
      "Complement means A does not occur",
      "Probabilities are not permitted to be negative"
    ]
  },
  {
    "title": "Apply the addition law with overlap counted once",
    "lines": [
      "Fair die: A={2,4,6}, B={4,5,6}",
      "Intersection={4,6}, probability=1/3",
      "Union={2,4,5,6}, probability=2/3",
      "For disjoint events the intersection term is 0"
    ]
  },
  {
    "title": "Use conditional probability and the multiplication law",
    "lines": [
      "Bag: 3 red and 2 blue, draws without replacement",
      "P(first red)=3/5",
      "P(second red | first red)=2/4=1/2",
      "P(both red)=(3/5)(1/2)=3/10"
    ]
  },
  {
    "title": "Distinguish independence from mutual exclusivity",
    "lines": [
      "Two fair independent coin tosses",
      "A=first head, B=second head",
      "P(A∩B)=1/4=(1/2)(1/2)",
      "Positive disjoint events are dependent"
    ]
  },
  {
    "title": "Sum mutually exclusive paths using total probability",
    "lines": [
      "Box weights: 2/5 and 3/5",
      "Red probabilities: 3/4 in box 1, 1/4 in box 2",
      "P(R)=(2/5)(3/4)+(3/5)(1/4)=9/20",
      "Sources: disjoint and exhaustive"
    ]
  },
  {
    "title": "Reverse a conditional question using Bayes theorem",
    "lines": [
      "In the box model, P(B₁∩R)=3/10",
      "Total P(R)=9/20>0",
      "P(B₁|R)=(3/10)/(9/20)=2/3",
      "Prior P(B₁)=2/5 differs from the posterior"
    ]
  },
  {
    "title": "Define a discrete random variable and its probability distribution",
    "lines": [
      "X=number of heads in two fair independent tosses",
      "Values 0,1,2 have probabilities 1/4,1/2,1/4",
      "HT and TH both map to X=1",
      "Nonnegative masses; total=1"
    ]
  },
  {
    "title": "Calculate expectation and variance of a random variable",
    "lines": [
      "For the head count, E(X)=0/4+1/2+2/4=1",
      "E(X²)=0+1/2+4/4=3/2",
      "Var(X)=3/2−1=1/2",
      "Expectation uses probability weights"
    ]
  }
] as const;
