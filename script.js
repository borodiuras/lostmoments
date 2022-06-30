// menu toggle
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const featured = document.querySelector(".featured");
const wrapper = document.querySelector(".wrapper");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  featured.classList.toggle("active");
  wrapper.classList.toggle("active");
});

// archive gallery 1:
const gallery1 = document.getElementById("gallery1");
const popup1 = document.getElementById("popup1");
const selectedImage1 = document.getElementById("selectedImage1");
const imageIndexes1 = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25,
  26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91,
  92, 93, 94, 95, 97, 98, 99, 100,
];
const selectedIndex1 = null;

imageIndexes1.forEach((i) => {
  const image1 = document.createElement("img");
  image1.src = `images/walk on 11-5-2020/walk on 11-5-2020-${i}.jpg`;
  image1.alt = `Lost Moment number ${i} retrieved on 11-5-2020`;
  image1.classList.add("galleryImg");

  image1.addEventListener("click", () => {
    popup1.style.transform = `translateY(0)`;
    selectedImage1.src = `images/walk on 11-5-2020/walk on 11-5-2020-${i}.jpg`;
    selectedImage1.alt = `Lost Moment number ${i} retrived on 11-5-2020`;
  });

  gallery1.appendChild(image1);
  popup1.addEventListener("click", () => {
    popup1.style.transform = `translateY(-100%)`;
    popup1.src = "";
    popup1.alt = "";
  });
});

// archive gallery 2:
const gallery2 = document.getElementById("gallery2");
const popup2 = document.getElementById("popup2");
const selectedImage2 = document.getElementById("selectedImage2");
const imageIndexes2 = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25,
  26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91,
  92, 93, 94, 95, 97, 98, 99, 100,
];
const selectedIndex2 = null;

imageIndexes2.forEach((i) => {
  const image2 = document.createElement("img");
  image2.src = `images/walk on 15-5-2020/walk on may 15-${i}.jpg`;
  image2.alt = `Lost Moment number ${i} retrieved on 15-5-2020`;
  image2.classList.add("galleryImg");

  image2.addEventListener("click", () => {
    popup2.style.transform = `translateY(0)`;
    selectedImage2.src = `images/walk on 15-5-2020/walk on may 15-${i}.jpg`;
    selectedImage2.alt = `Lost Moment number ${i} retrived on 15-5-2020`;
  });

  gallery2.appendChild(image2);
  popup2.addEventListener("click", () => {
    popup2.style.transform = `translateY(-100%)`;
    popup2.src = "";
    popup2.alt = "";
  });
});

// archive gallery 3:
const gallery3 = document.getElementById("gallery3");
const popup3 = document.getElementById("popup3");
const selectedImage3 = document.getElementById("selectedImage3");
const imageIndexes3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
  205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224,
];
const selectedIndex3 = null;

imageIndexes3.forEach((i) => {
  const image3 = document.createElement("img");
  image3.src = `images/walk on 22-2-2022/walk on 22-2-2022-${i}.jpg`;
  image3.alt = `Lost Moment number ${i} retrieved on 22-2-2022`;
  image3.classList.add("galleryImg");

  image3.addEventListener("click", () => {
    popup3.style.transform = `translateY(0)`;
    selectedImage3.src = `images/walk on 22-2-2022/walk on 22-2-2022-${i}.jpg`;
    selectedImage3.alt = `Lost Moment number ${i} retrieved on 22-2-2022`;
  });

  gallery3.appendChild(image3);
  popup3.addEventListener("click", () => {
    popup3.style.transform = `translateY(-100%)`;
    popup3.src = "";
    popup3.alt = "";
  });
});

// archive gallery 4:
const gallery4 = document.getElementById("gallery4");
const popup4 = document.getElementById("popup4");
const selectedImage4 = document.getElementById("selectedImage4");
const imageIndexes4 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
  205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
  235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249,
  250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264,
  265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279,
  280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
  295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
  310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324,
  325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339,
  340, 341, 342, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355,
  356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370,
  371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381,
];
const selectedIndex4 = null;

imageIndexes4.forEach((i) => {
  const image4 = document.createElement("img");
  image4.src = `images/walk on 4-9-2021/walk on 4-9-2021-${i}.jpg`;
  image4.alt = `Lost Moment number ${i} retrieved on 4-9-2021`;
  image4.classList.add("galleryImg");

  image4.addEventListener("click", () => {
    popup4.style.transform = `translateY(0)`;
    selectedImage4.src = `images/walk on 4-9-2021/walk on 4-9-2021-${i}.jpg`;
    selectedImage4.alt = `Lost Moment number ${i} retrived on 4-9-2021`;
  });

  gallery4.appendChild(image4);
  popup4.addEventListener("click", () => {
    popup4.style.transform = `translateY(-100%)`;
    popup4.src = "";
    popup4.alt = "";
  });
});

//accordion toggle:
document.addEventListener(
  "click",
  function (event) {
    // Only run if the clicked link was an accordion toggle
    if (!event.target.classList.contains("accordion-toggle")) return;

    // Get the target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Prevent default link behavior
    event.preventDefault();

    // If the content is already expanded, collapse it and quit
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      return;
    }

    // Get all accordion content, loop through it, and close it
    var accordions = document.querySelectorAll(".accordion");
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove("active");
    }

    // Open our target content area
    content.classList.add("active");
  },
  false
);
