import {createContext, useContext} from 'react';

export const LinkContext = createContext({
  link: '',
  setLink: () => {},
});

export const LinkProvider = LinkContext.Provider;

export default function useActiveLink() {
  return useContext(LinkContext);
}

export function useAnchorBind() {
  const {setLink} = useActiveLink();
  function intersectionCallback(entries) {
    entries.forEach(function (entry) {
      let heading = entry.target;

      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.75) {
          // intersecting.push(heading.id);
          setLink(heading.id);
          console.log('[In view] : ', heading.id);
        }
      } else {
        // intersecting.filter((h) => h !== heading.id);
        // console.log('[Removing] : ', heading.id);
      }
    });
  }
  let observerOptions = {
    // root: null,
    // rootMargin: "0px",
    threshold: [1],
  };
  const headingObserver = new IntersectionObserver(
    intersectionCallback,
    observerOptions,
  );
  return [headingObserver.observe, headingObserver.unobserve];
}
