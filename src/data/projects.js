export const projects = [
  {
    slug: "junctional-hemorrhage-device",
    title: "Junctional Hemorrhage Device",
    tagline:
      "A lightweight, belt-mounted device to control life-threatening junctional hemorrhages on the battlefield and stay secure while the patient is transported.",
    tags: ["CAD", "Laser Cutting", "3D Printing"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "A junctional hemorrhage is a life-threatening bleed that occurs in areas where traditional limb tourniquets cannot be applied, such as the groin (inguinal), neck, and armpit (axillary). On the battlefield, controlling this kind of bleeding is difficult because medics need a device that can be applied quickly, generates significant pressure in the correct location, and remains secure as the patient is moved. Axillary bleeds are especially difficult to control as you must cut off blood flow through the subclavian artery, which is difficult to access. Existing solutions are bulky, complex to use, unable to stay in place during transport, or ineffective. Dr. Tim Bongartz, an emergency medicine doctor at VUMC, challenged our team to develop a lightweight, simple device that can reliably control junctional hemorrhages and stay stable on the patient while they are being evacuated.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "Our team began by clarifying the mission with our sponsor to “develop a lightweight, simple device to control junctional hemorrhages on the battlefield that remains secure when the patient is transported.” We brainstormed multiple tensioning mechanisms (such as cranks, ladder-locks, tourniquet straps, and harness concepts) and evaluated them against criteria like stability, weight, ease of application, and compatibility with gear already worn by soldiers. From this process we selected a belt-mounted strap system with an adjustable Pressure Directing Device (PDD). The device attaches to the battle belt on each side via a carabiner, allowing the user to pull down on the strap to apply targeted pressure over the subclavian artery. For inguinal bleeds, the user can remove the PDD from the strap, attach it to the belt, and use a traditional tourniquet to apply pressure to the groin. Through prototyping, laser cutting, 3D printing, and continuous feedback from our sponsor, we designed a simple, rapidly deployable junctional hemorrhage control device intended to maintain effective pressure even when the patient is moved.",
        ],
      },
      {
        figures: [
          {
            image: "/projects/junctional-hemorrhage-device/pdd-cad-view.png",
            caption:
              "CAD view of the PDD, highlighting the slit to attach the mechanism to the military belt, and the angled bottom piece that can target the subclavian artery without pushing into the collarbone.",
          },
          {
            image: "/projects/junctional-hemorrhage-device/tryout-on-belt.png",
            caption:
              "Try-on of the junctional tourniquet assembly attached to a military belt and applied to the neck.",
          },
          {
            image: "/projects/junctional-hemorrhage-device/assembly-on-person.png",
            caption:
              "View of the entire assembly, with a closer view of the 3D printed PDD (in grey).",
          },
        ],
      },
    ],
  },
  {
    slug: "rubber-heel-simulator",
    title: "Rubber Heel Simulator",
    tagline:
      "A cam-follower mechanism that fatigue-tests rubber shoe heels by recreating the force a walking foot applies to the ground.",
    tags: ["Cam Design", "Kinematics", "Safety Factor Analysis"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "An athletic footwear manufacturer is developing a device that can test rubber heels under millions of compression cycles, replicating the force an average person's foot would apply to the ground when walking. Figure 1 demonstrates the force-time function of a human walking on the ground that will be recreated using a cam-follower system.",
        ],
        figures: [
          {
            image: "/projects/rubber-heel-simulator/force-path-figure1.png",
            caption:
              "Figure 1. Force path for the cam-spring design as given by the problem statement.",
          },
        ],
      },
      {
        heading: "Task Specifications",
        list: [
          "The mechanism has 1 degree of freedom.",
          "The force on the heel should follow the path shown in Figure 1.",
          "Cylinder cross sectional area is small enough to compress the heel at least 0.2 in.",
          "The cam profile should be smooth to avoid infinite acceleration or jerk.",
          "The spring follower should remain in constant contact with the cam without slipping.",
          "The cycle should take between 1 and 1.5 seconds to complete 1 rotation.",
        ],
      },
      {
        heading: "Suggested Safety Factors",
        list: [
          "Primary Structural Members: SF = 3.",
          "Pins & Fasteners: SF ≥ 3.",
          "Springs: SF = 1.1–1.5.",
          "Contact Surfaces: design with material hardness, contact width, and lubrication rather than SF.",
        ],
      },
      {
        heading: "Kinematic Design and Analysis",
        paragraphs: [
          "The spring equation F = kx models the cam-piston system; force values were estimated from 5 points, and the cam boundary conditions for displacement were calculated by dividing the force values by k.",
          "Given Fₘₐₓ = 110 lbs, the ideal compression-to-piston area was selected as 0.372 in to 3.14 in². The piston is a 1 in-radius circle.",
        ],
        figures: [
          {
            image: "/projects/rubber-heel-simulator/boundary-conditions-polycam.png",
            caption: "Boundary conditions for the polycam.",
          },
          {
            image: "/projects/rubber-heel-simulator/k-ratio-calc.png",
            caption: "Calculation of k as the ratio of force to compression.",
          },
          {
            image: "/projects/rubber-heel-simulator/cam-profile.png",
            caption: "Cam profile. Prime radius is 2 in. Roller radius is 0.5 in.",
          },
          {
            image: "/projects/rubber-heel-simulator/rho-phi-graphs.png",
            caption:
              "Rho and Phi graphs. The roller radius (0.5 in) is less than half of Rho (6.2 in). Phi remains within 30 degrees at all points.",
          },
          {
            image: "/projects/rubber-heel-simulator/displacement-velocity-accel-jerk.png",
            caption:
              "Displacement, velocity, acceleration, and jerk graphs for the DynaCam profile.",
          },
        ],
      },
      {
        heading: "Failure Analysis with Safety Factor",
        figures: [
          {
            image: "/projects/rubber-heel-simulator/roller-pin-shear-calc.png",
            caption: "Roller follower pin shear stress and safety factor calculation.",
          },
          {
            image: "/projects/rubber-heel-simulator/required-pin-diameter-calc.png",
            caption:
              "Required roller pin diameter to achieve a safety factor above 3.",
          },
          {
            image: "/projects/rubber-heel-simulator/frame-bearing-calc.png",
            caption: "Frame and bearing support stress and safety factor calculation.",
          },
          {
            image: "/projects/rubber-heel-simulator/required-frame-thickness-calc.png",
            caption:
              "Required frame plate thickness to achieve a safety factor above 3.",
          },
          {
            image: "/projects/rubber-heel-simulator/piston-face-loading.png",
            caption: "Piston face loading calculation.",
          },
          {
            image: "/projects/rubber-heel-simulator/spring-constant-calc.png",
            caption: "Estimated spring constant calculation.",
          },
          {
            image: "/projects/rubber-heel-simulator/cam-shaft-bending-calc.png",
            caption: "Cam shaft bending stress and safety factor calculation.",
          },
        ],
      },
      {
        heading: "Mechanical Design",
        figures: [
          {
            image: "/projects/rubber-heel-simulator/exploded-view-parts-list.png",
            caption: "Exploded view and parts list for the final cam-follower assembly.",
          },
          {
            image: "/projects/rubber-heel-simulator/prototype-front.png",
            caption: "Front view of the completed cam-follower mechanical prototype.",
          },
          {
            image: "/projects/rubber-heel-simulator/prototype-side.png",
            caption: "Side view of the completed cam-follower mechanical prototype.",
          },
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "The cylinder's cross-sectional area is 3.1 in² and compresses the heel 0.37 in. The displacement follows the graph given in the problem statement. Furthermore, the spring follower remains in contact without slipping, and the cam profile is smooth; there is only one instance of jerk. The mechanism has 1 degree of freedom, and it takes 1.33 seconds to complete 1 rotation.",
        ],
      },
      {
        heading: "Conclusions",
        paragraphs: [
          "The cam shaft and frame had an acceptable safety factor of above 3. However, the roller pin's safety factor was only 2.65, and based on our calculations, we advise that it be above 3. If the pin diameter was increased to about 0.17 inches, then this component would achieve a safety factor greater than 3. The frame's safety factor was 2.27, and to raise the safety factor above 3, the plate thickness could be increased to 5/16 in to achieve a new safety factor of 3.5. The spring was designed with a spring constant of about 297 lbf/in and a static safety factor of 1.25, which was acceptable for this component since the suggested safety factor was from 1.1–1.5. Additionally, static contact failure is highly unlikely in regard to the cam-roller contact.",
        ],
      },
    ],
  },
  {
    slug: "steady-rider",
    title: "Steady Rider",
    tagline:
      "Adjustable pedal attachments that give a nine-year-old with balance impairments the independence to ride his four-wheeler on his own.",
    tags: ["3D Printing", "Laser Cutting", "CAD", "Assistive Design"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Kade is a nine-year-old boy who has a condition that stunts his physical development, which in turn causes balance impairments. He enjoys playing outside with his older brothers as they ride their bikes, but he is unable to ride his four-wheeler on his own. Kade's family asked us to design a solution that allows him to gain more independence on his four-wheeler by helping him maintain the stability to pedal on his own, or with limited assistance.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "Our team designed pedal adapters that can be attached over the pedals of Kade's four-wheeler. The pedal adapters have three parts: a 3D-printed foot cradle, a 3D-printed base that bolts to the pedal, and a laser-cut acrylic middle plate that slides through the cradle, allowing the pedal adapter's length to adjust as he grows. The attachment has a curved wall at the front to prevent his foot from slipping out. The design is also heavier in the front, which makes it easier for him to pedal by pushing his foot towards the front wall of the pedal adapter. There are also elastic Velcro straps to further hold his feet in place. For further safety, we added a seatbelt to the four-wheeler's seat and mounted a handle to the back of the seat, allowing someone to stabilize the kart from behind when necessary. Our design allowed Kade to independently pedal and ride his four-wheeler for the first time.",
        ],
      },
      {
        figures: [
          {
            image: "/projects/steady-rider/birds-eye-view.png",
            caption:
              "Bird's eye view of the complete design, with pedal adapters and handle attached to the four-wheeler.",
          },
          {
            image: "/projects/steady-rider/cad-pedal-adapter.png",
            caption:
              "CAD model of the pedal adapter, showing the adjustable back half of the design that can be adjusted and secured to fit his foot.",
          },
          {
            image: "/projects/steady-rider/kade-demo.png",
            caption: "Demonstration of Kade testing our design, successfully pedaling on his own.",
          },
        ],
      },
    ],
  },
  {
    slug: "miyako-adjustable-easel",
    title: "Miyako's Adjustable Easel",
    tagline:
      "A height- and angle-adjustable magnetic easel that lets a wheelchair user comfortably draw, cook, and do schoolwork while upright or reclined.",
    tags: ["Laser Cutting", "CAD", "Assistive Design"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Miyako is a nine-year-old with muscular dystrophy who is homeschooled and loves drawing, cooking, and gaming with friends. She uses a wheelchair, and a recent surgery improved her posture but limits her head movement. In our first conversation with her, we learned that holding things at a readable height and angle was a daily struggle. Often while doing schoolwork, she needs to recline in her activity chair to rest her back. When she reclines, her tray table moves with her, so she needs a way to keep her papers held down while in the reclined position. Additionally, while cooking, she has to hold the recipe while keeping everything else further away. She needed a way to hold drawings, schoolwork, and recipes at an angle she can see, one that attaches to her chair, can be removed, and works whether she is upright or reclined.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "Our team designed and built a custom laser-cut magnetic easel with both vertical and angular adjustability, so Miyako can use it when upright or reclined. Our design process started by discussing the needs she and her family described and then adapting the idea to her wheelchair and posture. The magnetic surface can hold papers and recipes in place while still letting her adjust them with ease by sliding the magnets across the board, and the adjustable height and tilt keep her work at an angle she can see without straining her neck. It also velcroes to the desk of her activity chair to hold the easel in place when she reclines her chair. The easel can fully collapse and can adjust to an angle just less than 90 degrees. We presented the finished device at the Vanderbilt Makeathon showcase to attendees and Miyako's family, explaining how it supports her comfortability and creativity in her daily life.",
        ],
      },
      {
        figures: [
          {
            image: "/projects/miyako-adjustable-easel/easel-front.png",
            caption: "Front view of the easel attached to the activity chair's tray.",
          },
          {
            image: "/projects/miyako-adjustable-easel/easel-back.png",
            caption:
              "Back view of the easel, showing the slits that allow the easel to be moved up and down as well as angularly.",
          },
        ],
      },
    ],
  },
  {
    slug: "capping-the-interstate",
    title: "Capping the Interstate",
    tagline:
      "A steel truss bridge proposal capping I-40 to reconnect a Nashville neighborhood divided by the interstate, verified through structural testing.",
    tags: ["Structural Analysis", "Welding", "Truss Design"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "The Federal Highway Act of 1956 launched the largest public construction project in U.S. history, but many of the new interstates tore through minority neighborhoods. In Nashville, I-40 cut through Jefferson Street, a thriving Black community of local businesses, isolating residents from customers and resources, and property values fell by nearly a third without compensation to residents. Cities such as Pittsburgh, Dallas, and Boston have begun to repair this damage by capping highways with shared public space. We set out to propose a steel truss bridge that caps I-40 and carries a community garden, a community center, and a playground (scaled loads of 400, 250, and 170 lb), with a safe design verified by static analysis.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "The method of joints and method of sections were used for a 12-member truss, verified in the Johns Hopkins Truss Calculator. We then welded and bolted a physical steel truss prototype and tested it to failure. Using measured cross sections, A-36 steel properties, and Euler's buckling formula, we calculated each member's buckling and yielding limits. Buckling of member BH controlled at 454.6 lb. The prototype failed in buckling at 511.5 lb, about 12% above our prediction, and it correctly showed buckling governing, no yielding, and the horizontal members lasting longest. Likely causes of the gap include bolts tighter than true pins and weld variation. We then analyzed three layouts for the buildings. Layout 1 passed with little margin on member DF, and Layout 2 failed in buckling at members CH and CF. We found Layout 3 to be the best option, with the community center on the left, the playground in the center, and the garden on the right, because every member stays within its limits and children stay a safe distance from the roads.",
        ],
      },
      {
        figures: [
          {
            image: "/projects/capping-the-interstate/prototype-truss-labeled.png",
            caption:
              "The complete prototype truss, built by welding plates to members and bolting the joints.",
          },
          {
            image: "/projects/capping-the-interstate/prototype-truss-after-testing.png",
            caption: "The prototype after testing: member CF buckled at 511.5 lb.",
          },
          {
            image: "/projects/capping-the-interstate/layout-3-diagram.png",
            caption:
              "Recommended Layout 3, left to right: community center, playground, and community garden.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-switch-switch",
    title: "The Switch-Switch",
    tagline:
      "A wheelchair-mounted, car-compatible Nintendo Switch holder that lets a child with limited strength and neck mobility play comfortably.",
    tags: ["CAD", "Prototyping", "Assistive Design"],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Miyako is an 8-year-old who uses a wheelchair and wants to enjoy playing Nintendo Switch from it. Since Miyako has muscular dystrophy, her natural head position is tilted upwards. She also does not have the strength to hold her Nintendo Switch up at a height where she can see it comfortably. Our goal was to design an accessory that lets her play more enjoyably and easily from her wheelchair.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "Our team designed and built an adaptive wheelchair accessory that lets Miyako play Nintendo Switch. The main component is an adjustable holder that positions the Switch at a height that best suits her line of vision, with a height-adjustment mechanism that clips onto her wheelchair's armrest. We also designed a second attachment that straps securely to the back of a car headrest, so the holder can detach from the wheelchair and be used while in the car. We utilized CAD, prototyping, and feedback from the family to turn her need into a working device.",
        ],
      },
      {
        figures: [
          {
            image: "/projects/the-switch-switch/team-demo.jpeg",
            caption: "Our team and Miyako's family demonstrating the capabilities of our design.",
          },
        ],
      },
    ],
  },
];
