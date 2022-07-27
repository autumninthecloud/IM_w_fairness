let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
gsap.set("body", {height: (sections.length * 100) + "%"});

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
  }
}

// handles the infinite part, wrapping around at either end....
ScrollTrigger.create({
  start: 1,
  end: () => ScrollTrigger.maxScroll(window) - 1,
  onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  onLeave: self => self.scroll(2)
}).scroll(2);
