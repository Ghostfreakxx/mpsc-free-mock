import type { StudyLesson } from './course';
// Authored by scripts/create-coordinate-geometry.mjs.
export const coordinateGeometryLesson:StudyLesson = {
  "id": "coordinate-geometry",
  "subject": "Mathematics",
  "unit": 10,
  "title": "Coordinate geometry: straight lines, circles and conics",
  "summary": "Cartesian distances and sections, loci, line forms and angles, concurrence, triangle centres, circle equations and intersections, and standard parabola, ellipse and hyperbola elements.",
  "prerequisites": "Algebra, quadratic equations, determinants, basic trigonometry and coordinate notation.",
  "remaining": "Twenty-chapter recorded foundation for Unit 10 with original examples and practice covering its main Cartesian, straight line, circle and standard conic headings. Further mixed loci, parameter line systems, advanced chord and tangent problems, conic intersections and timed practice remain. Supporting tangent and parameter examples are included. This is not exhaustive problem coverage or official PYQs.",
  "sections": [
    {
      "title": "Use Cartesian coordinates and the distance formula",
      "formula": "AB=√[(x₂−x₁)²+(y₂−y₁)²]",
      "paragraphs": [
        "A point in the Cartesian plane is specified by an ordered pair of real coordinates. The first coordinate measures horizontal position and the second measures vertical position relative to perpendicular axes with the same length scale. To find the distance between two points, subtract their x coordinates, subtract their y coordinates, square both differences, add, and take the nonnegative square root. For A at negative one, two and B at three, five, the horizontal change is four and the vertical change is three. The distance is square root of sixteen plus nine, or five. Reversing the point order negates both differences but leaves their squares unchanged. A distance of zero means the two points coincide. Squared distances are often easier to compare than distances because they avoid radicals without changing the comparison of nonnegative lengths. The distance formula also tests a right angle through the converse of the Pythagorean theorem. Label the points and coordinates before substituting; confusing an x coordinate with a y coordinate changes the geometric problem rather than merely its notation."
      ]
    },
    {
      "title": "Divide a segment internally or externally",
      "formula": "AP:PB=m:n ⇒ P=((nx₁+mx₂)/(m+n),(ny₁+my₂)/(m+n))",
      "paragraphs": [
        "The section formula locates a point using its ratio along a segment. If P divides A B internally with A P to P B equal to m to n, use positive weights n on A and m on B, divided by m plus n. The reversed placement of the two weights follows from the geometry: a larger A P means P is closer to B. With A at zero, zero and B at six, three, internal ratio two to one gives P at four, two. Equal weights give the midpoint, three, three halves. For external division with the same positive distance ratio m to n, the formula is the quantity m B minus n A divided by m minus n. Ratio two to one in this example gives twelve, six, beyond B. External equal ratios do not give a finite point when A and B are distinct, because the denominator vanishes. Check an answer by calculating the two distances and locating the point on the correct line. State whether division is internal or external before choosing the sign in the formula."
      ]
    },
    {
      "title": "Derive a locus from a distance condition",
      "formula": "PA=PB for A=(−2,0), B=(2,0) ⇒ x=0",
      "paragraphs": [
        "A locus is the set of all points satisfying a stated geometric condition. Start by calling a general moving point x, y and translating the condition into an equation. If the point is equally distant from A at negative two, zero and B at two, zero, equate the squared distances. The equation is the square of x plus two plus y squared equal to the square of x minus two plus y squared. Expanding and cancelling gives eight x equal to zero, so the locus is x equal to zero, the perpendicular bisector of A B. Here squaring the two distances is equivalent because both sides are nonnegative. Other radical equations can gain extraneous points when squared, so check the original condition and any domain restrictions afterward. A locus includes all points satisfying the condition, not merely a few plotted examples. For a fixed distance r greater than zero from a point h, k, the same distance formula gives the circle with equation the square of x minus h plus the square of y minus k equal to r squared."
      ]
    },
    {
      "title": "Find slopes and test parallel or perpendicular lines",
      "formula": "m=(y₂−y₁)/(x₂−x₁), x₂≠x₁; perpendicular slopes: m₁m₂=−1",
      "paragraphs": [
        "The slope of a nonvertical line is its change in y divided by its change in x. Through one, two and three, six, the slope is four over two, or two. Distinct parallel nonvertical lines have equal slopes. Perpendicular nonvertical lines with finite slopes have product negative one, so a line perpendicular to slope two has slope negative one half. Do not use that product formula when a slope is undefined. A vertical line x equal to a constant has no finite slope, while a horizontal line has slope zero; those two directions are perpendicular. If a line makes angle theta with the positive x axis, its slope is tangent theta whenever that tangent is defined. A line direction is unchanged by adding pi to its angle. For general equations A x plus B y plus C equal to zero with B nonzero, the slope is negative A over B. The coefficients A and B cannot both vanish in a genuine line. A sketch helps distinguish an undefined vertical slope from a zero horizontal slope, but the equation supplies the exact test."
      ]
    },
    {
      "title": "Write straight lines in point and two point forms",
      "formula": "y−y₁=m(x−x₁); (y−y₁)(x₂−x₁)=(y₂−y₁)(x−x₁)",
      "paragraphs": [
        "A point and a slope determine a nonvertical line through the point slope equation y minus y one equal to m times x minus x one. At point two, negative one with slope three, this gives y plus one equal to three times x minus two, or y equal to three x minus seven. Substituting the given point checks the constant term. Two distinct points determine a line even when it is vertical. A cross multiplied two point form avoids dividing by the horizontal difference: y minus y one times x two minus x one equals y two minus y one times x minus x one. Through one, two and three, six, it simplifies to y equal to two x. If the points coincide, the condition does not determine a unique line. The general form A x plus B y plus C equal to zero includes both vertical and horizontal lines when A and B are not both zero. Different nonzero multiples of the same triple of coefficients represent the same line, so compare equations after allowing for a common scale factor."
      ]
    },
    {
      "title": "Read intercept and normal forms correctly",
      "formula": "x/a+y/b=1; x cosα+y sinα=p, p≥0",
      "paragraphs": [
        "A line meeting both axes at nonzero finite intercepts a and b has intercept form x over a plus y over b equal to one. Setting y equal to zero gives its x intercept, and setting x equal to zero gives its y intercept. For x over three plus y over four equal to one, the intercept points are three, zero and zero, four. Multiplication gives four x plus three y minus twelve equal to zero. Its normal vector has length five, so division by five yields four fifths x plus three fifths y equal to twelve fifths. This is normal form: the coefficients are cosine alpha and sine alpha for the direction of a unit normal, and the nonnegative right hand side p is the distance from the origin. If the right hand side is negative, reverse the signs to use the convention p nonnegative. A line through the origin has p zero. The usual intercept expression is unsuitable when an intercept is zero or absent, so use the general or point form in those cases instead of dividing by zero."
      ]
    },
    {
      "title": "Solve line intersections and test concurrence",
      "formula": "x+y=5, x−y=1 ⇒ (x,y)=(3,2)",
      "paragraphs": [
        "Intersecting lines share a point satisfying both equations. Solve the pair x plus y equal to five and x minus y equal to one. Adding gives two x equal to six, hence x is three and y is two. Three lines are concurrent at a finite point when the same point lies on all three. For the additional line three x plus y equal to k, substitution of three, two gives k equal to eleven. This direct method makes the finite common point explicit. A determinant condition for three line coefficients can be useful, but a zero determinant alone can also occur for parallel arrangements and must be interpreted with care. Two general lines have a unique intersection when the determinant of their x and y coefficients is nonzero. If that determinant vanishes, check whether the lines are coincident or distinct and parallel. Identical equations after scaling describe one line, not a unique intersection point. When a parameter is present, do not divide by it before checking the value at which the divisor vanishes. Verify the computed coordinates in all the original equations."
      ]
    },
    {
      "title": "Calculate the smaller angle between two lines",
      "formula": "tanθ=|(m₂−m₁)/(1+m₁m₂)|, 0≤θ≤π/2",
      "paragraphs": [
        "Two intersecting lines generally make supplementary angles. Unless another angle is requested, the smaller angle is between zero and pi over two. For finite slopes m one and m two, its tangent is the absolute value of m two minus m one divided by one plus their product. Slopes one and zero therefore give tangent theta equal to one, so theta is pi over four. If the denominator is zero, the lines are perpendicular and the smaller angle is pi over two; a division by zero is not a finite tangent value. A method that also handles vertical lines uses their normal vectors. For general coefficients A one, B one and A two, B two, the cosine of the smaller angle is the absolute value of the dot product divided by the product of the normal lengths. The absolute value removes the arbitrary reversal of a normal vector. Normals with zero dot product correspond to perpendicular lines, while proportional normals correspond to parallel directions. Make sure each pair of line coefficients actually defines a nonzero normal before normalizing it."
      ]
    },
    {
      "title": "Find point to line and parallel line distances",
      "formula": "d=|Ax₀+By₀+C|/√(A²+B²)",
      "paragraphs": [
        "The perpendicular distance from a point x zero, y zero to the line A x plus B y plus C equal to zero is the absolute value of A x zero plus B y zero plus C divided by square root of A squared plus B squared. The denominator normalizes the normal vector and makes the answer independent of multiplying the equation by a nonzero constant. From point one, two to three x plus four y minus six equal to zero, the numerator is five and the denominator is five, giving distance one. A point on the line has distance zero. For two parallel lines with exactly the same A and B coefficients, their distance is the absolute difference of the constant terms divided by the same normal length. Thus three x plus four y minus six equal to zero and three x plus four y plus four equal to zero are distance two apart. First rescale proportional equations so their normal coefficients agree. Subtracting unmatched constants from differently scaled equations would produce a meaningless distance. Distance is nonnegative, so retain the absolute value even when a chosen normal orientation reverses."
      ]
    },
    {
      "title": "Locate the centroid, circumcentre and orthocentre",
      "formula": "G=((x₁+x₂+x₃)/3,(y₁+y₂+y₃)/3)",
      "paragraphs": [
        "The centroid of a nondegenerate triangle is the average of its three vertex coordinates. It is the intersection of the medians and divides each median in the ratio two to one measured from the vertex. The circumcentre is the intersection of perpendicular bisectors and is equally distant from all three vertices. The orthocentre is the intersection of altitudes, which pass through vertices perpendicular to the opposite sides. For the triangle with vertices zero, zero; six, zero; and zero, eight, the centroid is two, eight thirds. This triangle is right angled at the origin. Its hypotenuse has midpoint three, four, which is the circumcentre, and the circumradius is five. The two coordinate axes are altitudes, so the orthocentre is the origin. These three centres are different points. In a general triangle, solve two perpendicular bisector equations for the circumcentre and two altitude equations for the orthocentre. Vertical or horizontal sides need their perpendicular directions handled directly instead of using an undefined slope. Collinear vertices do not form a nondegenerate triangle, so the usual finite unique circumcentre construction is not available in that case."
      ]
    },
    {
      "title": "Convert circle equations between standard and general forms",
      "formula": "(x−h)²+(y−k)²=r²; x²+y²+2gx+2fy+c=0",
      "paragraphs": [
        "A circle with centre h, k and positive radius r consists of points at distance r from that centre. Its standard equation is the square of x minus h plus the square of y minus k equal to r squared. Expanding leads to the general form x squared plus y squared plus two g x plus two f y plus c equal to zero. Completing the squares gives centre negative g, negative f and radius squared g squared plus f squared minus c. For x squared plus y squared minus four x plus six y minus twelve equal to zero, the centre is two, negative three. Completing the squares yields the square of x minus two plus the square of y plus three equal to twenty five, so the radius is five. Check the sign of the radius squared: a positive value gives a real circle, zero gives a single point, and a negative value gives no real points. If the common nonzero coefficient of x squared and y squared is not one, divide the entire equation by it before reading g, f and c. Equal quadratic coefficients alone do not guarantee a real positive radius circle."
      ]
    },
    {
      "title": "Construct a circle when a diameter is known",
      "formula": "(x−x₁)(x−x₂)+(y−y₁)(y−y₂)=0",
      "paragraphs": [
        "If the endpoints of a diameter are known, the centre is their midpoint and the radius is half their distance. For A at negative one, zero and B at three, zero, the midpoint is one, zero and the radius is two. Thus the circle has equation the square of x minus one plus y squared equal to four. A useful direct diameter equation is x minus x one times x minus x two, plus y minus y one times y minus y two equal to zero. In this example it becomes x plus one times x minus three, plus y squared equal to zero, which expands to the same circle. The direct form comes from the right angle subtended by a diameter, expressed as a zero dot product for the two endpoint vectors from a point on the circle. Verify that both endpoints satisfy the equation. Distinct endpoints are required for a positive radius circle. If the endpoints coincide, the algebra instead describes a zero radius point. Do not mistake the endpoint distance for the radius; it is the full diameter and must be halved."
      ]
    },
    {
      "title": "Intersect a line and a circle and measure its chord",
      "formula": "x²+y²=25, y=3 ⇒ x=±4; chord length=8",
      "paragraphs": [
        "To intersect a line and a circle, substitute one equation into the other and solve the resulting quadratic or simpler equation. For x squared plus y squared equal to twenty five and line y equal to three, substitution gives x squared equal to sixteen. The intersection points are negative four, three and four, three. Their distance is eight, the chord length. The perpendicular from the circle centre bisects the chord, giving the general chord formula twice square root of r squared minus d squared, where d is the centre to line distance. Here r is five and d is three, so the half chord is four. If d is less than r there are two intersections, if d equals r there is one tangent contact, and if d exceeds r there is no real intersection. The quadratic discriminant gives the same three cases when substitution produces a genuine quadratic. A vertical line can be substituted by fixing x directly. Always substitute the candidate points back into both original equations, since roots of an incorrectly rearranged quadratic may not represent actual common points."
      ]
    },
    {
      "title": "Recognize tangency to a circle and write a tangent",
      "formula": "At (x₁,y₁) on x²+y²=r²: xx₁+yy₁=r²",
      "paragraphs": [
        "A tangent to a real circle meets it at one point and is perpendicular to the radius through that point. On the circle x squared plus y squared equal to r squared, the tangent at an actual circle point x one, y one has equation x x one plus y y one equal to r squared. At point three, four on the circle of radius five centred at the origin, the tangent is three x plus four y equal to twenty five. Its normal points along the radius, and its distance from the origin is twenty five over five, or five, confirming tangency. The point must lie on the circle before this formula can be used as the tangent at that point. For a shifted centre, translate the coordinates first or use the radius as the normal direction. To decide whether a general line is tangent, compare the centre to line distance with the radius. This avoids solving for a repeated quadratic root. Tangency is a useful supporting application of the line and circle methods; the point and distance checks prevent a memorized tangent formula being used at an unrelated point."
      ]
    },
    {
      "title": "Classify conics by their focus and directrix",
      "formula": "PF=e·distance(P,directrix); e=1 parabola, 0<e<1 ellipse, e>1 hyperbola",
      "paragraphs": [
        "A focus directrix description defines a conic through a fixed positive ratio. The distance from a moving point P to the focus equals eccentricity e times the perpendicular distance from P to a fixed directrix line. For positive e less than one, the nondegenerate conic is an ellipse. For e equal to one it is a parabola, and for e greater than one it is a hyperbola. The circle is conventionally the eccentricity zero limiting case of an ellipse; do not insert e equal to zero into a fixed finite focus directrix description and expect a circle, since that literal equation would give only the focus. In standard centred conics, c denotes the centre to focus distance. For an ellipse with semimajor length a and semiminor length b, c squared equals a squared minus b squared. For a hyperbola with transverse semiaxis a and conjugate parameter b, c squared equals a squared plus b squared. In both cases eccentricity is c over a. Read the orientation and the role of a before computing c: for a hyperbola the positive squared term, rather than the larger denominator, determines the transverse axis."
      ]
    },
    {
      "title": "Read the four standard parabola orientations",
      "formula": "y²=4ax: focus (a,0), directrix x=−a, a>0",
      "paragraphs": [
        "For a positive, the parabola y squared equal to four a x opens to the right, has vertex at the origin, focus a, zero, and directrix x equal to negative a. Its axis is the x axis. The latus rectum is the chord through the focus perpendicular to that axis. Setting x equal to a gives y equal to positive or negative two a, so its length is four a. In y squared equal to eight x, a is two, the focus is two, zero and the latus rectum length is eight. Changing the right hand side to negative four a x reflects the parabola left, with focus negative a, zero and directrix x equal to a. Swapping x and y produces the upward and downward forms x squared equal to positive or negative four a y. In each orientation the focus is on the opening side and the directrix on the opposite side of the vertex. Compare the coefficient with four a, not a alone, and keep the opening sign separate from the positive focal length parameter."
      ]
    },
    {
      "title": "Use a parabola parameter and verify its tangent",
      "formula": "On y²=4ax: (x,y)=(at²,2at); tangent ty=x+at²",
      "paragraphs": [
        "A convenient parameter for y squared equal to four a x is x equal to a t squared and y equal to two a t, with real t. Substitution verifies the equation directly, and every point on this parabola has such a parameter. The tangent at that parameter has equation t y equal to x plus a t squared. For y squared equal to eight x, a is two. At t equal to one, the point is two, four and the tangent is y equal to x plus two. Substituting that line into the parabola produces a repeated root at the contact point, confirming tangency. At t equal to zero, the point is the vertex and the tangent formula gives x equal to zero, a vertical line. A slope expression that divides by t would miss that case, so the parameter equation is more robust. These tangent and parameter facts support the standard form rather than replacing its focus and directrix definition. Verify the point first, keep the sign of t to distinguish the two halves, and avoid assuming that a vertical tangent has finite slope."
      ]
    },
    {
      "title": "Find ellipse axes, foci, directrices and latus rectum",
      "formula": "x²/a²+y²/b²=1, a>b>0; c²=a²−b²; e=c/a",
      "paragraphs": [
        "For the standard horizontal ellipse x squared over a squared plus y squared over b squared equal to one, take a greater than b and both positive. Its major axis has length two a along x, and its minor axis has length two b along y. The foci are positive and negative c, zero, with c squared equal to a squared minus b squared. Eccentricity is c over a. For denominators twenty five and nine, a is five, b is three, c is four and e is four fifths. The major and minor axis lengths are ten and six. The directrices are x equal to positive or negative a over e, giving positive or negative twenty five fourths. The latus rectum length is two b squared over a, or eighteen fifths. If the larger denominator lies under y squared, the major axis is vertical and the focus and directrix roles swap coordinates. Equal positive denominators describe a circle, where the finite directrix formula involving division by e is unavailable. Check whether a requested quantity is a semiaxis or a full axis before giving its numerical value."
      ]
    },
    {
      "title": "Find hyperbola vertices, foci and asymptotes",
      "formula": "x²/a²−y²/b²=1; c²=a²+b²; e=c/a>1",
      "paragraphs": [
        "For a horizontal hyperbola in the form x squared over a squared minus y squared over b squared equal to one, a and b are positive. The vertices are positive and negative a, zero. The foci are positive and negative c, zero, where c squared is a squared plus b squared. Thus e equal to c over a is greater than one. In x squared over nine minus y squared over sixteen equal to one, a is three, b is four, c is five and the foci are five units from the centre. The asymptotes are y equal to positive or negative b over a times x, giving slopes positive and negative four thirds. The directrices are x equal to positive or negative a over e, or positive and negative nine fifths. The latus rectum length is two b squared over a, giving thirty two thirds. For the vertical form y squared over a squared minus x squared over b squared equal to one, the vertices and foci lie on y, and the asymptotes have slopes positive and negative a over b. The positive term determines the opening axis, regardless of which denominator is larger."
      ]
    },
    {
      "title": "Translate standard forms and check real or degenerate cases",
      "formula": "(x−h)²/a²+(y−k)²/b²=1: centre (h,k)",
      "paragraphs": [
        "Translations move standard conics without changing their lengths or eccentricity. Replace x by x minus h and y by y minus k to move a centred conic to centre h, k. The ellipse with the square of x minus two over twenty five plus the square of y plus one over nine equal to one has centre two, negative one. Its focal distance is four, so its foci are negative two, negative one and six, negative one. For a translated right opening parabola, the square of y minus k equals four a times x minus h. Its vertex is h, k, its focus is h plus a, k, and its directrix is x equal to h minus a. Completing squares helps convert an expanded equation into these forms. Do not classify a curve solely from two visible squared terms without checking the completed equation. A sum of nonnegative squares equal to a negative number has no real points, while equality to zero may give a single point. State the centre or vertex, orientation and reality conditions first, then compute distances or intersections from the normalized standard form."
      ]
    }
  ],
  "examples": [
    {
      "question": "Find the distance from (−1,2) to (3,5).",
      "steps": [
        "The coordinate differences are 4 and 3.",
        "Square and add: 16+9=25.",
        "Take the nonnegative root."
      ],
      "answer": "5 units."
    },
    {
      "question": "Divide (0,0) to (6,3) in ratio 2:1, internally and externally.",
      "steps": [
        "Internal weighting gives (A+2B)/3.",
        "External weighting gives (2B−A)/(2−1).",
        "Check the distances and whether the point lies between the endpoints."
      ],
      "answer": "Internal (4,2); external (12,6)."
    },
    {
      "question": "Find the locus equidistant from (−2,0) and (2,0).",
      "steps": [
        "Equate squared distances for P=(x,y).",
        "Cancel y² and expand the x squares.",
        "The equation becomes 8x=0."
      ],
      "answer": "x=0, the perpendicular bisector."
    },
    {
      "question": "Find a line through (2,−1) of slope 3 and its perpendicular direction.",
      "steps": [
        "Use y+1=3(x−2).",
        "Rearrange and substitute the point to verify.",
        "A finite perpendicular slope is the negative reciprocal of 3."
      ],
      "answer": "Line y=3x−7; perpendicular slope −1/3."
    },
    {
      "question": "Convert x/3+y/4=1 to general and normal form.",
      "steps": [
        "Multiply by 12 to get 4x+3y−12=0.",
        "The normal length is √(16+9)=5.",
        "Divide by 5 with a positive right side."
      ],
      "answer": "(4/5)x+(3/5)y=12/5; origin distance 12/5."
    },
    {
      "question": "Choose k so x+y=5, x−y=1 and 3x+y=k concur.",
      "steps": [
        "Solve the first two equations to get (3,2).",
        "Insert the point in the third equation.",
        "Verify it in each original line."
      ],
      "answer": "k=11, with common point (3,2)."
    },
    {
      "question": "Find the smaller angle between y=x and y=0, and the distance from (1,2) to 3x+4y−6=0.",
      "steps": [
        "The angle formula gives tanθ=1, so θ=π/4.",
        "For the distance compute |3+8−6|/√(9+16).",
        "The numerator and denominator are both 5."
      ],
      "answer": "Angle π/4; distance 1."
    },
    {
      "question": "Find the centroid, circumcentre and orthocentre of (0,0),(6,0),(0,8).",
      "steps": [
        "Average coordinates for G.",
        "The triangle is right angled at the origin, so the hypotenuse midpoint gives O.",
        "The two axis sides are altitudes meeting at the origin."
      ],
      "answer": "G=(2,8/3), O=(3,4), H=(0,0), circumradius 5."
    },
    {
      "question": "Find the centre and radius of x²+y²−4x+6y−12=0.",
      "steps": [
        "Complete squares in x and y.",
        "The equation is (x−2)²+(y+3)²=25.",
        "Read the centre and take the positive square root of 25."
      ],
      "answer": "Centre (2,−3), radius 5."
    },
    {
      "question": "Construct a circle with diameter endpoints (−1,0),(3,0).",
      "steps": [
        "Its centre is midpoint (1,0).",
        "The endpoint distance is 4, giving radius 2.",
        "Use standard form, or expand the direct diameter equation."
      ],
      "answer": "(x−1)²+y²=4, equivalently (x+1)(x−3)+y²=0."
    },
    {
      "question": "Intersect x²+y²=25 with y=3 and find the chord length.",
      "steps": [
        "Substitution gives x²=16.",
        "The points are (−4,3),(4,3).",
        "Their separation is 8; alternatively use 2√(r²−d²)."
      ],
      "answer": "Two points (−4,3),(4,3), chord length 8."
    },
    {
      "question": "Find the tangent at (3,4) on x²+y²=25.",
      "steps": [
        "Verify 3²+4²=25.",
        "The radius vector (3,4) is the tangent normal.",
        "Use 3x+4y=25 and check centre distance 5."
      ],
      "answer": "3x+4y=25."
    },
    {
      "question": "Find focus, directrix, latus rectum and parameter tangent at t=1 for y²=8x.",
      "steps": [
        "Compare 4a=8, so a=2.",
        "Read focus (2,0), directrix x=−2 and latus rectum 8.",
        "Parameter point is (2,4) and tangent ty=x+at² gives y=x+2."
      ],
      "answer": "Focus (2,0), directrix x=−2, latus rectum 8, tangent y=x+2."
    },
    {
      "question": "Read the main elements of x²/25+y²/9=1.",
      "steps": [
        "The horizontal semiaxes are a=5 and b=3.",
        "Use c²=25−9=16, e=c/a.",
        "Directrices are x=±a/e and latus rectum is 2b²/a."
      ],
      "answer": "Foci (±4,0), e=4/5, axes 10 and 6, directrices x=±25/4, latus rectum 18/5."
    },
    {
      "question": "Read the main elements of x²/9−y²/16=1.",
      "steps": [
        "The positive x term gives horizontal transverse axis with a=3,b=4.",
        "Use c²=9+16=25.",
        "Asymptotes have slopes ±b/a; directrices are x=±a²/c."
      ],
      "answer": "Vertices (±3,0), foci (±5,0), e=5/3, asymptotes y=±4x/3, directrices x=±9/5, latus rectum 32/3."
    },
    {
      "question": "Find the centre and foci of (x−2)²/25+(y+1)²/9=1.",
      "steps": [
        "Read centre (2,−1) from the brackets.",
        "The horizontal focal distance is √(25−9)=4.",
        "Add and subtract 4 only in the x coordinate."
      ],
      "answer": "Centre (2,−1), foci (−2,−1),(6,−1)."
    }
  ],
  "quiz": [
    {
      "question": "The distance between (−1,2) and (3,5) is:",
      "options": [
        "7",
        "5",
        "√7",
        "25"
      ],
      "answer": 1,
      "explanation": "The squared distance is 4²+3²=25, so the nonnegative distance is five."
    },
    {
      "question": "If the distance between two plane points is zero, then:",
      "options": [
        "Their slopes are zero",
        "They lie on opposite axes",
        "The points coincide",
        "Their x coordinates must be nonzero"
      ],
      "answer": 2,
      "explanation": "A sum of two squared coordinate differences is zero only when both differences vanish."
    },
    {
      "question": "The point dividing A=(0,0), B=(6,3) internally with AP:PB=2:1 is:",
      "options": [
        "(2,1)",
        "(3,3/2)",
        "(12,6)",
        "(4,2)"
      ],
      "answer": 3,
      "explanation": "Use (A+2B)/3; the larger distance AP puts the point closer to B."
    },
    {
      "question": "The external 2:1 division point for those endpoints is:",
      "options": [
        "(12,6)",
        "(4,2)",
        "(−12,−6)",
        "(3,3/2)"
      ],
      "answer": 0,
      "explanation": "Use (2B−A)/(2−1); this point lies beyond B and has AP twice PB."
    },
    {
      "question": "Points equidistant from (−2,0) and (2,0) satisfy:",
      "options": [
        "y=0",
        "x=0",
        "x=2",
        "x²+y²=4"
      ],
      "answer": 1,
      "explanation": "Equating squared distances gives (x+2)²=(x−2)², hence 8x=0."
    },
    {
      "question": "The locus at fixed positive distance r from (h,k) is:",
      "options": [
        "(x+h)²+(y+k)²=r",
        "x+y=r",
        "(x−h)²+(y−k)²=r²",
        "(x−h)+(y−k)=r²"
      ],
      "answer": 2,
      "explanation": "The distance formula gives a circle with the stated centre and radius."
    },
    {
      "question": "A line perpendicular to slope 2 has finite slope:",
      "options": [
        "1/2",
        "−2",
        "2",
        "−1/2"
      ],
      "answer": 3,
      "explanation": "For nonvertical perpendicular lines, the two finite slopes multiply to −1."
    },
    {
      "question": "A vertical line has:",
      "options": [
        "Undefined slope",
        "Slope 0",
        "Slope 1",
        "Slope −1"
      ],
      "answer": 0,
      "explanation": "Its horizontal coordinate change is zero, so a finite rise-over-run slope is unavailable."
    },
    {
      "question": "The line through (2,−1) with slope 3 is:",
      "options": [
        "y=3x+7",
        "y=3x−7",
        "y=−3x+5",
        "y=3x−1"
      ],
      "answer": 1,
      "explanation": "Use y+1=3(x−2), then simplify and verify the point."
    },
    {
      "question": "Two distinct points with equal x coordinates determine:",
      "options": [
        "No line",
        "A horizontal line",
        "A vertical line",
        "Infinitely many lines"
      ],
      "answer": 2,
      "explanation": "Their common x value specifies a unique vertical line, even though its finite slope is undefined."
    },
    {
      "question": "The x and y intercepts of x/3+y/4=1 are:",
      "options": [
        "(4,0) and (0,3)",
        "(1/3,0) and (0,1/4)",
        "(3,4) and (0,0)",
        "(3,0) and (0,4)"
      ],
      "answer": 3,
      "explanation": "Set the other coordinate to zero in each case to read the two intercept points."
    },
    {
      "question": "The distance from the origin to 4x+3y−12=0 is:",
      "options": [
        "12/5",
        "12",
        "5/12",
        "5"
      ],
      "answer": 0,
      "explanation": "Normalize the normal vector of length five: the distance is |−12|/5."
    },
    {
      "question": "The intersection of x+y=5 and x−y=1 is:",
      "options": [
        "(2,3)",
        "(3,2)",
        "(1,4)",
        "(5,0)"
      ],
      "answer": 1,
      "explanation": "Adding the equations gives x=3, then either original equation gives y=2."
    },
    {
      "question": "For 3x+y=k to concur with those two lines, k must be:",
      "options": [
        "10",
        "9",
        "11",
        "5"
      ],
      "answer": 2,
      "explanation": "Their unique intersection is (3,2), and 3·3+2=11."
    },
    {
      "question": "The smaller angle between slopes 1 and 0 is:",
      "options": [
        "π/2",
        "0",
        "3π/4",
        "π/4"
      ],
      "answer": 3,
      "explanation": "Its tangent is one, and the smaller angle is in [0,π/2]."
    },
    {
      "question": "Nonvertical finite slopes with 1+m₁m₂=0 describe:",
      "options": [
        "Perpendicular directions",
        "Parallel directions",
        "Coincident points",
        "No possible real lines"
      ],
      "answer": 0,
      "explanation": "Their slope product is −1, corresponding to a right angle rather than a finite tangent ratio."
    },
    {
      "question": "The distance from (1,2) to 3x+4y−6=0 is:",
      "options": [
        "5",
        "1",
        "2",
        "1/5"
      ],
      "answer": 1,
      "explanation": "The numerator is |3+8−6|=5 and the normal length is five."
    },
    {
      "question": "The distance between 3x+4y−6=0 and 3x+4y+4=0 is:",
      "options": [
        "10",
        "1",
        "2",
        "5"
      ],
      "answer": 2,
      "explanation": "The normals are already matched; divide |4−(−6)|=10 by five."
    },
    {
      "question": "The centroid of (0,0),(6,0),(0,8) is:",
      "options": [
        "(3,4)",
        "(0,0)",
        "(6,8)",
        "(2,8/3)"
      ],
      "answer": 3,
      "explanation": "Average the three x coordinates and the three y coordinates separately."
    },
    {
      "question": "The circumcentre and orthocentre of this right triangle are respectively:",
      "options": [
        "(3,4) and (0,0)",
        "(0,0) and (3,4)",
        "(2,8/3) and (3,4)",
        "(6,8) and (0,0)"
      ],
      "answer": 0,
      "explanation": "The circumcentre is the hypotenuse midpoint and the orthocentre is the right angle vertex."
    },
    {
      "question": "The circle x²+y²−4x+6y−12=0 has centre and radius:",
      "options": [
        "(−2,3), 5",
        "(2,−3), 5",
        "(2,−3), 25",
        "(2,3), √12"
      ],
      "answer": 1,
      "explanation": "Completing squares gives (x−2)²+(y+3)²=25."
    },
    {
      "question": "If completion gives (x−h)²+(y−k)²=−1, the real locus is:",
      "options": [
        "A unit circle",
        "One point",
        "Empty",
        "A straight line"
      ],
      "answer": 2,
      "explanation": "The sum of two real squares cannot be negative."
    },
    {
      "question": "The circle with diameter endpoints (−1,0),(3,0) is:",
      "options": [
        "(x+1)²+y²=4",
        "(x−1)²+y²=16",
        "x²+y²=4",
        "(x−1)²+y²=4"
      ],
      "answer": 3,
      "explanation": "The midpoint is (1,0), and half the endpoint distance is radius two."
    },
    {
      "question": "In the diameter formula, coincident endpoints give:",
      "options": [
        "A zero radius point",
        "A positive radius circle",
        "A parabola",
        "No algebraic equation"
      ],
      "answer": 0,
      "explanation": "The endpoint distance and radius become zero, so the equation reduces to a sum of squares equal to zero."
    },
    {
      "question": "The intersections of x²+y²=25 and y=3 are:",
      "options": [
        "(−5,3) and (5,3)",
        "(−4,3) and (4,3)",
        "(3,−4) and (3,4)",
        "Only (0,3)"
      ],
      "answer": 1,
      "explanation": "Substitution yields x²=16, giving both signs of x with y fixed at three."
    },
    {
      "question": "The chord cut by y=3 on that circle has length:",
      "options": [
        "4",
        "10",
        "8",
        "6"
      ],
      "answer": 2,
      "explanation": "Its endpoints differ by eight horizontally; also 2√(25−9)=8."
    },
    {
      "question": "The tangent to x²+y²=25 at (3,4) is:",
      "options": [
        "4x+3y=25",
        "3x−4y=25",
        "3x+4y=5",
        "3x+4y=25"
      ],
      "answer": 3,
      "explanation": "Use xx₁+yy₁=r² at the verified circle point (3,4)."
    },
    {
      "question": "A line at centre distance d is tangent to a circle of radius r>0 when:",
      "options": [
        "d=r",
        "d<r",
        "d>r",
        "d=2r"
      ],
      "answer": 0,
      "explanation": "Equal distance produces one contact point; smaller distance cuts a chord and larger distance misses the circle."
    },
    {
      "question": "A nondegenerate focus-directrix conic with eccentricity e=1 is:",
      "options": [
        "An ellipse with unequal axes",
        "A parabola",
        "A hyperbola",
        "A straight line in every case"
      ],
      "answer": 1,
      "explanation": "Equal focus and directrix distances define a parabola for a focus off the directrix."
    },
    {
      "question": "For an ellipse with semiaxes a>b>0, the focal relation is:",
      "options": [
        "c²=a²+b²",
        "c=a+b",
        "c²=a²−b²",
        "c²=b²−a²"
      ],
      "answer": 2,
      "explanation": "The focal distance is smaller than the semimajor axis, giving 0<e=c/a<1."
    },
    {
      "question": "The focus of y²=8x is:",
      "options": [
        "(8,0)",
        "(0,2)",
        "(−2,0)",
        "(2,0)"
      ],
      "answer": 3,
      "explanation": "Compare 8 with 4a to obtain a=2 and use the right opening orientation."
    },
    {
      "question": "Its latus rectum length is:",
      "options": [
        "8",
        "2",
        "4",
        "16"
      ],
      "answer": 0,
      "explanation": "For y²=4ax the latus rectum length is 4a, so it equals eight here."
    },
    {
      "question": "On y²=8x, parameter t=1 gives the point:",
      "options": [
        "(4,2)",
        "(2,4)",
        "(2,2)",
        "(1,2)"
      ],
      "answer": 1,
      "explanation": "With a=2, the parameter pair (at²,2at) becomes (2,4)."
    },
    {
      "question": "The tangent there is:",
      "options": [
        "y=2x+2",
        "y=x−2",
        "y=x+2",
        "x=0"
      ],
      "answer": 2,
      "explanation": "The parameter tangent ty=x+at² gives y=x+2 at a=2,t=1."
    },
    {
      "question": "For x²/25+y²/9=1, the foci are:",
      "options": [
        "(±5,0)",
        "(0,±4)",
        "(±3,0)",
        "(±4,0)"
      ],
      "answer": 3,
      "explanation": "The major axis is horizontal and c=√(25−9)=4."
    },
    {
      "question": "Its eccentricity and latus rectum length are:",
      "options": [
        "4/5 and 18/5",
        "5/4 and 18/5",
        "4/5 and 9/5",
        "3/5 and 10"
      ],
      "answer": 0,
      "explanation": "Use e=c/a=4/5 and the full focal chord length 2b²/a=18/5."
    },
    {
      "question": "For x²/9−y²/16=1, the foci are:",
      "options": [
        "(±3,0)",
        "(±5,0)",
        "(0,±5)",
        "(±4,0)"
      ],
      "answer": 1,
      "explanation": "The positive x term fixes the horizontal axis, and c²=9+16=25."
    },
    {
      "question": "The asymptotes of that hyperbola are:",
      "options": [
        "y=±(3/4)x",
        "y=±x",
        "y=±(4/3)x",
        "x=±3"
      ],
      "answer": 2,
      "explanation": "For the horizontal form their slopes are ±b/a=±4/3."
    },
    {
      "question": "The centre of (x−2)²/25+(y+1)²/9=1 is:",
      "options": [
        "(−2,1)",
        "(2,1)",
        "(−2,−1)",
        "(2,−1)"
      ],
      "answer": 3,
      "explanation": "Each squared bracket is displacement from its corresponding centre coordinate."
    },
    {
      "question": "The foci of that translated ellipse are:",
      "options": [
        "(−2,−1) and (6,−1)",
        "(2,−5) and (2,3)",
        "(−3,−1) and (7,−1)",
        "(−4,0) and (4,0)"
      ],
      "answer": 0,
      "explanation": "Translate the horizontal offsets ±4 by centre (2,−1)."
    }
  ],
  "sources": [
    {
      "title": "NTA JEE Main 2026 Mathematics Unit 10",
      "url": "https://jeemain.nta.nic.in/document/syllabus-2026/"
    },
    {
      "title": "OpenStax Precalculus: The Parabola",
      "url": "https://openstax.org/books/precalculus/pages/10-3-the-parabola"
    },
    {
      "title": "OpenStax Precalculus: The Hyperbola",
      "url": "https://openstax.org/books/precalculus-2e/pages/10-2-the-hyperbola"
    },
    {
      "title": "OpenStax Precalculus: Conic Key Equations",
      "url": "https://openstax.org/books/precalculus-2e/pages/10-key-equations"
    }
  ]
};
