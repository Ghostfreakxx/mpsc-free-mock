import type { StudyLesson } from './course';
// Authored by scripts/create-statistics-probability.mjs.
export const statisticsProbabilityLesson:StudyLesson = {
  "id": "statistics-probability",
  "subject": "Mathematics",
  "unit": 13,
  "title": "Statistics and probability: dispersion, conditional laws and distributions",
  "summary": "Raw and grouped mean, median and mode, mean deviation, variance and standard deviation, probability laws, conditional probability and independence, total probability, Bayes and discrete random variable distributions.",
  "prerequisites": "Arithmetic with fractions, sums, sets, elementary counting and basic algebra.",
  "remaining": "Sixteen-chapter recorded foundation for Unit 13 with original examples and practice covering central measures and dispersion for ungrouped and grouped data, addition and multiplication laws, Bayes and probability distributions of a random variable. Further mixed grouped parameters, complex conditional counting, distribution parameters and timed practice remain. All fourteen Maths units now have recorded foundations, but a syllabus and problem-coverage audit is still required before declaring JEE complete. These are original questions, not official PYQs.",
  "sections": [
    {
      "title": "Find mean, median and mode of ungrouped data",
      "formula": "Mean=Σx/N; sort before finding the median",
      "paragraphs": [
        "Statistics summarizes a collection of observations without preserving every individual detail in each summary. The arithmetic mean is the sum of all observations divided by their positive count. The median is the middle observation after sorting, or the mean of the two central observations when the count is even. The mode is a value of greatest frequency. For the sorted data one, two, two, five, the mean is ten divided by four, or five halves. The two central observations are both two, so the median is two, and the unique mode is also two. These summaries need not coincide in general. A data set may have several tied modes, or no single most frequent value. Do not use the middle of an unsorted list as its median. Repeated observations count separately when computing the mean and the position of the median. An extreme observation can move the mean substantially while leaving the median unchanged. State which measure is requested and retain the original data units in a numerical answer. A summary is not a substitute for checking how many observations each value represents."
      ]
    },
    {
      "title": "Use frequency weights and grouped class marks",
      "formula": "Mean=Σfᵢxᵢ/N, N=Σfᵢ",
      "paragraphs": [
        "A frequency table records how many times each value occurs. Its total count N is the sum of the frequencies, not the number of displayed rows. Multiply each value by its frequency, add those products and divide by N to obtain the mean. Values one, two and three with frequencies one, two and one have total count four and weighted sum eight, giving mean two. Taking the unweighted mean of table rows is generally wrong unless their frequencies are equal. A grouped continuous table instead gives intervals, so the exact individual observations are unavailable. Use each class mark, the midpoint of its two boundaries, as a representative value when estimating the grouped mean. For interval ten through twenty, the class mark is fifteen. Classes zero to ten, ten to twenty and twenty to thirty with frequencies two, five and three have estimated mean sixteen. This is a grouped estimate, not a claim that every original observation equals its midpoint. Use consistent continuous boundaries and nonnegative frequencies, with a positive total. An empty class contributes zero to the weighted sum but may still matter when reading neighbouring classes in a modal calculation."
      ]
    },
    {
      "title": "Estimate grouped median and mode with class boundaries",
      "formula": "Median=L+[(N/2−F)/f]h; mode=L+[(f₁−f₀)/(2f₁−f₀−f₂)]h",
      "paragraphs": [
        "For a grouped continuous distribution, the median formula interpolates inside the class where cumulative frequency first reaches the halfway count. Let L be its lower boundary and h its width. Call the class frequency lower case f, and call the cumulative frequency before the class capital F. First calculate N over two minus capital F, then divide by lower case f, multiply by h and add L. For classes zero to ten, ten to twenty and twenty to thirty with frequencies two, five and three, N is ten. The median class is ten to twenty, and the estimate is ten plus three fifths of ten, or sixteen. For equal width classes with a single modal peak, the mode estimate uses modal frequency f one and the neighbouring frequencies f zero and f two. It is L plus f one minus f zero, divided by twice f one minus f zero minus f two, times h. The same table gives sixteen. These are interpolation estimates from grouped data; they do not recover unique exact raw medians or modes. Use boundaries rather than inconsistent printed limits, check the required denominators and inspect ties or edge classes before applying a modal formula blindly."
      ]
    },
    {
      "title": "Calculate mean deviation using absolute distances",
      "formula": "MD about a=Σ|xᵢ−a|/N; frequency form=Σfᵢ|xᵢ−a|/N",
      "paragraphs": [
        "Mean deviation about a specified centre is the average of the absolute deviations from that centre. The absolute values are essential: signed deviations from the arithmetic mean cancel, which would incorrectly suggest no spread. For one, two, three, four, five, the mean is three and the absolute deviations are two, one, zero, one and two. Their average is six fifths. The centre must be named because mean deviation about the mean can differ from mean deviation about the median. For one, two and nine, the median is two, so mean deviation about it is one plus zero plus seven divided by three, or eight thirds. The mean is four and mean deviation about that mean is ten thirds. A median minimizes the sum of absolute distances, although the minimizing centre need not be unique for an even count. Frequency tables weight each absolute deviation by its frequency. Grouped tables use class marks, producing an estimate of the corresponding raw data spread. Mean deviation has the same units as the observations and is always nonnegative. Check that a zero result means all represented observations equal the chosen centre."
      ]
    },
    {
      "title": "Find descriptive variance and standard deviation",
      "formula": "σ²=Σ(xᵢ−x̄)²/N; σ=√σ²",
      "paragraphs": [
        "Variance measures spread through squared deviations from the arithmetic mean. For the descriptive distribution formulas in this class, add the squared deviations and divide by the total number N of observations. Standard deviation is the nonnegative square root of that variance. For data two, four and six, the mean is four. Squared deviations are four, zero and four, giving variance eight thirds and standard deviation square root of eight thirds. Do not confuse standard deviation with variance or mean deviation: they use different operations. Variance has squared data units, while standard deviation has the same units as the observations. Both are nonnegative, and zero variance means every observation is equal to the mean. Some statistical inference problems instead use divisor N minus one for an unbiased sample variance estimator. That is a different specified convention; do not substitute it into the descriptive JEE distribution calculations here. Always identify which definition the problem requests. Carry exact fractions through the variance calculation before rounding the square root, since premature rounding can distort comparisons or produce an apparent negative result from a shortcut formula."
      ]
    },
    {
      "title": "Use frequency and grouped variance shortcuts",
      "formula": "σ²=Σfᵢxᵢ²/N−(Σfᵢxᵢ/N)²",
      "paragraphs": [
        "Expanding the squared deviation formula gives a useful shortcut: variance equals the weighted mean of the squared values minus the square of the weighted mean. For values one, two and three with frequencies one, two and one, N is four, the mean is two and the weighted second moment is eighteen divided by four, or nine halves. The variance is therefore one half. Squaring the weighted mean is different from averaging squared values, so keep both parts visible. For grouped classes with marks five, fifteen and twenty five and frequencies two, five and three, the estimated mean is sixteen. The weighted second moment is three hundred and five, giving variance three hundred and five minus two hundred and fifty six, or forty nine, and standard deviation seven. These grouped results are based on representing observations by their class marks. They are not exact raw data variances without further within class information. Directly summing weighted squared deviations provides an independent check on the shortcut. Use nonnegative frequencies, a positive total and enough numerical precision to avoid cancellation errors when the mean is large relative to the spread."
      ]
    },
    {
      "title": "Track how shifts and scales change dispersion",
      "formula": "Y=aX+b ⇒ mean(Y)=a mean(X)+b; Var(Y)=a²Var(X)",
      "paragraphs": [
        "An affine transformation changes every observation by the same rule Y equal to a X plus b. The new mean is a times the old mean plus b. Subtracting that new mean from each transformed value leaves a times the original deviation, so variance is multiplied by a squared. Standard deviation is multiplied by absolute a, and mean deviation about the correspondingly transformed centre is also multiplied by absolute a. Adding a constant alone changes location but not spread. For X values two, four and six, the mean is four and variance is eight thirds. Transforming by negative two X plus five gives one, negative three and negative seven. Their mean is negative three, variance is thirty two thirds and standard deviation is twice square root of eight thirds. The negative multiplier reverses ordering but cannot make a spread negative. If a is zero, every transformed observation equals b and the dispersion is zero. A direct calculation on the transformed data checks the formulas. Apply the transformation to each original observation or class mark consistently; transforming frequencies themselves is not the same operation."
      ]
    },
    {
      "title": "Specify sample spaces and equally likely outcomes",
      "formula": "P(A)=|A|/|S| only for a finite equally likely sample space",
      "paragraphs": [
        "Probability starts with a random experiment and a sample space containing its possible elementary outcomes. An event is a subset of that sample space. For two fair independent coin tosses recorded in order, the sample space is H H, H T, T H and T T. Each has probability one quarter. Exactly one head corresponds to H T and T H, so its probability is one half. Writing only zero heads, one head and two heads as equally likely outcomes would be wrong, because the middle count represents two elementary outcomes. A favourable count divided by a total count is valid for a finite sample space only when those counted outcomes are equally likely. Fairness, independence, replacement and whether order is recorded are modelling assumptions that must be stated. If outcomes have unequal probabilities, add their assigned probability weights instead of using an unweighted ratio. Two physically different outcomes can produce the same later numerical statistic without becoming one equally likely elementary outcome. Before using a counting formula, identify exactly what is being counted and whether each counted object has the same chance under the experiment."
      ]
    },
    {
      "title": "Use probability axioms and complements",
      "formula": "0≤P(A)≤1; P(S)=1; P(Aᶜ)=1−P(A)",
      "paragraphs": [
        "A probability assigns a nonnegative weight to events, with total probability of the sample space equal to one. Disjoint event probabilities add, and these facts imply every event probability lies between zero and one. The impossible event, the empty set, has probability zero. The complement of A contains all outcomes in the sample space that are not in A. Since A and its complement are disjoint and together exhaustive, their probabilities add to one. If P of A is three tenths, its complement has probability seven tenths. The complement is relative to the chosen sample space, so that space must remain fixed while using the formula. At least one success is often easier to calculate as one minus the probability of no successes, provided the no success event has been modelled correctly. A probability of zero need not imply logical impossibility in every infinite model, although the finite positive equally likely examples here have that simpler interpretation. Do not use a negative probability to compensate for a counting mistake. Check the final range and whether the event and its complement together cover the whole experiment."
      ]
    },
    {
      "title": "Apply the addition law with overlap counted once",
      "formula": "P(A∪B)=P(A)+P(B)−P(A∩B)",
      "paragraphs": [
        "The addition law calculates the probability that A or B or both occurs. Adding P of A and P of B counts their intersection twice, so subtract its probability once. On a fair die, let A be the even outcomes two, four and six, and B be outcomes greater than three, namely four, five and six. Each event has probability one half. Their intersection is four and six with probability one third. Their union contains two, four, five and six, giving probability two thirds, also one half plus one half minus one third. Mutually exclusive events have empty intersection, so their probabilities add directly. Exclusivity is a condition to check, not an assumption attached to the word or. The probability of exactly one of A and B equals their union probability minus their intersection probability. In this die example it is one third. A set list or Venn diagram helps verify the overlap and whether the event wording includes both. For three events, additional intersection corrections are needed; applying the two event formula repeatedly is valid when each intermediate event and overlap is handled consistently."
      ]
    },
    {
      "title": "Use conditional probability and the multiplication law",
      "formula": "P(B|A)=P(A∩B)/P(A), P(A)>0",
      "paragraphs": [
        "Conditional probability restricts attention to outcomes in an event already known to occur. P of B given A is the probability of their intersection divided by P of A, provided that denominator is positive. Rearranging gives the multiplication law P of A and B equal to P of A times P of B given A. A bag contains three red balls and two blue balls. Draw twice uniformly without replacement. The first red probability is three fifths. After a red first draw, two red balls remain among four balls, so the conditional probability of another red is one half. Multiplication gives probability three tenths for two reds. With replacement and a fresh uniform draw, the second red probability remains three fifths and both red has probability nine twenty fifths. These are different experiments. Do not replace a conditional factor by an unconditional one unless independence has been established. Conditioning on an event of probability zero is not defined by this elementary ratio formula. The order of the conditioning statement matters: P of B given A and P of A given B are generally different quantities."
      ]
    },
    {
      "title": "Distinguish independence from mutual exclusivity",
      "formula": "Independent A,B: P(A∩B)=P(A)P(B)",
      "paragraphs": [
        "Events are independent when their intersection probability equals the product of their separate probabilities. If the conditioning event has positive probability, this also means learning that event does not change the probability of the other. For two fair independent tosses, A being a head on the first and B being a head on the second each has probability one half, while their intersection H H has probability one quarter. Thus these events are independent and can occur together. Mutually exclusive events instead cannot occur together. If both have positive probability, their intersection probability zero differs from the positive product, so they are not independent. A zero probability event is a degenerate exception in the algebraic independence test. Replacement can help produce independent draws in a specified model, but independence should not be inferred solely from a visual separation of two events or from the fact that they have equal probabilities. For three or more events, pairwise independence does not automatically imply mutual independence. In any multiplication calculation, identify which independence assumption is being used and check it against the experiment rather than substituting a product by habit."
      ]
    },
    {
      "title": "Sum mutually exclusive paths using total probability",
      "formula": "P(R)=ΣP(Bᵢ)P(R|Bᵢ) for a partition {Bᵢ}",
      "paragraphs": [
        "The law of total probability breaks an event into mutually exclusive source paths. Suppose the source events form a partition of the sample space: exactly one occurs and together they include all outcomes. Then multiply each source probability by the conditional target probability in that source and add the contributions. Choose box one with probability two fifths and box two with probability three fifths. A uniform ball drawn from box one is red with probability three quarters, and one from box two is red with probability one quarter. The overall red probability is two fifths times three quarters plus three fifths times one quarter. The contributions are three tenths and three twentieths, totalling nine twentieths. An unweighted average of three quarters and one quarter would incorrectly assume equal box selection probabilities. A probability tree makes the source weights and target likelihoods explicit. At each branching stage the alternatives must match the actual experiment. Total probability is an addition over disjoint paths, while each path probability uses the multiplication law. Check that all relevant sources are included once, and that no overlapping source event is counted twice."
      ]
    },
    {
      "title": "Reverse a conditional question using Bayes theorem",
      "formula": "P(Bⱼ|R)=P(Bⱼ)P(R|Bⱼ)/ΣP(Bᵢ)P(R|Bᵢ)",
      "paragraphs": [
        "Bayes theorem reverses a conditional question by combining a source's prior weight with its likelihood of the observed event and dividing by the total probability of that event. In the preceding box model, the probability of selecting box one and then drawing red is three tenths. The total probability of red from either box is nine twentieths. Given that the drawn ball is red, the probability that box one was selected is three tenths divided by nine twentieths, or two thirds. This posterior differs from the original box one selection probability two fifths. The observation favours the box in which red is more likely, but the prior weights still matter. Do not simply reverse P of red given box one, which was three quarters. The denominator must include all disjoint exhaustive source paths and must be positive. The corresponding posterior for box two is one third, so the posterior source probabilities sum to one. A tree or contingency table can verify the same ratios. State precisely what information has been observed before deciding which probability is the conditioning denominator."
      ]
    },
    {
      "title": "Define a discrete random variable and its probability distribution",
      "formula": "p(x)=P(X=x)≥0; Σp(x)=1",
      "paragraphs": [
        "A random variable assigns a real number to each outcome of a random experiment. It is a function of the outcome, rather than a new equally likely elementary outcome list. Let X be the number of heads in two fair independent tosses. T T maps to zero, H T and T H map to one, and H H maps to two. The probability distribution therefore gives probabilities one quarter, one half and one quarter to values zero, one and two. The middle value has greater probability because two elementary outcomes produce it. A discrete probability mass function must assign nonnegative probabilities whose total over all possible values is one. Use these two conditions to determine or reject an unknown probability parameter. A table with correct total but a negative entry is still invalid. For an event such as X at least one, add the masses at one and two, obtaining three quarters. A distribution summarizes the numerical random variable without making H T and T H the same underlying outcome. Check that every possible value is included and that a listed value is paired with its own probability rather than with a frequency from an unrelated sample."
      ]
    },
    {
      "title": "Calculate expectation and variance of a random variable",
      "formula": "E(X)=Σxp(x); Var(X)=E(X²)−[E(X)]²",
      "paragraphs": [
        "The expectation of a finite discrete random variable is the probability weighted sum of its values. For the head count distribution zero, one and two with probabilities one quarter, one half and one quarter, the expectation is one. The second moment E of X squared is zero plus one half plus four quarters, or three halves. Variance equals this second moment minus the square of the expectation, giving one half. Equivalently, directly average the squared deviations from the expectation using the probability weights. Standard deviation is the nonnegative square root of that variance. Expectation need not be a value the random variable can actually take in every example; it is a weighted average, not a guaranteed future outcome. A constant random variable has zero variance. For Y equal to a X plus b, expectation changes to a E of X plus b and variance to a squared times the original variance, matching the descriptive data transformation rules. Keep E of X squared distinct from the square of E of X, and check nonnegative variance and total probability one before interpreting the numerical results."
      ]
    }
  ],
  "examples": [
    {
      "question": "Find mean, median and mode of 1,2,2,5.",
      "steps": [
        "The sum is 10 across four observations.",
        "The two sorted central values are both 2.",
        "Two has the greatest frequency."
      ],
      "answer": "Mean 5/2, median 2, unique mode 2."
    },
    {
      "question": "Find the mean of values 1,2,3 with frequencies 1,2,1.",
      "steps": [
        "Total frequency N=4.",
        "Weighted sum=1+4+3=8.",
        "Divide by total frequency, not row count."
      ],
      "answer": "2."
    },
    {
      "question": "Estimate mean, median and mode for classes 0–10,10–20,20–30 with frequencies 2,5,3.",
      "steps": [
        "Class marks 5,15,25 give weighted mean 160/10=16.",
        "The median class has L=10,F=2,f=5,h=10, giving 16.",
        "The modal formula gives 10+(5−2)10/(10−2−3)=16."
      ],
      "answer": "Each grouped estimate is 16; the exact raw measures are not determined by this grouped table alone."
    },
    {
      "question": "Find mean deviation about the mean for 1,2,3,4,5 and about the median for 1,2,9.",
      "steps": [
        "The first mean is 3 and absolute deviations sum to 6.",
        "The second median is 2 and absolute deviations sum to 8.",
        "Divide by counts 5 and 3 respectively."
      ],
      "answer": "6/5 and 8/3."
    },
    {
      "question": "Find descriptive variance and standard deviation of 2,4,6.",
      "steps": [
        "Mean=4.",
        "The squared deviations sum to 4+0+4=8.",
        "Divide by N=3, then take the nonnegative square root."
      ],
      "answer": "Variance 8/3; standard deviation √(8/3)."
    },
    {
      "question": "Find variance for values 1,2,3 with frequencies 1,2,1.",
      "steps": [
        "Weighted mean=2.",
        "Weighted second moment=(1+8+9)/4=9/2.",
        "Subtract mean squared."
      ],
      "answer": "Variance=9/2−4=1/2."
    },
    {
      "question": "Transform X data 2,4,6 by Y=−2X+5. Find its mean and variance.",
      "steps": [
        "Transformed observations are 1,−3,−7.",
        "Mean=−2·4+5=−3.",
        "Variance=(−2)²·(8/3)=32/3."
      ],
      "answer": "Mean −3, variance 32/3; shifts leave dispersion unchanged and scale acts quadratically on variance."
    },
    {
      "question": "Find exactly one head and at least one head probabilities in two fair independent tosses.",
      "steps": [
        "Use HH,HT,TH,TT with weight 1/4 each.",
        "Exactly one head uses HT,TH.",
        "At least one head is the complement of TT."
      ],
      "answer": "1/2 and 3/4 respectively."
    },
    {
      "question": "For a fair die with A={2,4,6},B={4,5,6}, find intersection and union probabilities.",
      "steps": [
        "Intersection={4,6}.",
        "Union={2,4,5,6}.",
        "Verify the addition law 1/2+1/2−1/3."
      ],
      "answer": "Intersection 1/3; union 2/3."
    },
    {
      "question": "Draw twice from 3 red and 2 blue balls. Compare both-red probabilities without and with replacement.",
      "steps": [
        "Without replacement, multiply 3/5 by 2/4.",
        "With replacement and fresh uniform drawing, multiply 3/5 by 3/5.",
        "The conditional factors differ because the experiments differ."
      ],
      "answer": "3/10 without replacement; 9/25 with replacement."
    },
    {
      "question": "Explain why first-head and second-head events are independent, but positive-probability disjoint events are not.",
      "steps": [
        "For the toss events the intersection is 1/4, the product of their 1/2 probabilities.",
        "Disjoint events have zero intersection.",
        "Two positive probabilities have a positive product, so that independence equation fails."
      ],
      "answer": "Independence concerns unchanged probability, while exclusivity concerns inability to occur together."
    },
    {
      "question": "Compute total red probability for box weights 2/5,3/5 and red likelihoods 3/4,1/4.",
      "steps": [
        "The source-and-red contributions are 3/10 and 3/20.",
        "Add these disjoint paths.",
        "Verify the result lies between the two source likelihoods."
      ],
      "answer": "9/20."
    },
    {
      "question": "Given red in that box model, find the posterior source probabilities.",
      "steps": [
        "Box 1 posterior=(3/10)/(9/20)=2/3.",
        "Box 2 posterior=(3/20)/(9/20)=1/3.",
        "The two posterior weights sum to one."
      ],
      "answer": "Box 1: 2/3; box 2: 1/3."
    },
    {
      "question": "For the head count X in two fair independent tosses, find its distribution, expectation and variance.",
      "steps": [
        "Masses at 0,1,2 are 1/4,1/2,1/4.",
        "E(X)=1 and E(X²)=3/2.",
        "Variance=3/2−1²=1/2."
      ],
      "answer": "Distribution (1/4,1/2,1/4); expectation 1; variance 1/2."
    }
  ],
  "quiz": [
    {
      "question": "The arithmetic mean of 1,2,2,5 is:",
      "options": [
        "2",
        "5/2",
        "3",
        "10"
      ],
      "answer": 1,
      "explanation": "Add all four observations to get ten, then divide by their count four."
    },
    {
      "question": "For the same sorted data, the median and unique mode are:",
      "options": [
        "5/2 and 2",
        "2 and 5",
        "2 and 2",
        "1 and 2"
      ],
      "answer": 2,
      "explanation": "The two central values are both two, and two occurs more often than any other value."
    },
    {
      "question": "Values 1,2,3 with frequencies 1,2,1 have mean:",
      "options": [
        "3/2",
        "8",
        "8/3",
        "2"
      ],
      "answer": 3,
      "explanation": "The weighted sum is 1+4+3=8 and the total frequency is four."
    },
    {
      "question": "The class mark for the interval 10–20 is:",
      "options": [
        "15",
        "10",
        "20",
        "30"
      ],
      "answer": 0,
      "explanation": "The midpoint of the two class boundaries is (10+20)/2=15."
    },
    {
      "question": "For classes 0–10,10–20,20–30 with frequencies 2,5,3, the grouped median estimate is:",
      "options": [
        "15",
        "16",
        "20",
        "10"
      ],
      "answer": 1,
      "explanation": "Use L=10, N/2=5, F=2, f=5 and h=10 to obtain 10+(3/5)10=16."
    },
    {
      "question": "For that equal width table, the grouped mode estimate is:",
      "options": [
        "15",
        "18",
        "16",
        "20"
      ],
      "answer": 2,
      "explanation": "The modal class is 10–20; interpolate 10+(5−2)10/(2·5−2−3)=16."
    },
    {
      "question": "Mean deviation about the mean for 1,2,3,4,5 is:",
      "options": [
        "0",
        "2",
        "√2",
        "6/5"
      ],
      "answer": 3,
      "explanation": "The centre is three and the absolute deviations sum to six across five observations."
    },
    {
      "question": "Mean deviation about the median for 1,2,9 is:",
      "options": [
        "8/3",
        "10/3",
        "0",
        "4"
      ],
      "answer": 0,
      "explanation": "The median is two, and (|1−2|+|2−2|+|9−2|)/3=8/3."
    },
    {
      "question": "Using descriptive divisor N, the variance of 2,4,6 is:",
      "options": [
        "4",
        "8/3",
        "8",
        "√(8/3)"
      ],
      "answer": 1,
      "explanation": "The mean is four and the squared deviations sum to eight, divided by three observations."
    },
    {
      "question": "The standard deviation of that data is:",
      "options": [
        "8/3",
        "−√(8/3)",
        "√(8/3)",
        "4"
      ],
      "answer": 2,
      "explanation": "Standard deviation is the nonnegative square root of the variance."
    },
    {
      "question": "Values 1,2,3 with frequencies 1,2,1 have variance:",
      "options": [
        "2",
        "9/2",
        "1",
        "1/2"
      ],
      "answer": 3,
      "explanation": "Their weighted second moment is 9/2 and mean two, so variance is 9/2−4=1/2."
    },
    {
      "question": "Using marks 5,15,25 with frequencies 2,5,3, the grouped variance estimate is:",
      "options": [
        "49",
        "7",
        "16",
        "305"
      ],
      "answer": 0,
      "explanation": "The mean is sixteen and second moment 305, giving 305−16²=49."
    },
    {
      "question": "For X data 2,4,6 and Y=−2X+5, the transformed mean is:",
      "options": [
        "3",
        "−3",
        "−8",
        "13"
      ],
      "answer": 1,
      "explanation": "The old mean is four; the new mean is −2·4+5=−3."
    },
    {
      "question": "For the same transformation, the new variance is:",
      "options": [
        "−16/3",
        "8/3",
        "32/3",
        "16/3"
      ],
      "answer": 2,
      "explanation": "Variance scales by (−2)²=4, so it becomes 4·(8/3)=32/3."
    },
    {
      "question": "Two fair independent coin tosses recorded in order have how many equally likely elementary outcomes?",
      "options": [
        "3",
        "2",
        "8",
        "4"
      ],
      "answer": 3,
      "explanation": "The ordered outcomes HH,HT,TH,TT each have probability one quarter."
    },
    {
      "question": "The favourable count divided by total count formula requires:",
      "options": [
        "A finite equally likely sample space",
        "Any list of outcomes without weights",
        "Only independent events",
        "A continuous uniform interval in every case"
      ],
      "answer": 0,
      "explanation": "Unweighted outcome counting is valid only when the counted elementary outcomes have equal probabilities."
    },
    {
      "question": "If P(A)=3/10, then P(Aᶜ) is:",
      "options": [
        "3/10",
        "7/10",
        "13/10",
        "−3/10"
      ],
      "answer": 1,
      "explanation": "An event and its complement are disjoint and exhaustive, so their probabilities add to one."
    },
    {
      "question": "Every event probability lies in:",
      "options": [
        "(0,1) only",
        "All real numbers",
        "[0,1]",
        "[−1,1]"
      ],
      "answer": 2,
      "explanation": "Probabilities are nonnegative and cannot exceed the probability one of the full sample space."
    },
    {
      "question": "For a fair die, A={2,4,6}, B={4,5,6}. P(A∩B) is:",
      "options": [
        "1/2",
        "2/3",
        "1/4",
        "1/3"
      ],
      "answer": 3,
      "explanation": "The intersection contains four and six, two of the six equally likely outcomes."
    },
    {
      "question": "For those events, P(A∪B) is:",
      "options": [
        "2/3",
        "1",
        "1/3",
        "1/2"
      ],
      "answer": 0,
      "explanation": "The union is {2,4,5,6}; equivalently 1/2+1/2−1/3=2/3."
    },
    {
      "question": "A bag has 3 red and 2 blue balls. Given the first draw was red without replacement, the next red probability is:",
      "options": [
        "3/5",
        "1/2",
        "2/5",
        "3/4"
      ],
      "answer": 1,
      "explanation": "Two red balls remain among four balls after the first red ball is removed."
    },
    {
      "question": "The probability both draws are red without replacement is:",
      "options": [
        "9/25",
        "1/2",
        "3/10",
        "2/5"
      ],
      "answer": 2,
      "explanation": "Multiply the first red probability 3/5 by the conditional second red probability 2/4."
    },
    {
      "question": "For independent fair tosses, first head and second head have intersection probability:",
      "options": [
        "0",
        "1/2",
        "1",
        "1/4"
      ],
      "answer": 3,
      "explanation": "The two events each have probability one half, and independence makes the intersection their product."
    },
    {
      "question": "Disjoint events with positive probabilities are:",
      "options": [
        "Not independent",
        "Always independent",
        "Always exhaustive",
        "The same event"
      ],
      "answer": 0,
      "explanation": "Their intersection is zero but the product of their positive probabilities is nonzero."
    },
    {
      "question": "Choose boxes with probabilities 2/5,3/5 and red likelihoods 3/4,1/4. The overall red probability is:",
      "options": [
        "1/2",
        "9/20",
        "3/4",
        "3/10"
      ],
      "answer": 1,
      "explanation": "Add the disjoint red paths: (2/5)(3/4)+(3/5)(1/4)=6/20+3/20=9/20."
    },
    {
      "question": "The source events in the total probability law must form:",
      "options": [
        "Any overlapping list",
        "Independent events only",
        "A disjoint exhaustive partition",
        "Events of equal probability only"
      ],
      "answer": 2,
      "explanation": "Each outcome must belong to exactly one source path so their target contributions can be added once."
    },
    {
      "question": "In the box model, given a red draw, the probability box 1 was chosen is:",
      "options": [
        "2/5",
        "3/4",
        "9/20",
        "2/3"
      ],
      "answer": 3,
      "explanation": "Divide the joint source-and-red probability 3/10 by total red probability 9/20 to obtain 2/3."
    },
    {
      "question": "The Bayes conditioning denominator must be:",
      "options": [
        "The positive total probability of the observed event",
        "Only the prior source probability",
        "Always one",
        "The sum of source likelihoods without weights"
      ],
      "answer": 0,
      "explanation": "Bayes normalizes the joint source contributions by the full probability of the evidence, which must be positive."
    },
    {
      "question": "The number of heads in two fair independent tosses has probabilities for 0,1,2 equal to:",
      "options": [
        "1/3,1/3,1/3",
        "1/4,1/2,1/4",
        "1/2,1/4,1/4",
        "0,1/2,1/2"
      ],
      "answer": 1,
      "explanation": "The head counts correspond to one, two and one of the four equally likely ordered outcomes."
    },
    {
      "question": "A valid discrete probability mass function requires:",
      "options": [
        "Only masses summing to one, even if some are negative",
        "Equal masses in every case",
        "Nonnegative masses summing to one",
        "A positive mean in every case"
      ],
      "answer": 2,
      "explanation": "Both nonnegativity and total probability one are necessary; equal probabilities and positive means are not required."
    },
    {
      "question": "The expected head count in two fair independent tosses is:",
      "options": [
        "2",
        "1/2",
        "3/2",
        "1"
      ],
      "answer": 3,
      "explanation": "Multiply every possible value by its own probability: 0·(1/4)+1·(1/2)+2·(1/4)=1."
    },
    {
      "question": "The variance of that head count is:",
      "options": [
        "1/2",
        "1",
        "3/2",
        "1/4"
      ],
      "answer": 0,
      "explanation": "The second moment is 3/2 and the squared mean is one, so variance is 1/2."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 13",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax Statistics: Measures of Spread",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data"
    },
    {
      "title": "OpenStax Statistics: Probability Rules",
      "url": "https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability"
    }
  ]
};
